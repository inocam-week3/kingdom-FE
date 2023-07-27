import React from 'react'
import { AlbaIcon } from './commonStyle'

export function AlbaIcons({top, left, size}) {
  return <AlbaIcon $size={size} $top={top} $left={left} children={<img src={require(`../../assets/images/albaicons.png`)} alt='albaicons'/>}/>
  }  

  