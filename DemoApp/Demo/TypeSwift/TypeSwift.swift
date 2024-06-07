//
//  TypeSwift
//  Created by Justin Bush (@buzsh)
//  https://typeswift.org
//  https://github.com/TypeSwift/TypeSwift
//
//  Generated by SwiftGen
//  DO NOT MODIFY THE CONTENTS OF THIS FILE
//

/// An enumeration of TypeScript identifiers generated to be used in Swift code.
enum TypeSwift {
  
  // Functions
  case updateTotal(_ value: Double)
  case updateDeviceDropdown(_ device: Device)
  case updateOSDropdown(_ os: OperatingSystems)
  case updateTextField(_ text: String)
  case updateSwitch(_ state: Bool)
  
  var jsString: String {
    switch self {
    case .updateTotal(let value):
      return "updateTotal(\(value))"
    case .updateDeviceDropdown(let device):
      return "updateDeviceDropdown(Device.\(device))"
    case .updateOSDropdown(let os):
      return "updateOSDropdown(OperatingSystems.\(os))"
    case .updateTextField(let text):
      return "updateTextField(`\(text)`)"
    case .updateSwitch(let state):
      return "updateSwitch(\(state))"
    }
  }
}

extension TypeSwift {
  enum Device: String, CaseIterable {
    case Phone, Pad, Mac, TV, Vision
  }

  enum OperatingSystems: String, CaseIterable {
    case iOS, iPadOS, macOS, tvOS, visionOS
  }
}

import WebKit

extension TypeSwift {
  enum MessageHandlers {
    case updateTotal((_ value: Double) -> Void)
    case updateTextField((_ text: String) -> Void)
    
    var name: String {
      switch self {
      case .updateTotal:
        return "updateTotal"
      case .updateTextField:
        return "updateTextField"
      }
    }
    
    func handle(message: WKScriptMessage) {
      switch self {
      case .updateTotal(let callback):
        if let value = message.body as? Double {
          callback(value)
        }
      case .updateTextField(let callback):
        if let text = message.body as? String {
          callback(text)
        }
      }
    }
  }
}


protocol MessageHandlerProtocol {
  associatedtype ValueType
  var name: String { get }
  func handle(_ value: ValueType)
}

import SwiftUI

struct TypeSafeScriptMessageHandlerModifier: ViewModifier {
  let handlerType: TypeSwift.MessageHandlers
  var manager: ObservableWebViewManager
  
  func body(content: Content) -> some View {
    content
      .onAppear {
        let handler: (WKScriptMessage) -> Void = { message in
          handlerType.handle(message: message)
        }
        
        manager.removeScriptMessageHandler(forName: handlerType.name)
        manager.addScriptMessageHandler(ObservableScriptMessageHandler(handler: handler), forName: handlerType.name)
      }
  }
}

extension View {
  func typeScriptMessageHandler(_ handlerType: TypeSwift.MessageHandlers, manager: ObservableWebViewManager) -> some View {
    self.modifier(TypeSafeScriptMessageHandlerModifier(handlerType: handlerType, manager: manager))
  }
}

/*
 extension TypeSwift {
   enum Device: String, CaseIterable {
     case Phone = "Phone"
     case Pad = "Pad"
     case Mac = "Mac"
     case TV = "TV"
     case Vision = "Vision"
   }

   enum OperatingSystem: String, CaseIterable {
     case iOS = "iOS"
     case iPadOS = "iPadOS"
     case macOS = "macOS"
     case tvOS = "tvOS"
     case visionOS = "visionOS"
   }
 }
 */
