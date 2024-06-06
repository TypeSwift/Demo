import { FC } from 'react';

const SwiftComponents: FC = () => {
  return (
    <div className="p-6 space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Button</label>
        <button className="px-4 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:outline-none">
          Click Me
        </button>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Text Field</label>
        <input
          type="text"
          className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-[#363B39] input-gradient-border"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Dropdown</label>
        <div className="relative">
          <select className="block appearance-none w-full bg-white dark:bg-[#606463] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 pr-8 leading-tight input-gradient-border">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Checkbox</label>
        <input
          type="checkbox"
          className="h-4 w-4 border-gray-300 rounded dark:bg-[#595D5C]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Switch</label>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-[#414544] dark:border-[#5F6161] peer-checked:bg-blue-600 peer-checked:border peer-checked:border-[#4480EA] peer-checked:border-[0.5px] after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#CACBCB] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 peer-checked:after:bg-white"></div>
        </label>
      </div>
    </div>
  );
};

export default SwiftComponents;
