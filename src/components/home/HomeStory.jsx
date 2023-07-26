import React, { useEffect, useState } from "react";
import * as ManSt from "../home/homestorystyle";
import { instance } from "../../redux";
import { useNavigate } from "react-router-dom";

export function HomeStory() {
  const [homestories, setHomestories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getResumeData() {
      try {
        const res = await instance.get(`/api/homestories`);
        setHomestories(res.data.info);
        //console.log(res);
      } catch (error) {
        console.log("데이터를 가져오지 못했습니다.", error);
      }
    }
    getResumeData();
    // dispatch(__getResumeThunk());
  }, []);
  return (
    <>
      <ManSt.MainStoryOutline>
        <h2>알바스토리</h2>

        <ManSt.MainStoryInline>
          <ManSt.MainStoryWrapper>
            <ManSt.MainStoryContainer1>
              <ManSt.MainStoryContainerInner>
                <h3>알바썰</h3>
                <img
                  src={require("../../assets/images/btn_more.png")}
                  alt="btn_more"
                />
              </ManSt.MainStoryContainerInner>
              {homestories &&
                homestories.slice(0, 5).map((item) => (
                  <div key={item.id} onClick={() => navigate(`${item.storyDetailUrl}`)}>
                    <strong>
                      {item.content}
                      <p>{item.username}</p>
                      <span>{item.createAt.slice(0, 10)}</span>
                    </strong>
                  </div>
                ))}
            </ManSt.MainStoryContainer1>
            <ManSt.MainStoryContainer1>
              <ManSt.MainStoryContainerInner>
                <h3>알바리뷰</h3>
                <img
                  src={require("../../assets/images/btn_more.png")}
                  alt="btn_more"
                />
              </ManSt.MainStoryContainerInner>
              {homestories &&
                homestories.slice(5, 10).map((item) => (
                  <div key={item.id} onClick={() => navigate(`${item.storyDetailUrl}`)}>
                    <strong>
                      {item.content}
                      <p>{item.username}</p>
                      <span>{item.createAt.slice(0, 10)}</span>
                    </strong>
                  </div>
                ))}
            </ManSt.MainStoryContainer1>
            {/* </ManSt.MainStoryWrapper> */}
            <ManSt.MainStoryContainer2>
              <img
                src={require("../../assets/images/community_lawpay_2023.png")}
                alt="최저임금"
              />
            </ManSt.MainStoryContainer2>
          </ManSt.MainStoryWrapper>
        </ManSt.MainStoryInline>
        <ManSt.MainStoryInline>
          <ManSt.MainStoryWrapper>
            <ManSt.MainStoryContainer3>
              <img
                src={require("../../assets/images/Community_Campaign1.png")}
                alt="청소년 알바상식"
              />
            </ManSt.MainStoryContainer3>
            <ManSt.MainStoryContainer3>
              <img
                src={require("../../assets/images/Community_Campaign2.png")}
                alt="알바천국의 구직자 보호 캠페인"
              />
            </ManSt.MainStoryContainer3>

            <ManSt.MainStoryContainer4>
              <ManSt.MainStoryContainerInner>
                <h3>취업사기 예방</h3>
                <img
                  src={require("../../assets/images/btn_more.png")}
                  alt="btn_more"
                />
              </ManSt.MainStoryContainerInner>
              <a
                href="http://www.alba.co.kr/story/Fss.asp"
                alt="취업사기 예방 더보기"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  알바 구하기 전, 필독!
                  <br />
                  아는 것이 힘이 됩니다.
                </span>
                <img
                  src={require("../../assets/images/community_prevention.png")}
                  alt="설문지"
                />
              </a>
            </ManSt.MainStoryContainer4>
          </ManSt.MainStoryWrapper>
        </ManSt.MainStoryInline>
      </ManSt.MainStoryOutline>
    </>
  );
}
