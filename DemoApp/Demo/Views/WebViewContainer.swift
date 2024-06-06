//
//  WebViewContainer.swift
//  Demo
//
//  Created by Justin Bush on 6/5/24.
//

import SwiftUI

struct WebViewContainer: View {
  let manager: ObservableWebViewManager
  
  var body: some View {
    ObservableWebView(manager: manager)
  }
}

#Preview {
  BrowserView()
}
