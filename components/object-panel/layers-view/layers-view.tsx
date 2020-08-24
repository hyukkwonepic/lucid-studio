import { FC } from 'react';
import { Styled } from './layers-view.styles';
import { useEditor } from '../../../hooks/useEditor';
import { usePage } from '../../../hooks/usePage';
import { RecoilState, useRecoilState } from '../../../services/recoil-unstable';
import { GraphicObjectState } from '../../../recoil/atoms';

const Layer: FC<{ graphicObjectState: RecoilState<GraphicObjectState> }> = ({ graphicObjectState }) => {
  const editor = useEditor();
  const page = usePage(editor.selectedPage);

  const [graphicObject] = useRecoilState(graphicObjectState);

  const selected = page.selectedGraphicObjects.includes(graphicObjectState);

  const handleClick = () => {
    page.selectSingleGraphicObject(graphicObjectState);
  };

  return (
    <Styled.ObjectItem active={selected} onClick={handleClick}>
      {graphicObject.name}
    </Styled.ObjectItem>
  );
};

const LayersView: FC = () => {
  const editor = useEditor();
  const page = usePage(editor.selectedPage);

  return (
    <Styled.LayersView>
      <Styled.Content>
        {page.children.map((graphicObject) => {
          return <Layer key={graphicObject.key} graphicObjectState={graphicObject} />;
        })}
      </Styled.Content>
    </Styled.LayersView>
  );
};

export default LayersView;
