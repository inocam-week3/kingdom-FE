import React, { useState, useEffect } from "react";
import { useRouter } from "../../hooks/commen";
import * as ReList from "./ResumeListStyle";
import { instance } from "../../redux";
import { useDispatch } from "react-redux";
import { __getResumeThunk } from "../../redux/resumeSlice";

export function ResumeList() {
  const [resumes, setResumes] = useState("");
  const { onNavigate } = useRouter();
  const dispatch = useDispatch();
  const anonymousName = "OO";

  useEffect(() => {
    async function getResumeData() {
      try {
        const res = await instance.get(`/api/resumes?page=1&size=20`);
        setResumes(res.data.info.content);
        console.log(res);
      } catch (error) {
        console.log("데이터를 가져오지 못했습니다.", error);
      }
    }
    getResumeData();
    // dispatch(__getResumeThunk());
  }, [dispatch]);

  const onNavigateDetail = (id) => onNavigate(`/resume/${id}`);

  return (
    <ReList.ListOutline>
      <ReList.ListInline>
        <h2>
          일반<strong> 인재정보</strong>
        </h2>

        <span>
          | 총 <strong>{resumes.length}</strong> 건
        </span>
        <div>
          <select>
            <option defaultValue>업데이트 순</option>
            <option>이력서완성도순</option>
            <option>구직활동순</option>
            <option>경력순</option>
            <option>조회순</option>
          </select>

          <select>
            <option defaultValue>20개씩 보기</option>
            <option>30개씩 보기</option>
            <option>50개씩 보기</option>
          </select>
        </div>
        <ReList.ResumeListGrid>
          <ReList.ResumeListTitle>이름</ReList.ResumeListTitle>
          <ReList.ResumeListTitle>이력서 제목</ReList.ResumeListTitle>
          <ReList.ResumeListTitle>경력</ReList.ResumeListTitle>
          <ReList.ResumeListTitle>등록일</ReList.ResumeListTitle>
          {resumes &&
            resumes.map((item) => (
              <>
                <ReList.ResumeListCell $type="name" key={item.id}>
                  {item.username.substring(0, 1) + anonymousName}
                  <p
                    type="gender"
                    style={{
                      color: item.gender === "male" ? "blue" : "red",
                    }}
                  >
                    {item.gender}
                  </p>
                </ReList.ResumeListCell>
                <ReList.ResumeListCell
                  $type="content"
                  onClick={onNavigateDetail(item.id)}
                >
                  {item.content}
                </ReList.ResumeListCell>
                <ReList.ResumeListCell $type="career">
                  경력 : <strong>{item.career}</strong>
                </ReList.ResumeListCell>
                <ReList.ResumeListCell $type="createdAt">
                  {item.createdAt?.slice(0, 10)}
                </ReList.ResumeListCell>
              </>
            ))}
        </ReList.ResumeListGrid>
      </ReList.ListInline>
    </ReList.ListOutline>
  );
}
