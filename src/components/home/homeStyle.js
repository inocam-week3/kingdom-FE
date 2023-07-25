import { styled } from "styled-components";
import {Flex} from '../common'

const JobListWrapper = styled.div`
  ${Flex}
  justify-content: flex-start;
  gap: 15px;
  width: 100%;
  flex-wrap: wrap;
  
`
const JobListSection = styled.section`
  width: 240px;
  height: 150px;
  padding: 15px;
  border: 2px solid #fb0;

  p{
    font-size: 13px;
    font-weight: bold;
  }
`
const JobListLogo = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid;

`

export {
  JobListWrapper,
  JobListSection,
  JobListLogo
}