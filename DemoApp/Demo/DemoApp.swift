//
//  DemoApp.swift
//  Demo
//
//  Created by Justin Bush on 6/2/24.
//

import SwiftUI

@main
struct DemoApp: App {
  var body: some Scene {
    WindowGroup {
      WindowView()
        .frame(minWidth: 675, idealWidth: 830, maxHeight: .infinity)
        .frame(minHeight: 400, idealHeight: 540, maxHeight: .infinity)
    }
  }
}
