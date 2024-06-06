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
                PrimaryButton("+1", foreground: .white, background: .blue) {
                  print("add one")
                }
                PrimaryButton("-1", foreground: .white, background: .red) {
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
              .controlSize(.extraLarge)
              .pickerStyle(.menu)
              .padding(.horizontal)
              .padding(.vertical, 10)
              .frame(maxWidth: .infinity)
              .frame(height: 54)
              .background(
                colorScheme == .dark
                      ? Color(0x606463)
                      : Color(0xEDEDED)
              )
              .cornerRadius(8)
              .shadow(color: Color.black.opacity(0.6), radius: 0.5, x: 0, y: 1)
            }
            
            ComponentSection(header: "Switch") {
              Toggle(isOn: $switchValue) {
                EmptyView()
              }
              .labelsHidden()
              .toggleStyle(.switch)
              .tint(.blue)
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
#if os(macOS)
    .frame(height: 600)
#endif
}
