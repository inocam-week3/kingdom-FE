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
          border-bottom: 1px solid rgb(180,180,180);
        `}
`;

const PageNationBtn = styled.div`
  ${Flex}
  ${cursor}
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #eee;
  background-color: ${({ $pageNum, theme }) => ($pageNum ? theme.color.yellow : "white")};
`;

export { StoriesTable, PageNationBtn };
