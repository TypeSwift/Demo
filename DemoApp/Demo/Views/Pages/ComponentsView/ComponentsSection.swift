//
//  ComponentsSection.swift
//  Demo
//
//  Created by Justin Bush on 6/6/24.
//

import SwiftUI

struct ComponentSection<Content: View>: View {
  let header: String
  let content: Content
  
  init(header: String, @ViewBuilder content: () -> Content) {
    self.header = header
    self.content = content()
  }
  
  var body: some View {
    VStack(alignment: .leading, spacing: 6) {
      Text(header)
        .font(.system(size: 14, weight: .medium))
      content
    }
  }
}

#Preview {
  ComponentSection(header: "Buttons") {
    HStack {
      PrimaryButton("+1", foreground: .white, background: Color(0x2463EB)) {
        print("add one")
      }
      PrimaryButton("-1", foreground: .white, background: Color(0xDC2625)) {
        print("minus one")
      }
      Text("0")
        .font(.system(size: 14, weight: .medium))
        .padding(.leading, 10)
    }
  }
}

#Preview("ComponentsView") {
  let manager = ObservableWebViewManager(urlString: Page.components.url)
  return ComponentsView(manager: manager)
    .frame(height: 600)
}
