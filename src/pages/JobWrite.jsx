import React from 'react'
import * as JS from '../components/job/jobStyle'

export function JobWrite() {
  return (
    <JS.JobWriteBody>
      <h3>구인공고 작성</h3>
      <JS.WriteSection>
        <JS.WriteTitle>
          <strong>모집내용</strong>
          <p>어떤 일을 담당할 알바생을 찾으시나요?</p>
        </JS.WriteTitle>
        <JS.WriteInputForm>
          <div>
            <section>
              <strong>공고제목</strong>
              <p>필수</p>
            </section>
          <input
            type='text'
            placeholder='공고 제목을 입력해 주세요.'
            maxLength={42}
            ></input>
          </div>
          <div>
            <section>
              <strong>공고내용</strong>
              <p>필수</p>
            </section>
          <input
            type='text'
            placeholder='공고 내용을 입력해 주세요.'
            maxLength={42}
            ></input>
          </div>
          <div>
            <section>
              <strong>모집인원</strong>
              <p>필수</p>
            </section>
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
              ></input>
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
          <div>
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
