import { RecoilState } from '../../../services/recoil-unstable';
import { RectangleState, useRectangle } from '../../../hooks/useRectangle';
import { useEditor } from '../../../hooks/useEditor';
import { usePage } from '../../../hooks/usePage';
import { Styled } from './rectangle.styles';
import { FC, useRef, useState, useEffect, MouseEvent } from 'react';

const Rectangle: FC<{
  rectangleState: RecoilState<RectangleState>;
}> = ({ rectangleState }) => {
  const rectangleRef = useRef(null);
  const editor = useEditor();
  const page = usePage(editor.selectedPage);
  const rectangle = useRectangle(rectangleState);
  const { x, y, fill, angle, width, height } = rectangle;

  const [state, setState] = useState({
    down: false,
    offset: {
      x: 0,
      y: 0,
    },
  });

  useEffect(() => {
    const handleMouseMove = (event: globalThis.MouseEvent) => {
      const rect = page.ref.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      rectangle.moveTo(x - state.offset.x, y - state.offset.y);
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
    const element = event.target as HTMLElement;
    const x = event.clientX - element.getBoundingClientRect().left;
    const y = event.clientY - element.getBoundingClientRect().top;

    page.selectSingleGraphicObject(rectangleState);
    setState({
      down: true,
      offset: {
        x,
        y,
      },
    });
  };

  const handleMouseOver = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    event.stopPropagation();
    page.hoverGraphicObject(rectangleState);
  };

  const handleMouseOut = () => {
    page.hoverOffGraphicObject();
  };

  return (
    <Styled.Rectangle
      ref={rectangleRef}
      onMouseDown={handleMouseDown}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{
        left: x,
        top: y,
        backgroundColor: fill,
        width,
        height,
      }}
    />
  );
};

export default Rectangle;
