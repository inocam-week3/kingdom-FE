import React,{useState, useEffect} from 'react'
import { useRoter } from "../hooks/commen"
import axios from "axios"

export function Story() {
  const [Story, setStory] = useState([])
  const { onNavigate } = useRoter()

  useEffect(()=>{
    async function getStoryData(){
      try {
        const res = await axios.get('/api/stories')
        setStory(res.data.info)
      } catch (error) {
        console.log('error',error.response.data.info) // 서버 messgae가 아니라, 코드가? 
      }
    }
    getStoryData()
  },[])

  return (
    <div>Story
      {Story && Story.map((item) => (
        <section key={item.id}>
          {item.title}
          <button onClick={onNavigate(`/story/${item.id}`)}>안쪽으로</button>
        </section>
      ))
      }
    </div>
  )
}