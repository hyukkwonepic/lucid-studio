import styled from 'styled-components';

const Canvas = styled.div`
  background-color: #e5e5e5;
  position: absolute;
  z-index: 2;
  top: 49px;
  left: 345px;
  right: 0;
  bottom: 0;
  overflow: auto;
`;

const Page = styled.div`
  position: relative;
  width: 10000px;
  height: 10000px;
`;

const PageEventContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Rectangle = styled.div`
  position: absolute;
`;

export const Styled = { Canvas, Page, PageEventContainer, Rectangle };
