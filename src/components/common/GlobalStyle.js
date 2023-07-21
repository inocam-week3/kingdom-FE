import { createGlobalStyle, css, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`

`


export const Flex = css`
  display: flex;
  flex-direction: ${({ $fd }) => ($fd ? $fd : "row")};
  justify-content: ${({ $jc }) => ($jc ? $jc : "center")};
  align-items: ${({ $ai }) => ($ai ? $ai : "center")};
  gap: ${({ $gap }) => ($gap ? $gap : "none")};
`;

export const cursor = css`
  cursor: pointer;
`;

export const Layout = css`
  max-width: 1200px;
  margin: 0 auto;
`;

/* About Div styled ---------------------------------------------- */
const FlexBox = styled.div`
  ${Flex}
`;

export { FlexBox };
