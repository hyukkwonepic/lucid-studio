import styled from 'styled-components';

const UtilityBar = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  z-index: 2;
  top: 0;
  width: 100%;
  height: 48px;
  display: flex;
`;

const Title = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-content: center;

  span,
  input {
    width: 100%;
    line-height: 48px;
    text-align: center;
    display: block;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.charcoal};
  }
`;

export const Styled = {
  UtilityBar,
  Title,
};
