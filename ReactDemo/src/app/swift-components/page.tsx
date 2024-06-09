'use client';
import { FC, useState, useEffect, ChangeEvent, use } from 'react';
import DropdownMenu from '../../components/menus';
import { BlueButton, RedButton } from '../../components/buttons';
import InputTextField from '../../components/inputs';
import Switch from '../../components/switches';
import ComponentSection from '../../components/sections';
import useExpose from '../../hooks/useExpose';
import useExposeType from '../../hooks/useExposeType';
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
  const [total, setTotal] = useExposeState<number>(0, 'total');
  const [selectedDevice, setSelectedDevice] =
    useExposeState<Device>('selectedDevice');
  const [selectedOS, setSelectedOS] =
    useExposeState<OperatingSystemType>('selectedOS');
  const [textFieldValue, setTextFieldValue] = useExposeState<string>(
    '',
    'textFieldValue'
  );
  const [switchValue, setSwitchValue] = useExposeState<boolean>(
    true,
    'switchValue'
  );

  const handleIncrement = () => {
    updateTotal(total + 1);
  };

  const handleDecrement = () => {
    updateTotal(total - 1);
  };

  const handleDeviceSelect = (device: Device) => {
    setSelectedDevice(device);
  };

  const handleOSSelect = (os: OperatingSystemType) => {
    setSelectedOS(os);
  };

  const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setTextFieldValue(newValue);
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
  };

  const updateOSDropdown = (os: OperatingSystemType) => {
    handleOSSelect(os);
  };

  const updateTextField = (text: string) => {
    setTextFieldValue(text);
  };

  const updateSwitch = (state: boolean) => {
    setSwitchValue(state);
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

export default SplitComponentsView;
