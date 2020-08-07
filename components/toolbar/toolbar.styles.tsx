import styled from 'styled-components';

const Toolbar = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  z-index: 2;
  top: 49px;
  left: 0;
  bottom: 0;
  width: 64px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Tool = styled.div<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  width: 40px;
  height: 40px;
  border-radius: 10px;

  ${(props) => {
    return (
      props.active &&
      `
      background-color: ${props.theme.colors.mint10};
    `
    );
  }}

  &:nth-child(1) {
    margin-top: 8px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.mint10};
    border-radius: 10px;
  }

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const Styled = {
  Toolbar,
  Container,
  Tool,
};
