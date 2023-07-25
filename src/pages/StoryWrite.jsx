import React from "react";
import { Figure, FlexBox } from "../components/common";
import { Input, StoriesTable, WriteBtn } from "../components/story";

export function StoryWrite() {

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

      <StoriesTable $gtc="100px 1fr" $bottomLine="th">
        <FlexBox className="writeTitle">작성자</FlexBox>
        <FlexBox $jc="flex-start">
          <p >박영찬</p>
        </FlexBox>
      </StoriesTable>
      <StoriesTable $gtc="100px 1fr" $bottomLine="td">
        <FlexBox className="writeTitle">제목</FlexBox>
        <FlexBox $jc="flex-start">
          <Input type="text"/>
        </FlexBox>
      </StoriesTable>
      <StoriesTable $gtc="100px 1fr" style={{height:"500px"}} $bottomLine="td">
        <FlexBox className="writeTitle">내용</FlexBox>
        <FlexBox $jc="flex-start">
          <Input as="textarea" type="text" style={{height:"200px"}}/>
        </FlexBox>
      </StoriesTable>
      <StoriesTable $gtc="100px 1fr" style={{height:"auto"}} $bottomLine="td" >
        <FlexBox className="writeTitle">이미지첨부</FlexBox>
        <FlexBox $jc="flex-start" $ai="start" $fd="column">
          <Input type="file" />
          <p>* 이미지 용량 400kb 이하의 GIF, JPEG 파일만 등록 가능합니다.</p>
        </FlexBox>
      </StoriesTable>
      <FlexBox $gap={20}>
        <WriteBtn $check={true} children="완료"/>
        <WriteBtn children="취소"/>
      </FlexBox>
    </div>
  );
}

// title, content, image
