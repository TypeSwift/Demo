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
          VStack(alignment: .leading, spacing: 16) { // Adjusted spacing for better layout
            HStack {
              Text("Components")
                .font(.system(size: 36, weight: .bold, design: .default))
              Spacer()
            }
            Text("This is a typical SwiftUI view")
            
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
                Text("Check me")
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
