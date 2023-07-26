import styled from "styled-components";
import { Flex, cursor } from "../common";

const ResumeDetailOutline = styled.div`
  ${Flex}
  width: 100%;
  align-items: flex-start;
  padding: 20px 0 80px;
  background-color: #f7f7f7;
`;

const ResumeDetailLayout = styled.div`
  ${Flex}
  flex-direction: column;
  width: 100%;
  padding: 20px 54px 60px;
  margin: 0 15px;
  background: ${({ $color, theme }) => ($color ? $color : theme.color.white)};
  border: 2px solid #eee;
`;

const ResumeDetailInner = styled.div`
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 16px;
  font-size: 22px;
  h2 {
    padding: 0 0 12px;
    font-size: 28px;
    display: block;
    border-bottom: 1px solid #222;
  }
  h3 {
    font-size: 24px;
    margin: 15px 0;
  }
  span {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 500;
  }
`;

const ResumeDetailConfirm = styled.div`
  ${Flex}
  flex-direction: column;
  justify-content: space-between;
  width: 524px;
  height: 102px;
  padding-top: 40px;
  strong {
    margin: 0 5px;
  }
  span {
    font-weight: 400;
  }
`;

const ResumeUpdateInput = styled.input`
  width: 500px;
  height: 50px;
  font-size: 1.5rem;
  background-color: rgba(0, 136, 250, 0.1);
`;

const ResumeUpdateCareerBtn = styled.div`
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

const ResumeDetailBtn = styled.div`
  width: 210px;
  strong {
    display: block;
    height: 10px;
    padding: 15px 0 10px;
    color: blue;
    font-weight: 400;
    font-size: 13px;
  }
`;

const ResumeDetailUpdateBtn = styled.button`
  ${cursor}
  width: 210px;
  height: 62px;
  border: none;
  font-size: 16px;
  font-weight: 700;

  background-color: ${({ $color, theme }) =>
    $color ? $color : theme.color.yellow};
`;

const ResumeDetailDeleteBtn = styled.button`
  ${cursor}
  ${Flex}
  width : 210px;
  height: 50px;
  border: 1px solid #ddd;
  background-color: #fff;
  margin: 20px 0;
  span {
    margin: 8px;
  }
`;

const ResumeDetailIcon = styled.div`
  position: relative;
  overflow: hidden;
  width: ${({ $size }) => ($size ? `${$size}px` : "34px")};
  height: ${({ $size }) => ($size ? `${$size}px` : "34px")};
  img {
    position: relative;
    top: ${({ $top }) => ($top ? `${$top}px` : 0)};
    left: ${({ $left }) => ($left ? `${$left}px` : 0)};
  }
`;

export {
  ResumeDetailOutline,
  ResumeDetailInner,
  ResumeDetailLayout,
  ResumeDetailConfirm,
  ResumeDetailBtn,
  ResumeDetailUpdateBtn,
  ResumeDetailDeleteBtn,
  ResumeDetailIcon,
  ResumeUpdateInput,
  ResumeUpdateCareerBtn,
};
