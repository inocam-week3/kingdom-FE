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

  return (
    <div>Jobdetail
      {JobDetailData && <div>{JobDetailData.title}</div>}
      <button onClick={()=>clickHandler}>홈으로</button>
    </div>
  )
}
