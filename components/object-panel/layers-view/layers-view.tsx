import { FC } from 'react';
import { Styled } from './layers-view.styles';
import { useEditor } from '../../../hooks/useEditor';
import { usePage } from '../../../hooks/usePage';
import { RecoilState, useRecoilState } from '../../../services/recoil-unstable';
import { GraphicObject } from '../../../recoil/atoms';

const Layer: FC<{ graphicObjectState: RecoilState<GraphicObject> }> = ({ graphicObjectState }) => {
  const [graphicObject] = useRecoilState(graphicObjectState);
  return <Styled.ObjectItem active={false}>{graphicObject.name}</Styled.ObjectItem>;
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
