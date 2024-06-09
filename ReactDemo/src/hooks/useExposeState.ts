import { useState, useEffect, useMemo } from 'react';

function useExposeState<T>(
  initialValue: T,
  key: string
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(initialValue);

  // proxy handler to intercept changes
  const handler = useMemo(
    () => ({
      set: (obj: any, prop: string, value: T) => {
        if (prop === 'value') {
          setState(value);
        }
        return true;
      },
    }),
    []
  );

  // create a proxy for state
  const stateProxy = useMemo(
    () => new Proxy({ value: state }, handler),
    [state, handler]
  );

  // expose the proxy to the global scope
  useEffect(() => {
    (window as any)[key] = stateProxy;
  }, [key, stateProxy]);

  return [state, setState];
}

export default useExposeState;
