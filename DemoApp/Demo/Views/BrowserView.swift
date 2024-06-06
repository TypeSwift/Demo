//
//  BrowserView.swift
//  Demo
//
//  Created by Justin Bush on 6/5/24.
//

import SwiftUI

@Observable
class NavigationViewModel {
  var selectedItem: Page? = .components
  
  var componentsWebViewManager = ObservableWebViewManager(urlString: Page.components.url)
  
  init() {
    componentsWebViewManager.load(Page.components.url)
  }
}

struct BrowserView: View {
  @Environment(\.global) private var global
  @State private var viewModel = NavigationViewModel()
  
  var body: some View {
    @Bindable var global = global
    NavigationSplitView {
      VStack {
        List(Page.allCases, id: \.self, selection: $viewModel.selectedItem) { item in
          PageListItem(page: item)
          .tag(item)
          .padding(.vertical, 6)
        }
      }
      .navigationTitle("Pages")
      .navigationSplitViewColumnWidth(min: 170, ideal: 170, max: 240)
    } detail: {
      NavigationStack {
        if let selectedItem = viewModel.selectedItem {
          destinationView(for: selectedItem)
            .navigationBarTitleDisplayMode(.inline)
        } else {
          Text("Select a page")
        }
      }
    }
  }
  
  @ViewBuilder
  private func destinationView(for item: Page) -> some View {
    switch item {
    case .components:
      ComponentsView(manager: viewModel.componentsWebViewManager)
    }
  }
}

#Preview {
  BrowserView()
}

struct PageListItem: View {
  @Environment(\.global) private var global
  let page: Page
  
  var body: some View {
    #if os(macOS)
    HStack(spacing: 14) {
      Image(systemName: global.currentPage.symbol)
        .font(.system(size: 16))
        .frame(width: 20)
        .foregroundStyle(.secondary)
      Text(page.title)
        .font(.headline)
    }
    .padding(.leading, 8)
    #else
    HStack {
      VStack(alignment: .leading) {
        Text(page.title)
          .font(.headline)
        Text(page.description)
          .font(.caption)
          .foregroundStyle(.secondary)
      }
      Spacer()
      Image(systemName: global.currentPage.symbol)
        .font(.system(size: 20))
        //.foregroundStyle(.blue)
    }
    #endif
  }
}
