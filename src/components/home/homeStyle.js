import { styled } from "styled-components";
import {Flex} from '../common'

const HomeJobListTitle = styled.h3`
  padding-top: 20px;
  font-size: 24px;
`
const JobListWrapper = styled.div`
  ${Flex}
  justify-content: flex-start;
  gap: 15px;
  padding-top: 20px;
  width: 100%;
  //max-height: 437px;
  flex-wrap: wrap;
  overflow: hidden;
`
const JobListSection = styled.section`
  ${Flex}
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  width: 240px;
  padding: 15px;
  border: 2px solid #fb0;

  section {
    width: 100%;
    ${Flex}
    flex-direction: row;
    justify-content: space-between;
  }
  p{
    font-size: 13px;
    color: #999;
  }
`
const JobListContent = styled.div`
  width: 100%;
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
  HomeJobListTitle,
  JobListWrapper,
  JobListSection,
  JobListLogo,
  JobListContent
}