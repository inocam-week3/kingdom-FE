import React, { useEffect } from 'react'
import { useHome } from '../hooks/home/useHome'


export function Home() {
  const { selectHomeJobs , selectHomeStories, getJobInfo, getStoriesInfo } = useHome()

  useEffect(()=>{
    getJobInfo()
    getStoriesInfo()
  },[])


  return (
    <div style={{height:"200vh"}}>
      <p>CICD 테스트</p> 
       <div>
        <p>JobListWrapper</p>
       </div>
      {/*{
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
      } */}
    </div>
  )
}