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
import useExposeState from '@/hooks/useExposeState';

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
  //const [total, setTotal] = useState(0);
  const [total, setTotal] = useExposeState<number>(0, 'total');

  const [selectedDevice, setSelectedDevice] = useState<Device>();
  const [selectedOS, setSelectedOS] = useState<OperatingSystemType>();
  const [textFieldValue, setTextFieldValue] = useState<string>('');
  const [switchValue, setSwitchValue] = useState<boolean>(false);

  useEffect(() => {
    postTotal(total);
  }, [total]);

  useEffect(() => {
    if (selectedDevice) {
      postDeviceDropdown(selectedDevice);
    }
  }, [selectedDevice]);

  useEffect(() => {
    if (selectedOS) {
      postOSDropdown(selectedOS);
    }
  }, [selectedOS]);

  useEffect(() => {
    postSwitch(switchValue);
  }, [switchValue]);

  const postTotal = (value: number) => {
    if (handlers.updateTotal) {
      handlers.updateTotal.postMessage(value);
    }
  };

  const postTextField = (value: string) => {
    handlers.updateTextField.postMessage(value);
  };

  const postDeviceDropdown = (value: Device) => {
    handlers.updateDeviceDropdown.postMessage(JSON.stringify(value));
  };
  const postOSDropdown = (value: OperatingSystemType) => {
    handlers.updateOSDropdown.postMessage(value);
  };

  const postSwitch = (value: boolean) => {
    if (handlers.updateSwitch) {
      handlers.updateSwitch.postMessage(value);
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
    postOSDropdown(os);
  };

  const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setTextFieldValue(newValue);
    postTextField(newValue);
  };

  const handleSwitchChange = () => {
    const newValue = !switchValue;
    setSwitchValue(newValue);
  };

  // Exposed Functions
  const updateTotal = (value: number) => {
    setTotal(value);
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
