import { FC } from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const BlueButton: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none"
    >
      {children}
    </button>
  );
};

export const RedButton: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-lg shadow hover:bg-red-700 focus:outline-none"
    >
      {children}
    </button>
  );
};

const PrimaryButton: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 font-medium text-white dark:text-black bg-black dark:bg-white rounded-lg shadow hover:bg-gray-200 dark:hover:bg-black focus:outline-none"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
