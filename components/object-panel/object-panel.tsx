import React from 'react';
import { Styled } from './object-panel.styles';
import { useRecoilState } from 'recoil';
import { objectPanelViewState } from '../../recoil/atoms';
import { ObjectPanelViews } from '../../enums';

const ObjectPanel = () => {
  const [objectPanelView, setObjectPanelView] = useRecoilState(objectPanelViewState);

  const handleTypeButtonClick = (view: ObjectPanelViews) => () => {
    setObjectPanelView(view);
  };

  return (
    <Styled.ObjectPanel>
      <Styled.TypeButtons>
        <Styled.TypeButton
          active={objectPanelView === ObjectPanelViews.pages}
          onClick={handleTypeButtonClick(ObjectPanelViews.pages)}
        >
          Pages
        </Styled.TypeButton>
        <Styled.TypeButton
          active={objectPanelView === ObjectPanelViews.layers}
          onClick={handleTypeButtonClick(ObjectPanelViews.layers)}
        >
          Layers
        </Styled.TypeButton>
      </Styled.TypeButtons>
      <Styled.Objects>{/* <span>Item</span> */}</Styled.Objects>
    </Styled.ObjectPanel>
  );
};

export default ObjectPanel;
