import { css, styled } from "styled-components";
import { Flex } from "../common";

const ListOutline = styled.div`
  width: 100%;
  margin: 20px 0;
`;

const ListInline = styled.div`
  width: 100%;

  h2 {
    display: inline-block;
    width: 90px;
    height: 17px;
    font-size: 1.1rem;
    margin: 0 0 8px;
    strong {
      font-size: 1.1rem;
      font-weight: 500;
    }
  }
  div {
    ${Flex}
    justify-content: space-between
  }
  div {
    width: 100%;
    border-top: 2px solid #222;
    select {
      width: 120px;
      height: 26px;
      margin: 8px 3px 0 0;
      padding: 0 15px 0 3px;
    }
  }
`;

const ResumeListTable = styled.table`
  width: 100%;
  margin: 10px 0;

  thead {
    background-color: #f2f2f2;
    width: 100%;
    height: 33px;
    th {
      border-top: 2px solid #ccc;
      font-weight: 600;
      font-size: 13px;
    }
  }
  tbody {
    width: 100%;
    height: 66px;
    padding: 12px 0 10px;
    &:hover {
      background-color: #eefcff;
    }
    p {
      border: none;
    }
  }
`;

const ResumeListth = styled.td`
  width: 100%;
  border-bottom: 1px solid #e4e4e4;
  font-size: 14px;
  text-align: center;
  padding: 10px 0 11px;
  ${({ $type }) =>
    $type === "name"
      ? css`
          width: 180px;
          font-size: 1rem;
        `
      : $type === "content"
      ? css`
          width: 515px;
          text-align: left;
        `
      : $type === "career"
      ? css`
          width: 166px;
          font-size: 12px;
          strong {
            color: blue;
            font-weight: 400;
          }
        `
      : $type === "createAt"
      ? css`
          width: 100px;
        `
      : css`
          padding: 10px;
        `}
`;

export { ListOutline, ListInline, ResumeListTable, ResumeListth };
