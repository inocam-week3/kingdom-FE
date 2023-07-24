import { css, styled } from "styled-components";
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
    width: 50px;
  }
`;

const AuthSiguupLayout = styled(AuthLayout)`
  margin: 40px auto 50px;
  padding: 0 40px 60px;
  border: 1px solid #eaedf3;
  background: #fff;
  font-family: "HakgyoansimWoojuR";
`;

const AuthSignupTitle = styled.h1`
  position: relative;
  padding: 30px 0 16px;
  margin: 0 auto 30px;
  border-bottom: 1px solid #eaedf3;
  font-family: "yg-jalnan";
  font-size: 26px;
  text-align: center;
  letter-spacing: 0;
  color: #222;
`;

const AuthSignupType = styled.div`
  width: 100%;

  .signupClickArea {
    ${cursor}
  }

  .signupType {
    ${Flex}
    flex-direction: column;
    gap: 5px;
    border: 1px solid #e1e7f0;
    padding: 32px 0;
    border-bottom: 0;
    border-radius: 8px 8px 0 0;

    h3 {
      font-family: "yg-jalnan";
    }
  }

  .signupbtn {
    ${Flex}
    font-family: "yg-jalnan";
    height: 50px;
    font-size: 16px;
    border: 1px solid;
    border-radius: 0 0 8px 8px;

    ${({ $signupbtnColor, theme }) =>
      $signupbtnColor === "yellow"
        ? css`
            border-color: ${theme.color.yellow};
            background: ${theme.color.lightyellow};
          `
        : $signupbtnColor === "blue" &&
          css`
            border-color: ${theme.color.blue};
            background: ${theme.color.lightblue};
            color: ${theme.color.white};
          `}
  }
`;
const AuthSignupBottomBtn = styled.div`
  ${Flex}
  overflow: hidden;
  margin-top: 15px;
  border: 1px solid #eee;
  border-radius: 8px;
`;

const AuthSection = styled.div`
  
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
`;

const AuthInput = styled.input`
  display: block;
  outline: none;
  width: 100%;
  height: 54px;
  margin: 0;
  padding-left: 16px;
  padding-top: 20px;

  font-size: 14px;
  color: #000;
`;

const AuthLabel = styled.label`
  position: absolute;
  top: 12px;
  left: 16px;
  width: auto;
  height: auto;
  margin: 0;
  padding: 0;
  color: #9096a1;
  font-size: 12px;
  line-height: 1;
`;

const PasswordToggleBtn = styled.div`
  ${cursor}
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
  font-size: 20px;
`;

const ValidateInputMsg = styled.div`
  color : ${({$color}) => $color ? "green" : "red"}
`


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
  AuthSiguupLayout,
  AuthSignupTitle,
  AuthSignupType,
  AuthSignupBottomBtn,
  AuthSection,
  AuthInput,
  AuthLabel,
  PasswordToggleBtn,
  ValidateInputMsg
};
