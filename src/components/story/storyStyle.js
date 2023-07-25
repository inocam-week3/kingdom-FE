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
  border-bottom: 1px solid #d3dae6;
`
const StoryCommtens = styled(StoryComment)`
  flex-direction: column;
  background: #fbfbfb;
  border-bottom: none;
  p {
    display: flex;
    width: 100%;
    word-break: break-all;
  } 
`

export {
  StoriesTable,
  PageNationBtn,
  StoryDetailLayout,
  StoryDetailTitle,
  StoryDetailArtical,
  StoryDetailBtn,
  StoryComment,
  StoryCommtens
};
