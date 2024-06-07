'use client';
import { FC, ChangeEvent } from 'react';

interface DropdownMenuProps {
  options: string[];
  value?: string;
  onSelect: (value: string) => void;
  placeholder: string;
}

export const DropdownMenu: FC<DropdownMenuProps> = ({
  options,
  value,
  onSelect,
  placeholder,
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onSelect(selectedValue);
  };

  return (
    <div className="relative">
      <select
        value={value ?? ''}
        onChange={handleChange}
        className="block appearance-none w-full bg-[#EDEDED] dark:bg-[#606463] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 pr-8 leading-tight text-base"
        style={{
          height: '52px',
          boxShadow: '0 1px 1px rgba(0, 0, 0, 0.5)',
        }}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 30.8496 44.6777"
        >
          <g>
            <rect height="44.6777" opacity="0" width="30.8496" x="0" y="0" />
            <path
              fill="currentColor"
              d="M15.3223 0C14.6484 0 14.0625 0.263672 13.5645 0.761719L0.673828 13.0664C0.292969 13.4766 0 14.0039 0 14.7949C0 16.1719 1.05469 17.2266 2.43164 17.2266C2.98828 17.2266 3.60352 17.0801 4.16016 16.5234L15.3223 5.5957L26.4551 16.5234C27.0117 17.0508 27.6562 17.2266 28.2129 17.2266C29.5898 17.2266 30.6152 16.1719 30.6152 14.7949C30.6152 14.0039 30.3516 13.4766 29.9414 13.0664L17.0801 0.761719C16.5527 0.263672 15.9668 0 15.3223 0ZM15.3223 44.6484C15.9668 44.6484 16.5527 44.3848 17.0801 43.8867L29.9414 31.582C30.3516 31.1719 30.6152 30.6445 30.6152 29.8535C30.6152 28.4766 29.5898 27.4219 28.2129 27.4219C27.6562 27.4219 27.0117 27.5977 26.4551 28.125L15.3223 39.0527L4.16016 28.125C3.60352 27.5684 2.98828 27.4219 2.43164 27.4219C1.05469 27.4219 0 28.4766 0 29.8535C0 30.6445 0.292969 31.1719 0.673828 31.582L13.5645 43.8867C14.0625 44.3848 14.6484 44.6484 15.3223 44.6484Z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default DropdownMenu;
