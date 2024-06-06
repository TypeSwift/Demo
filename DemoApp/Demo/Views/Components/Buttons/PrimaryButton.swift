//
//  PrimaryButton.swift
//  Demo
//
//  Created by Justin Bush on 6/6/24.
//

import SwiftUI

struct PrimaryButton: View {
  var label: String
  var foreground: Color = Color(.buttonForeground) //Color("buttonForeground")
  var background: Color = Color(.buttonBackground) //Color("buttonBackground")
  var action: () -> Void

  init(_ label: String, foreground: Color = .white, background: Color = .black, action: @escaping () -> Void) {
    self.label = label
    self.foreground = foreground
    self.background = background
    self.action = action
  }

  var body: some View {
    Button(action: action) {
      Text(label)
        .font(.system(size: 16))
        .foregroundColor(foreground)
        .padding(.horizontal, 17)
        .padding(.vertical, 11)
        .background(background)
        .cornerRadius(8)
        .shadow(color: Color.black.opacity(0.1), radius: 1, x: 0, y: 2)
    }
    .buttonStyle(.plain)
  }
}

#Preview {
  HStack {
    PrimaryButton("Default") {
      print("Default Style")
    }
    
    PrimaryButton("Blue", foreground: .white, background: .blue) {
      print("hello")
    }
    
    PrimaryButton("Red", foreground: .white, background: .red) {
      print("hello")
    }
  }
  .padding()
}
