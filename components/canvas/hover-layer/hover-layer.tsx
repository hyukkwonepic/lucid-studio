import React, { FC } from 'react';
import { useEditor } from '../../../hooks/useEditor';
import { usePage } from '../../../hooks/usePage';
import { useRecoilValue, RecoilState } from '../../../services/recoil-unstable';
import { GraphicObjectState } from '../../../recoil/atoms';
import RectangleHoverBox from './rectangle-hover-box/rectangle-hover-box';
import { RectangleState } from '../../../hooks/useRectangle';

const GraphicObjectHoverBox: FC<{ graphicObjectState: RecoilState<GraphicObjectState> }> = ({ graphicObjectState }) => {
  const { type } = useRecoilValue(graphicObjectState);
  if (type === 'rectangle') {
    return <RectangleHoverBox rectangleState={graphicObjectState as RecoilState<RectangleState>} />;
  }
  return null;
};

const HoverLayer = () => {
  const editor = useEditor();
  const page = usePage(editor.selectedPage);
  return <>{page.hoveredGraphicObject && <GraphicObjectHoverBox graphicObjectState={page.hoveredGraphicObject} />}</>;
};

export default HoverLayer;
