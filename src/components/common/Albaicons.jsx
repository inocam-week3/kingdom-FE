import React from 'react'
import { Albaicon } from './commonStyle'

export function Albaicons({top, left, size}) {
  return <Albaicon $size={size} $top={top} $left={left} children={<img src={require(`../../assets/images/albaicons.png`)} alt='albaicons'/>}/>
  }  
