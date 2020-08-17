import * as PIXI from 'pixi.js';
import { useEditor } from '../../../hooks/useEditor';
import { usePage } from '../../../hooks/usePage';
import { useRecoilValue } from '../../../services/recoil-unstable';
import { GraphicObjectState, dummyState } from '../../../recoil/atoms';
import { PixiComponent } from '@inlet/react-pixi';
import { FC } from 'react';

const HoverBoxGraphics = PixiComponent<any, any>('HoverBox', {
  create: ({ children, ...rest }) => {
    const graphics = new PIXI.Graphics();
    Object.assign(graphics, rest);
    graphics.interactive = true;
    return graphics;
  },
  applyProps: (graphics, oldProps, { children, ...rest }) => {
    graphics = Object.assign(graphics, rest);

    const { hoveredGraphicObject } = rest;

    graphics.clear();

    if (hoveredGraphicObject.type === 'rectangle') {
      const { x, y, width, height, angle } = hoveredGraphicObject;
      graphics
        .lineStyle(2, 0x3eb489, 1, 1)
        .moveTo(x - 2, y)
        .lineTo(x + width, y)
        .lineTo(x + width, y + height)
        .lineTo(x, y + height)
        .lineTo(x, y - 2);
    }
  },
});

const HoverBox: FC<any> = (props) => {
  const hoveredGraphicObject = useRecoilValue(props.hoveredGraphicObject);

  return <HoverBoxGraphics hoveredGraphicObject={hoveredGraphicObject} />;
};

export default HoverBox;
