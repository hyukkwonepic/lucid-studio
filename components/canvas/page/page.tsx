import GraphicObject from '../graphic-object/graphic-object';
import { useEditor } from '../../../hooks/useEditor';
import { usePage } from '../../../hooks/usePage';
import { useApp } from '@inlet/react-pixi';
import { useEffect } from 'react';
import { rectangleStateFamily } from '../../../hooks/useRectangle';
import { Tools } from '../../../enums';

const Page = () => {
  const editor = useEditor();
  const page = usePage(editor.selectedPage);

  const pixiApp = useApp();

  useEffect(() => {
    const handlePointerup = (e) => {
      if (editor.selectedTool === Tools.rectangle) {
        const { x, y } = e.data.global;
        page.addChild(
          rectangleStateFamily({
            x: Math.round(x),
            y: Math.round(y),
            width: 100,
            height: 100,
            angle: 0,
            fill: 0x3eb489,
          }),
        );
        return;
      }
    };
    pixiApp.renderer.plugins.interaction.on('pointerup', handlePointerup);

    return () => {
      pixiApp.renderer.plugins.interaction.off('pointerup', handlePointerup);
    };
  }, [editor.selectedTool, page, pixiApp]);

  return (
    <>
      {page.children.map((graphicObject) => {
        return <GraphicObject key={graphicObject.key} graphicObjectState={graphicObject} />;
      })}
    </>
  );
};

export default Page;
