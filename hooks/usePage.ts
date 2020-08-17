import { useRecoilState, RecoilState, atomFamily } from '../services/recoil-unstable';
import { GraphicObjectState } from '../recoil/atoms';

export type PageState = {
  id: string;
  name: string;
  children: RecoilState<GraphicObjectState>[];
  selectedGraphicObjects: RecoilState<GraphicObjectState>[];
  hoveredGraphicObject: RecoilState<GraphicObjectState> | undefined;
};

export type Page = PageState & {
  addChild: (child: RecoilState<GraphicObjectState>) => void;
  selectGraphicObject: (graphicObject: RecoilState<GraphicObjectState>) => void;
  unselectGraphicObject: (graphicObject: RecoilState<GraphicObjectState>) => void;
  resetSelectedGraphicObject: () => void;
  hoverGraphicObject: (graphicObject: RecoilState<GraphicObjectState>) => void;
  hoverOutGraphicObject: () => void;
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

  const hoverOutGraphicObject = () => {
    setPage((page) => ({
      ...page,
      hoveredGraphicObject: undefined,
    }));
  };

  return {
    ...page,
    addChild,
    selectGraphicObject,
    unselectGraphicObject,
    resetSelectedGraphicObject,
    hoverGraphicObject,
    hoverOutGraphicObject,
  };
};
