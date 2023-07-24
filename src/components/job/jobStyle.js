import { css,styled } from "styled-components";
import {Flex} from '../common'

const JobBody = styled.div`
margin-top: 50px;
max-height: 1400px;
  ${Flex}
`
const JobListTitle = styled.div`
  ${Flex}
  left: 120px;
  padding: 10px 0;
  width: 100%;
  justify-content: flex-start;
  border-top: 1px solid #eee;
  strong {
    font-size: 19px;
    margin-right: 20px;
  }
  span {
    margin-left: 20px;
    strong {
      margin-right: 0;
      color: red;
    }
  }
`
const SortTypeList = styled.div`
  width: 100%;
  padding: 10px 0;
  border-top: 2px solid black;
`
const JobInfoTable = styled.table`
  width: 100%;
  border-top: 1px solid #aaa;
  border-collapse:collapse;
  thead {
    th {
      padding: 10px 0;
      background-color: #eee;
    border-bottom: 1px solid #bbb;
    }
  }
  tbody tr{
    &:hover {
      cursor: pointer;
      background-color: #f2fdff;
    }
  }
`
const TableContentTd = styled.td`
  border-bottom: 1px solid #ddd;
  padding: 0 40px;
  ${({ $type }) =>
    $type === "local" 
      ? css`
        width: 110px;
        line-height: 1.4;
        text-align: left;
        word-break: keep-all;
        overflow: hidden;
      `
      : $type === "title" 
      ? css`
        padding: 20px 40px;
        ${Flex}
        flex-direction: column;
        justify-content: flex-start;
      `
      : $type === "salary"
      ? css `
        width : 80px;
        text-align : right;
      `
      : css `
        width: 95px;
        text-align: center;
        `
  }
  span {
    width:100%;
    margin-bottom: 5px;
    line-height: 1.4;
  }
`
const JobsSpan = styled.span`
  color: ${props => props.color || "black"};
  font-size: ${props => props.size || "15px"};
`
export {
  JobBody,
  JobListTitle,
  SortTypeList,
  JobInfoTable,
  TableContentTd,
  JobsSpan
}