import React from 'react'
import { FigureImg } from './commonStyle'

export function Figure({type, width, imgwidth, children}) {
  return <FigureImg $type={type}  $width={width} $imgwidth={imgwidth} children={children}/>
  }  
