import { FC } from 'react';
import { RectangleState } from '../../../../hooks/useRectangle';
import { RecoilState } from 'recoil';
import TopResizer from './top-resizer/top-resizer';
import RightResizer from './right-resizer/right-resizer';
import BottomResizer from './bottom-resizer/bottom-resizer';
import LeftResizer from './left-resizer/left-resizer';

const RectangleSelectionBox: FC<{
  rectangleState: RecoilState<RectangleState>;
}> = ({ rectangleState }) => {
  return (
    <>
      <TopResizer rectangleState={rectangleState} />
      <RightResizer rectangleState={rectangleState} />
      <BottomResizer rectangleState={rectangleState} />
      <LeftResizer rectangleState={rectangleState} />
    </>
  );
};

export default RectangleSelectionBox;
