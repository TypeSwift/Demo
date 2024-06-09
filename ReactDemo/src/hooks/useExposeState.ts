import { useState, useEffect, useMemo } from 'react';

function useExposeState<T>(
  initialValue: T,
  key: string
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(initialValue);

  const handler = useMemo(
    () => ({
      set: (obj: any, prop: string, value: T) => {
        if (prop === 'value') {
          setState(value);
          if (window.webkit?.messageHandlers?.[key]) {
            window.webkit.messageHandlers[key].postMessage(value);
          } else {
            console.warn(`Message handler '${key}' is not available.`);
          }
        }
        return true;
      },
    }),
    [key]
  );

  const stateProxy = useMemo(
    () => new Proxy({ value: state }, handler),
    [state, handler]
  );

  useEffect(() => {
    (window as any)[key] = stateProxy;
  }, [key, stateProxy]);

  return [state, setState];
}

export default useExposeState;
