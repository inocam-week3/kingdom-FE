import { styled } from "styled-components";
import {Flex} from '../common'

const JobListWrapper = styled.div`
  ${Flex}
  justify-content: flex-start;
  gap: 15px;
  padding-top: 20px;
  width: 100%;
  max-height: 437px;
  flex-wrap: wrap;
  overflow: hidden;
`
const JobListSection = styled.section`
  cursor: pointer;
  width: 240px;
  height: 200px;
  padding: 15px;
  border: 2px solid #fb0;

  p{
    font-size: 13px;
    color: #999;
  }
`
const JobListContent = styled.div`
  height: 70px;
  padding-top: 5px;
  overflow: hidden;
  p{
    color: black;
    font-size: 13px;
    font-weight: bold;
    line-height: 20px;
  }
`
const JobListLogo = styled.div`
  width: 100%;
  height: 80px;
  border: 1px solid;
`

export {
  JobListWrapper,
  JobListSection,
  JobListLogo,
  JobListContent
}