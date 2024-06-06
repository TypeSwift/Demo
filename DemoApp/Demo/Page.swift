//
//  Page.swift
//  Demo
//
//  Created by Justin Bush on 6/5/24.
//

import Foundation

enum Page: String, Identifiable, CaseIterable {
  case components
  
  var id: String { self.rawValue }
  
  var title: String {
    switch self {
    case .components:
      return "Components"
    }
  }
  
  var description: String {
    switch self {
    case .components:
      return "React and SwiftUI components"
    }
  }
  
  var symbol: String {
    switch self {
    case .components:
      return "switch.2"
    }
  }
  
  var url: String {
    switch self {
    case .components: "http://localhost:3000"
    }
  }
}
