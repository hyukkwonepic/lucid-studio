import React, { FC, useState, useEffect, MouseEvent } from 'react';
import { RecoilState } from 'recoil';
import { RectangleState, useRectangle } from '../../../../../hooks/useRectangle';
import { useEditor } from '../../../../../hooks/useEditor';
import { usePage } from '../../../../../hooks/usePage';

const RightTopResizer: FC<{
  rectangleState: RecoilState<RectangleState>;
}> = ({ rectangleState }) => {
  const editor = useEditor();
  const page = usePage(editor.selectedPage);
  const rectangle = useRectangle(rectangleState);
  const [state, setState] = useState({
    isMouseDown: false,
    rectangle: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    },
  });

  useEffect(() => {
    const handleMouseMove = (event: globalThis.MouseEvent) => {
      const rect = page.ref.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const newWidth = state.rectangle.width + (x - (state.rectangle.width + state.rectangle.x));
      const newHeight = state.rectangle.height - (y - state.rectangle.y);

      if (newHeight > 0) {
        rectangle.moveTo(rectangle.x, y);
        rectangle.resize(newWidth > 0 ? newWidth : 1, newHeight);
      } else {
        rectangle.moveTo(rectangle.x, state.rectangle.y + state.rectangle.height);
        rectangle.resize(newWidth > 0 ? newWidth : 1, 1);
      }
    };

    if (state.isMouseDown) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [state, rectangle, page.ref]);

  useEffect(() => {
    const handleMouseUp = () => {
      setState((state) => ({ ...state, isMouseDown: false }));
    };

    if (state.isMouseDown) {
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [state]);

  const handleMouseDown = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    event.stopPropagation();
    setState({
      isMouseDown: true,
      rectangle: {
        x: rectangle.x,
        y: rectangle.y,
        width: rectangle.width,
        height: rectangle.height,
      },
    });
  };

  return (
    <div
      style={{
        position: 'absolute',
        left: rectangle.x + rectangle.width - 6,
        top: rectangle.y - 6,
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        backgroundColor: '#ffffff',
        border: '2px solid #51BC95',
        cursor: 'nesw-resize',
      }}
      onMouseDown={handleMouseDown}
    />
  );
};

export default RightTopResizer;
