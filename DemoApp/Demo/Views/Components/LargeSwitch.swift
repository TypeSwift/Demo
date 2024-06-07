//
//  LargeSwitch.swift
//  Demo
//
//  Created by Justin Bush on 6/7/24.
//

import SwiftUI

struct LargeSwitch: View {
  @Binding var state: Bool
  
  var body: some View {
    Toggle(isOn: $state) {
      EmptyView()
    }
    .frame(width: 52, height: 36)
    .labelsHidden()
    .toggleStyle(.switch)
    .tint(.blue)
#if os(macOS)
    .scaleEffect(x: 1.4, y: 1.4, anchor: .center)
#endif
  }
}

#Preview {
  VStack {
    LargeSwitch(state: .constant(true))
    LargeSwitch(state: .constant(false))
  }
  .padding()
}
