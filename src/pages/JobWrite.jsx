import { useState, React } from 'react'
import * as JS from '../components/job/jobStyle'

export function JobWrite() {
  const [writeContent, setWriteContent] = useState({});
  const [isEnd, setIsEnd] = useState(true);
  const setWC = (key, value) => {
    const newWrite = {...writeContent};
    newWrite[key] = value;
    console.log(newWrite);
    setWriteContent(newWrite);
  }
  const setEndDate = () => {
    setIsEnd(!isEnd);
    console.log(isEnd);
    isEnd && setWC('recruitmentEndPeriod', "상시모집");
    }

  return (
    <JS.JobWriteBody>
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
                value={writeContent.title}
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
              value={writeContent.docs}
              placeholder='공고 내용을 입력해 주세요.'
              onChange={(e)=>setWC('docs',e.target.value)}
              ></textarea>
          </div>
          <div>
            <section>
              <strong>모집인원</strong>
              <p>필수</p>
            </section>
          </div>
          <div style={{border: "none", padding:"0"}}>
            <section>
              <strong>모집마감</strong>
              <p>필수</p>
            </section>
            <div style={{border: "none", width:"100%"}}>
              <input style={{width:"20px", marginRight:"10px", color:"#fff230"}}type='checkbox'
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
            <div style={{border: "none"}}>
              <section>
                <strong>근무지 로고<br/>/사진</strong>
              </section>
              <input
                accept='image/*'
                multiple type='file'></input>
              <input
                accept='image/*'
                multiple type='file'></input>
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
              ></input>
            </div>
            <div>
            <section>
              <strong>이메일</strong>
              <p>필수</p>
            </section>
          <input
            type='email'
            ></input>
          </div>
          <div style={{border: "none"}}>
            <section>
              <strong>전화번호</strong>
            </section>
          <input
            type='tel'
            ></input>
          </div>
        </JS.WriteInputForm>
      </JS.WriteSection>
      <JS.SubmitButton>공고 등록하기</JS.SubmitButton>
    </JS.JobWriteBody>
  )
}
