import axios from 'axios'
import React, { useEffect, useState } from 'react'
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
  const [inputValue, setInputValue] = useState({

    email:"",
    password:""
  })

  const onChangInput = () => (e) => {
    const {name, value} = e.target
    setInputValue({...inputValue, [name]:value})
  }

  const onClickLogin = (sns) => () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=ca694ae46e22b997351afa5a92c6c63a&response_type=code&redirect_uri=http://localhost:8080/api/auth/${sns}`
  }

  return (
    <div style={{height:"200vh"}}>
      {/* <input type='text' value={inputValue.email}  name="email" onChange={onChangInput} />
      <input type='password' value={inputValue.password}  name="email" onChange={onChangInput} /> */}
      <button onClick={onClickLogin("kakao")}>카카오로그인</button>

    </div>
  )
}
