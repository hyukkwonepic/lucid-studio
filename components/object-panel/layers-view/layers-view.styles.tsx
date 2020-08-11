import styled from 'styled-components';

const LayersView = styled.div``;

const Content = styled.div`
  padding: 8px 16px;
`;

const ObjectItem = styled.div<{
  active?: boolean;
}>`
  border-radius: 10px;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 16px;
  border: 1px solid ${(props) => (props.active ? props.theme.colors.mint90 : props.theme.colors.white)};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => (props.active ? props.theme.colors.white : props.theme.colors.grey)};
  background-color: ${(props) => (props.active ? props.theme.colors.mint90 : props.theme.colors.white)};
`;

export const Styled = {
  LayersView,
  Content,
  ObjectItem,
};
