import { MutableRefObject, useEffect, useRef } from 'react';
import { eventNameFactory } from '../nui/nuiUtils';

interface IOptions {
  capture?: boolean;
  passive?: boolean;
  once?: boolean;
}
/**
 * A hook that manage events listeners for receiving data from the NUI
 * @param app The app name in which this hoook is used
 * @param method The specific `method` field that should be listened for.
 * @param handler The callback function that will handle data relayed by this hook
 * @param options Any options to pass to the addEventListener
 **/

const defaultOptions = {};

export const useNuiEvent = (
  app: string,
  method: string,
  handler: Function,
  options: IOptions = defaultOptions,
) => {
  const savedHandler: MutableRefObject<any> = useRef();
  const { capture, passive, once } = options;

  // When handler value changes set mutable ref to handler val
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  // Will run every rerender
  useEffect(() => {
    const eventName = eventNameFactory(app, method);
    const eventListener = (event: any) => {
      if (savedHandler.current && savedHandler.current.call) {
        const { data } = event;
        console.log(eventName, data);
        savedHandler.current(data);
      }
    };

    const opts = { capture, passive, once };
    window.addEventListener(eventName, eventListener, opts);
    // Remove Event Listener on component cleanup
    return () => window.removeEventListener(eventName, eventListener, opts);
  }, [app, method, capture, passive, once]);
};
