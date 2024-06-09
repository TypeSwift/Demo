//
//  ComponentsView.swift
//  Demo
//
//  Created by Justin Bush on 6/5/24.
//

import SwiftUI

struct ComponentsView: View {
  let manager: ObservableWebViewManager
  
  @State private var total: Double = 0
  @State private var textFieldValue: String = ""
  @State private var selectedDevice: TypeSwift.Device = .Phone
  @State private var selectedOS: TypeSwift.OperatingSystems = .iOS
  @State private var switchValue: Bool = true
  
  var body: some View {
    GeometryReader { geometry in
      HStack(spacing: 0) {
        ObservableWebView(manager: manager)
          .frame(width: geometry.size.width / 2)
          .tsMessageHandler(.total { newValue in
            total = newValue
          }, manager: manager)
          .tsMessageHandler(.textFieldValue { newValue in
            textFieldValue = newValue
          }, manager: manager)
          .tsMessageHandler(.selectedDevice { newValue in
            selectedDevice = newValue
          }, manager: manager)
          .tsMessageHandler(.selectedOS { newValue in
            selectedOS = newValue
          }, manager: manager)
          .tsMessageHandler(.switchValue {  newValue in
            switchValue = newValue
          }, manager: manager)
        // TODO: Simplify for 1:1 state vars
        // .sync(.switchValue, $switchValue, manager)
        
        ScrollView {
          VStack(alignment: .leading, spacing: 16) {
            LargeHeader("SwiftUI", tagline: "This is a SwiftUI view")
            
            ComponentSection(header: "Buttons") {
              HStack {
                PrimaryButton("+1", foreground: .white, background: .blue) {
                  manager.ts(.total(total + 1))
                }
                PrimaryButton("-1", foreground: .white, background: .red) {
                  manager.ts(.total(total - 1))
                }
                Text("\(total, specifier: "%.0f")")
                  .font(.system(size: 14, weight: .medium))
              }
            }
            
            ComponentSection(header: "TextField") {
              PrimaryTextField(text: $textFieldValue)
                .onChange(of: textFieldValue) {
                  manager.ts(.textFieldValue(textFieldValue))
                }
            }
            
            ComponentSection(header: "Dropdown") {
              VStack(alignment: .leading, spacing: 0) {
                MonoSubheader("enum")
                EnumDropdownMenu(selection: $selectedDevice)
                  .onChange(of: selectedDevice) {
                    manager.ts(.selectedDevice(selectedDevice))
                  }
                MonoSubheader("const")
                EnumDropdownMenu(selection: $selectedOS)
                  .onChange(of: selectedOS) {
                    manager.ts(.selectedOS(selectedOS))
                  }
              }
            }
            
            ComponentSection(header: "Switch") {
              LargeSwitch(state: $switchValue)
                .onChange(of: switchValue) {
                  manager.ts(.switchValue(switchValue))
                }
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
