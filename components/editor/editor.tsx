import Head from 'next/head';
import { Styled } from './editor.styles';
import UtilityBar from '../utility-bar/utility-bar';
import ToolBar from '../toolbar/toolbar';
import ObjectPanel from '../object-panel/object-panel';
import { useEffect, useState } from 'react';
import Canvas from '../canvas/canvas';

const Editor = () => {
  const [tempState, setTempState] = useState({
    title: 'Untitled',
  });

  useEffect(() => {
    // REF: https://github.com/pixijs/pixi.js/issues/6414
    window.addEventListener(
      'wheel',
      (e) => {
        e.preventDefault();
      },
      { passive: false },
    );
  }, []);

  const handleTitleChange = (title) => {
    setTempState({
      ...tempState,
      title,
    });
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Styled.Editor>
        <UtilityBar title={tempState.title} onTitleChange={handleTitleChange} />
        <ToolBar />
        <ObjectPanel />
        <Canvas />
      </Styled.Editor>
    </>
  );
};

export default Editor;
