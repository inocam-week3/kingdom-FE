import { styled } from "styled-components";
import { Flex } from "../common";

const MainStoryOutline = styled.div`
  width: 100%;
  h2 {
    font-size: 24px;
    padding: 20px 0;
  }
  h3 {
    font-size: 20px;
  }
`;

const MainStoryInline = styled.div``;
const MainStoryWrapper = styled.div`
  ${Flex}
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;
const MainStoryContainer1 = styled.div`
  justify-content: space-between;
  width: 50%;
  background-color: #fff;
  border: 1px solid #eee;
  padding: 22px 19px 0;
  h3 {
    margin-bottom: 15px;
  }
  strong {
    display: inline-block;
    border-bottom: 1px solid #eee;
    width: 100%;
    height: 60px;
    padding: 20px 0;
    font-weight: normal;
    &:hover {
      text-decoration: underline;
    }
  }
  span {
    color: #5b79fe;
  }
`;
const MainStoryContainer2 = styled.div`
  width: 320px;
  height: 250px;
  margin-left: 20px;
`;

const MainStoryContainerInner = styled.div`
  ${Flex}
  height : 45px;
  justify-content: space-between;
  align-items: flex-start;
`;

const MainStoryContainer3 = styled.div`
  ${Flex}
  justify-content: flex-start;
  width: 470px;
  overflow: hidden;
`;

const MainStoryContainer4 = styled.div`
  width: 306px;
  height: 145px;
  margin-left: 20px;
  padding: 20px;
  border: 1px solid #eee;
  span {
    width: 266px;
    padding: 0 90px 0 0;
  }
  a img {
    position: absolute;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export {
  MainStoryOutline,
  MainStoryInline,
  MainStoryContainerInner,
  MainStoryWrapper,
  MainStoryContainer1,
  MainStoryContainer2,
  MainStoryContainer3,
  MainStoryContainer4,
};
