import { useLayoutEffect, useRef, useState } from 'react';

export const useRunAfterUpdate = (): (callback: () => void) => void => {
  const afterPaintRef = useRef<() => void | undefined>();
  const [counter, setCounter] = useState(0);

  useLayoutEffect(() => {
    afterPaintRef.current?.();
  }, [counter]);

  return (callback: () => void) => {
    afterPaintRef.current = callback;
    setCounter((prevState) => prevState + 1);
  };
};
