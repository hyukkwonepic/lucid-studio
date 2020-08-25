import React, { FC } from 'react';
import { RecoilState } from 'recoil';
import { RectangleState, useRectangle } from '../../../../hooks/useRectangle';

const RectangleHoverBox: FC<{
  rectangleState: RecoilState<RectangleState>;
}> = ({ rectangleState }) => {
  const rectangle = useRectangle(rectangleState);

  return (
    <div
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        left: rectangle.x - 1,
        top: rectangle.y - 1,
        width: rectangle.width + 2,
        height: rectangle.height + 2,
        backgroundColor: 'unset',
        border: '2px solid #51BC95',
      }}
    />
  );
};

export default RectangleHoverBox;
