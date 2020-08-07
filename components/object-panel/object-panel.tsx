import React, { FC } from 'react';
import { Styled } from './object-panel.styles';
import { useRecoilState } from 'recoil';
import { objectPanelViewState } from '../../recoil/atoms';
import { ObjectPanelViews } from '../../enums';
import AddTool from '../../svgs/add-tool';
import DeleteTool from '../../svgs/delete-tool';
import { usePageList } from '../../hooks/usePageList';
import { usePage } from '../../hooks/usePageItem';

const PageList: FC = () => {
  const { items, selectedItemId, addItem, deleteItem } = usePageList();

  return (
    <Styled.PageList>
      <Styled.PageListToolbar>
        <Styled.PageListTool onClick={addItem}>
          <AddTool />
        </Styled.PageListTool>
        <Styled.PageListTool onClick={() => deleteItem(selectedItemId)}>
          <DeleteTool />
        </Styled.PageListTool>
      </Styled.PageListToolbar>

      <Styled.PageListContent>
        {items.map((item) => {
          return <Page key={item.id} item={item} />;
        })}
      </Styled.PageListContent>
    </Styled.PageList>
  );
};

const Page: FC<{ item: { id: number; name: string } }> = ({ item }) => {
  const { selectedItemId, selectItem } = usePageList();
  const page = usePage(item);

  return (
    <Styled.ObjectItem
      active={selectedItemId === page.id}
      onClick={() => {
        selectItem(page.id);
      }}
    >
      {page.name}
    </Styled.ObjectItem>
  );
};

const LayerList = () => {
  return <div></div>;
};

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
      {objectPanelView === ObjectPanelViews.pages && <PageList />}
      {objectPanelView === ObjectPanelViews.layers && <LayerList />}
    </Styled.ObjectPanel>
  );
};

export default ObjectPanel;
