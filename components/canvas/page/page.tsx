import { FC, useRef, useEffect } from 'react';
import { useEditor } from '../../../hooks/useEditor';
import { usePage } from '../../../hooks/usePage';
import { Styled } from './page.styles';
import RectangleLayer from '../rectangle-layer/rectangle-layer';
import GraphicObject from '../graphic-object/graphic-object';
import SelectionLayer from './selection-layer/selection-layer';

const Page: FC = () => {
  const editor = useEditor();
  const page = usePage(editor.selectedPage);
  const pageRef = useRef(null);

  useEffect(() => {
    page.setRef(pageRef);
  }, []);

  const handleMouseDown = () => {
    page.resetSelectedGraphicObject();
  };

  return (
    <Styled.Page ref={pageRef} onMouseDown={handleMouseDown}>
      {page.children.map((graphicObject) => {
        return <GraphicObject key={graphicObject.key} graphicObjectState={graphicObject} />;
      })}
      <SelectionLayer />
      <RectangleLayer />
    </Styled.Page>
  );
};

export default Page;
