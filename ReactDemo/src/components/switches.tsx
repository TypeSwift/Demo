import { FC, ChangeEvent } from 'react';

interface SwitchProps {
  checked: boolean;
  onChange: () => void;
}

const Switch: FC<SwitchProps> = ({ checked, onChange }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer group">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={onChange}
      />
      <div className="w-[52px] h-[32px] bg-[#D7D7D5] rounded-full peer dark:bg-[#414544] peer-checked:bg-blue-600 peer-checked:border-[#4480EA] peer-checked:border-[0.5px] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[28px] after:w-[28px] after:transition-all peer-checked:after:translate-x-[20px] peer-checked:after:border-white peer-checked:after:bg-white shadow-inner dark:border-[#606261]"></div>
    </label>
  );
};

export default Switch;
