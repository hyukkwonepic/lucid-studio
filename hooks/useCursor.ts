import { atom, useRecoilState } from '../services/recoil-unstable';

type CursorState = {
  type: string;
};

export type Cursor = CursorState & {
  setType: (type: string) => void;
};

export const cursorState = atom<CursorState>({
  key: 'cursor',
  default: {
    type: 'default',
  },
});

export const useCursor = (): Cursor => {
  const [cursor, setCursor] = useRecoilState(cursorState);

  const setType = (type: string) => {
    setCursor((cursor) => ({
      ...cursor,
      type,
    }));
  };

  return {
    ...cursor,
    setType,
  };
};
