//
//  HexColor.swift
//  Demo
//
//  Created by Justin Bush on 6/6/24.
//

import SwiftUI

extension Color {
  /// Initializes a Color object using a hexadecimal integer.
  /// - Parameters:
  ///   - hex: The hexadecimal color value. Example: 0x606463.
  ///   - alpha: The opacity value of the color, ranging from 0.0 to 1.0. Default is 1.0.
  ///
  /// Usage Example:
  /// ```swift
  /// let color = Color(0x606463)
  /// let colorWithAlpha = Color(0x606463, alpha: 0.5)
  /// ```
  init(_ hex: UInt, alpha: Double = 1) {
    self.init(
      .sRGB,
      red: Double((hex >> 16) & 0xFF) / 255,
      green: Double((hex >> 8) & 0xFF) / 255,
      blue: Double(hex & 0xFF) / 255,
      opacity: alpha
    )
  }
}


extension Color {
  /// Initializes a Color object using a hexadecimal string.
  /// - Parameters:
  ///   - hex: The hexadecimal color string. Can include or exclude the `#` prefix. Example: "#606463" or "606463".
  ///   - alpha: The opacity value of the color, ranging from 0.0 to 1.0. Default is 1.0.
  ///
  /// Usage Example:
  /// ```swift
  /// let color = Color("#606463")
  /// let colorWithoutHash = Color("606463")
  /// let colorWithAlpha = Color("#606463", alpha: 0.5)
  /// ```
  init(hex: String, alpha: Double = 1.0) {
    let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
    var int: UInt64 = 0
    Scanner(string: hex).scanHexInt64(&int)
    let r, g, b: UInt64
    switch hex.count {
    case 3: // RGB (12-bit)
      (r, g, b) = ((int >> 8) * 17, (int >> 4 & 0xF) * 17, (int & 0xF) * 17)
    case 6: // RGB (24-bit)
      (r, g, b) = (int >> 16, int >> 8 & 0xFF, int & 0xFF)
    default:
      (r, g, b) = (1, 1, 0) // Yellow as a default color for invalid hex input
    }
    self.init(
      .sRGB,
      red: Double(r) / 255,
      green: Double(g) / 255,
      blue: Double(b) / 255,
      opacity: alpha
    )
  }
}
