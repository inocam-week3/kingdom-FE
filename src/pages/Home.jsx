import axios from 'axios'
import React, { useEffect } from 'react'

export function Home() {
  useEffect(()=> {
    async function authLogin () {
        try {
          const res = await axios.get(`/api/auth/login`)
          console.log(res.headers.authorization)
        }
        catch (error) {
          console.log(error.response.data.message)
        }
    }
    authLogin()
    },[])
  return (
    <div>
      Home -MSW 테스트
    </div>
  )
}