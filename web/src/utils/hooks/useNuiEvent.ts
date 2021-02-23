import { MutableRefObject, useEffect, useRef } from 'react';

export const useNuiEvent = (app: string, method: string, handler: Function) => {
  const savedHandler: MutableRefObject<any> = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventName = `${app}:${method}`;
    const eventListener = (event: any) => {
      const { data } = event;
      console.log(`NUI EVENT: ${eventName} | DATA: ${event.data}`);
      savedHandler.current(data);
    };

    window.addEventListener(eventName, eventListener);

    return () => window.removeEventListener(eventName, eventListener);
  }, [app, method]);
};
