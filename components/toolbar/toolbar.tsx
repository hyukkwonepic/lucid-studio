import React from 'react';
import { Styled } from './toolbar.styles';
import MoveTool from '../../svgs/move-tool';
import ArtboardTool from '../../svgs/artboard-tool';
import EllipseTool from '../../svgs/ellipse-tool';
import PolygonTool from '../../svgs/polygon-tool';
import LineTool from '../../svgs/line-tool';
import RectangleTool from '../../svgs/rectangle-tool';

const Toolbar = () => {
  return (
    <Styled.Toolbar>
      <Styled.Container>
        <Styled.Tool>
          <MoveTool />
        </Styled.Tool>

        <Styled.Tool>
          <ArtboardTool />
        </Styled.Tool>

        <Styled.Tool>
          <RectangleTool />
        </Styled.Tool>

        <Styled.Tool>
          <EllipseTool />
        </Styled.Tool>

        <Styled.Tool>
          <PolygonTool />
        </Styled.Tool>

        <Styled.Tool>
          <LineTool />
        </Styled.Tool>
      </Styled.Container>
    </Styled.Toolbar>
  );
};

export default Toolbar;
