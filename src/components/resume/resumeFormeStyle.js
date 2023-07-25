import styled from "styled-components";
import { Flex, cursor } from "../common";

const ResumeFormOutline = styled.form`
  width: 100%;
  ${Flex}
  align-items: flex-start;
  padding: 20px 0 80px;
  background-color: #f7f7f7;
`;
const ResumeFormLayout = styled.div`
  /* width: 90%; */
  padding: 20px 54px 60px;
  margin: 0 15px;
  background: ${({ $color, theme }) => ($color ? $color : theme.color.white)};
  border: 1px solid #eee;
`;

const ResumeFormInner1 = styled.div`
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 16px;
  border-bottom: 1px solid #eee;
  font-size: 22px;
  strong {
    margin-right: 15px;
  }
  button {
    width: 100px;
    height: 26px;
    padding: 0 5px;
    font-size: 14px;
    background: #${({ $color, theme }) => ($color ? $color : theme.color.white)};
    border: 1px solid #bbb;
    ${cursor}
    &:hover {
      color: blue;
    }
  }
`;

const ResumeFormInner2 = styled.div`
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 16px;
  input {
    width: 972.8px;
    height: 32px;
    padding-left: 10px;
  }
  h2 {
    font-size: 23px;
    margin-bottom: 16px;
    span {
      position: absolute;
      color: red;
    }
  }
`;

const ResumeFormInner3 = styled.div`
  strong {
    margin-right: 55px;
    font-size: 16px;
  }
  label.btn-selected {
    display: inline-block;
    width: 160px;
    height: 38px;
    background-color: #${({ $color, theme }) => ($color ? $color : theme.color.white)};
    border: 1px solid #3366cc;
    font-weight: bold;
    text-align: center;
    line-height: 36px;
    font-size: 16px;
    color: #3366cc;
  }
  input {
    visibility: hidden;
    margin: -10px;
  }
  label {
    display: inline-block;
    width: 160px;
    height: 38px;
    background-color: #fbfbfb;
    border: 1px solid #ddd;
    text-align: center;
    line-height: 36px;
    font-size: 16px;
  }
`;

const InnerHeaders = styled.div`
  width: 100%;
  height: 40px;
  ${Flex}
  justify-content: flex-start;
  padding-bottom: 10px;
  margin-bottom: 16px;
  border-bottom: 2px solid #222;
  h2 {
    font-size: 23px;
    span {
      position: absolute;
      color: red;
    }
  }
  p {
    margin: 0 0 -20px 20px;
    color: #9b9b9b;
  }
`;

const InnerBody = styled.div`
  p {
    height: 38px;
  }
  strong {
    margin-right: 15px;
    font-size: 22px;
  }
  span {
    width: 75px;
    font-size: 15px;
    font-weight: bold;
    margin-right: 72px;
  }
`;

const SubmitBtn = styled.button`
  ${cursor}
  width: 210px;
  height: 62px;
  font-size: 16px;
  border: none;
  margin: 0 15px 0 0;
  font-weight: bold;
  background-color: ${({ $color, theme }) => ($color ? $color : theme.color)};
`;

export {
  ResumeFormOutline,
  ResumeFormLayout,
  ResumeFormInner1,
  ResumeFormInner2,
  ResumeFormInner3,
  SubmitBtn,
  InnerHeaders,
  InnerBody,
};
