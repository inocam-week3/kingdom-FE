import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useRoter } from '../hooks/commen';

export function JobDetail() {
  const [JobDetailData, setJobDetailData] = useState([]);
  const { navigate, id } = useRoter();
  
  useEffect(()=>{
    async function getJobInfo() {
      try {
        const res = await axios.get(`/api/job/${id}`);
        setJobDetailData(res.data.info);
      } catch (error) {
        console.log('데이터를 불러오지 못 했습니다', error);
      }
    } getJobInfo()
  },[])

  const clickHandler = () => navigate('/');

  const onDeleteJob = (id) => async () => {
    try {
      const res = await axios.delete(`/api/job/${id}`);
      console.log(res);
      alert("삭제되었습니다.")
      navigate(-1)
    } catch (error) {
      console.log('데이터를 삭제하지 못했습니다', error);
    }
  }

  const onUpdateJob = (id) => async () => {
    try {
      const res = await axios.patch(`/api/job/${id}`, {title:"수정하기"});
      setJobDetailData(res.data.info);
    } catch (error) {
      console.log('데이터를 수정하지 못했습니다.', error);
    }
  }

  return (
    <div>Jobdetail
      {JobDetailData && (
      <div>
        {JobDetailData.title}
        <button onClick={onDeleteJob(JobDetailData.id)}>삭제하기</button>
        <button onClick={onUpdateJob(JobDetailData.id)}>수정하기</button>
      </div>)}
      <button onClick={()=>clickHandler}>홈으로</button>
    </div>
  )
}
