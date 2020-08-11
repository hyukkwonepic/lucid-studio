import { useRecoilState, RecoilState, atom } from '../services/recoil-unstable';
import { PageState, pageStateFamily } from './usePage';
import { Tools, ObjectPanelViews } from '../enums';
import { nanoid } from 'nanoid';

type CanvasState = {
  width: number | undefined;
  height: number | undefined;
};

export type EditorState = {
  title: string;
  pages: RecoilState<PageState>[];
  selectedPage: RecoilState<PageState> | undefined;
  selectedTool: typeof Tools[keyof typeof Tools]; // REF: https://stackoverflow.com/a/52396706
  selectedObjectPanelView: ObjectPanelViews;
  canvas: CanvasState;
};

export type Editor = EditorState & {
  setTitle: (string) => void;
  addPage: (pageState: RecoilState<PageState>) => void;
  removePage: (pageState: RecoilState<PageState>) => void;
  removeSelectedPage: () => void;
  selectPage: (pageState: RecoilState<PageState>) => void;
  selectTool: (tool: Tools) => void;
  selectObjectPanelView: (view: ObjectPanelViews) => void;
  setCanvas: (state: CanvasState) => void;
};

const defaultPageState = pageStateFamily({ id: nanoid(), name: 'Main page' });

export const editorState = atom<EditorState>({
  key: 'editor',
  default: {
    title: 'Untitled',
    pages: [defaultPageState],
    selectedPage: defaultPageState,
    selectedTool: Tools.move,
    selectedObjectPanelView: ObjectPanelViews.layers,
    canvas: {
      width: undefined,
      height: undefined,
    },
  },
});

export const useEditor = (): Editor => {
  const [editor, setEditor] = useRecoilState(editorState);

  const setTitle = (title) => {
    setEditor({
      ...editor,
      title,
    });
  };

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

    setEditor({
      ...editor,
      pages: newPages,
    });
  };

  const removeSelectedPage = () => {
    if (editor.pages.length === 1) {
      return;
    }

    const newPages = editor.pages.filter((page) => {
      return page !== editor.selectedPage;
    });

    setEditor({
      ...editor,
      pages: newPages,
      selectedPage: newPages[0],
    });
  };

  const selectPage = (pageState: RecoilState<PageState>) => {
    setEditor({
      ...editor,
      selectedPage: pageState,
    });
  };

  const selectTool = (tool: Tools) => {
    setEditor({
      ...editor,
      selectedTool: tool,
    });
  };

  const selectObjectPanelView = (view: ObjectPanelViews) => {
    setEditor({
      ...editor,
      selectedObjectPanelView: view,
    });
  };

  const setCanvas = (state: CanvasState) => {
    setEditor({
      ...editor,
      canvas: state,
    });
  };

  return {
    ...editor,
    setTitle,
    addPage,
    removePage,
    removeSelectedPage,
    selectPage,
    selectTool,
    selectObjectPanelView,
    setCanvas,
  };
};
