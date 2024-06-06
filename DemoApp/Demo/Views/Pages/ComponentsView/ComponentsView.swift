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
              .padding(.bottom, 6)
            
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
              TextField("", text: .constant(""))
                .padding()
                .background(Color.gray.opacity(0.6))
                .font(.system(size: 16))
                .cornerRadius(8)
                .shadow(radius: 1)
                .textFieldStyle(.plain)
            }
            
            VStack(alignment: .leading, spacing: 8) {
              Text("Dropdown")
                .font(.system(size: 14, weight: .medium))
                .padding(.bottom, 4)
              Picker("", selection: .constant(1)) {
                Text("Option 1").tag(1)
                Text("Option 2").tag(2)
                Text("Option 3").tag(3)
              }
              .pickerStyle(.menu)
              .padding()
              .background(Color.gray.opacity(0.2))
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
  #if os(macOS)
    .frame(height: 600)
  #endif
}

#Preview("NavigationView") {
  BrowserView()
}
