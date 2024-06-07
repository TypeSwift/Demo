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
    postMessage: (value: OperatingSystemType) => void;
  };
  updateSwitch: {
    postMessage: (value: boolean) => void;
  };
}
