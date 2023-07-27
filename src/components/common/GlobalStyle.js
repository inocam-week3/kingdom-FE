import { createGlobalStyle, css, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'yg-jalnan';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'HakgyoansimWoojuR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/HakgyoansimWoojuR.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}


  html, body, div, span, label, input,h1, h2, h3, h4, h5, h6, p, a, img, ol, ul, li, fieldset, form, label, legend, article,figure, figcaption, footer, header,nav, section, textarea {
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
  gap: ${({ $gap }) => ($gap ? `${$gap}px` : "none")};
`;

export const cursor = css`
  cursor: pointer;
`;

export const Layout = css`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Grid = css`
  display: grid;
  grid-template-columns: ${({$gtc})=>$gtc ? $gtc : "1fr 1fr"};
`


/* About Div styled ---------------------------------------------- */
const FlexBox = styled.div`
  ${Flex}
`;

const Selection = styled.section`
  width: 100%;

`

export { FlexBox, Selection };
