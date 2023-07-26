import { useState, React, useRef, useEffect } from 'react'
import * as JS from '../components/job/jobStyle'
import { instance } from '../redux/api/instance';

export function JobWrite() {
  const logoRef = useRef(null);
  const infraRef = useRef(null);
  const [writeContent, setWriteContent] = useState({});
  const [isEnd, setIsEnd] = useState(true);
  const [pnum, setPnum] = useState("");
  const [logoImgUrl, setLogoImgUrl] = useState(null);
  const [workImgUrl, setWorkImgUrl] = useState(null);
 
  const postJobWrite = () => {
    setNowDate();
    const formData = new FormData();

    for (const [key, value] of Object.entries(writeContent)) {
      formData.append(key, value);
    }
    if (logoRef.current && logoRef.current.files.length > 0) {
      formData.append('logoImage', logoRef.current.files[0]);
    }
    if (infraRef.current && infraRef.current.files.length > 0) {
      formData.append('infraImage', infraRef.current.files[0]);
    }

    instance.post(`/api/job`, formData) 
      .then((response) => {
        if (response.status === 200) {
          console.log('공고 등록 성공!');
        } else {
          console.error('공고 등록 실패:', response);
        }
      })
      .catch((error) => {
        console.error('네트워크 오류:', error);
      });
  };
  const setWC = (key, value) => {
    const newWrite = {...writeContent};
    newWrite[key] = value;
    setWriteContent(newWrite);
  }
  const setEndDate = () => {
    setIsEnd(!isEnd);
    isEnd && setWC('recruitmentEndPeriod', "상시모집");
  }
  const setRecruitPersons = (value) => {
    setPnum(value);
    setWC('recruitmentPersonNum',value);
  }
  const setNowDate = () => {
    const month = {Jan:1,Feb:2,Mar:3,Apr:4,May:5,Jun:6,Jul:7,Aug:8,Sep:9,Oct:10,Nov:11,Dec:12};
    let d = new Date();
    d = String(d).split(" ");
    const dArray = [d[3], month[d[1]], d[2]];
    const startDay = dArray.join('-');
    setWC('recruitmentStartPeriod', startDay);
  }
  const handleLogoImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setLogoImgUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setLogoImgUrl(null);
    }
  };

  const handleInfraImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setWorkImgUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setWorkImgUrl(null);
    }
  };



  return (
    <JS.JobWriteBody>
      <form>
      <h3>구인공고 작성</h3>
      <JS.WriteSection>
        <JS.WriteTitle>
          <strong>모집내용</strong>
          <p>어떤 일을 담당할 알바생을 찾으시나요?</p>
        </JS.WriteTitle>
        <JS.WriteInputForm >
          <div>
            <section>
              <strong>공고제목</strong>
              <p>필수</p>
            </section>
              <input
                type='text'
                value={writeContent.title || ''}
                placeholder='공고 제목을 입력해 주세요. (최대 42자)'
                maxLength={42}
                onChange={(e)=>setWC('title',e.target.value)}
                ></input>
          </div>
          <div>
            <section>
              <strong>공고내용</strong>
              <p>필수</p>
            </section>
            <textarea
              value={writeContent.content}
              placeholder='공고 내용을 입력해 주세요.'
              onChange={(e)=>setWC('content',e.target.value)}
              ></textarea>
          </div>
          <div>
            <section>
              <strong>급여</strong>
            </section>
            <input
              value={writeContent.salary||0}
              type='number'
              onChange={(e)=>setWC('salary',e.target.value)}
              ></input>
          </div>
          <div>
            <section>
              <strong>모집인원</strong>
              <p>필수</p>
            </section>
            <div style={{border: "none", height: "35px"}}>
              <input type='radio' name='personNum' 
              value={"O명"}
              onClick={(e)=>setRecruitPersons(e.target.value)}></input><span>O명 (10명 미만)</span>
              <input type='radio' name='personNum' value={"OO명"}
              onClick={(e)=>setRecruitPersons(e.target.value)}></input><span>OO명 (100명 미만)</span>
              <input type='radio' name='personNum' value={"N"}
              onClick={(e)=>setRecruitPersons(e.target.value)}></input><span>직접입력</span>
              {
                pnum==="N" && <input type='number'
              style={{width:"80px",  height: "40px", marginLeft: "-70px", textAlign: "center"}}
              value={writeContent.recruitmentPersonNum || 0}
              onChange={(e)=>setWC('recruitmentPersonNum',e.target.value)}></input>
            }
            {
                pnum==="N" && <p style={{marginLeft:"10px"}}>명</p>
            }
            </div>
          </div>
          <div style={{border: "none"}}>
            <section>
              <strong>모집마감</strong>
              <p>필수</p>
            </section>
            <div style={{border: "none", width:"100%"}}>
              <input style={{width:"20px", marginRight:"10px"}}
              type='checkbox'
                onClick={()=>setEndDate()}/>
                <p>모집시까지 (상시)</p>
              {isEnd && <input style={{width:"500px", marginLeft: "107px", padding:"0 20px"}} type='date' 
              onChange={(e)=>setWC('recruitmentEndPeriod',e.target.value)}/>}
            </div>
          </div>
        </JS.WriteInputForm>
      </JS.WriteSection>
      <JS.WriteSection>
        <JS.WriteTitle>
          <strong>근무지 정보</strong>
          <p>구직자가 근무하게 될 근무지 정보를 입력해주세요.</p>
        </JS.WriteTitle>
        <JS.WriteInputForm>
          <div>
              <section>
                <strong>근무회사명</strong>
                <p>필수</p>
              </section>
              <input
                type='text'
                maxLength={20}
                onChange={(e)=>setWC('companyname', e.target.value)}
                ></input>
            </div>
            <div>
              <section>
                <strong>근무지 위치</strong>
                <p>필수</p>
              </section>
              <input
                type='text'
                onChange={(e)=>setWC('location', e.target.value)}
                ></input>
            </div>
            <div style={{border: "none"}}>
              <section>
                <strong>근무지 로고<br/>/사진</strong>
                <p>필수</p>
              </section>
              <JS.ImageUploadForm>
                <tbody>
                  <tr style={{height:"120px", marginBottom: "10px"}
                  }>
                    <th style={{backgroundColor: "#fcfcfc"}}><p>근무지 로고</p></th>
                    <th style={{width:"300px", textAlign:"center"}}>
                    {logoImgUrl && <img style={{ height: "110px", overflow: "hidden" }} src={logoImgUrl} alt='로고이미지를 등록하세요.' />}
                    </th>
                    <th><input accept='image/*' type='file' onChange={handleLogoImageChange} ref={logoRef} /></th>
                  </tr>
                  <tr style={{height:"200px"}}>
                    <th style={{backgroundColor: "#fcfcfc"}}><p>근무환경</p></th>
                    <th style={{width:"300px", textAlign:"center"}}>
                    {workImgUrl && <img style={{ height: "190px", overflow: "hidden" }} src={workImgUrl} alt='근무환경 사진을 등록하세요.' />}
                    </th>
                    <th><input accept='image/*' type='file' onChange={handleInfraImageChange} ref={infraRef} /></th>
                  </tr>
                  </tbody>
              </JS.ImageUploadForm>
              </div>
        </JS.WriteInputForm>
      </JS.WriteSection>
      <JS.WriteSection>
        <JS.WriteTitle>
          <strong>담당자 정보</strong>
          <p>구직자의 연락을 직접 받으실 담당자 정보를 입력해주세요.</p>
        </JS.WriteTitle>
        <JS.WriteInputForm>
          <div>
              <section>
                <strong>담당자명</strong>
                <p>필수</p>
              </section>
            <input
              type='text'
              maxLength={12}
              onChange={(e)=>setWC('managerName',e.target.value)}
              ></input>
            </div>
            <div style={{border: "none"}}>
            <section>
              <strong>이메일</strong>
              <p>필수</p>
            </section>
          <input
            type='email'
            onChange={(e)=>setWC('managerEmail',e.target.value)}
            ></input>
          </div>
        </JS.WriteInputForm>
      </JS.WriteSection>
      </form>
      <JS.SubmitButton
        type='submit'
        onClick={()=>postJobWrite()}><p>공고 등록하기</p></JS.SubmitButton>
    </JS.JobWriteBody>
  )
}