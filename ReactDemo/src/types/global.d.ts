import { ComponentHandlers } from './componentHandlers';

export {};

export type AllHandlers = ComponentHandlers;

declare global {
  interface Window {
    webkit: {
      messageHandlers: AllHandlers;
    };
  }
}
