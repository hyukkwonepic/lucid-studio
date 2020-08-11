import styled from 'styled-components';

const PagesView = styled.div``;

const Toolbar = styled.div`
  display: flex;
  padding: 8px 16px;
  border-bottom: 1px solid ${(props) => props.theme.colors.background};
`;

const Tool = styled.div`
  border-radius: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

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
  border: 1px solid ${(props) => (props.active ? props.theme.colors.mint : props.theme.colors.white)};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => (props.active ? props.theme.colors.white : props.theme.colors.grey)};
  background-color: ${(props) => (props.active ? props.theme.colors.mint : props.theme.colors.white)};
`;

export const Styled = {
  PagesView,
  Toolbar,
  Tool,
  Content,
  ObjectItem,
};
