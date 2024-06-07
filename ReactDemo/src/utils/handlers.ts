import { AllHandlers } from '../types/global';

const isBrowser = typeof window !== 'undefined';

const getHandlers = (): AllHandlers => {
  if (isBrowser && window.webkit && window.webkit.messageHandlers) {
    return window.webkit.messageHandlers as AllHandlers;
  }
  return {} as AllHandlers;
};

export const handlers: AllHandlers = getHandlers();
