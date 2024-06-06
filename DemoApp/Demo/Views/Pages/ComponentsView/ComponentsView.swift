//
//  ComponentsView.swift
//  Demo
//
//  Created by Justin Bush on 6/5/24.
//

import SwiftUI

struct ComponentsView: View {
  @Environment(\.colorScheme) var colorScheme
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
          VStack(alignment: .leading, spacing: 16) {
            HStack {
              Text("SwiftUI")
                .font(.system(size: 32, weight: .bold, design: .default))
                .padding(.top, 6)
              Spacer()
            }
            Text("This is a native SwiftUI view")
              .font(.system(size: 12))
              .padding(.bottom, 10)
            
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
            
            ComponentSection(header: "TextField") {
              PrimaryTextField(text: $textFieldValue)
            }
            
            ComponentSection(header: "Dropdown") {
              Picker("", selection: $pickerSelection) {
                Text("Option 1").tag(1)
                Text("Option 2").tag(2)
                Text("Option 3").tag(3)
              }
              .pickerStyle(.menu)
              .padding(.horizontal)
              .padding(.vertical, 10)
              .frame(maxWidth: .infinity)
              .background(
                colorScheme == .dark
                      ? Color(0x606463)
                      : Color(0xEDEDED)
              )
              .cornerRadius(8)
              .shadow(radius: 1)
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
              .toggleStyle(SwitchToggleStyle())
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
  #if os(macOS)
    .frame(height: 600)
  #endif
}

#Preview("NavigationView") {
  BrowserView()
}

struct CustomPickerItem: View {
  let text: String
  let tag: Int
  @Binding var selection: Int

  var body: some View {
    Text(text)
      .tag(tag)
      .foregroundColor(selection == tag ? .black : .primary)
  }
}
