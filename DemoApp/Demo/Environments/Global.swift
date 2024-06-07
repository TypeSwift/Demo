//
//  Global.swift
//  Demo
//
//  Created by Justin Bush on 6/5/24.
//

import SwiftUI

@Observable
class Global {
  var currentPage: Page = .components
}

struct GlobalKey: EnvironmentKey {
  static let defaultValue: Global = Global()
}

extension EnvironmentValues {
  var global: Global {
    get { self[GlobalKey.self] }
    set { self[GlobalKey.self] = newValue }
  }
}
