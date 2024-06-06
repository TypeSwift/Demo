'use client';
import { FC, useState, useEffect, ChangeEvent } from 'react';
import DropdownMenu from '../../components/DropdownMenu';

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
      <div>
        <label className="block text-sm font-medium mb-1">Buttons</label>
        <div className="flex items-center">
          <button
            onClick={handleIncrement}
            className="px-4 py-2 font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none"
          >
            +1
          </button>
          <button
            onClick={handleDecrement}
            className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-lg shadow hover:bg-red-700 focus:outline-none"
          >
            -1
          </button>
          <span className="ml-4 text-sm font-medium">{total}</span>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">TextField</label>
        <input
          type="text"
          value={textFieldValue}
          onChange={handleTextFieldChange}
          placeholder="Type here..."
          className="mt-1 block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-[#EDEDED] dark:bg-[#606463] text-base"
          style={{
            height: '52px',
            boxShadow: '0 1px 1px rgba(0, 0, 0, 0.5)',
          }}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Dropdown</label>
        <DeviceDropdown onSelect={handleDeviceSelect} />
        <label className="block text-sm font-medium mt-2">
          Selected: {selectedDevice ?? 'None'}
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Switch</label>
        <label className="relative inline-flex items-center cursor-pointer group">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={switchValue}
            onChange={handleSwitchChange}
          />
          <div className="w-[52px] h-[32px] bg-[#D7D7D5] rounded-full peer dark:bg-[#414544] peer-checked:bg-blue-600 peer-checked:border-[#4480EA] peer-checked:border-[0.5px] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[28px] after:w-[28px] after:transition-all peer-checked:after:translate-x-[20px] peer-checked:after:border-white peer-checked:after:bg-white shadow-inner dark:border-[#606261]"></div>
        </label>
      </div>
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
