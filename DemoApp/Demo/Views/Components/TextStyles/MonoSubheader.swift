//
//  MonoSubheader.swift
//  Demo
//
//  Created by Justin Bush on 6/7/24.
//

import SwiftUI

struct MonoSubheader: View {
  let text: String
  
  init(_ text: String) {
    self.text = text
  }
  
  var body: some View {
    HStack {
      Text(text)
        .font(.system(size: 14, weight: .medium, design: .monospaced))
    }
    .padding(.top, 7)
    .padding(.bottom, 2)
  }
}


#Preview {
  VStack {
    MonoSubheader("enum")
    MonoSubheader("const")
  }
  .padding()
}
