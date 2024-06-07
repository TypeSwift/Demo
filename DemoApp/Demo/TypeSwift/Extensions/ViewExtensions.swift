//
//  ViewExtensions.swift
//  Demo
//
//  Created by Justin Bush on 6/7/24.
//

import SwiftUI

struct TypeSafeScriptMessageHandlerModifier: ViewModifier {
  let handlerType: TypeSwift.MessageHandlers
  var manager: ObservableWebViewManager
  
  func body(content: Content) -> some View {
    content
      .onAppear {
        manager.removeScriptMessageHandler(forName: handlerType.name)
        manager.addScriptMessageHandler(ObservableScriptMessageHandler(handler: { message in
          handlerType.handle(message: message)
        }), forName: handlerType.name)
      }
  }
}

extension View {
  func tsMessageHandler(_ handlerType: TypeSwift.MessageHandlers, manager: ObservableWebViewManager) -> some View {
    self.modifier(TypeSafeScriptMessageHandlerModifier(handlerType: handlerType, manager: manager))
  }
}
