import React, { useEffect } from 'react'
import { useHome } from '../hooks/home/useHome'
import { JobItem } from '../components/home/JobItem'
import {HomeJobListTitle, JobListWrapper} from '../components/home/homeStyle'
import { HomeStory } from "../components/home";

export function Home() {
  const { selectHomeJobs , selectHomeStories, getJobInfo, getStoriesInfo } = useHome()

  useEffect(() => {
    getJobInfo();
    getStoriesInfo();
  }, []);

  return (
    <div>
      <HomeJobListTitle>최신 채용정보</HomeJobListTitle>
      <JobListWrapper>
        {selectHomeJobs &&
          selectHomeJobs.map((item, index) => (
            index <10 &&
            <JobItem
              key={item.id}
              id={item.id}
              companyname={item.companyname}
              title={item.title}
              location={item.location}
              salary={item.salary}
              logoImage={item.logoImage}
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
      <HomeStory />
    </div>
  );
}
