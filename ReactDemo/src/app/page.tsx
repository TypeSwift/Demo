import { FC } from 'react';
import SwiftComponents from '../components/SwiftComponents';

const Home: FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">SwiftUI-like Components</h1>
        <SwiftComponents />
      </div>
    </div>
  );
};

export default Home;
