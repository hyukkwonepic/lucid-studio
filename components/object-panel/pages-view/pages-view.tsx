import { pageStateFamily, PageState, usePage } from '../../../hooks/usePage';
import { useEditor } from '../../../hooks/useEditor';
import { nanoid } from 'nanoid';
import { FC } from 'react';
import { Styled } from './pages-view.styles';
import AddTool from '../../../svgs/add-tool';
import DeleteTool from '../../../svgs/delete-tool';
import { RecoilState } from 'recoil';

const Page: FC<{ pageState: RecoilState<PageState> }> = ({ pageState }) => {
  const editor = useEditor();
  const page = usePage(pageState);

  const handleClick = () => {
    editor.selectPage(pageState);
  };

  return (
    <Styled.ObjectItem active={editor.selectedPage === pageState} onClick={handleClick}>
      {page.name}
    </Styled.ObjectItem>
  );
};

const PagesView: FC = () => {
  const editor = useEditor();

  const handleAddToolClick = () => {
    const pageState = pageStateFamily({
      id: nanoid(),
      name: 'New page',
    });
    editor.addPage(pageState);
  };

  const handleDeleteToolClick = () => {
    editor.removeSelectedPage();
  };

  return (
    <Styled.PagesView>
      <Styled.Toolbar>
        <Styled.Tool onClick={handleAddToolClick}>
          <AddTool />
        </Styled.Tool>
        <Styled.Tool onClick={handleDeleteToolClick}>
          <DeleteTool />
        </Styled.Tool>
      </Styled.Toolbar>

      <Styled.Content>
        {editor.pages.map((page) => {
          return <Page key={page.key} pageState={page} />;
        })}
      </Styled.Content>
    </Styled.PagesView>
  );
};

export default PagesView;
