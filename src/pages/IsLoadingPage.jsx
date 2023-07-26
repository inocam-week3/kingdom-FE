import React from 'react'
import { Figure } from '../components/common'


export function IsLoadingPage() {
  return (
    <Figure 
    children={<img src={require(`../assets/images/cartoonsnailloading.png`)} alt="cartoonsnailloading"/>}/>
  )
}


// {type, width, imgwidth, onClick, $type, children, ...rest}