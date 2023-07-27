import { css, styled } from "styled-components";
import { Flex, Grid, cursor } from "../common";

const StoriesTable = styled.div`
  ${Grid}
  height: 50px;
  ${({ $bottomLine }) =>
    $bottomLine === "th"
      ? css`
          border-bottom: 2px solid black;
        `
      : $bottomLine === "td" &&
        css`
          border-bottom: 1px solid rgb(180, 180, 180);
        `}

  .writeTitle {
    background-color: #f8f8f8;
  }
`;

const PageNationBtn = styled.div`
  ${Flex}
  ${cursor}
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #eee;
  background-color: ${({ $pageNum, theme }) =>
    $pageNum ? theme.color.yellow : "white"};
`;

const StoryDetailLayout = styled.section`
  border-top: 2px solid black;
  border-bottom: 1px solid black;
`;

const StoryDetailTitle = styled.div`
  position: relative;
  padding: 15px 20px;
  background: #fff;
  border-top: 2px solid #dadada;
  border-bottom: 1px solid #dadada;

  .title {
    font-size: 16px;
    line-height: 20px;
    font-weight: 800;
  }

  .verticalSpan {
    display: inline-block;
    width: 1px;
    height: 12px;
    margin: 0 6px;
    vertical-align: -1px;
    background-color: #dcdcdc;
  }
`;

const StoryDetailArtical = styled.article`
  position: relative;
  padding: 10px 20px 10px;
  font-size: 13px;
  line-height: 1.8;
  border-bottom: 1px solid #dadada;
`;
const StoryDetailBtn = styled.div`
  ${cursor}
  width: 90px;
  height: 32px;
  box-sizing: border-box;
  border: 1px solid #d3dae6;
  font-size: 13px;
  line-height: 30px;
  text-align: center;
  color: #777e8c;
`;

const StoryComment = styled.div`
  ${Flex}
  justify-content: flex-start;
  padding: 15px 20px;
  background: #fbfbfb;
  border-bottom: ${({ $bottomLine }) =>
    $bottomLine ? "1px solid #d3dae6" : "none"};
`;
const StoryCommtens = styled(StoryComment)`
  flex-direction: column;
  background: #fbfbfb;
  p {
    display: flex;
    width: 100%;
    word-break: break-all;
  }
`;

const StoryCommentText = styled.textarea`
  display: block;
  width: 100%;
  height: 80px;
  resize: none;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #eee;
`;

const StoryCommentTextBtn = styled.div`
  ${Flex}
  ${cursor}
  width: 150px;
  height: 80px;
  border-radius: 8px;
  font-size: 20px;
  background-color: white;
  border: 1px solid #eee;
`;

const StorieIndexBtn = styled.div`
  ${Flex}
  ${cursor}
  gap: 4px;
  margin: 10px 0;
  height: 40px;
  padding: 4px 12px;
  background-color: white;
  border: 2px solid gray;

  p {
    font-size: 20px;
  }

  ${({ $type, theme }) =>
    $type === "write" &&
    css`
      width: 150px;
      background-color: ${theme.color.blue};

      p {
        color: ${theme.color.white};
      }
    `}
`;

const Input = styled.input`
  display: block;
  padding: 12px;
  width: 100%;
  height: 100%;
  outline-style: none;
`;

const WriteBtn = styled.div`
  margin: 10px 0;
  ${Flex}
  ${cursor}
  font-size: 18px;
  width: 80px;
  height: 50px;
  ${({ $check }) =>
    $check
      ? css`
          background-color: black;
          color: white;
        `
      : css`
          border: 1px solid #dadada;
        `}
`;

export {
  StoriesTable,
  PageNationBtn,
  StoryDetailLayout,
  StoryDetailTitle,
  StoryDetailArtical,
  StoryDetailBtn,
  StoryComment,
  StoryCommtens,
  StoryCommentText,
  StoryCommentTextBtn,
  StorieIndexBtn,
  Input,
  WriteBtn,
};
