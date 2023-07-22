import { styled } from "styled-components";
import { Flex, cursor } from "../common";

const AuthLayout = styled.div`
  padding: 72px 0 40px;
`;

const AuthTitle = styled.div`
  h1 {
    font-family: "yg-jalnan";
    margin-bottom: 9px;
    font-size: 20px;
  }

  div {
    margin-bottom: 32px;
  }

  span {
    ${cursor}
    text-decoration: underline;
    color: #0076ff;
    font-size: 14px;
    letter-spacing: -1px;
    font-weight: 900;
  }
`;

const LoginArticle = styled.article`
  ${Flex}
  .loginBox,
  .loginInfoTitle {
    width: 50%;
    height: 375px;
  }

  h1 {
    position: relative;
    font-family: "yg-jalnan";
    font-size: 22px;
    text-align: center;
    letter-spacing: 0;
    color: #222;
    width: fit-content;
    margin: 0 auto;

    &::before {
      content: "";
      z-index: -1;
      position: absolute;
      top: auto;
      right: 0;
      bottom: 5px;
      left: 0;
      height: 13px;
      background-color: ${({ $state, theme }) =>
        $state ? theme.color.lightblue : theme.color.yellow};
      opacity: 0.6;
    }
  }
`;

const LoginInfoTitle = styled.div`
  .loginInfo {
    ${Flex}
    justify-content: flex-start;
    width: 349px;
    margin: 0 auto;
    margin-top: 40px;
    gap: 20px;
  }
  .subscript {
    width: fit-content;

    h2 {
      font-family: "yg-jalnan";
      margin-bottom: 6px;
      font-weight: normal;
      font-size: 16px;
    }

    p {
      font-size: 14px;
      line-height: 1.3;
      letter-spacing: -1px;
      color: #666;
    }
  }
`;

const LoginBox = styled.div`
  width: 390px;
  height: 100px;

  .logintypeBox {
    ${Flex}
    overflow: hidden;
    width: 100%;
    margin-bottom: 32px;
  }
`;

const LogintypeBtn = styled.div`
  ${Flex}
  flex-direction: column;
  ${cursor}
  width: 50%;
  height: 58px;
  font-weight: normal;
  font-size: 16px;
  border: 1px solid ${({ $state }) => ($state ? "#e5e5e5" : "#222")}; // None // Active
  background-color: ${({ $state }) => ($state ? "#f9f9f9" : "#fff")};
  border-bottom: ${({ $state }) => (!$state ? "none" : "1px solid #222")};
  z-index: 10;

  h2,
  p {
    font-family: "yg-jalnan";
    color: ${({ $state }) => ($state ? "#999" : "#222")};
  }

  p {
    font-size: 10px;
  }
`;

const LoginWriteLayout = styled.div`
  ${Flex}
  margin-bottom: 13px;
`;

const LoginWriteBox = styled.div`
  ${Flex}
  flex-grow: 1;
  gap: 8px;
  flex-direction: column;
`;

const SNSLogin = styled.div`
  ${Flex}
  gap: 50px;
  margin-top: 30px;
  border-top: 1px solid #e5e5e5;
  padding-top: 19px;
`;

const SNSBtn = styled.div`
  ${Flex}
  flex-direction: column;
  ${cursor}
  width: 36px;
  padding: 0 6px;
  height: 60px;
  padding: 0 6px;
  font-size: 12px;
  color: #666;

  p {
    text-align: center;
    width: 50px
  }
`;

//$type="loginWrite"

export {
  AuthLayout,
  AuthTitle,
  LoginArticle,
  LoginInfoTitle,
  LoginBox,
  LoginWriteLayout,
  LoginWriteBox,
  LogintypeBtn,
  SNSLogin,
  SNSBtn,
};
