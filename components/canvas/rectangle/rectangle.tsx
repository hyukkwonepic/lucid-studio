import * as PIXI from 'pixi.js';
import { useRectangle, RectangleState, Rectangle as RectangleType } from '../../../hooks/useRectangle';
import { useEditor, Editor } from '../../../hooks/useEditor';
import { RecoilState } from '../../../services/recoil-unstable';
import { PixiComponent } from '@inlet/react-pixi';
import { Tools } from '../../../enums';
import { FC } from 'react';

type RectangleGraphicsProps = {
  editor: Editor;
  rectangle: RectangleType;
};

type RectangleGraphics = PIXI.Graphics & {
  props: RectangleGraphicsProps;
};

const RectangleGraphics = PixiComponent<RectangleGraphicsProps, RectangleGraphics>('Rectangle', {
  create: (props) => {
    const graphics = new PIXI.Graphics() as PIXI.Graphics & { props: any };
    graphics.interactive = true;
    graphics.props = props;
    return graphics;
  },
  didMount: (graphics) => {
    let isDown = false;
    let xOffset = 0;
    let yOffset = 0;

    graphics.on('pointerdown', (e) => {
      if (graphics.props.editor.selectedTool === Tools.move) {
        isDown = true;
        const { x, y } = e.data.global;
        const { rectangle } = graphics.props;
        const roundedX = Math.round(x);
        const roundedY = Math.round(y);
        xOffset = roundedX - rectangle.x;
        yOffset = roundedY - rectangle.y;
        return;
      }
    });

    graphics.on('pointermove', (e) => {
      if (graphics.props.editor.selectedTool === Tools.move) {
        if (isDown) {
          const { x, y } = e.data.global;
          const roundedX = Math.round(x);
          const roundedY = Math.round(y);
          graphics.props.rectangle.moveTo(roundedX - xOffset, roundedY - yOffset);
        }
        return;
      }
    });

    graphics.on('pointerup', (e) => {
      if (graphics.props.editor.selectedTool === Tools.move) {
        isDown = false;
        xOffset = 0;
        yOffset = 0;
      }
    });
  },
  applyProps: (graphics, oldProps, newProps) => {
    graphics.props = newProps;

    const { rectangle } = newProps;
    graphics.clear();
    graphics.beginFill(rectangle.fill);
    graphics.drawRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    graphics.endFill();
    graphics.name = rectangle.id;
  },
});

const Rectangle: FC<{
  rectangleState: RecoilState<RectangleState>;
}> = ({ rectangleState }) => {
  const editor = useEditor();
  const rectangle = useRectangle(rectangleState);

  return <RectangleGraphics editor={editor} rectangle={rectangle} />;
};

export default Rectangle;
