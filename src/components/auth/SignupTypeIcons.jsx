import React from 'react'
import { SignupTypeIcon } from '../common'

export function SignupTypeIcons({top, left}) {
  return <SignupTypeIcon $size={48} $top={top} $left={left} children={<img src={require(`../../assets/images/usetypeIcons.png`)} alt='albaicons'/>}/>
  }  

  