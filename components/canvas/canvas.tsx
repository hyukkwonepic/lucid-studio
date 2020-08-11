import React, { useRef, useEffect, FC } from 'react';
import { Styled } from './canvas.styles';
import { Stage } from '@inlet/react-pixi';
import { useEditor } from '../../hooks/useEditor';
import { RecoilRoot, useRecoilStore_UNSTABLE } from '../../services/recoil-unstable';
import Page from './page/page';

const Canvas: FC = () => {
  const editor = useEditor();
  const recoilStore = useRecoilStore_UNSTABLE();

  const canvasContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editor.canvas.width || editor.canvas.height) {
      return;
    }

    if (!canvasContainerRef.current) {
      return;
    }

    editor.setCanvas({
      width: canvasContainerRef.current.clientWidth,
      height: canvasContainerRef.current.clientHeight,
    });
  }, [editor]);

  return (
    <Styled.CanvasContainer ref={canvasContainerRef}>
      {editor.canvas.width && editor.canvas.height && (
        <Stage
          options={{
            backgroundColor: 0xe5e5e5,
            resolution: window.devicePixelRatio || 1,
          }}
          width={editor.canvas.width}
          height={editor.canvas.height}
        >
          <RecoilRoot store_UNSTABLE={recoilStore}>
            <Page />
          </RecoilRoot>
        </Stage>
      )}
    </Styled.CanvasContainer>
  );
};

export default Canvas;
