import styled from 'styled-components';

const UtilityBar = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  z-index: 2;
  top: 0;
  width: 100%;
  height: 40px;
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
    line-height: 40px;
    text-align: center;
    display: block;
    font-family: ${({ theme }) => theme.fonts.lato};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.charcoal};
  }
`;

export const Styled = {
  UtilityBar,
  Title,
};
