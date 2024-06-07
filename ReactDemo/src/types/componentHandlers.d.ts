export interface ComponentHandlers {
  updateTotal: {
    postMessage: (value: number) => void;
  };
  updateTextField: {
    postMessage: (value: string) => void;
  };
  updateDeviceDropdown: {
    postMessage: (value: Device) => void;
  };
  updateOSDropdown: {
    postMessage: (value: OperatingSystems) => void;
  };
  updateSwitch: {
    postMessage: (value: boolean) => void;
  };
  // TODO: Insert message handlers here to communicate with Swift app through WKWebView.
  // Some example syntax:
  /*
  userLoggedIn: {
    sendMessage: (data: { userId: number; timestamp: string }) => void;
  };
  userLoggedOut: {
    notify: (status: boolean) => void;
  };
  cartUpdated: {
    updateCart: (items: { itemId: number; quantity: number }[]) => void;
  };
  notificationReceived: {
    alertUser: (notification: { title: string; body: string }) => void;
  };
  customMessageHandler: {
    sendObjectToSwiftApp: (data: { key: string; value: any }) => void;
  };
  */
}
