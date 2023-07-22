import { css, styled } from "styled-components";
import { Flex, cursor } from "./GlobalStyle";
import { theme } from "./theme";

const PageLayout = styled.div`
  width: 1260px;
  margin: 0 auto;
`;

const HeaderOutline = styled.header`
  width: 100%;
`;

const NavTop = styled.div`
  position: relative;
  height: 110px;
  padding-top: 24px;
  border-bottom: 1px solid #eee;
`;

const FigureImg = styled.figure`
  width: ${({ $width }) => ($width ? $width : "100%")};
  overflow: hidden;

  img {
    width: 100%;
  }

  ${({ $type }) =>
    $type === "banner"
      ? css`
          max-height: 70px;
          overflow: hidden;
          ${cursor}
        `
      : $type === "logo" &&
        css`
          ${cursor}
          position: absolute;
          top: 0;
          left: 0;
          margin: 28px 0 24px 0;
        `}
`;

const Form = styled.form`
  overflow: hidden;
  ${({ $type, theme }) =>
    $type === "headerSearch" &&
    css`
      ${Flex}
      width: 500px;
      margin: 0 auto;
      height: 44px;
      padding: 0 5px;
      border: 1px solid ${theme.color.black363};
      border-radius: 22px;
      background-color: ${theme.color.white};
    `}
`;

const Input = styled.input`
  display: block;
  outline: none;
  ${({ $type }) =>
    $type === "headerSearchInput" &&
    css`
      padding-left: 20px;
      width: 355px;
      border: none;
    `}
`;

const Albaicon = styled.div`
  ${cursor}
  position: relative;
  display: block;
  width: ${({$size}) => $size ? `${$size}px` : "34px"};
  height: ${({$size}) => $size ? `${$size}px` : "34px"};
  overflow: hidden;

  img {
    position: relative;
    display: block;
    width: 150px;
    top: ${({ $top }) => ($top ? `${$top}px` : 0)};
    left: ${({ $left }) => ($left ? `${$left}px` : 0)};
  }
`;

const CustomUl = styled.ul`
  ${Flex}

  ${({ $type }) =>
    $type === "headerAuth" &&
    css`
      position: absolute;
      top: 8px;
      right: -8px;
    `}
`;

const Customli = styled.li`
  position: relative;
  
  list-style-type: none;
  padding: 8px 20px;
  position: relative;
  font-size: ${({ $size }) => $size && `${$size}px`};

  &:hover {
    font-weight : bold;
  }

  p {
    font-size: ${({ $size }) => $size && `${$size}px`};
    z-index: 10;
  }

  &::before {
    ${({ $before }) =>
      $before === "horizon" &&
      css`
        content: "";
        position: absolute;
        top: 11px;
        left: 0;
        width: 1px;
        height: 12px;
        background-color: #d3dae6;
      `}
  }
  &:hover {
    ${({ $type }) =>
      $type === "headerAuth" &&
      css`
        p {
          border-bottom: 1px solid black;
        }
      `}
  }

  .bottomLine {
    position:absolute;
    opacity: 0.5;
    bottom:5px;
    width: 70%;
    height:12px;
    
  }
  &:hover .bottomLine {
    background-color:yellow
  }

`;

const NavBotom = styled.div`
  ${Flex}
  border-bottom: 2px solid ${theme.color.yellow};
  height: 56px;
`;

const Button = styled.div`
  ${cursor}
  width : 122px;
  height: 38px;
  font-weight: bold;
  font-size: 16px;
  border-radius: 6px;
  margin: 0 4px;
  line-height: 38px;
  background-color: ${({ $color }) => $color};
  p {
    color: ${({ $fcolor }) => $fcolor};
  }
`;

export {
  PageLayout,
  HeaderOutline,
  NavTop,
  NavBotom,
  FigureImg,
  Form,
  Input,
  Albaicon,
  CustomUl,
  Customli,
  Button,
};
