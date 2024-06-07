//
//  EnumDropdownMenu.swift
//  Demo
//
//  Created by Justin Bush on 6/7/24.
//

import SwiftUI

import SwiftUI

struct EnumDropdownMenu<EnumType>: View where EnumType: RawRepresentable, EnumType: CaseIterable, EnumType.RawValue == String, EnumType: Hashable {
  @Binding var selection: EnumType
  @Environment(\.colorScheme) var colorScheme
  
  var body: some View {
    Picker("", selection: $selection) {
      ForEach(Array(EnumType.allCases), id: \.self) { value in
        Text(value.rawValue).tag(value)
      }
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
}


#Preview {
  @State var selectedDevice: TypeSwift.Device = .Mac
  @State var selectedOS: TypeSwift.OperatingSystems = .macOS
  
  return VStack {
    EnumDropdownMenu(selection: $selectedDevice)
    EnumDropdownMenu(selection: $selectedOS)
  }
  .padding()
}
