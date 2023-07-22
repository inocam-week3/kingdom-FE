import { styled } from "styled-components";
import { Flex } from "../common";

const HeaderOutline = styled.header`
  width: 100%;
`;

const NavTop = styled.div`
  position: relative;
  height: 110px;
  padding-top: 24px;
  border-bottom: 1px solid #eee;
`;

const NavBotom = styled.div`
  ${Flex}
  width: ${({ $width }) => ($width ? $width : "1260px")};

  border-bottom: 2px solid
    ${({ $color, theme }) => ($color ? $color : theme.color.blackdada)};
  height: 56px;
`;



export { HeaderOutline,  NavTop, NavBotom }