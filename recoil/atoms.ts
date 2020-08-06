import { atom } from 'recoil';
import { Tools, ObjectPanelViews } from '../enums';

export const fileNameState = atom({
  key: 'fileNameState',
  default: 'Untitled',
});

// REF: https://stackoverflow.com/a/52396706
export const toolState = atom<typeof Tools[keyof typeof Tools]>({
  key: 'toolState',
  default: Tools.move,
});
