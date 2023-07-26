import React, { useState, useEffect } from "react";
import { useRouter } from "../../hooks/commen";
import * as ReList from "./ResumeListStyle";
import { instance } from "../../redux";
import { useDispatch } from "react-redux";

export function ResumeList() {
  const [resumes, setResumes] = useState([]);
  const { onNavigate } = useRouter();
  const dispatch = useDispatch();
  const anonymousName = "OO";

  useEffect(() => {
    async function getResumeData() {
      try {
        const res = await instance.get(`/api/resumes?page=1&size=20`);
        setResumes(res.data.info);
      } catch (error) {
        console.log("데이터를 가져오지 못했습니다.", error);
      }
    }
    getResumeData();
  }, [dispatch]);

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
        <ReList.ResumeListTable
          cellSpacing={0}
          summary="오늘 등록된 인재의 이름, 이력서 제목, 경력, 등록일"
        >
          <thead>
            <tr>
              <th>이름</th>
              <th>이력서 제목</th>
              <th>경력</th>
              <th>등록일</th>
            </tr>
          </thead>
          {resumes &&
            resumes.map((item) => (
              <tbody key={item.id} onClick={onNavigate(`/resume/${item.id}`)}>
                <ReList.ResumeListth $type="name">
                  {item.username.substring(0, 1) + anonymousName}
                  <p
                    $type="gender"
                    style={{ color: item.gender === "male" ? "blue" : "red" }}
                  >
                    {item.gender}
                  </p>
                </ReList.ResumeListth>
                <ReList.ResumeListth $type="content">
                  {item.content}
                </ReList.ResumeListth>
                <ReList.ResumeListth $type="career">
                  경력 : <strong>{item.career}</strong>
                </ReList.ResumeListth>
                <ReList.ResumeListth $type="createAt">
                  {item.createAt}
                </ReList.ResumeListth>
              </tbody>
            ))}
        </ReList.ResumeListTable>
      </ReList.ListInline>
    </ReList.ListOutline>
  );
}
