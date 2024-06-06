//
//  ComponentsView.swift
//  Demo
//
//  Created by Justin Bush on 6/5/24.
//

import SwiftUI

struct ComponentsView: View {
  let manager: ObservableWebViewManager
  
  @State private var textFieldValue: String = ""
  @State private var pickerSelection: Int = 1
  @State private var checkboxValue: Bool = true
  @State private var switchValue: Bool = true
  
  var body: some View {
    GeometryReader { geometry in
      HStack(spacing: 0) {
        WebViewContainer(manager: manager)
          .frame(width: geometry.size.width / 2)
        
        ScrollView {
          VStack(alignment: .leading, spacing: 18) {
            HStack {
              Text("SwiftUI")
                .font(.system(size: 32, weight: .bold, design: .default))
                .padding(.top, 6)
              Spacer()
            }
            Text("This is a native SwiftUI view")
              .font(.system(size: 12))
            
            VStack(alignment: .leading, spacing: 8) {
              Text("Button")
              Button("Click Me") {
                print("Button clicked")
              }
            }
            
            VStack(alignment: .leading, spacing: 8) {
              Text("Text Field")
              TextField("Enter text here", text: $textFieldValue)
                .textFieldStyle(RoundedBorderTextFieldStyle())
            }
            
            VStack(alignment: .leading, spacing: 8) {
              Text("Dropdown")
              Picker("", selection: $pickerSelection) {
                Text("Option 1").tag(1)
                Text("Option 2").tag(2)
                Text("Option 3").tag(3)
              }
              .pickerStyle(MenuPickerStyle())
            }
            
            VStack(alignment: .leading, spacing: 8) {
              Text("Checkbox")
              Toggle(isOn: $checkboxValue) {
                Text("")
              }
            }
            
            VStack(alignment: .leading, spacing: 8) {
              Text("Switch")
              Toggle(isOn: $switchValue) {
                Text("")
              }
              .toggleStyle(SwitchToggleStyle()) // Ensure correct toggle style
            }
            
          }
          .padding()
          .frame(width: geometry.size.width / 2)
        }
      }
      .frame(width: geometry.size.width, height: geometry.size.height)
    }
  }
}

#Preview {
  let manager = ObservableWebViewManager(urlString: Page.components.url)
  return ComponentsView(manager: manager)
    .frame(height: 600)
}
