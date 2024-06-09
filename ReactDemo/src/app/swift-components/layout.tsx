import { FC, ReactNode } from 'react';

const SwiftComponentsLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="py-6 px-3">
        <h1 className="text-3xl font-bold mb-4">React</h1>
        <p className="text-xs">This is a React web app</p>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default SwiftComponentsLayout;
