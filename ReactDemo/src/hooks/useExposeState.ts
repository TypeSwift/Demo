import {
  useState,
  useEffect,
  useMemo,
  useRef,
  Dispatch,
  SetStateAction,
} from 'react';

function useExposeState<T>(
  initialValue: T,
  key: string
): [T, Dispatch<SetStateAction<T>>] {
  const [state, _setState] = useState<T>(initialValue);

  const stateRef = useRef(state);
  stateRef.current = state;

  const handler = useMemo(
    () => ({
      set: (obj: any, prop: string, value: T) => {
        if (prop === 'value') {
          _setState(value);
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
    () => new Proxy({ value: stateRef.current }, handler),
    [stateRef, handler]
  );

  useEffect(() => {
    (window as any)[key] = stateProxy;
  }, [key, stateProxy]);

  const setState: Dispatch<SetStateAction<T>> = (newValue) => {
    if (typeof newValue === 'function') {
      const valueFn = newValue as (prevState: T) => T;
      stateProxy.value = valueFn(stateRef.current);
    } else {
      stateProxy.value = newValue as T;
    }
  };

  return [state, setState];
}

export default useExposeState;
