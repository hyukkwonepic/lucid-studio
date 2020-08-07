import { useRecoilState } from 'recoil';
import { pageStateFamily } from '../recoil/atoms';
import { PageState } from '../types';

export const usePage = (item: PageState) => {
  const [page, setPage] = useRecoilState(pageStateFamily(item));

  return {
    ...page,
  };
};
