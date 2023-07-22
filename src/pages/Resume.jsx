import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useRoter } from '../hooks/commen'

export function Resume() {
  const {navigate} = useRoter()
  const [resumes, setResumes] = useState([])
  useEffect(()=>{
    async function getResumeData(){
      try{
        const res = await axios.get(`/api/resumes`)
        setResumes(res.data.info)
      }
      catch (error) {
        console.log("데이터를 가져오지 못했습니다.")
      }
    }
    getResumeData()
  },[])

  return (
    <div>Resume
      <button onClick={()=>navigate(`/`)}>HOME</button>
      {
        resumes && resumes.map((item)=>
          <section key={item.id}
            onClick={()=>navigate(`/resume/${item.id}`)}>
            {item.username}
          </section>
        )
      }


    </div>
  )
}

