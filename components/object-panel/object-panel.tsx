import React, { FC } from 'react';
import { Styled } from './object-panel.styles';
import { ObjectPanelViews } from '../../enums';
import { useEditor } from '../../hooks/useEditor';
import PagesView from './pages-view/pages-view';
import LayersView from './layers-view/layers-view';

const ObjectPanel: FC = () => {
  const editor = useEditor();

  const handleViewButtonClick = (view: ObjectPanelViews) => () => {
    editor.selectObjectPanelView(view);
  };

  return (
    <Styled.ObjectPanel>
      <Styled.ViewButtons>
        <Styled.ViewButton
          active={editor.selectedObjectPanelView === ObjectPanelViews.pages}
          onClick={handleViewButtonClick(ObjectPanelViews.pages)}
        >
          Pages
        </Styled.ViewButton>
        <Styled.ViewButton
          active={editor.selectedObjectPanelView === ObjectPanelViews.layers}
          onClick={handleViewButtonClick(ObjectPanelViews.layers)}
        >
          Layers
        </Styled.ViewButton>
      </Styled.ViewButtons>
      {editor.selectedObjectPanelView === ObjectPanelViews.pages && <PagesView />}
      {editor.selectedObjectPanelView === ObjectPanelViews.layers && <LayersView />}
    </Styled.ObjectPanel>
  );
};

export default ObjectPanel;
