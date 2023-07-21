import axios from 'axios'
import React, { useEffect } from 'react'
// import { authinfo } from '../mock/testData/auth'

export function Signup() {
  useEffect(()=>{
    async function comformEmail () {
      try {
        // const res = await axios.get(`/api/auth/email?=${authinfo.email}`) // 중복일 때
        const res = await axios.get(`/api/auth/email?=${"asdfasdf@naver.com"}`) // 사용가능한 이메일 때 
        console.log(res.data.info)
        return 
      }
      catch (error) {
        console.log(error.response.data.error)
      }
    }
    comformEmail()
  },[])
  return (
    <div>Signup</div>
  )
}
