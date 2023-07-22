import React, { useEffect } from 'react'
import { useHome } from '../hooks/home/useHome'


export function Home() {
  const { selectHomeJobs , selectHomeStories, getJobInfo, getStoriesInfo } = useHome()

  useEffect(()=>{
    getJobInfo()
    getStoriesInfo()
  },[])


  return (
    <div>
      <p>HomeDataJobs</p>
      {
        selectHomeJobs && selectHomeJobs.map((item)=> (
          <section key={item.id}>
            {item.companyname}
          </section>
        ))
      }
      <hr/>
      
      <p>HomeDataStories</p>
      {
        selectHomeStories && selectHomeStories.map((item)=><div key={item.id}>
          {item.content}</div>
          )
      }
    </div>
  )
}