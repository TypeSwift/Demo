export interface ComponentHandlers {
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
}
