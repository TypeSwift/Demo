import { FC } from 'react';
import SwiftComponents from '../components/SwiftComponents';

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-black">
          SwiftUI-like Components
        </h1>
        <SwiftComponents />
      </div>
    </div>
  );
};

export default Home;
