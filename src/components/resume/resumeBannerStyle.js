import styled from "styled-components";
import { Flex, cursor } from "../common";

const Outline = styled.div`
  width: 100%;
  ${Flex}
`;

const Inline = styled.div`
  ${Flex}
  background-color: #f7f7f7;
  width: 100%;
  height: 112px;
  a {
    ${Flex}
    gap : 10px;
    &:hover {
      text-decoration: underline;
    }
  }
  p {
    text-align: right;
  }
  a strong {
    color: #222;
  }
`;

const AD = styled.div`
  width: 100%;
`;

const Icon = styled.span`
  display: block;
  position: relative;
  overflow: hidden;
  ${cursor}
  width: ${({ $size }) => ($size ? `${$size}px` : "34px")};
  height: ${({ $size }) => ($size ? `${$size}px` : "34px")};
  img {
    position: relative;
    top: ${({ $top }) => ($top ? `${$top}px` : 0)};
    left: ${({ $left }) => ($left ? `${$left}px` : 0)};
  }
`;

export { Outline, Inline, Icon, AD };
