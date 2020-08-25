import React, { FC } from 'react';
import { RecoilState } from 'recoil';
import { RectangleState, useRectangle } from '../../../../../hooks/useRectangle';

const LeftBottomResizer: FC<{
  rectangleState: RecoilState<RectangleState>;
}> = ({ rectangleState }) => {
  const rectangle = useRectangle(rectangleState);
  return (
    <div
      style={{
        position: 'absolute',
        left: rectangle.x - 6,
        top: rectangle.y + rectangle.height - 6,
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        backgroundColor: '#ffffff',
        border: '2px solid #51BC95',
        cursor: 'nesw-resize',
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
    />
  );
};

export default LeftBottomResizer;
