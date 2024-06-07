import { useEffect, useCallback } from 'react';

const useExpose = <T extends (...args: any[]) => void>(func: T) => {
  const memoizedFunc = useCallback(func, [func]);

  useEffect(() => {
    const functionName = func.name as keyof Window;
    (window as any)[functionName] = memoizedFunc;
    return () => {
      delete (window as any)[functionName];
    };
  }, [memoizedFunc, func.name]);
};

export default useExpose;
