import { FC } from 'react';

interface RedButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const RedButton: FC<RedButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-lg shadow hover:bg-red-700 focus:outline-none"
    >
      {children}
    </button>
  );
};

export default RedButton;
