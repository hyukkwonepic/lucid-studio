import { useEditor } from '../../../../../hooks/useEditor';
import { usePage } from '../../../../../hooks/usePage';
import { useRectangle, RectangleState } from '../../../../../hooks/useRectangle';
import { useState, useEffect, FC, MouseEvent } from 'react';
import { RecoilState } from 'recoil';

const BorderBottom: FC<{
  rectangleState: RecoilState<RectangleState>;
}> = ({ rectangleState }) => {
  const editor = useEditor();
  const page = usePage(editor.selectedPage);
  const rectangle = useRectangle(rectangleState);
  const [state, setState] = useState({
    down: false,
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
      const y = event.clientY - rect.top;

      const newHeight = y - rectangle.y;

      if (newHeight > 0) {
        rectangle.resize(rectangle.width, newHeight);
      } else {
        rectangle.resize(rectangle.width, 1);
      }
    };

    if (state.down) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [state, rectangle, page.ref]);

  useEffect(() => {
    const handleMouseUp = () => {
      setState((state) => ({ ...state, down: false }));
    };

    if (state.down) {
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [state]);

  const handleMouseDown = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    event.stopPropagation();
    setState({
      down: true,
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
        left: rectangle.x,
        top: rectangle.y + rectangle.height - 1,
        width: rectangle.width,
        height: '2px',
        backgroundColor: '#51BC95',
        cursor: 'ns-resize',
      }}
      onMouseDown={handleMouseDown}
    />
  );
};

export default BorderBottom;
