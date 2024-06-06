import { FC } from 'react';

interface BlueButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const BlueButton: FC<BlueButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none"
    >
      {children}
    </button>
  );
};

export default BlueButton;
