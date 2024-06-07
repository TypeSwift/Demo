//
//  LargeHeader.swift
//  Demo
//
//  Created by Justin Bush on 6/7/24.
//

import SwiftUI

struct LargeHeader: View {
  let header: String
  let tagline: String
  
  init(_ header: String, tagline: String = "") {
    self.header = header
    self.tagline = tagline
  }
  
  var body: some View {
    HStack {
      Text(header)
        .font(.system(size: 32, weight: .bold, design: .default))
        .padding(.top, 6)
      Spacer()
    }
    if !tagline.isEmpty {
      HStack {
        Text(tagline)
          .font(.system(size: 12))
          .padding(.bottom, 10)
          .lineLimit(1)
          .truncationMode(.tail)
        Spacer()
      }
    }
  }
}

#Preview {
  LargeHeader("SwiftUI", tagline: "This is a native SwiftUI view")
    .padding()
}
