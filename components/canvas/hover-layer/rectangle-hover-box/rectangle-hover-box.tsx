import React, { FC } from 'react';
import { RecoilState } from '../../../../services/recoil-unstable';
import { RectangleState, useRectangle } from '../../../../hooks/useRectangle';

const RectangleHoverBox: FC<{
  rectangleState: RecoilState<RectangleState>;
}> = ({ rectangleState }) => {
  const rectangle = useRectangle(rectangleState);

  // TODO: Abstract the box to be reusable in selection box
  return (
    <>
      <div
        style={{
          position: 'absolute',
          left: rectangle.x,
          top: rectangle.y - 2,
          width: rectangle.width + 2,
          height: '2px',
          backgroundColor: '#51BC95',
          cursor: 'ns-resize',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: rectangle.x + rectangle.width,
          top: rectangle.y,
          width: '2px',
          height: rectangle.height + 2,
          backgroundColor: '#51BC95',
          cursor: 'ew-resize',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: rectangle.x - 2,
          top: rectangle.y + rectangle.height,
          width: rectangle.width + 2,
          height: '2px',
          backgroundColor: '#51BC95',
          cursor: 'ns-resize',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: rectangle.x - 2,
          top: rectangle.y - 2,
          width: '2px',
          height: rectangle.height + 2,
          backgroundColor: '#51BC95',
          cursor: 'ew-resize',
        }}
      />
    </>
  );
};

export default RectangleHoverBox;
