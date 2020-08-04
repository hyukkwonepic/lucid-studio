import styled from 'styled-components';

const UtilityBar = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  z-index: 2;
  top: 0;
  width: 100%;
  height: 40px;
`;

export const Styled = {
  UtilityBar,
};
