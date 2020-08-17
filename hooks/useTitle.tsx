import { atom, useRecoilState } from '../services/recoil-unstable';

type TitleState = {
  value: string;
};

export type Title = TitleState & {
  setValue: (value: string) => void;
};

export const titleState = atom<TitleState>({
  key: 'title',
  default: {
    value: 'Untitled',
  },
});

export const useTitle = (): Title => {
  const [title, setTitle] = useRecoilState(titleState);

  const setValue = (value: string) => {
    setTitle((title) => ({
      ...title,
      value,
    }));
  };

  return {
    ...title,
    setValue,
  };
};
