import styled from 'styled-components';

const Editor = styled.div<{
  cursor: string;
}>`
  cursor: ${(props) => props.cursor};
  position: relative;
  height: 100vh;
  touch-action: none;
  background-color: #e5e5e5;
`;

export const Styled = {
  Editor,
};
