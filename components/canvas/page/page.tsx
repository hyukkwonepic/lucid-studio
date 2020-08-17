import * as PIXI from 'pixi.js';
import GraphicObject from '../graphic-object/graphic-object';
import { useEditor, Editor } from '../../../hooks/useEditor';
import { usePage, Page as PageType } from '../../../hooks/usePage';
import { useApp, PixiComponent, Graphics } from '@inlet/react-pixi';
import { useEffect } from 'react';
import { rectangleStateFamily } from '../../../hooks/useRectangle';
import { Tools } from '../../../enums';
import HoverBox from '../hover-box/hover-box';
import SelectBox from '../select-box/select-box';
import { useTool, Tool } from '../../../hooks/useTool';

type PageGraphicsProps = {
  editor: Editor;
  tool: Tool;
  page: PageType;
  children?: any[];
};

type PageGraphics = PIXI.Graphics & PageGraphicsProps;

const PageGraphics = PixiComponent<PageGraphicsProps, PageGraphics>('Page', {
  create: ({ children, ...rest }) => {
    const graphics = new PIXI.Graphics();
    Object.assign(graphics, rest);
    graphics.interactive = true;
    return graphics as PageGraphics;
  },
  didMount: (graphics) => {
    const { tool } = graphics;
    graphics.on('pointerdown', (e) => {
      if (tool.type === Tools.move) {
        graphics.page.resetSelectedGraphicObject();
      }
    });
  },
  applyProps: (graphics, oldProps, { children, ...rest }) => {
    graphics = Object.assign(graphics, rest);
    const { editor } = graphics;

    graphics.clear();

    graphics.moveTo(0, 0);
    graphics.beginFill(0xe5e5e5);
    graphics.drawRect(0, 0, editor.canvas.width, editor.canvas.height);
    graphics.endFill();
  },
});

const Page = () => {
  const editor = useEditor();
  const tool = useTool();
  const page = usePage(editor.selectedPage);

  const pixiApp = useApp();

  useEffect(() => {
    const handlePointerUp = (e) => {
      if (tool.type === Tools.rectangle) {
        const { x, y } = e.data.global;
        const rectangleState = rectangleStateFamily({
          x: Math.round(x) - 50,
          y: Math.round(y) - 50,
          width: 100,
          height: 100,
          angle: 0,
          fill: 0xffffff,
        });
        page.addChild(rectangleState);
        page.resetSelectedGraphicObject();
        page.selectGraphicObject(rectangleState);
        tool.setType(Tools.move);
        return;
      }
    };

    pixiApp.renderer.plugins.interaction.on('pointerup', handlePointerUp);

    return () => {
      pixiApp.renderer.plugins.interaction.off('pointerup', handlePointerUp);
    };
  }, [tool, page, pixiApp]);

  return (
    <PageGraphics editor={editor} tool={tool} page={page}>
      {page.children.map((graphicObject) => {
        return <GraphicObject key={graphicObject.key} graphicObjectState={graphicObject} />;
      })}
      {page.hoveredGraphicObject && <HoverBox hoveredGraphicObject={page.hoveredGraphicObject} />}
      {page.selectedGraphicObjects.map((selectedGraphicObject) => {
        return <SelectBox key={selectedGraphicObject.key} selectedGraphicObject={selectedGraphicObject} />;
      })}
    </PageGraphics>
  );
};

export default Page;
