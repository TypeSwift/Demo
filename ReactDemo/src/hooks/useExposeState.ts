import {
  useState,
  useEffect,
  useMemo,
  useRef,
  Dispatch,
  SetStateAction,
} from 'react';

function useExposeState<T>(
  key: string
): [T | undefined, Dispatch<SetStateAction<T | undefined>>];
function useExposeState<T>(
  initialValue: T,
  key: string
): [T, Dispatch<SetStateAction<T>>];

function useExposeState<T>(...args: [string] | [T, string]) {
  let initialValue: T | undefined;
  let key: string;

  if (args.length === 1) {
    initialValue = undefined;
    key = args[0];
  } else {
    initialValue = args[0];
    key = args[1];
  }

  const [state, _setState] = useState<T | undefined>(initialValue);

  const stateRef = useRef(state);
  stateRef.current = state;

  const handler = useMemo(
    () => ({
      set: (obj: any, prop: string, value: T | undefined) => {
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

  const setState: Dispatch<SetStateAction<T | undefined>> = (newValue) => {
    if (typeof newValue === 'function') {
      const valueFn = newValue as (prevState: T | undefined) => T | undefined;
      stateProxy.value = valueFn(stateRef.current);
    } else {
      stateProxy.value = newValue;
    }
  };

  return [state, setState];
}

export default useExposeState;
