import { error, defaultModules, Stack } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import { defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});

defaults.delay = 3500;

const myStack = new Stack({
  dir1: 'down',
  dir2: 'right',
  firstpos1: 25,
  firstpos2: 25,
  push: 'top',
  maxStrategy: 'close',
});

const showMessage = () => {
  error({
    title: 'Images not found! Try again.',
    sticker: false,
    stack: myStack,
  });
};

export default showMessage;
