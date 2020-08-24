import { Styled } from './canvas.styles';
import { FC } from 'react';
import Page from './page/page';

const Canvas: FC = () => {
  return (
    <Styled.Canvas>
      <Page />
    </Styled.Canvas>
  );
};

export default Canvas;
