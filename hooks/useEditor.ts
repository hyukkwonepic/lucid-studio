import { useRecoilState, RecoilState, atom } from 'recoil';
import { PageState, pageStateFamily } from './usePage';
import { ObjectPanelViews } from '../enums';
import { nanoid } from 'nanoid';

type CanvasState = {
  width: number | undefined;
  height: number | undefined;
};

export type EditorState = {
  pages: RecoilState<PageState>[];
  selectedPage: RecoilState<PageState> | undefined;
  selectedObjectPanelView: ObjectPanelViews;
  canvas: CanvasState;
};

export type Editor = EditorState & {
  addPage: (pageState: RecoilState<PageState>) => void;
  removePage: (pageState: RecoilState<PageState>) => void;
  removeSelectedPage: () => void;
  selectPage: (pageState: RecoilState<PageState>) => void;
  selectObjectPanelView: (view: ObjectPanelViews) => void;
  setCanvas: (state: CanvasState) => void;
};

const defaultPageState = pageStateFamily({ id: nanoid(), name: 'Main page' });

export const editorState = atom<EditorState>({
  key: 'editor',
  default: {
    pages: [defaultPageState],
    selectedPage: defaultPageState,
    selectedObjectPanelView: ObjectPanelViews.layers,
    canvas: {
      width: undefined,
      height: undefined,
    },
  },
});

export const useEditor = (): Editor => {
  const [editor, setEditor] = useRecoilState(editorState);

  const addPage = (pageState: RecoilState<PageState>) => {
    setEditor((editor) => ({
      ...editor,
      pages: [...editor.pages, pageState],
      selectedPage: pageState,
    }));
  };

  const removePage = (pageState: RecoilState<PageState>) => {
    const newPages = editor.pages.filter((page) => {
      return page !== pageState;
    });

    setEditor((editor) => ({
      ...editor,
      pages: newPages,
    }));
  };

  const removeSelectedPage = () => {
    if (editor.pages.length === 1) {
      return;
    }

    const newPages = editor.pages.filter((page) => {
      return page !== editor.selectedPage;
    });

    setEditor((editor) => ({
      ...editor,
      pages: newPages,
      selectedPage: newPages[0],
    }));
  };

  const selectPage = (pageState: RecoilState<PageState>) => {
    setEditor((editor) => ({
      ...editor,
      selectedPage: pageState,
    }));
  };

  const selectObjectPanelView = (view: ObjectPanelViews) => {
    setEditor((editor) => ({
      ...editor,
      selectedObjectPanelView: view,
    }));
  };

  const setCanvas = (state: CanvasState) => {
    setEditor((editor) => ({
      ...editor,
      canvas: state,
    }));
  };

  return {
    ...editor,
    addPage,
    removePage,
    removeSelectedPage,
    selectPage,
    selectObjectPanelView,
    setCanvas,
  };
};
