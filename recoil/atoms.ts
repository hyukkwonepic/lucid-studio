import { atomFamily, RecoilState, atom } from '../services/recoil-unstable';
import { nanoid } from 'nanoid';
import { RectangleState, Rectangle } from '../hooks/useRectangle';

export const undefinedState = atom<undefined>({
  key: 'undefined',
  default: undefined,
});

// 2. GraphicObject

export type GraphicObjectState = GroupState | ArtboardState | RectangleState;
export type GraphicsObject = Rectangle;

// Group
export type GroupState = {
  type: 'group';
  id: string;
  name: string;
  children: RecoilState<GraphicObjectState>[];
};

export const groupStateFamily = atomFamily<GroupState, any>({
  key: 'group',
  default: (param: GroupState) => param,
});

// Artboard
export type ArtboardState = {
  type: 'artboard';
  id: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  children: RecoilState<GraphicObjectState>[];
};

export type ArtboardStateFamilyParam = Omit<ArtboardState, 'type' | 'id' | 'name' | 'children'>;

export const artboardStateFamily = atomFamily<ArtboardState, ArtboardStateFamilyParam>({
  key: 'artboard',
  default: (param: ArtboardStateFamilyParam) => ({
    ...param,
    type: 'artboard',
    id: nanoid(),
    name: 'Artboard',
    children: [],
  }),
});
