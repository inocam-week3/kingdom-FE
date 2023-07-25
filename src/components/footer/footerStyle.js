import { styled } from "styled-components";
import { Flex } from "../common";

const FooterLayout = styled.footer`
  ${Flex}
  border-top: 1px solid #ddd;
`

const Selection1 = styled.section`
  ${Flex}
  width: 100%;
  padding: 30px 0;
`
const TextBoxLeft = styled.div`
  ${Flex}
  align-items: flex-start;

  width: 220px;
  font-size: 20px;
  line-height: 1.1;
  p{font-size : 12px;
  width:100%;
  }
  strong {font-size : 34px;}
`
const Sec1first = styled.div`
  ${Flex}
  justify-content: flex-start;
  width: 513px;
  height: 78px;
  padding-top: 3px;
  
`
const Sec1second = styled.div`
  ${Flex}
  width: 426px;
  height: 78px;
  border-left: 1px solid #ddd;
`
const Sec1third = styled.div`
  ${Flex}
  justify-content: space-between;
  box-sizing: border-box;
  width: 319px;
  height: 81px;
  border-left: 1px solid #ddd;
  font-size: 13px;
  line-height: 1.45;
  padding-bottom : 2px;
  span{
    font-size : 24px;
  }
  &:hover {
    text-decoration: underline;
  }
`
const FooterIconBox = styled.div`
  ${Flex}
  flex-direction : column;
  padding: 0 20px;
`
const FooterIcons = styled.div`
  width: 54px;
  height: 54px;
  overflow: hidden;
  img {
    margin-left: ${props => props.$left || 0};
    margin-top: ${props => props.$top || 0};
  }
`

const Selection2 = styled.section`
  ${Flex}
  width: 100%;  
  height: 60px;
  border-top: 1px solid #eee; 
  border-bottom: 1px solid #eee;
`

const Selection3 = styled.section`
  z-index: 10;
  width: 100%;
  padding: 20px 0 20px;
  border-bottom: 1px solid #eee; 

  address {
    padding: 10px 0 6px;
    font-size: 13px;
    line-height: 1.5;
    color: #666;
  }
`

const Selection4 = styled.section`
  width: 100%;
  height: 130px;
  ${Flex}
  justify-content : space-between;
`

export { FooterLayout, Selection1, Sec1first, TextBoxLeft, Sec1second, Sec1third, FooterIconBox, FooterIcons, Selection2, Selection3, Selection4 } 