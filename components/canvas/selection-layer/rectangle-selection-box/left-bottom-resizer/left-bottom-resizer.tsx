import React, { FC, useState, useEffect, MouseEvent } from 'react';
import { RecoilState } from 'recoil';
import { RectangleState, useRectangle } from '../../../../../hooks/useRectangle';
import { useEditor } from '../../../../../hooks/useEditor';
import { usePage } from '../../../../../hooks/usePage';

const LeftBottomResizer: FC<{
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

      const newWidth = state.rectangle.width - (x - state.rectangle.x);
      const newHeight = state.rectangle.height + (y - (state.rectangle.y + state.rectangle.height));

      if (newWidth > 0) {
        rectangle.moveTo(state.rectangle.x + (x - state.rectangle.x), rectangle.y);
        rectangle.resize(newWidth, newHeight > 0 ? newHeight : 1);
      } else {
        rectangle.moveTo(state.rectangle.x + state.rectangle.width, rectangle.y);
        rectangle.resize(1, newHeight > 0 ? newHeight : 1);
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
        left: rectangle.x - 6,
        top: rectangle.y + rectangle.height - 6,
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

export default LeftBottomResizer;
