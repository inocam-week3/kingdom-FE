import React, {useState, useEffect} from "react"
import axios from "axios";
import {useRouter} from "../hooks/commen"

export function ResumeDetail() {
  const [ResumeDetailData, setResumeDetailData] = useState([]);
  const {onNavigate, id} = useRouter();

  useEffect(()=>{
    async function getResumeInfo() {
      try {
        const res = await axios.get(`/api/resumes/${id}`);
        console.log(res);
        setResumeDetailData(res.data.info);
      } catch (error) {
        console.log('구직자 상세 데이터를 불러오지 못 했습니다', error);
      }
    } getResumeInfo()
  },[id])

  const onDeleteJob = (id) => async () => {
    try {
      const res = await axios.delete(`/api/resumes/${id}`);
      console.log(res);
      alert("삭제되었습니다.")
      onNavigate(-1)()
    } catch (error) {
      console.log('데이터를 삭제하지 못했습니다', error);
    }
  }

  const onUpdateJob = (id) => async () => {
    try {
      const res = await axios.patch(`/api/resumes/${id}`, {username:"수정하기"});
      setResumeDetailData(res.data.info);
    } catch (error) {
      console.log('데이터를 수정하지 못했습니다.', error);
    }
  }

  return (
    <div>Resumedetail
          {ResumeDetailData && ResumeDetailData.username}
          <button onClick={onDeleteJob(ResumeDetailData.id)}>삭제하기</button>
        <button onClick={onUpdateJob(ResumeDetailData.id)}>수정하기</button>
      <button onClick={onNavigate('/')}>홈으로</button>

    </div>
  )
}
