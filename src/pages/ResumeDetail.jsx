import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "../hooks/commen";
import * as DetailSt from "../components/resume/ResumeDetailStyle";

export function ResumeDetail() {
  const [ResumeDetailData, setResumeDetailData] = useState([]);
  const { onNavigate, id } = useRouter();

  useEffect(() => {
    async function getResumeInfo() {
      try {
        const res = await axios.get(`/api/resumes/${id}`);
        console.log(res);
        setResumeDetailData(res.data.info);
      } catch (error) {
        console.log("구직자 상세 데이터를 불러오지 못 했습니다", error);
      }
    }
    getResumeInfo();
  }, [id]);

  const onDeleteJob = (id) => async () => {
    try {
      const res = await axios.delete(`/api/resumes/${id}`);
      console.log(res);
      alert("삭제되었습니다.");
      onNavigate(-1)();
    } catch (error) {
      console.log("데이터를 삭제하지 못했습니다", error);
    }
  };

  const onUpdateJob = (id) => async () => {
    try {
      const res = await axios.patch(`/api/resumes/${id}`, {
        username: "수정하기",
      });
      setResumeDetailData(res.data.info);
    } catch (error) {
      console.log("데이터를 수정하지 못했습니다.", error);
    }
  };

  return (
    <DetailSt.ResumeDetailOutline>
      <DetailSt.ResumeDetailLayout>
        <DetailSt.ResumeDetailInner>
          <h2>{ResumeDetailData && ResumeDetailData.content}</h2>
          <h3>
            {ResumeDetailData && ResumeDetailData.username}
            <span>{ResumeDetailData && ResumeDetailData.gender}</span>
          </h3>
          <h2>{ResumeDetailData && ResumeDetailData.career}</h2>
        </DetailSt.ResumeDetailInner>
        <DetailSt.ResumeDetailConfirm>
          <img
            src={require(`../../src/assets/images/confirm_text.png`)}
            alt="위의 모든 기재사항은 사실과 다름없음을 확인합니다."
          />
          <h4>
            <strong>
              <span>작성일 : </span>
              {ResumeDetailData && ResumeDetailData.createAt}
            </strong>
            <strong>
              <span>작성자 : </span>
              {ResumeDetailData && ResumeDetailData.username}
            </strong>
          </h4>
        </DetailSt.ResumeDetailConfirm>
      </DetailSt.ResumeDetailLayout>
      <DetailSt.ResumeDetailBtn>
        <DetailSt.ResumeDetailUpdateBtn
          onClick={onUpdateJob(ResumeDetailData.id)}
        >
          이력서 수정
        </DetailSt.ResumeDetailUpdateBtn>
        <strong>
          최종수정일 : {ResumeDetailData && ResumeDetailData.createAt}
        </strong>
        <DetailSt.ResumeDetailDeleteBtn
          onClick={onDeleteJob(ResumeDetailData.id)}
        >
          <DetailSt.ResumeDetailIcon $size={20} $top={0} $left={-60}>
            <img
              src={require(`../../src/assets/images/ResumeViewSide.png`)}
              alt="위의 모든 기재사항은 사실과 다름없음을 확인합니다."
            />
          </DetailSt.ResumeDetailIcon>
          <span>이력서 삭제</span>
        </DetailSt.ResumeDetailDeleteBtn>
      </DetailSt.ResumeDetailBtn>
      {/* <button onClick={onNavigate("/")}>홈으로</button> */}
    </DetailSt.ResumeDetailOutline>
  );
}
