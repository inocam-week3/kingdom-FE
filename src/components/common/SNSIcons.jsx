import React from 'react'
import { SNSIcon } from './commonStyle'

export function SNSIcons({top, left, size}) {
  return <SNSIcon $size={size} $top={top} $left={left} children={<img src={require(`../../assets/images/snsicons.png`)} alt='snsicons'/>}/>
  }  
