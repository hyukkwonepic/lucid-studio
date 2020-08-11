import { FC } from 'react';
import { GraphicObject as GraphicObjectType } from '../../../recoil/atoms';
import { useRecoilValue, RecoilState } from '../../../services/recoil-unstable';
import { RectangleState } from '../../../hooks/useRectangle';
import Rectangle from '../rectangle/rectangle';

type GraphicsObjectProps = {
  graphicObjectState: RecoilState<GraphicObjectType>;
};

const GraphicObject: FC<GraphicsObjectProps> = ({ graphicObjectState }) => {
  const graphicObject = useRecoilValue(graphicObjectState);
  if (graphicObject.type === 'rectangle') {
    const rectangleState = graphicObjectState as RecoilState<RectangleState>;
    return <Rectangle rectangleState={rectangleState} />;
  }

  return null;
};

export default GraphicObject;
