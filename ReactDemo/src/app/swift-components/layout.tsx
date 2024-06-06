import { FC, ReactNode } from 'react';

const SwiftComponentsLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default SwiftComponentsLayout;
