import { FC } from 'react';
import { RectangleState } from '../../../hooks/useRectangle';
import { useRecoilValue, RecoilState } from '../../../services/recoil-unstable';
import Rectangle from '../rectangle/rectangle';
import { GraphicObjectState } from '../../../recoil/atoms';

const GraphicObject: FC<{
  graphicObjectState: RecoilState<GraphicObjectState>;
}> = ({ graphicObjectState }) => {
  const { type } = useRecoilValue(graphicObjectState);
  if (type === 'rectangle') {
    return <Rectangle rectangleState={graphicObjectState as RecoilState<RectangleState>} />;
  }
  return <div></div>;
};

export default GraphicObject;
