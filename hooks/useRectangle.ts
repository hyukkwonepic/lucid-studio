import { atomFamily, RecoilState, useRecoilState } from '../services/recoil-unstable';
import { nanoid } from 'nanoid';

// Rectangle
export type RectangleState = {
  type: 'rectangle';
  id: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  angle: number;
  fill: number;
};

export type Rectangle = RectangleState & {
  moveTo: (x: number, y: number) => void;
  resize: (width: number, height: number) => void;
};

export type RectangleStateFamilyParam = Omit<RectangleState, 'type' | 'id' | 'name'>;

export const rectangleStateFamily = atomFamily<RectangleState, RectangleStateFamilyParam>({
  key: 'rectangle',
  default: (param) => ({
    ...param,
    type: 'rectangle',
    id: nanoid(),
    name: 'Rectangle',
  }),
});

export const useRectangle = (rectangleState: RecoilState<RectangleState>): Rectangle => {
  const [rectangle, setRectangle] = useRecoilState(rectangleState);

  const moveTo = (x: number, y: number) => {
    setRectangle((rectangle) => ({
      ...rectangle,
      x,
      y,
    }));
  };

  const resize = (width: number, height: number) => {
    setRectangle((rectangle) => ({
      ...rectangle,
      width,
      height,
    }));
  };

  return {
    ...rectangle,
    moveTo,
    resize,
  };
};
