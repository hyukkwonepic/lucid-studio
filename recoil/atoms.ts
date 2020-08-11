import { atomFamily, RecoilState } from '../services/recoil-unstable';
import { nanoid } from 'nanoid';

// 2. GraphicObject

export type GraphicObject = GroupState | ArtboardState | RectangleState;

// Group
export type GroupState = {
  type: 'group';
  id: string;
  name: string;
  children: RecoilState<GraphicObject>[];
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
  children: RecoilState<GraphicObject>[];
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
