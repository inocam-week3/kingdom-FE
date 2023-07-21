import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useRoter } from '../hooks/commen';

export function Job() {
  const { navigate } = useRoter();
  const [jobDatas, setJobDatas] = useState([])
  useEffect(()=>{
    async function getJobInfo(){
      try{
        const res = await axios.get(`/api/job`)
        setJobDatas(res.data.info)
      }
      catch(error){
        console.log("데이터를 불러오지 못함")
      }
    }
    getJobInfo()
  },[])

  return (
      <div>JobDatas
        {
          jobDatas && jobDatas.map((item)=>(
            <section key={item.id}>
              {item.title}
              <button onClick={()=>{navigate(`/job/${item.id}`)}}>Detail</button>
            </section>
          ))
        }
        <button onClick={()=>{navigate('/')}}>Home</button>
      </div>
  )
}

