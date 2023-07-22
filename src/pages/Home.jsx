import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHomeMorkDataJobs, getHomeMorkDataStories, selectGetHomeJobs, selectGetHomeStories } from '../redux'


export function Home() {
  const selectHomeJobs = useSelector(selectGetHomeJobs)
  const selectHomeStories = useSelector(selectGetHomeStories)
  console.log(selectHomeStories);
  const dispatch = useDispatch()

  useEffect(()=>{
    async function getJobInfo() {
      try{
        const res = await axios.get(`/api/homejobs`)
        dispatch(getHomeMorkDataJobs(res.data.info))
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
        dispatch(getHomeMorkDataStories(res.data.info))

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