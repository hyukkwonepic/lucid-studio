import { FC } from 'react';
import { RecoilState } from '../../../../services/recoil-unstable';
import { RectangleState } from '../../../../hooks/useRectangle';
import BorderTop from './border-top/border-top';
import BorderRight from './border-right/border-right';
import BorderBottom from './border-bottom/border-bottom';
import BorderLeft from './border-left/border-left';

const RectangleSelectionBox: FC<{
  rectangleState: RecoilState<RectangleState>;
}> = ({ rectangleState }) => {
  return (
    <>
      <BorderTop rectangleState={rectangleState} />
      <BorderRight rectangleState={rectangleState} />
      <BorderBottom rectangleState={rectangleState} />
      <BorderLeft rectangleState={rectangleState} />
    </>
  );
};

export default RectangleSelectionBox;
