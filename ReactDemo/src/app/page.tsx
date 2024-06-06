import { FC } from 'react';
import SwiftComponents from '../components/SwiftComponents';

const Home: FC = () => {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">React</h1>
        <p className="text-xs">This is a React web app</p>
        <SwiftComponents />
      </div>
    </div>
  );
};

export default Home;
