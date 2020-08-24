import { useRecoilState, RecoilState, atomFamily } from '../services/recoil-unstable';
import { GraphicObjectState } from '../recoil/atoms';
import { MutableRefObject } from 'react';

export type PageState = {
  id: string;
  name: string;
  children: RecoilState<GraphicObjectState>[];
  selectedGraphicObjects: RecoilState<GraphicObjectState>[];
  hoveredGraphicObject: RecoilState<GraphicObjectState> | undefined;
  ref: MutableRefObject<Element>;
};

export type Page = PageState & {
  addChild: (child: RecoilState<GraphicObjectState>) => void;
  selectSingleGraphicObject: (graphicObject: RecoilState<GraphicObjectState>) => void;
  selectGraphicObject: (graphicObject: RecoilState<GraphicObjectState>) => void;
  unselectGraphicObject: (graphicObject: RecoilState<GraphicObjectState>) => void;
  resetSelectedGraphicObject: () => void;
  hoverGraphicObject: (graphicObject: RecoilState<GraphicObjectState>) => void;
  hoverOffGraphicObject: () => void;
  setRef: (ref: MutableRefObject<Element>) => void;
};

export type PageStateFamilyParam = {
  id: string;
  name: string;
};

export const pageStateFamily = atomFamily<PageState, PageStateFamilyParam>({
  key: 'page',
  default: ({ id, name }) => ({
    id,
    name,
    children: [],
    selectedGraphicObjects: [],
    hoveredGraphicObject: undefined,
    ref: null,
  }),
});

export const usePage = (pageState: RecoilState<PageState>): Page => {
  const [page, setPage] = useRecoilState(pageState);

  const addChild = (child: RecoilState<GraphicObjectState>) => {
    setPage((page) => ({
      ...page,
      children: [...page.children, child],
    }));
  };

  const selectSingleGraphicObject = (graphicObject: RecoilState<GraphicObjectState>) => {
    setPage((page) => ({
      ...page,
      selectedGraphicObjects: [graphicObject],
    }));
  };

  const selectGraphicObject = (graphicObject: RecoilState<GraphicObjectState>) => {
    setPage((page) => ({
      ...page,
      selectedGraphicObjects: [...page.selectedGraphicObjects, graphicObject],
    }));
  };

  const unselectGraphicObject = (graphicObject: RecoilState<GraphicObjectState>) => {
    setPage((page) => ({
      ...page,
      selectedGraphicObjects: page.selectedGraphicObjects.filter((item) => item !== graphicObject),
    }));
  };

  const resetSelectedGraphicObject = () => {
    setPage((page) => ({
      ...page,
      selectedGraphicObjects: [],
    }));
  };

  const hoverGraphicObject = (graphicObject: RecoilState<GraphicObjectState>) => {
    setPage((page) => ({
      ...page,
      hoveredGraphicObject: graphicObject,
    }));
  };

  const hoverOffGraphicObject = () => {
    setPage((page) => ({
      ...page,
      hoveredGraphicObject: undefined,
    }));
  };

  const setRef = (ref: MutableRefObject<Element>) => {
    setPage((page) => ({
      ...page,
      ref,
    }));
  };

  return {
    ...page,
    addChild,
    selectSingleGraphicObject,
    selectGraphicObject,
    unselectGraphicObject,
    resetSelectedGraphicObject,
    hoverGraphicObject,
    hoverOffGraphicObject,
    setRef,
  };
};
