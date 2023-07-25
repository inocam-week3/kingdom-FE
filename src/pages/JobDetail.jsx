import React, { useEffect } from 'react'
import axios from 'axios';
import { useRoter } from '../hooks/commen';
import { useDispatch, useSelector } from 'react-redux';
import { getJobsDetailData, selectJobsDetail, updateJobsDetailData } from '../redux/modules/morkServer';
import * as JS from '../components/job/jobStyle'
import { JobDetailContent } from '../components/job/JobDetailContent';

export function JobDetail() {
  const JobDetailData = useSelector(selectJobsDetail)
  const { onNavigate, id } = useRoter();
  const dispatch = useDispatch()
  
  useEffect(()=>{
    async function getJobInfo() {
      try {
        const res = await axios.get(`/api/job/${id}`);
        dispatch(getJobsDetailData(res.data.info))
      } catch (error) {
        console.log('데이터를 불러오지 못 했습니다', error);
      }
    } getJobInfo()
  },[])

  const onDeleteJob = (id) => async () => {
    try {
      await axios.delete(`/api/job/${id}`);
      alert("삭제되었습니다.")
      onNavigate(-1)()
    } catch (error) {
      console.log('데이터를 삭제하지 못했습니다', error);
    }
  }

  const onUpdateJob = (id) => async () => {
    try {
      const res = await axios.patch(`/api/job/${id}`, {title:"수정하기"});
      dispatch(updateJobsDetailData(res.data.info))
    } catch (error) {
      console.log('데이터를 수정하지 못했습니다.', error);
    }
  }

  return (
    <div>
      <JS.JobLocation>홈 &gt; 채용정보 &gt; <strong>상세정보</strong></JS.JobLocation>
        <button onClick={onDeleteJob(JobDetailData.id)}>삭제하기</button>
        <button onClick={onUpdateJob(JobDetailData.id)}>수정하기</button>
      <JobDetailContent
        createAt={JobDetailData.createAt}
        title={JobDetailData.title}
        companyname={JobDetailData.companyname}
        salary={JobDetailData.salary}
        ></JobDetailContent>
      {JobDetailData && (
      <div>
        {JobDetailData.title}
      </div>)}
    </div>
  )
}
