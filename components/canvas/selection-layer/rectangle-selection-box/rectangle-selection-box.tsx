import { FC } from 'react';
import { RectangleState } from '../../../../hooks/useRectangle';
import { RecoilState } from 'recoil';
import TopResizer from './top-resizer/top-resizer';
import RightResizer from './right-resizer/right-resizer';
import BottomResizer from './bottom-resizer/bottom-resizer';
import LeftResizer from './left-resizer/left-resizer';
import LeftTopResizer from './left-top-resizer/left-top-resizer';
import RightTopResizer from './right-top-resizer/right-top-resizer';
import LeftBottomResizer from './left-bottom-resizer/left-bottom-resizer';
import RightBottomResizer from './right-bottom-resizer/right-bottom-resizer';

const RectangleSelectionBox: FC<{
  rectangleState: RecoilState<RectangleState>;
}> = ({ rectangleState }) => {
  return (
    <>
      <TopResizer rectangleState={rectangleState} />
      <RightResizer rectangleState={rectangleState} />
      <BottomResizer rectangleState={rectangleState} />
      <LeftResizer rectangleState={rectangleState} />
      <LeftTopResizer rectangleState={rectangleState} />
      <RightTopResizer rectangleState={rectangleState} />
      <LeftBottomResizer rectangleState={rectangleState} />
      <RightBottomResizer rectangleState={rectangleState} />
    </>
  );
};

export default RectangleSelectionBox;
