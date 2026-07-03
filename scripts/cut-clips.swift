import AVFoundation
import Foundation

struct ClipPlan: Decodable {
  let event_id: Int
  let matched: String
  let source_video: String
  let clip_start_sec: Int?
  let clip_end_sec: Int?
  let quarter: String
  let clock_remaining: String
  let categories: String

  enum CodingKeys: String, CodingKey {
    case event_id
    case matched
    case source_video
    case clip_start_sec
    case clip_end_sec
    case quarter
    case clock_remaining
    case categories
  }

  init(from decoder: Decoder) throws {
    let container = try decoder.container(keyedBy: CodingKeys.self)
    event_id = try container.decode(Int.self, forKey: .event_id)
    matched = try container.decode(String.self, forKey: .matched)
    source_video = try container.decode(String.self, forKey: .source_video)
    clip_start_sec = Self.decodeOptionalInt(container, .clip_start_sec)
    clip_end_sec = Self.decodeOptionalInt(container, .clip_end_sec)
    quarter = try container.decode(String.self, forKey: .quarter)
    clock_remaining = try container.decode(String.self, forKey: .clock_remaining)
    categories = try container.decode(String.self, forKey: .categories)
  }

  static func decodeOptionalInt(_ container: KeyedDecodingContainer<CodingKeys>, _ key: CodingKeys) -> Int? {
    if let value = try? container.decode(Int.self, forKey: key) {
      return value
    }
    if let value = try? container.decode(String.self, forKey: key), !value.isEmpty {
      return Int(value)
    }
    return nil
  }
}

func sanitize(_ value: String) -> String {
  value
    .replacingOccurrences(of: ";", with: "-")
    .replacingOccurrences(of: ":", with: "")
    .replacingOccurrences(of: "/", with: "-")
    .replacingOccurrences(of: " ", with: "_")
}

func sourceURL(for sourcePath: String, baseURL: URL) -> URL {
  let fileName = URL(fileURLWithPath: sourcePath).lastPathComponent
  return baseURL.appendingPathComponent("video").appendingPathComponent(fileName)
}

func exportClip(asset: AVURLAsset, start: Int, end: Int, outputURL: URL) async throws {
  let duration = try await asset.load(.duration)
  let durationSeconds = CMTimeGetSeconds(duration)
  let safeStart = max(0, Double(start))
  let safeEnd = min(Double(end), durationSeconds)
  guard safeEnd > safeStart else {
    return
  }

  try? FileManager.default.removeItem(at: outputURL)

  guard let exporter = AVAssetExportSession(asset: asset, presetName: AVAssetExportPresetPassthrough) else {
    throw NSError(domain: "cut-clips", code: 1, userInfo: [NSLocalizedDescriptionKey: "Could not create export session"])
  }

  exporter.outputURL = outputURL
  exporter.outputFileType = .mov
  exporter.timeRange = CMTimeRange(
    start: CMTime(seconds: safeStart, preferredTimescale: 600),
    duration: CMTime(seconds: safeEnd - safeStart, preferredTimescale: 600)
  )

  await exporter.export()

  if exporter.status != .completed {
    throw exporter.error ?? NSError(
      domain: "cut-clips",
      code: 2,
      userInfo: [NSLocalizedDescriptionKey: "Export failed with status \(exporter.status.rawValue)"]
    )
  }
}

let baseURL = URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
let arguments = CommandLine.arguments.dropFirst()
let planFileName = arguments.first { $0.hasSuffix(".json") } ?? "clip_plan.json"
let requestedQuarter = arguments.first { !$0.hasSuffix(".json") }
let planURL = baseURL.appendingPathComponent(planFileName)
let outputDirectoryName = planFileName == "clip_plan.json" ? "clips" : planFileName.replacingOccurrences(of: "_plan.json", with: "s")
let outputDirectory = baseURL.appendingPathComponent(outputDirectoryName, isDirectory: true)
try FileManager.default.createDirectory(at: outputDirectory, withIntermediateDirectories: true)

let plans = try JSONDecoder().decode([ClipPlan].self, from: Data(contentsOf: planURL))
let matchedPlans = plans.filter {
  $0.matched == "yes" &&
    $0.clip_start_sec != nil &&
    $0.clip_end_sec != nil &&
    (requestedQuarter == nil || $0.quarter == requestedQuarter)
}

var assetCache: [String: AVURLAsset] = [:]
var exported = 0
var failed: [String] = []

for plan in matchedPlans {
  let sourcePath = plan.source_video
  let asset = assetCache[sourcePath] ?? AVURLAsset(url: sourceURL(for: sourcePath, baseURL: baseURL))
  assetCache[sourcePath] = asset

  let fileName = [
    String(format: "%03d", plan.event_id),
    sanitize(plan.quarter),
    sanitize(plan.clock_remaining),
    sanitize(plan.categories),
  ].joined(separator: "_") + ".mov"

  let outputURL = outputDirectory.appendingPathComponent(fileName)

  do {
    try await exportClip(
      asset: asset,
      start: plan.clip_start_sec!,
      end: plan.clip_end_sec!,
      outputURL: outputURL
    )
    exported += 1
    if exported % 10 == 0 {
      FileHandle.standardError.write("exported \(exported)/\(matchedPlans.count)\n".data(using: .utf8)!)
    }
  } catch {
    failed.append("\(plan.event_id): \(error.localizedDescription)")
  }
}

print("exported=\(exported) failed=\(failed.count)")
if !failed.isEmpty {
  print(failed.joined(separator: "\n"))
}
