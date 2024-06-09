export {};

declare global {
  interface Window {
    webkit: {
      messageHandlers;
    };
  }
}

export const exposedTypes = {
  Device,
  OperatingSystems,
};
