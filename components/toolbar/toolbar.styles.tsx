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
`;

const Tool = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;

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
