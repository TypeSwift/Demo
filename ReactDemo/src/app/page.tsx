import { FC } from 'react';
import SwiftComponents from './swift-components/page';

const Home: FC = () => {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="py-6 px-3">
        <h1 className="text-3xl font-bold mb-4">React</h1>
        <p className="text-xs">This is a React web app</p>
        {/*<SplitComponentsView />*/}
      </div>
    </div>
  );
};

export default Home;
