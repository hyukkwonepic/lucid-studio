import styled from 'styled-components';

const Toolbar = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  z-index: 2;
  top: 41px;
  left: 0;
  bottom: 0;
  width: 48px;
`;

export const Styled = {
  Toolbar,
};
