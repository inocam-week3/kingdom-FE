import React, { useEffect } from 'react'
import { useHome } from '../hooks/home/useHome'
import { useRouter } from '../hooks/commen';
import { JobItem } from '../components/home/JobItem'
import {JobListWrapper} from '../components/home/homeStyle'


export function Home() {
  const { onNavigate } = useRouter();
  const { selectHomeJobs , selectHomeStories, getJobInfo, getStoriesInfo } = useHome()

  useEffect(()=>{
    getJobInfo()
    getStoriesInfo()
  },[])


  return (
    <div style={{height:"200vh"}}>
      <p>CICD 테스트</p> 

      <h3>최신 채용정보</h3>
       <JobListWrapper>
        {
          selectHomeJobs && selectHomeJobs.map((item)=> (
            <JobItem
            key={item.id}
              id={item.id}
              companyname={item.companyname}
              title={item.title}
              />
            ))
        }
       </JobListWrapper>
           {/*<section key={item.id}>
            {item.companyname}
          </section>
        ))
      }
      <hr/>
      
      <p>HomeDataStories</p>
      {
        selectHomeStories && selectHomeStories.map((item)=><div key={item.id}>
          {item.content}</div>
          ) */}
    </div>
  )
}