import React, { useEffect } from 'react'
import { useRouter } from '../hooks/commen';
import { useDispatch, useSelector } from 'react-redux';
import { getJobsDetailData, selectJobsDetail } from '../redux/modules/morkServer';
import * as JS from '../components/job/jobStyle'
import { JobDetailContent } from '../components/job/JobDetailContent';
import { instance } from '../redux/api/instance';

export function JobDetail() {
  const JobDetailData = useSelector(selectJobsDetail)
  const { id } = useRouter();
  const dispatch = useDispatch()
  
  useEffect(()=>{
    async function getJobInfo() {
      try {
        const res = await instance.get(`/api/job/${id}`);
        dispatch(getJobsDetailData(res.data.info))
      } catch (error) {
        alert('데이터를 불러오지 못 했습니다', error);
      }
    } getJobInfo()
  },[dispatch,id])

  return (
    <div>
      <JS.JobLocation>홈 &gt; 채용정보 &gt; <strong>상세정보</strong></JS.JobLocation>
      <JobDetailContent
        createAt={JobDetailData.createdAt}
        title={JobDetailData.title}
        companyname={JobDetailData.companyname}
        salary={JobDetailData.salary}
        recruitmentPersonNum={JobDetailData.recruitpersonnum}
        logoimage={JobDetailData.logoimage}
        recruitendperiod={JobDetailData.recruitendperiod}
        managername={JobDetailData.managername}
        manageremail={JobDetailData.manageremail}
        content={JobDetailData.content}
        workinfraimage={JobDetailData.workinfraimage}
        ></JobDetailContent>
    </div>
  )
}
