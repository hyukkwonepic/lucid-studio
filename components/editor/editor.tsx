import Head from 'next/head';
import { Styled } from './editor.styles';
import UtilityBar from '../utility-bar/utility-bar';
import ToolBar from '../toolbar/toolbar';
import ObjectPanel from '../object-panel/object-panel';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useCursor } from '../../hooks/useCursor';

const Canvas = dynamic(() => import('../canvas/canvas'), { ssr: false });

const Editor = () => {
  const cursor = useCursor();

  useEffect(() => {
    // REF: https://github.com/pixijs/pixi.js/issues/6414, https://stackoverflow.com/a/33083535
    const handleWindowWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };
    window.addEventListener('wheel', handleWindowWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWindowWheel);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="stylesheet" href="https://use.typekit.net/qcg2exe.css" />
      </Head>
      <Styled.Editor cursor={cursor.type}>
        <UtilityBar />
        <ToolBar />
        <ObjectPanel />
        <Canvas />
      </Styled.Editor>
    </>
  );
};

export default Editor;
