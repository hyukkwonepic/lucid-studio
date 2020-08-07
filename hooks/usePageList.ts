import { useRecoilState } from 'recoil';
import { pageListState } from '../recoil/atoms';

export const usePageList = () => {
  const [pageList, setPageList] = useRecoilState(pageListState);

  const addItem = () => {
    const newPageId = Math.max(...pageList.items.map((item) => item.id)) + 1;
    const newPage = {
      id: Math.max(...pageList.items.map((item) => item.id)) + 1,
      name: `Page ${newPageId}`,
    };

    setPageList({
      ...pageList,
      items: [...pageList.items, newPage],
    });
  };

  const deleteItem = (itemId: number) => {
    if (pageList.items.length === 1) {
      return;
    }

    const newItems = pageList.items.filter((item) => {
      return item.id !== itemId;
    });
    setPageList({
      ...pageList,
      items: newItems,
      selectedItemId: newItems[0].id,
    });
  };

  const selectItem = (itemId) => {
    setPageList({
      ...pageList,
      selectedItemId: itemId,
    });
  };

  return {
    ...pageList,
    addItem,
    deleteItem,
    selectItem,
  };
};
