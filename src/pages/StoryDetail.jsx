import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useRoter } from '../hooks/commen';

export function StoryDetail() {
  const { navigate, id } = useRoter();
  const [storyDetailData, setstoryDetailData] = useState([])

  useEffect(()=>{
    async function getStoryDetails() {
      try{
        const res = await axios.get(`/api/stories/${id}`)
        console.log(res.data.info);
        setstoryDetailData(res.data.info)
      }
      catch (error) {
        console.log("GET 실패")
      }
    }
    getStoryDetails()
  },[])

  const onDeleteJob = (id) => async () => {
    try {
      const res = await axios.delete(`/api/stories/${id}`);
      console.log(res);
      alert("삭제되었습니다.")
      navigate(-1)
    } catch (error) {
      console.log('데이터를 삭제하지 못했습니다', error);
    }
  }

  const onUpdateJob = (id) => async () => {
    try {
      const res = await axios.patch(`/api/stories/${id}`, {username:"수정하기"});
      setstoryDetailData(res.data.info);
    } catch (error) {
      console.log('데이터를 수정하지 못했습니다.', error);
    }
  }


  return (
    <div>Storydetail
      <section>
        <h2>{storyDetailData.title}</h2>
        <p>작성자 : {storyDetailData.username}</p>
        <p>{storyDetailData.content}</p>
        <img src={storyDetailData.image} /> <br />
        <button onClick={onDeleteJob(storyDetailData.id)}>삭제하기</button>
        <button onClick={onUpdateJob(storyDetailData.id)}>수정하기</button>
      </section>
    </div>
  )
}
