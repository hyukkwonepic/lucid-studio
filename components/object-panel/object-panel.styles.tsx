import styled from 'styled-components';

const ObjectPanel = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  z-index: 2;
  top: 49px;
  left: 65px;
  bottom: 0;
  min-width: 280px;

  display: flex;
  flex-direction: column;
`;

const TypeButtons = styled.div`
  height: 56px;
  display: flex;
  padding: 4px 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};
`;

const TypeButton = styled.div<{ active: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 16px;
  line-height: 20px;

  margin: 4px;
  border-radius: 10px;
  color: ${(props) => (props.active ? props.theme.colors.mint : props.theme.colors.grey)};
  background-color: ${(props) => (props.active ? props.theme.colors.mint10 : props.theme.colors.white)};

  &:hover {
    background-color: ${(props) => props.theme.colors.mint10};
  }
`;

const ContentScrollContainer = styled.div`
  flex: 1;
`;

const PageList = styled.div``;

const PageListContent = styled.div`
  padding: 8px 16px;
`;

const PageListToolbar = styled.div`
  display: flex;
  padding: 8px 16px;
  border-bottom: 1px solid ${(props) => props.theme.colors.background};
`;

const PageListTool = styled.div`
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
  ObjectPanel,
  TypeButtons,
  TypeButton,
  ContentScrollContainer,
  PageList,
  PageListContent,
  PageListToolbar,
  PageListTool,
  ObjectItem,
};
