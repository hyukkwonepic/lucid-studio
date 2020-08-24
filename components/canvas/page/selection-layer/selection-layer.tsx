import React, { FC } from 'react';
import { useEditor } from '../../../../hooks/useEditor';
import { usePage } from '../../../../hooks/usePage';
import RectangleSelectionBox from './rectangle-selection-box/rectangle-selection-box';
import { useRecoilValue, RecoilState } from '../../../../services/recoil-unstable';
import { RectangleState } from '../../../../hooks/useRectangle';
import { GraphicObjectState } from '../../../../recoil/atoms';

const GraphicObjectSelectionBox: FC<{ graphicObjectState: RecoilState<GraphicObjectState> }> = ({
  graphicObjectState,
}) => {
  const { type } = useRecoilValue(graphicObjectState);
  if (type === 'rectangle') {
    return <RectangleSelectionBox rectangleState={graphicObjectState as RecoilState<RectangleState>} />;
  }
  return null;
};

const SelectionLayer = () => {
  const editor = useEditor();
  const page = usePage(editor.selectedPage);
  return (
    <>
      {page.selectedGraphicObjects.map((graphicObject) => (
        <GraphicObjectSelectionBox key={graphicObject.key} graphicObjectState={graphicObject} />
      ))}
    </>
  );
};

export default SelectionLayer;
