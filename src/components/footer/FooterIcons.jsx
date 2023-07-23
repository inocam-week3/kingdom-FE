import React from 'react'
import { styled } from 'styled-components';
import { cursor } from '../common';

export function FooterIcons({top, left, size}) {
  return <FooterIcon $size={size} $top={top} $left={left} children={<img src={require(`../../assets/images/albaicons.png`)} alt='albaicons'/>}/>
  }  

const FooterIcon = styled.div`
  ${cursor}
  position: relative;
  display: block;
  width: ${({ $size }) => ($size ? `${$size}px` : "34px")};
  height: ${({ $size }) => ($size ? `${$size}px` : "34px")};
  overflow: hidden;

  img {
    position: relative;
    display: block;
    width: 150px;
    top: ${({ $top }) => ($top ? `${$top}px` : 0)};
    left: ${({ $left }) => ($left ? `${$left}px` : 0)};
  }
`;