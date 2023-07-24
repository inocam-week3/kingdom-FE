import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "../hooks/commen";
import ResumeBanner from "../components/resume/ResumeBanner";

export function Resume() {
  const {onNavigate} = useRouter()
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
    <div>
      <ResumeBanner />
      <button onClick={onNavigate(`/`)}>HOME</button>
      {
        resumes && resumes.map((item)=>
          <section key={item.id}
            onClick={onNavigate(`/resume/${item.id}`)}>
            {item.username}
          </section>
        )
      }


    </div>
  )
}

