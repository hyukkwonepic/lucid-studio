import React from 'react';
import { Styled } from './object-panel.styles';

const ObjectPanel = () => {
  return (
    <Styled.ObjectPanel>
      <Styled.TypeButtons>
        <Styled.TypeButton active={true}>Pages</Styled.TypeButton>
        <Styled.TypeButton active={false}>Layers</Styled.TypeButton>
      </Styled.TypeButtons>
      <Styled.Objects>{/* <span>Item</span> */}</Styled.Objects>
    </Styled.ObjectPanel>
  );
};

export default ObjectPanel;
