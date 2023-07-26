import axios from 'axios'
import React, {useEffect} from 'react'
import { useRouter } from '../hooks/commen';
import { useDispatch, useSelector } from 'react-redux';
import { getJobsData, selectJobsDate } from '../redux/modules/morkServer/morkJobsSlice';

import * as JS from '../components/job/jobStyle'
import { JobInfo } from '../components/job/JobInfo';
import { instance } from '../redux/api/instance';

export function Job() {
  const { onNavigate } = useRouter();
  const dispatch = useDispatch()
  const jobDatas = useSelector(selectJobsDate)
  useEffect(()=>{
    async function getJobInfo(){
      try{
        const res = await instance.get(`/api/job`)
        dispatch(getJobsData(res.data.info))
      }
      catch(error){
        console.log("데이터를 불러오지 못함")
      }
    }
    getJobInfo()
  },[dispatch])
// JobDatas {
//   jobDatas && jobDatas.map((item)=>(
//     <section key={item.id}>
//       {item.title}
//       <button onClick={onNavigate(`/job/${item.id}`)}>Detail</button>
//     </section>
//   ))
// }

  return (
      <JS.JobBody $fd="column">
        <JS.JobListTitle>
          <strong>일반 채용정보</strong>
          |
          <span> 총 <strong>{jobDatas.length}</strong> 건</span>
        </JS.JobListTitle>
        <JS.SortTypeList>정렬조건</JS.SortTypeList>
        <JS.JobInfoTable>
          <thead>
            <tr>
              <th>근무지</th>
              <th>회사명/공고제목</th>
              <th>급여</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>
            {
              jobDatas && jobDatas.map((item)=>(
                <JobInfo key={item.id}
                  id={item.id}
                  local={item.local}
                  companyname={item.companyname}
                  title={item.title}
                  salary={item.salary}
                  createAt={item.createAt} >
                  {item.title}
                </JobInfo>
            ))}
          </tbody>
        </JS.JobInfoTable>
      </JS.JobBody>
  )
}

