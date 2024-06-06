import { FC, ReactNode } from 'react';

interface ComponentSectionProps {
  header: string;
  children: ReactNode;
}

export const ComponentSection: FC<ComponentSectionProps> = ({
  header,
  children,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{header}</label>
      {children}
    </div>
  );
};

export default ComponentSection;
