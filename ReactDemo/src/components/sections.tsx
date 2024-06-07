'use client';
import { FC, ReactNode } from 'react';

interface ComponentSectionProps {
  header: string;
  children: ReactNode;
  className?: string;
}

export const ComponentSection: FC<ComponentSectionProps> = ({
  header,
  children,
  className = '',
}) => {
  return (
    <div className={className}>
      <label className="block text-sm font-medium mb-1">{header}</label>
      {children}
    </div>
  );
};

export default ComponentSection;
