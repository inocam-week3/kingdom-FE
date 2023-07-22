import { createGlobalStyle, css, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, h1, h2, h3, h4, h5, h6, p, a, img, ol, ul, li, fieldset, form, label, legend, article,figure, figcaption, footer, header,nav, section {
  box-sizing: border-box;
	margin: 0;
	padding: 0;
	border: none;
	text-decoration: none;
  font-size: 14px;
  ol, ul {list-style:none};
  
  color: rgb(29, 29, 31);
}

body {
	width: 100%;
	height: 100%;
}
`;

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
