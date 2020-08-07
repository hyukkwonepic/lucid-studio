import { atom, atomFamily } from 'recoil';
import { Tools, ObjectPanelViews } from '../enums';
import { PageState, PageListState } from '../types';

export const fileNameState = atom({
  key: 'fileName',
  default: 'Untitled',
});

// REF: https://stackoverflow.com/a/52396706
export const toolState = atom<typeof Tools[keyof typeof Tools]>({
  key: 'tool',
  default: Tools.move,
});

export const objectPanelViewState = atom<typeof ObjectPanelViews[keyof typeof ObjectPanelViews]>({
  key: 'objectPanelView',
  default: ObjectPanelViews.layers,
});

export const pageListState = atom<PageListState>({
  key: 'pageList',
  default: {
    items: [
      {
        id: 1,
        name: 'Page 1',
      },
    ],
    selectedItemId: 1,
  },
});

export const pageStateFamily = atomFamily<PageState, PageState>({
  key: 'page',
  default: ({ id, name }) => {
    return {
      id,
      name,
    };
  },
});
