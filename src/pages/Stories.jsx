import React from "react";
import { useRouter } from "../hooks/commen";
import { Figure, FlexBox } from "../components/common";
import * as Story from "../components/story/storyStyle";
import { useParams } from "react-router-dom";
import { useGetStoriesRTKQuery } from "../redux/api";
import { IsLoadingPage } from "./IsLoadingPage";
import { useStories } from "../hooks/stories/useStories";
import { StoriesTableBody } from "../components/story";

export function Stories() {
  const { id: paramsid } = useParams();
  const { onNavigate } = useRouter();
  const { StoriesTableTitle } = useStories();
  const { isLoading, data } = useGetStoriesRTKQuery(paramsid);
  // data && console.log("data", data);

  if (isLoading) return <IsLoadingPage />;
  return (
    <div>
      {/* 알바스토리 부분 헤더 이미지 */}
      <Figure
        style={{ marginTop: "50px", marginBottom: "25px" }}
        children={
          <img
            src={require("../assets/images/top_story.png")}
            alt="top_story"
          />
        }
      />
      <FlexBox $jc="flex-end">
        <Story.StorieIndexBtn
          onClick={onNavigate("/storieswrite")}
          $type="write"
          children={<p>글쓰기</p>}
        />
      </FlexBox>
      {/* 테이블 헤더 */}
      <Story.StoriesTable
        $gtc="150px 1fr 100px 100px 100px 100px"
        $bottomLine="th"
      >
        {StoriesTableTitle.map((title) => (
          <FlexBox key={title} children={title} />
        ))}
      </Story.StoriesTable>
      {/* 테이블 본문 */}
      {data &&
        data.content.map((data) => (
          <StoriesTableBody key={data.id} paramsid={paramsid} onNavigate={onNavigate} {...data} />
        ))}
      {/* 테이블 푸터 */}
      <FlexBox $gap={20} style={{ height: "80px" }}>
        {Array.from({ length: data.totalPages }, (_, index) => index).map(
          (num) => (
            <Story.PageNationBtn
              key={num}
              $pageNum={+paramsid === num + 1}
              onClick={onNavigate(`/stories/${num + 1}`)}
              children={num + 1}
            />
          )
        )}
      </FlexBox>
    </div>
  );
}
