import { css, styled } from "styled-components";
import { Flex, cursor } from "./GlobalStyle";

const PageLayout = styled.div`
  width: ${({ $width }) => ($width ? $width : "1260px")};
  margin: 0 auto;
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
          height: 70px;
          overflow: hidden;
          position: relative;
          ${cursor}

          img {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transform: translate(-50%, -50%);
          }
        `
      : $type === "logo"
      ? css`
          ${cursor}
          position: absolute;
          top: 0;
          left: 0;
          margin: 28px 0 24px 0;
        `
      : $type === "autLogo" &&
        css`
          ${cursor}
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

  ${({ $type }) =>
    $type === "headerSearchInput"
      ? css`
          outline: none;
          font-weight: 500;
          font-size: 15px;
          padding-left: 20px;
          width: 355px;
          border: none;
        `
      : $type === "login" &&
        css`
          display: flex;
          width: 100%;
          height: 44px;
          padding: 0 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          box-sizing: border-box;
          font-size: 15px;
          background-color: #fff;
        `}
`;

const AlbaIcon = styled.div`
  ${cursor}
  position: relative;
  display: block;
  width: ${({ $size }) => ($size ? `${$size}px` : "34px")};
  height: ${({ $size }) => ($size ? `${$size}px` : "34px")};
  overflow: hidden;

  img {
    position: relative;
    display: block;
    width: 150px;
    top: ${({ $top }) => ($top ? `${$top}px` : 0)};
    left: ${({ $left }) => ($left ? `${$left}px` : 0)};
  }
`;

const LoginIcon = styled(AlbaIcon)`
  img {
    width: 210px;
  }
`;

const SNSIcon = styled(AlbaIcon)`
  img {
    width: 210px;
  }
`;
const SignupTypeIcon = styled(AlbaIcon)`
  img {
    width: 100px;
  }
`;

const SignupSNSIcon = styled(AlbaIcon)`
  img {
    width: 160px;
  }
`;

const CustomUl = styled.ul`
  ${Flex}

  ${({ $type }) =>
    $type === "headerAuth"
      ? css`
          position: absolute;
          top: 8px;
          right: -8px;
        `
      : $type === "login" &&
        css`
          position: relative;
          left: 20px;
        `}
`;

const Customli = styled.li`
  ${cursor}
  position: relative;
  list-style-type: none;
  padding: 8px 20px;
  position: relative;
  font-size: ${({ $size }) => $size && `${$size}px`};

  &:hover {
    font-weight: bold;
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
      $type === "bottomLine" &&
      css`
        div,
        p {
          border-bottom: 1px solid black;
        }
      `}
  }

  .bottomLine {
    position: absolute;
    opacity: 0.5;
    bottom: 5px;
    width: 70%;
    height: 12px;
  }
  &:hover .bottomLine {
    background-color: yellow;
  }

  /* ${({ $type }) =>
    $type === "footer" &&
    css`
      padding: 0 26px;
    `} */
`;

const Button = styled.div`
  ${cursor}
  border-radius: 6px;

  ${({ $type, $state, $fcolor, $color, theme }) =>
    $type === "header"
      ? css`
          font-weight: bold;
          font-size: 16px;
          padding: 0 20px;
          height: 38px;
          font-size: 16px;
          margin: 0 4px;
          line-height: 38px;
          padding: 0 20px;
          height: 38px;
          background-color: ${$color};

          p {
            color: ${$fcolor};
          }
        `
      : $type === "login" && $state
      ? css`
          ${Flex}
          width: 110px;
          height: 96px;
          border: 1px solid ${theme.color.yellow};
          background-color: ${theme.color.lightyellow};
          color: #222;
          font-size: 18px;
        `
      : $type === "login" && !$state
      ? css`
          ${Flex}
          width: 110px;
          height: 96px;
          background-color: ${theme.color.blue};
          border: 1px solid ${theme.color.lightblue};
          color: #fff;
          font-size: 18px;
        `
      : $type === "authSignup" &&
        css`
          ${Flex}
          width: 100%;
          border: 1px solid ${$color ? theme.color.yellow : theme.color.blue};
          background-color: ${$color ? theme.color.lightyellow : theme.color.lightblue};
          color: ${$color ? theme.color.black363 : theme.color.white};;
          height: 50px;
          font-size: 20px;
          font-weight: 800;
          line-height: 50px;
        `}
`;

//AuthSignup

export {
  PageLayout,
  FigureImg,
  Form,
  Input,
  AlbaIcon,
  LoginIcon,
  SNSIcon,
  SignupTypeIcon,
  SignupSNSIcon,
  CustomUl,
  Customli,
  Button,
};
