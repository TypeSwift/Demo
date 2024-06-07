//
//  PrimaryTextField.swift
//  Demo
//
//  Created by Justin Bush on 6/6/24.
//

import SwiftUI

struct PrimaryTextField: View {
  @Environment(\.colorScheme) var colorScheme
  @Binding var text: String
  @FocusState private var isFocused: Bool
  
  var body: some View {
    VStack {
      ZStack {
        RoundedRectangle(cornerRadius: 8)
          .fill(colorScheme == .dark 
                ? Color(0x606463)
                : Color(0xEDEDED))
          .shadow(color: Color.black.opacity(0.6), radius: 0.5, x: 0, y: 1)
          .overlay(
            RoundedRectangle(cornerRadius: 8)
              .stroke(isFocused ? Color.blue : Color.clear, lineWidth: 2)
          )
        TextField("Type here...", text: $text)
          .padding()
          .background(Color.clear)
          .font(.system(size: 16))
          .cornerRadius(8)
          .focused($isFocused)
          .textFieldStyle(.plain)
      }
    }
  }
}

#Preview {
  HStack {
    PrimaryTextField(text: .constant("Hello!"))
      .padding(30)
    PrimaryTextField(text: .constant(""))
      .padding(30)
  }
  .frame(height: 100)
}
