import React from 'react'
import { FigureImg } from './commonStyle'

export function Figure({type, width, imgwidth, onClick, $type, children, ...rest}) {
  return <FigureImg $type={type} $width={width} $imgwidth={imgwidth} onClick={onClick} {...rest} children={children}/>
  }  
