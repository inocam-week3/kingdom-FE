import axios from 'axios'
import React, {useEffect, useState} from 'react'


export function Home() {
  const [HomeDataJobs, setHomeDataJobs] = useState([])
  const [HomeDataStories, setHomeDataStories] = useState([])
  useEffect(()=>{
    async function getJobInfo() {
      try{
        const res = await axios.get(`/api/homejobs`)
        setHomeDataJobs(res.data.info)
      }
      catch (error){
        console.log("데이터를 불러오지 못함")
      }
    }
    getJobInfo()
  },[])

  useEffect(()=>{
    async function getStoriesInfo() {
      try {
        const res = await axios.get(`/api/homestories`)
        console.log(res.data.info)
        setHomeDataStories(res.data.info)
      } catch (error) {
        console.log("데이터를 불러오지 못했습니다")
      }
    }
    getStoriesInfo()
  },[])
  return (
    <div>
      <p>HomeDataJobs</p>
      {
        HomeDataJobs && HomeDataJobs.map((item)=> (
          <section key={item.id}>
            {item.companyname}
          </section>
        ))
      }
      <hr/>
      
      <p>HomeDataStories</p>
      {
        HomeDataStories && HomeDataStories.map((item)=><div key={item.id}>
          {item.content}</div>
          )
      }
    </div>
  )
}