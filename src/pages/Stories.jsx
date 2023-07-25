import React, { useState, useEffect } from "react";
import { useRouter } from "../hooks/commen";
import axios from "axios";
import { Figure, FlexBox } from "../components/common";
import { PageNationBtn, StoriesTable } from "../components/story/storyStyle";
import { useParams } from "react-router-dom";

export function Stories() {
  const { id:paramsid } = useParams();
  const { onNavigate } = useRouter();
  const [Story, setStory] = useState([]);
  console.log(+paramsid);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(20);

  useEffect(() => {
    async function getStoryData() {
      try {
        const res = await axios.get("/api/stories");
        setStory(res.data.info);
      } catch (error) {
        console.log("error", error.response.data.info); // 서버 messgae가 아니라, 코드가?
      }
    }
    getStoryData();
  }, []);

  return (
    <div>
      <Figure
        style={{ marginTop: "50px", marginBottom: "25px" }}
        children={
          <img
            src={require("../assets/images/top_story.png")}
            alt="top_story"
          />
        }
      />
      {/* 테이블 헤더 */}
      <StoriesTable $gtc="150px 1fr 100px 100px 100px 100px" $bottomLine="th">
        <FlexBox>글번호</FlexBox>
        <FlexBox>제목</FlexBox>
        <FlexBox>글쓴이</FlexBox>
        <FlexBox>날짜</FlexBox>
        <FlexBox>조회</FlexBox>
        <FlexBox>좋아요</FlexBox>
      </StoriesTable>

      {/* 테이블 본문 */}
      {Story &&
        Story.map(({ id, like, title, username, view, createdAt }) => (
          <StoriesTable
            key={id}
            $gtc="150px 1fr 100px 100px 100px 100px"
            $bottomLine="td"
          >
            <FlexBox>{id}</FlexBox>
            <FlexBox
              $jc="flex-start"
              onClick={onNavigate(`/stories/${paramsid}/${id}`)}
            >
              {title}
            </FlexBox>
            <FlexBox>{username}</FlexBox>
            <FlexBox>{createdAt.split("T")[0]}</FlexBox>
            <FlexBox>조회 {view}</FlexBox>
            <FlexBox>좋아요 {like}</FlexBox>
          </StoriesTable>
        ))}
      {Story &&
        Story.map(({ id, like, title, username, view, createdAt }) => (
          <StoriesTable
            key={id}
            $gtc="150px 1fr 100px 100px 100px 100px"
            $bottomLine="td"
          >
            <FlexBox>{id}</FlexBox>
            <FlexBox
              onClick={onNavigate(`/stories/${paramsid}/${id}`)}
              $jc="flex-start"
            >
              {title}
            </FlexBox>
            <FlexBox>{username}</FlexBox>
            <FlexBox>{createdAt.split("T")[0]}</FlexBox>
            <FlexBox>조회 {view}</FlexBox>
            <FlexBox>좋아요 {like}</FlexBox>
          </StoriesTable>
        ))}
      {Story &&
        Story.map(({ id, like, title, username, view, createdAt }) => (
          <StoriesTable
            key={id}
            $gtc="150px 1fr 100px 100px 100px 100px"
            $bottomLine="td"
          >
            <FlexBox>{id}</FlexBox>
            <FlexBox
              onClick={onNavigate(`/stories/${paramsid}/${id}`)}
              $jc="flex-start"
            >
              {title}
            </FlexBox>
            <FlexBox>{username}</FlexBox>
            <FlexBox>{createdAt.split("T")[0]}</FlexBox>
            <FlexBox>조회 {view}</FlexBox>
            <FlexBox>좋아요 {like}</FlexBox>
          </StoriesTable>
        ))}
      {Story &&
        Story.map(({ id, like, title, username, view, createdAt }) => (
          <StoriesTable
            key={id}
            $gtc="150px 1fr 100px 100px 100px 100px"
            $bottomLine="td"
          >
            <FlexBox>{id}</FlexBox>
            <FlexBox
              onClick={onNavigate(`/stories/${paramsid}/${id}`)}
              $jc="flex-start"
            >
              {title}
            </FlexBox>
            <FlexBox>{username}</FlexBox>
            <FlexBox>{createdAt.split("T")[0]}</FlexBox>
            <FlexBox>조회 {view}</FlexBox>
            <FlexBox>좋아요 {like}</FlexBox>
          </StoriesTable>
        ))}
      {Story &&
        Story.map(({ id, like, title, username, view, createdAt }) => (
          <StoriesTable
            key={id}
            $gtc="150px 1fr 100px 100px 100px 100px"
            $bottomLine="td"
          >
            <FlexBox>{id}</FlexBox>
            <FlexBox
              onClick={onNavigate(`/stories/${paramsid}/${id}`)}
              $jc="flex-start"
            >
              {title}
            </FlexBox>
            <FlexBox>{username}</FlexBox>
            <FlexBox>{createdAt.split("T")[0]}</FlexBox>
            <FlexBox>조회 {view}</FlexBox>
            <FlexBox>좋아요 {like}</FlexBox>
          </StoriesTable>
        ))}
      {Story &&
        Story.map(({ id, like, title, username, view, createdAt }, index) =>
          index + 1 === Story.length ? (
            <StoriesTable key={id} $gtc="150px 1fr 100px 100px 100px 100px" $bottomLine="th">
              <FlexBox>{id}</FlexBox>
              <FlexBox
                onClick={onNavigate(`/stories/${paramsid}/${id}`)}
                $jc="flex-start"
              >
                {title}
              </FlexBox>
              <FlexBox>{username}</FlexBox>
              <FlexBox>{createdAt.split("T")[0]}</FlexBox>
              <FlexBox>조회 {view}</FlexBox>
              <FlexBox>좋아요 {like}</FlexBox>
            </StoriesTable>
          ) : (
            <StoriesTable
              key={id}
              $gtc="150px 1fr 100px 100px 100px 100px"
              $bottomLine="td"
            >
              <FlexBox>{id}</FlexBox>
              <FlexBox
                onClick={onNavigate(`/stories/${paramsid}/${id}`)}
                $jc="flex-start"
              >
                {title}
              </FlexBox>
              <FlexBox>{username}</FlexBox>
              <FlexBox>{createdAt.split("T")[0]}</FlexBox>
              <FlexBox>조회 {view}</FlexBox>
              <FlexBox>좋아요 {like}</FlexBox>
            </StoriesTable>
          )
        )}

      {/* 테이블 푸터 */}
      <FlexBox $gap={20} style={{height:"80px"}}>
        {Array.from({ length: 10 }, (_, index) => index).map((num) => {
          return (
            <PageNationBtn
              $pageNum={+paramsid === num + 1}
              onClick={onNavigate(`/stories/${num + 1}`)}
            >
              {num + 1}
            </PageNationBtn>
          );
        })}
      </FlexBox>
    </div>
  );
}

// id, like, title, username, view, createdAt
