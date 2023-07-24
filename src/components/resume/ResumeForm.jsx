import React, { useState } from "react";
import {
  ResumeFormOutline,
  ResumeFormLayout,
  ResumeFormInner1,
  ResumeFormInner2,
  ResumeFormInner3,
  InnerHeaders,
  InnerBody,
  SubmitBtn,
} from "./resumeStyle";
import * as Comm from "../common";

export function ResumeForm() {
  const [career, setCareer] = useState();
  const [isSaved, setIsSaved] = useState(false);

  const handleCareerTypeChange = (value) => {
    setCareer(value);
  };

  const onSubmitResume = () => {
    setIsSaved(true);
  };

  console.log(career);

  return (
    <ResumeFormOutline>
      <ResumeFormLayout>
        <ResumeFormInner1>
          <InnerHeaders>
            <h2>
              기본정보<span>*</span>
            </h2>
            <p>
              개인정보는 공개 설정 여부와 관계없이 입사지원한 회사에 모두
              공개됩니다.
            </p>
            {/* <button $color={Comm.theme.color.blue}>회원정보 수정</button> */}
          </InnerHeaders>
          <InnerBody>
            <p>
              <strong>username</strong>
              gender
            </p>
            <span>이메일</span>
            email
          </InnerBody>
        </ResumeFormInner1>
        <ResumeFormInner2>
          <h2>
            이력서 제목<span>*</span>
          </h2>
          <input
            type="text"
            maxLength={100}
            required
            placeholder="나를 표현할 한마디를 적어보세요 (최대100자)"
          />
        </ResumeFormInner2>
        <ResumeFormInner3>
          <InnerHeaders>
            <h2>
              경력<span>*</span>
            </h2>
          </InnerHeaders>
          <strong>경력구분</strong>
          <label className={`btn ${career === "신입" ? "btn-selected" : ""}`}>
            <input
              type="radio"
              value="신입"
              checked={career === "신입"}
              onChange={() => handleCareerTypeChange("신입")}
            />
            신입
          </label>

          <label className={`btn ${career === "경력" ? "btn-selected" : ""}`}>
            <input
              type="radio"
              value="경력"
              checked={career === "경력"}
              onChange={() => setCareer("경력")}
            />
            경력
          </label>
        </ResumeFormInner3>
      </ResumeFormLayout>
      <SubmitBtn $color={Comm.theme.color.yellow} onClick={onSubmitResume}>
        이력서 저장
      </SubmitBtn>
    </ResumeFormOutline>
  );
}
