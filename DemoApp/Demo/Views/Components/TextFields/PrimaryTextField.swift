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
                : Color.gray.opacity(0.1))
          .shadow(radius: 1)
          .overlay(
            RoundedRectangle(cornerRadius: 8)
              .stroke(isFocused ? Color.blue : Color.clear, lineWidth: 2)
          )
        
        TextField("", text: $text)
          .padding()
          .background(Color.clear)
          .font(.system(size: 16))
          .cornerRadius(8)
          .focused($isFocused)
      }
    }
  }
}

#Preview {
  VStack {
    PrimaryTextField(text: .constant("Hello!"))
  }
  .frame(width: 200, height: 60)
}
