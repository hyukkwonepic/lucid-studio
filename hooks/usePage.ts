import { useRecoilState, RecoilState, atomFamily } from '../services/recoil-unstable';
import { GraphicObject } from '../recoil/atoms';

export type PageState = {
  id: string;
  name: string;
  children: RecoilState<GraphicObject>[];
};

export type Page = PageState & {
  addChild: (child: RecoilState<GraphicObject>) => void;
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
  }),
});

export const usePage = (pageState: RecoilState<PageState>): Page => {
  const [page, setPage] = useRecoilState(pageState);

  const addChild = (child: RecoilState<GraphicObject>) => {
    setPage((page) => ({
      ...page,
      children: [...page.children, child],
    }));
  };

  return {
    ...page,
    addChild,
  };
};
