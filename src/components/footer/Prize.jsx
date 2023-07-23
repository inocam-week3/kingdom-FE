import React from 'react'
import { styled } from 'styled-components';
import { cursor } from '../common';

export function Prize({top, left, size}) {
  return <PrizeIcon $size={size} $top={top} $left={left} children={<img src={require(`../../assets/images/prize_202201.jpeg`)} alt='albaicons'/>}/>
  }  

const PrizeIcon = styled.div`
  ${cursor}
  position: relative;
  display: block;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) =>`${$size}px`};
  overflow: hidden;

  img {
    position: relative;
    display: block;
    top: ${({ $top }) => ($top ? `${$top}px` : 0)};
    left: ${({ $left }) => ($left ? `${$left}px` : 0)};
  }
`;