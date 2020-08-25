import React, { FC } from 'react';
import { useEditor } from '../../../hooks/useEditor';
import { usePage } from '../../../hooks/usePage';
import RectangleSelectionBox from './rectangle-selection-box/rectangle-selection-box';
import { RectangleState } from '../../../hooks/useRectangle';
import { GraphicObjectState } from '../../../recoil/atoms';
import { RecoilState, useRecoilValue } from 'recoil';

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

  if (page.isAnyGraphicObjectMoving) {
    return null;
  }

  return (
    <>
      {page.selectedGraphicObjects.map((graphicObject) => (
        <GraphicObjectSelectionBox key={graphicObject.key} graphicObjectState={graphicObject} />
      ))}
    </>
  );
};

export default SelectionLayer;
