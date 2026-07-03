import AppKit
import AVFoundation
import Foundation
import Vision

struct ClockSample {
  let quarter: String
  let videoSecond: Int
  let clock: String
  let rawText: String
}

let baseURL = URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
let cropRect = CGRect(x: 1980, y: 1450, width: 520, height: 270)
let clockPattern = try! NSRegularExpression(pattern: #"(?<!\d)(\d{1,2}):([0-5]\d)(?!\d)"#)
let quarters = ["1Q", "2Q", "3Q", "4Q"]
var samples: [ClockSample] = []

func recognizeClock(in image: CGImage) -> (clock: String, rawText: String)? {
  guard let crop = image.cropping(to: cropRect) else {
    return nil
  }

  var recognized: [String] = []
  let request = VNRecognizeTextRequest { request, _ in
    for observation in request.results as? [VNRecognizedTextObservation] ?? [] {
      if let text = observation.topCandidates(1).first?.string {
        recognized.append(text)
      }
    }
  }

  request.recognitionLevel = .fast
  request.recognitionLanguages = ["en-US"]
  request.usesLanguageCorrection = false

  do {
    try VNImageRequestHandler(cgImage: crop).perform([request])
  } catch {
    return nil
  }

  let rawText = recognized.joined(separator: " ")
  let range = NSRange(rawText.startIndex..<rawText.endIndex, in: rawText)
  guard let match = clockPattern.firstMatch(in: rawText, range: range),
        let minuteRange = Range(match.range(at: 1), in: rawText),
        let secondRange = Range(match.range(at: 2), in: rawText) else {
    return nil
  }

  let minutes = Int(rawText[minuteRange]) ?? -1
  let seconds = Int(rawText[secondRange]) ?? -1
  guard (0...10).contains(minutes), (0...59).contains(seconds) else {
    return nil
  }

  return (String(format: "%02d:%02d", minutes, seconds), rawText)
}

for quarter in quarters {
  let videoURL = baseURL.appendingPathComponent("media/source/\(quarter).mov")
  let asset = AVURLAsset(url: videoURL)
  let duration = try await asset.load(.duration)
  let durationSeconds = Int(CMTimeGetSeconds(duration).rounded(.down))
  let generator = AVAssetImageGenerator(asset: asset)
  generator.appliesPreferredTrackTransform = true
  generator.requestedTimeToleranceBefore = .zero
  generator.requestedTimeToleranceAfter = .zero

  for second in 0...durationSeconds {
    autoreleasepool {
      let time = CMTime(seconds: Double(second), preferredTimescale: 600)
      guard let image = try? generator.copyCGImage(at: time, actualTime: nil),
            let result = recognizeClock(in: image) else {
        return
      }
      samples.append(ClockSample(
        quarter: quarter,
        videoSecond: second,
        clock: result.clock,
        rawText: result.rawText
      ))
    }
  }

  FileHandle.standardError.write("scanned \(quarter)\n".data(using: .utf8)!)
}

func csvCell(_ value: Any) -> String {
  "\"\(String(describing: value).replacingOccurrences(of: "\"", with: "\"\""))\""
}

let header = ["quarter", "video_sec", "clock", "raw_text"]
let rows = samples.map { sample in
  [
    csvCell(sample.quarter),
    csvCell(sample.videoSecond),
    csvCell(sample.clock),
    csvCell(sample.rawText),
  ].joined(separator: ",")
}

try ([header.joined(separator: ",")] + rows)
  .joined(separator: "\n")
  .write(to: baseURL.appendingPathComponent("data/raw/video_clock_samples.csv"), atomically: true, encoding: .utf8)
