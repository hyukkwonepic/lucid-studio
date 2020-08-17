import * as PIXI from 'pixi.js';
import { useRectangle, RectangleState, Rectangle as RectangleType } from '../../../hooks/useRectangle';
import { useEditor, Editor } from '../../../hooks/useEditor';
import { RecoilState } from '../../../services/recoil-unstable';
import { PixiComponent, Graphics } from '@inlet/react-pixi';
import { Tools } from '../../../enums';
import { FC } from 'react';
import { usePage, Page } from '../../../hooks/usePage';
import { useTool, Tool } from '../../../hooks/useTool';

type RectangleGraphicsProps = {
  tool: Tool;
  page: Page;
  rectangleState: RecoilState<RectangleState>;
  rectangle: RectangleType;
  children?: any[];
};

type RectangleGraphics = PIXI.Graphics & RectangleGraphicsProps;

const RectangleGraphics = PixiComponent<RectangleGraphicsProps, RectangleGraphics>('Rectangle', {
  create: ({ children, ...rest }) => {
    const graphics = new PIXI.Graphics();
    Object.assign(graphics, rest);
    graphics.interactive = true;
    return graphics as RectangleGraphics;
  },
  didMount: (graphics) => {
    let isDown = false;
    let xOffset = 0;
    let yOffset = 0;

    graphics.on('pointerdown', (e) => {
      const { tool, page, rectangle, rectangleState } = graphics;
      if (tool.type === Tools.move) {
        e.stopPropagation();
        isDown = true;
        page.resetSelectedGraphicObject();
        page.selectGraphicObject(graphics.rectangleState);
        const { x, y } = e.data.global;
        const { rectangle } = graphics;
        const roundedX = Math.round(x);
        const roundedY = Math.round(y);
        xOffset = roundedX - rectangle.x;
        yOffset = roundedY - rectangle.y;
        return;
      }
    });

    graphics.on('pointermove', (e) => {
      const { tool, page, rectangle, rectangleState } = graphics;
      if (tool.type === Tools.move) {
        if (isDown) {
          const { x, y } = e.data.global;
          const roundedX = Math.round(x);
          const roundedY = Math.round(y);
          graphics.rectangle.moveTo(roundedX - xOffset, roundedY - yOffset);
        }
        return;
      }
    });

    graphics.on('pointerup', (e) => {
      const { tool, page, rectangle, rectangleState } = graphics;
      if (tool.type === Tools.move) {
        isDown = false;
        xOffset = 0;
        yOffset = 0;
      }
    });

    graphics.on('pointerover', (e) => {
      const { tool, page, rectangle, rectangleState } = graphics;
      if (tool.type === Tools.move) {
        page.hoverGraphicObject(graphics.rectangleState);
        return;
      }
    });

    graphics.on('pointerout', () => {
      const { tool, page, rectangle, rectangleState } = graphics;
      if (tool.type === Tools.move) {
        page.hoverOutGraphicObject();
        return;
      }
    });
  },
  applyProps: (graphics, oldProps, newProps) => {
    graphics = Object.assign(graphics, newProps);

    const { rectangle } = newProps;
    graphics.clear();
    graphics.removeChildren();
    graphics.beginFill(rectangle.fill);
    graphics.drawRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    graphics.endFill();
    graphics.name = rectangle.id;
  },
});

const Rectangle: FC<{
  rectangleState: RecoilState<RectangleState>;
}> = ({ rectangleState }) => {
  const tool = useTool();
  const editor = useEditor();
  const page = usePage(editor.selectedPage);
  const rectangle = useRectangle(rectangleState);

  return <RectangleGraphics tool={tool} page={page} rectangleState={rectangleState} rectangle={rectangle} />;
};

export default Rectangle;
