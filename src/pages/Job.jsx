import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getJobsData, selectJobsDate } from '../redux/modules/morkServer/morkJobsSlice';

import * as JS from '../components/job/jobStyle'
import { JobInfo } from '../components/job/JobInfo';
import { instance } from '../redux/api/instance';

export function Job() {   
  const [ pageNum, setPageNum] = useState(1);
  const [ pageSize, setPageSize] = useState(10);
  const [ totalJobs, setTotalJobs] = useState(0);
  const [ pages, setPages ] = useState(1);
  const dispatch = useDispatch()
  const jobDatas = useSelector(selectJobsDate)
  useEffect(()=>{
    async function getJobInfo(){
      try{
        const res = await instance.get(`/api/job?page=${pageNum}&size=${pageSize}`)
        dispatch(getJobsData(res.data.info.content))
        setTotalJobs(res.data.info.totalElements)
        setPages(res.data.info.totalPages)
      }
      catch(error){
        alert("데이터를 불러오지 못함")
      }
    }
    getJobInfo()
  },[dispatch, pageNum, pageSize])

  return (
      <JS.JobBody $fd="column" >
        <JS.JobListTitle>
          <strong>일반 채용정보</strong>
          |
          <span> 총 <strong>{totalJobs}</strong> 건</span>
        </JS.JobListTitle>
        <JS.SortTypeList>
        <select style={{height:"30px", width:"150px", textAlign:"center"}}
          onChange={(e)=>{
            setPageSize(e.target.value)
            setPageNum(1)
            }}>
            <option defaultValue value={10}>10개씩 보기</option>
            <option value={20}>20개씩 보기</option>
            <option value={40}>40개씩 보기</option>
          </select>
        </JS.SortTypeList>
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
                  location={item.location}
                  companyname={item.companyname}
                  title={item.title}
                  salary={item.salary}
                  createAt={item.createdAt} >
                  {item.title}
                </JobInfo>
            ))}
          </tbody>
        </JS.JobInfoTable>
        <JS.PagenationButtons>
        {
        Array.from({ length: pages }, (_, index) => (
        <button
          key={index}
          name='pageCount'
          onClick={()=>setPageNum(index+1)}> {index+1} </button>
      ))}
      </JS.PagenationButtons>
      </JS.JobBody>
  )
}

