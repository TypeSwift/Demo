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
  
  @State private var total: Double = 0
  @State private var selectedDevice: TypeSwift.Device = .Phone //? = nil
  @State private var selectedOS: TypeSwift.OperatingSystem = .iOS
  
  var body: some View {
    GeometryReader { geometry in
      HStack(spacing: 0) {
        WebViewContainer(manager: manager)
          .frame(width: geometry.size.width / 2)
        
        ScrollView {
          VStack(alignment: .leading, spacing: 16) {
            LargeHeader("SwiftUI", tagline: "This is a native SwiftUI view")
            
            ComponentSection(header: "Buttons") {
              HStack {
                PrimaryButton("+1", foreground: .white, background: .blue) {
                  // TODO: total + 1
                  manager.ts(.updateTotal(1))
                }
                PrimaryButton("-1", foreground: .white, background: .red) {
                  // TODO: total - 1
                  manager.ts(.updateTotal(-1))
                }
                Text("0")
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
