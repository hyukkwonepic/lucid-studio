import * as PIXI from 'pixi.js';
import { useRecoilValue, RecoilState } from '../../../services/recoil-unstable';
import { PixiComponent } from '@inlet/react-pixi';
import { FC } from 'react';
import { GraphicObjectState, GraphicsObject, dummyState } from '../../../recoil/atoms';
import { useRectangle, RectangleState } from '../../../hooks/useRectangle';

type BoxGraphicsProps = {
  selectedGraphicObject: GraphicObjectState;
  children?: any[];
};

type BoxGraphics = PIXI.Graphics & BoxGraphicsProps;

const BoxGraphics = PixiComponent<BoxGraphicsProps, BoxGraphics>('Box', {
  create: ({ children, ...rest }) => {
    const graphics = new PIXI.Graphics();
    Object.assign(graphics, rest);
    graphics.interactive = true;
    return graphics as BoxGraphics;
  },

  applyProps: (graphics, oldProps, { children, ...rest }) => {
    graphics = Object.assign(graphics, rest);
    const { selectedGraphicObject } = rest;

    if (selectedGraphicObject.type === 'rectangle') {
      const { x, y, width, height } = selectedGraphicObject;
      graphics.clear();
      graphics
        .lineStyle(2, 0x3eb489, 1, 1)
        .moveTo(x, y)
        .lineTo(x + width, y)
        .lineTo(x + width, y + height)
        .lineTo(x, y + height)
        .lineTo(x, y - 2);
    }
  },
});

// LeftTopSizeHandle
type LeftTopSizeHandleGraphicsProps = {
  selectedGraphicObject: GraphicsObject;
  children?: any[];
};

type LeftTopSizeHandleGraphics = PIXI.Graphics & LeftTopSizeHandleGraphicsProps;

const LeftTopSizeHandleGraphics = PixiComponent<LeftTopSizeHandleGraphicsProps, LeftTopSizeHandleGraphics>(
  'LeftTopSizeHandle',
  {
    create: ({ children, ...rest }) => {
      const graphics = new PIXI.Graphics() as LeftTopSizeHandleGraphics;
      Object.assign(graphics, rest);
      graphics.interactive = true;
      return graphics;
    },

    didMount: (graphics) => {
      let isDown = false;
      let originalX = 0;
      let originalY = 0;
      let originalWidth = 0;
      let originalHeight = 0;

      graphics.on('pointerdown', (e: PIXI.InteractionEvent) => {
        e.stopPropagation();
        const { selectedGraphicObject } = graphics;
        if (selectedGraphicObject.type === 'rectangle') {
          const { x, y, width, height } = selectedGraphicObject;
          isDown = true;
          originalX = x;
          originalY = y;
          originalWidth = width;
          originalHeight = height;
        }
      });

      graphics.on('pointermove', (e: PIXI.InteractionEvent) => {
        if (isDown) {
          const { selectedGraphicObject } = graphics;
          if (selectedGraphicObject.type === 'rectangle') {
            const rectangle = selectedGraphicObject;
            const { x, y } = e.data.global;
            const roundedX = Math.round(x);
            const roundedY = Math.round(y);
            rectangle.moveTo(roundedX, roundedY);
            const offsetX = originalX - roundedX;
            const offsetY = originalY - roundedY;
            rectangle.resize(originalWidth + offsetX, originalHeight + offsetY);
          }
        }
      });

      graphics.on('pointerup', (e: PIXI.InteractionEvent) => {
        e.stopPropagation();
        isDown = false;
        originalX = 0;
        originalY = 0;
        originalWidth = 0;
        originalHeight = 0;
      });
    },
    applyProps: (graphics, oldProps, { children, ...rest }) => {
      graphics = Object.assign(graphics, rest);
      const { selectedGraphicObject } = graphics;

      if (selectedGraphicObject.type === 'rectangle') {
        graphics
          .clear()
          .moveTo(selectedGraphicObject.x, selectedGraphicObject.y)
          .lineStyle(2, 0x3eb489, 1, 1)
          .beginFill(0xffffff)
          .drawCircle(selectedGraphicObject.x, selectedGraphicObject.y, 4)
          .endFill();
      }
    },
  },
);

// SelectBox
const SelectBoxGraphics = PixiComponent<any, any>('SelectBox', {
  create: ({ children, ...rest }) => {
    const graphics = new PIXI.Graphics();
    Object.assign(graphics, rest);
    graphics.interactive = true;
    return graphics;
  },
  applyProps: (graphics, oldProps, { children, ...rest }) => {
    graphics = Object.assign(graphics, rest);
    graphics.clear();
  },
});

type SelectBoxProps = {
  selectedGraphicObject: RecoilState<GraphicObjectState>;
};

const SelectBox: FC<SelectBoxProps> = (props) => {
  const selectedGraphicObject = useRecoilValue(props.selectedGraphicObject);
  const rectangle = useRectangle(
    selectedGraphicObject.type === 'rectangle'
      ? (props.selectedGraphicObject as RecoilState<RectangleState>)
      : dummyState,
  );

  let targetGraphicObject = null;
  if (selectedGraphicObject.type === 'rectangle') {
    targetGraphicObject = rectangle;
  }

  // let sizeHandles = null;
  // if (selectedGraphicObject.type === 'rectangle') {
  //   const { x, y, width, height } = selectedGraphicObject;
  //   sizeHandles = (
  //     <>
  //       <SizeHandleGraphics x={x - 1} y={y - 1} />
  //       {/* <SizeHandleGraphics x={x + Math.round(width / 2)} y={y - 1} /> */}
  //       <SizeHandleGraphics x={x + 1 + width} y={y - 1} />
  //       {/* <SizeHandleGraphics x={x + 1 + width} y={y + Math.round(height / 2)} /> */}
  //       <SizeHandleGraphics x={x + 1 + width} y={y + 1 + height} />
  //       {/* <SizeHandleGraphics x={x + Math.round(width / 2)} y={y + height + 1} /> */}
  //       <SizeHandleGraphics x={x - 1} y={y + 1 + height} />
  //       {/* <SizeHandleGraphics x={x - 1} y={y + Math.round(height / 2)} /> */}
  //     </>
  //   );
  // }

  return (
    <SelectBoxGraphics>
      <BoxGraphics selectedGraphicObject={selectedGraphicObject} />
      <LeftTopSizeHandleGraphics selectedGraphicObject={targetGraphicObject} />
    </SelectBoxGraphics>
  );
};

export default SelectBox;
