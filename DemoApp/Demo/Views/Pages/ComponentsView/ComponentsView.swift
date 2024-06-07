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
  @State private var total: Double = 0
  @State private var selectedDevice: TypeSwift.Device = .Phone
  @State private var selectedOS: TypeSwift.OperatingSystems = .iOS
  @State private var switchValue: Bool = true
  
  var body: some View {
    GeometryReader { geometry in
      HStack(spacing: 0) {
        ObservableWebView(manager: manager)
          .frame(width: geometry.size.width / 2)
          .tsMessageHandler(.updateTotal { newValue in
            print(newValue)
            total = newValue
          }, manager: manager)
          .tsMessageHandler(.updateTextField { newValue in
            print(newValue)
            textFieldValue = newValue
          }, manager: manager)
          .tsMessageHandler(.updateDeviceDropdown { newValue in
            print(newValue)
            selectedDevice = newValue
          }, manager: manager)
          .tsMessageHandler(.updateOSDropdown { newValue in
            print(newValue)
            selectedOS = newValue
          }, manager: manager)
          .tsMessageHandler(.updateSwitch { newValue in
            print(newValue)
            switchValue = newValue
          }, manager: manager)
        
        ScrollView {
          VStack(alignment: .leading, spacing: 16) {
            LargeHeader("SwiftUI", tagline: "This is a SwiftUI view")
            
            ComponentSection(header: "Buttons") {
              HStack {
                PrimaryButton("+1", foreground: .white, background: .blue) {
                  manager.ts(.updateTotal(total + 1))
                }
                PrimaryButton("-1", foreground: .white, background: .red) {
                  manager.ts(.updateTotal(total - 1))
                }
                Text("\(total, specifier: "%.0f")")
                  .font(.system(size: 14, weight: .medium))
              }
            }
            
            ComponentSection(header: "TextField") {
              PrimaryTextField(text: $textFieldValue)
                .onChange(of: textFieldValue) {
                  manager.ts(.updateTextField(textFieldValue))
                }
            }
            
            ComponentSection(header: "Dropdown") {
              VStack(alignment: .leading, spacing: 0) {
                MonoSubheader("enum")
                EnumDropdownMenu(selection: $selectedDevice)
                  .onChange(of: selectedDevice) {
                    manager.ts(.updateDeviceDropdown(selectedDevice))
                  }
                MonoSubheader("const")
                EnumDropdownMenu(selection: $selectedOS)
                  .onChange(of: selectedOS) {
                    manager.ts(.updateOSDropdown(selectedOS))
                  }
              }
            }
            
            ComponentSection(header: "Switch") {
              LargeSwitch(state: $switchValue)
                .onChange(of: switchValue) {
                  manager.ts(.updateSwitch(switchValue))
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
