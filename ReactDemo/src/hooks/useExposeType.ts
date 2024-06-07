import { useEffect } from 'react';

const useExposeTypes = (types: Record<string, any>) => {
  useEffect(() => {
    Object.keys(types).forEach((key) => {
      (window as any)[key] = types[key];
    });
  }, [types]);
};

export default useExposeTypes;
