import styled from 'styled-components';

const ObjectPanel = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  z-index: 2;
  top: 41px;
  left: 49px;
  bottom: 0;
  width: 225px;
`;

export const Styled = {
  ObjectPanel,
};
