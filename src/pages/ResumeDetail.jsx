import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "../hooks/commen";
import * as DetailSt from "../components/resume/ResumeDetailStyle";
import { instance } from "../redux";

export function ResumeDetail() {
  const [ResumeDetailData, setResumeDetailData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [updatetitle, setUpdatetitle] = useState("");
  const [updatecareer, setUpdatecareer] = useState("");
  const { onNavigate, id } = useRouter();
  const inputRef = useRef(null);

  useEffect(() => {
    async function getResumeInfo() {
      try {
        const res = await instance.get(`/api/resumes/${id}`);
        setResumeDetailData(res.data.info);
      } catch (error) {
        alert("구직자 상세 데이터를 불러오지 못 했습니다", error);
      }
    }
    getResumeInfo();
  }, [id]);

  const onDeleteJob = (id) => async () => {
    try {
      await instance.delete(`/api/resumes/${id}`);
      alert("삭제되었습니다.");
      onNavigate(-1)();
    } catch (error) {
      alert("데이터를 삭제하지 못했습니다", error);
    }
  };

  const onCompleteJob = (postId) => async () => {
    try {
      const res = await instance.patch(`/api/resumes/${postId}`, {
        content: updatetitle,
        career: updatecareer,
      });
      setResumeDetailData(res.data.info);
      setIsEdit(false);
    } catch (error) {
      alert("데이터를 수정하지 못했습니다.", error);
    }
  };

  const onUpdateJob = () => {
    setIsEdit(true);
    setUpdatetitle(ResumeDetailData.content);
    setUpdatecareer(ResumeDetailData.career);
  };

  useEffect(()=>{
    inputRef.current && inputRef.current.focus()
  },[inputRef, isEdit])

  return (
    <DetailSt.ResumeDetailOutline>
      <DetailSt.ResumeDetailLayout>
        <DetailSt.ResumeDetailInner>
          {ResumeDetailData && (
            <div>
              {isEdit ? (
                <DetailSt.ResumeUpdateInput
                  value={updatetitle}
                  onChange={(e) => setUpdatetitle(e.target.value)}
                  ref={inputRef}
                />
              ) : (
                <h2>{ResumeDetailData.content}</h2>
              )}

              <h3>
                {ResumeDetailData.username}
                <span>{ResumeDetailData.gender}</span>
              </h3>
              {isEdit ? (
                <DetailSt.ResumeUpdateCareerBtn>
                  <label
                    className={`btn ${
                      updatecareer === "신입" ? "btn-selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      value="신입"
                      checked={updatecareer === "신입"}
                      onChange={() => setUpdatecareer("신입")}
                    />
                    신입
                  </label>
                  <label
                    className={`btn ${
                      updatecareer === "경력" ? "btn-selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      value="경력"
                      checked={updatecareer === "경력"}
                      onChange={() => setUpdatecareer("경력")}
                    />
                    경력
                  </label>
                </DetailSt.ResumeUpdateCareerBtn>
              ) : (
                <h2>{ResumeDetailData.career}</h2>
              )}
            </div>
          )}
        </DetailSt.ResumeDetailInner>
        <DetailSt.ResumeDetailConfirm>
          <img
            src={require(`../../src/assets/images/confirm_text.png`)}
            alt="위의 모든 기재사항은 사실과 다름없음을 확인합니다."
          />
          <h4>
            <strong>
              <span>작성일 : </span>
              {ResumeDetailData?.createdAt?.slice(0, 10)}
            </strong>
            <strong>
              <span>작성자 : </span>
              {ResumeDetailData && ResumeDetailData.username}
            </strong>
          </h4>
        </DetailSt.ResumeDetailConfirm>
      </DetailSt.ResumeDetailLayout>
      <DetailSt.ResumeDetailBtn>
        {isEdit ? (
          <DetailSt.ResumeDetailUpdateBtn
            onClick={onCompleteJob(ResumeDetailData.id)}
          >
            이력서 수정완료
          </DetailSt.ResumeDetailUpdateBtn>
        ) : (
          <DetailSt.ResumeDetailUpdateBtn onClick={onUpdateJob}>
            이력서 수정
          </DetailSt.ResumeDetailUpdateBtn>
        )}
        <strong>최종작성일 :{ResumeDetailData?.createdAt?.slice(0, 10)}</strong>
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
    </DetailSt.ResumeDetailOutline>
  );
}
