import React from 'react'
import { LoginIcon } from './commonStyle'

export function LoginContents({top, left, size}) {
  return <LoginIcon $size={size} $top={top} $left={left} children={<img src={require(`../../assets/images/loginContents.png`)} alt='loginContents'/>}/>
  }  
