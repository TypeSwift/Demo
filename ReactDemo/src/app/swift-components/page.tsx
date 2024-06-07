'use client';
import { FC, useState, useEffect, ChangeEvent, use } from 'react';
import DropdownMenu from '../../components/menus';
import { BlueButton, RedButton } from '../../components/buttons';
import InputTextField from '../../components/inputs';
import Switch from '../../components/switches';
import ComponentSection from '../../components/sections';
import useExpose from '../../hooks/useExpose';
import useExposeType from '../../hooks/useExposeType';
import { handlers } from '@/utils/handlers';

export enum Device {
  Phone = 'Phone',
  Pad = 'Pad',
  Mac = 'Mac',
  TV = 'TV',
  Vision = 'Vision',
}

export type OperatingSystemType = keyof typeof OperatingSystems;
const OperatingSystems = {
  iOS: 'iOS',
  iPadOS: 'iPadOS',
  macOS: 'macOS',
  tvOS: 'tvOS',
  visionOS: 'visionOS',
} as const;

export const exposedTypes = {
  Device,
  OperatingSystems,
};

const SplitComponentsView: FC = () => {
  const [total, setTotal] = useState(0);
  const [selectedDevice, setSelectedDevice] = useState<Device>();
  const [selectedOS, setSelectedOS] = useState<OperatingSystemType>();
  const [textFieldValue, setTextFieldValue] = useState<string>('');
  const [switchValue, setSwitchValue] = useState<boolean>(false);

  useEffect(() => {
    console.log('Total:', total);
  }, [total]);

  useEffect(() => {
    console.log('Selected Device:', selectedDevice);
    if (selectedDevice) {
      postDeviceDropdown(selectedDevice);
    }
  }, [selectedDevice]);

  useEffect(() => {
    console.log('Selected OS:', selectedOS);
  }, [selectedOS]);

  useEffect(() => {
    postSwitch(switchValue);
  }, [switchValue]);

  const postTotal = (value: number) => {
    if (
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.updateTotal
    ) {
      window.webkit.messageHandlers.updateTotal.postMessage(value);
    } else {
      console.warn("Message handler 'updateTotal' is not available.");
    }
  };

  const postTextField = (value: string) => {
    if (
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.updateTextField
    ) {
      window.webkit.messageHandlers.updateTextField.postMessage(value);
    } else {
      console.warn("Message handler 'updateTextField' is not available.");
    }
  };

  const postDeviceDropdown = (value: Device) => {
    if (
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.updateDeviceDropdown
    ) {
      window.webkit.messageHandlers.updateDeviceDropdown.postMessage(
        JSON.stringify(value)
      );
    } else {
      console.warn("Message handler 'updateDeviceDropdown' is not available.");
    }
  };
  const postOSDropdown = (value: OperatingSystemType) => {
    if (
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.updateOSDropdown
    ) {
      window.webkit.messageHandlers.updateOSDropdown.postMessage(value);
    } else {
      console.warn("Message handler 'updateOSDropdown' is not available.");
    }
  };

  const postSwitch = (value: boolean) => {
    if (
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.updateSwitch
    ) {
      window.webkit.messageHandlers.updateSwitch.postMessage(value);
    } else {
      console.warn("Message handler 'updateSwitch' is not available.");
    }
  };

  const handleIncrement = () => {
    updateTotal(total + 1);
  };

  const handleDecrement = () => {
    updateTotal(total - 1);
  };

  const handleDeviceSelect = (device: Device) => {
    setSelectedDevice(device);
    postDeviceDropdown(device);
  };

  const handleOSSelect = (os: OperatingSystemType) => {
    setSelectedOS(os);
  };

  const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setTextFieldValue(newValue);
    postTextField(newValue);
    console.log('TextField Value:', newValue);
  };

  const handleSwitchChange = () => {
    const newValue = !switchValue;
    setSwitchValue(newValue);
    console.log('Switch Value:', newValue);
  };

  // Exposed Functions
  const updateTotal = (value: number) => {
    setTotal(value);
    postTotal(value);
  };

  const updateDeviceDropdown = (device: Device) => {
    handleDeviceSelect(device);
    postDeviceDropdown(device);
  };

  const updateOSDropdown = (os: OperatingSystemType) => {
    handleOSSelect(os);
    postOSDropdown(os);
  };

  const updateTextField = (text: string) => {
    setTextFieldValue(text);
    postTextField(text);
  };

  const updateSwitch = (state: boolean) => {
    setSwitchValue(state);
    postSwitch(state);
  };

  useExposeType(exposedTypes);

  useExpose(updateTotal);
  useExpose(updateDeviceDropdown);
  useExpose(updateOSDropdown);
  useExpose(updateTextField);
  useExpose(updateSwitch);

  return (
    <div className="py-6 space-y-4">
      <ComponentSection header="Buttons">
        <div className="flex items-center">
          <BlueButton onClick={handleIncrement}>+1</BlueButton>
          <RedButton onClick={handleDecrement}>-1</RedButton>
          <span className="ml-4 text-sm font-medium">{total}</span>
        </div>
      </ComponentSection>
      <ComponentSection header="TextField">
        <InputTextField
          value={textFieldValue}
          onChange={handleTextFieldChange}
          placeholder="Type here..."
        />
      </ComponentSection>
      <ComponentSection header="Dropdown">
        <label className="block text-sm font-medium mt-2 text-left font-mono">
          enum
        </label>
        <DeviceDropdown value={selectedDevice} onSelect={handleDeviceSelect} />
        <label className="block text-sm font-medium mt-2 text-left font-mono">
          const
        </label>
        <OperatingSystemDropdown value={selectedOS} onSelect={handleOSSelect} />
      </ComponentSection>
      <ComponentSection header="Switch">
        <Switch checked={switchValue} onChange={handleSwitchChange} />
      </ComponentSection>
    </div>
  );
};

const DeviceDropdown: FC<{
  value?: Device;
  onSelect: (device: Device) => void;
}> = ({ value, onSelect }) => {
  const handleSelect = (selectedValue: string) => {
    onSelect(selectedValue as Device);
  };

  return (
    <DropdownMenu
      value={value}
      options={Object.values(Device)}
      onSelect={handleSelect}
      placeholder="Device"
    />
  );
};

const OperatingSystemDropdown: FC<{
  value?: OperatingSystemType;
  onSelect: (os: OperatingSystemType) => void;
}> = ({ value, onSelect }) => {
  const handleSelect = (selectedValue: string) => {
    onSelect(selectedValue as OperatingSystemType);
  };

  return (
    <DropdownMenu
      value={value}
      options={Object.values(OperatingSystems)}
      onSelect={handleSelect}
      placeholder="OS"
    />
  );
};

const SwiftComponents: FC = () => {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="py-6 px-3">
        <h1 className="text-3xl font-bold mb-4">React</h1>
        <p className="text-xs">This is a React web app</p>
        <SplitComponentsView />
      </div>
    </div>
  );
};

export default SwiftComponents;
