import { FC, ChangeEvent } from 'react';

interface InputTextFieldProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputTextField: FC<InputTextFieldProps> = ({
  value,
  onChange,
  placeholder = '',
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="mt-1 block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-[#EDEDED] dark:bg-[#606463] text-base"
      style={{
        height: '52px',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.5)',
      }}
    />
  );
};

export default InputTextField;
