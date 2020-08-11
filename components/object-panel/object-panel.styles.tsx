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

const ViewButtons = styled.div`
  height: 56px;
  display: flex;
  padding: 4px 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};
`;

const ViewButton = styled.div<{ active: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;
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

export const Styled = {
  ObjectPanel,
  ViewButtons,
  ViewButton,
};
