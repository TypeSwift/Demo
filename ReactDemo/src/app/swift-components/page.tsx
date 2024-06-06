'use client';
import { FC, useState, useEffect, ChangeEvent } from 'react';
import DropdownMenu from '../../components/menus';
import { BlueButton, RedButton } from '../../components/buttons';
import InputTextField from '../../components/inputs';
import Switch from '../../components/switches';
import ComponentSection from '../../components/sections';

enum Device {
  Phone = 'Phone',
  Pad = 'Pad',
  Mac = 'Mac',
  TV = 'TV',
  Vision = 'Vision',
}

const SplitComponentsView: FC = () => {
  const [total, setTotal] = useState(0);
  const [selectedDevice, setSelectedDevice] = useState<Device>();
  const [textFieldValue, setTextFieldValue] = useState<string>('');
  const [switchValue, setSwitchValue] = useState<boolean>(false);

  useEffect(() => {
    console.log('Total:', total);
  }, [total]);

  useEffect(() => {
    console.log('Selected Device:', selectedDevice);
  }, [selectedDevice]);

  const handleIncrement = () => {
    setTotal(total + 1);
  };

  const handleDecrement = () => {
    setTotal(total - 1);
  };

  const handleDeviceSelect = (device: Device) => {
    setSelectedDevice(device);
  };

  const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setTextFieldValue(newValue);
    console.log('TextField Value:', newValue);
  };

  const handleSwitchChange = () => {
    const newValue = !switchValue;
    setSwitchValue(newValue);
    console.log('Switch Value:', newValue);
  };

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
        <DeviceDropdown onSelect={handleDeviceSelect} />
        <label className="block text-sm font-medium mt-2">
          Selected: {selectedDevice ?? 'None'}
        </label>
      </ComponentSection>
      <ComponentSection header="Switch">
        <Switch checked={switchValue} onChange={handleSwitchChange} />
      </ComponentSection>
    </div>
  );
};

const DeviceDropdown: FC<{ onSelect: (device: Device) => void }> = ({
  onSelect,
}) => {
  const handleSelect = (value: string) => {
    onSelect(value as Device);
  };

  return (
    <DropdownMenu
      options={Object.values(Device)}
      onSelect={handleSelect}
      placeholder="Device"
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
