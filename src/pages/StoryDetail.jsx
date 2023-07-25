import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "../hooks/commen";
import { CustomUl, Customli, Figure, FlexBox } from "../components/common";
import * as Story from "../components/story/";

export function StoryDetail() {
  const { onNavigate, id } = useRouter();
  const [storyDetailData, setstoryDetailData] = useState([]);

  useEffect(() => {
    async function getStoryDetails() {
      try {
        const res = await axios.get(`/api/stories/${id}`);
        console.log(res.data.info);
        setstoryDetailData(res.data.info);
      } catch (error) {
        console.log("GET 실패");
      }
    }
    getStoryDetails();
  }, []);

  const onDeleteJob = (id) => async () => {
    try {
      const res = await axios.delete(`/api/stories/${id}`);
      console.log(res);
      alert("삭제되었습니다.");
      onNavigate(-1)();
    } catch (error) {
      console.log("데이터를 삭제하지 못했습니다", error);
    }
  };

  const onUpdateJob = (id) => async () => {
    try {
      const res = await axios.patch(`/api/stories/${id}`, {
        username: "수정하기",
      });
      setstoryDetailData(res.data.info);
    } catch (error) {
      console.log("데이터를 수정하지 못했습니다.", error);
    }
  };

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
      <Story.StoryDetailLayout>
        <Story.StoryDetailTitle>
          <p className="title">{storyDetailData.title}</p>
          <FlexBox $jc="space-between">
            <CustomUl>
              <Customli
                style={{ paddingLeft: "0" }}
                children={storyDetailData.username}
              />
              <Customli
                $before="horizon"
                children={storyDetailData.createdAt?.split("T")[0]}
              />
            </CustomUl>
            <CustomUl>
              <Customli children={`조회수 ${storyDetailData.view}`} />
              <Customli
                style={{ paddingRight: "0" }}
                $before="horizon"
                children={`좋아요 ${storyDetailData.like}`}
              />
            </CustomUl>
          </FlexBox>
        </Story.StoryDetailTitle>
        <Story.StoryDetailArtical>
          {/* Figure({type, width, imgwidth, onClick, $type, children, ...rest}) */}
          <Figure width="200px" children={<img src={storyDetailData?.image} alt="Detailimgs"/>}/>
          {storyDetailData.content}
          <FlexBox $gap={5}>
            <Story.StoryDetailBtn onClick={onDeleteJob(storyDetailData.id)}>
              좋아요
            </Story.StoryDetailBtn>
            <Story.StoryDetailBtn onClick={onUpdateJob(storyDetailData.id)}>
              수정하기
            </Story.StoryDetailBtn>
            <Story.StoryDetailBtn onClick={onDeleteJob(storyDetailData.id)}>
              삭제하기
            </Story.StoryDetailBtn>
          </FlexBox>
        </Story.StoryDetailArtical>
      <Story.StoryComment>댓글 {storyDetailData.commentList?.length}</Story.StoryComment>
        {Array.from({length:10}).map(comments => (
          <Story.StoryCommtens >
          <div style={{padding:"10px 0", width:"100%", borderBottom: "1px solid #dadada"}}>
          <FlexBox $jc="space-between" style={{width:"100%"}}>
              <CustomUl>
                <Customli
                  style={{ paddingLeft: "0" }}
                  children={storyDetailData.username}
                />
                <Customli
                  $before="horizon"
                  children={storyDetailData.createdAt?.split("T")[0]}
                />
              </CustomUl>
              <CustomUl>
                <Customli children={`조회수 ${storyDetailData.view}`} />
                <Customli
                  style={{ paddingRight: "0" }}
                  $before="horizon"
                  children={`좋아요 ${storyDetailData.like}`}
                />
              </CustomUl>
            </FlexBox>
            <p>댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</p>
          </div>
          </Story.StoryCommtens>
        ))}
      </Story.StoryDetailLayout>
    </div>
  );
}

// commentList
// :
// [{…}]
// content
// :
// "롯데리아 3년 알바 후기"
// createdAt
// :
// "XXXX-XX-XXT11:08:57.152015"
// id
// :
// 1234
// image
// :
// "https://cdn.ngetnews.com/news/photo/202210/411694_33543_4931.jpg"
// like
// :
// 0
// title
// :
// "후기 남김다 1"
// username
// :
// "홍길동"
// view
// :
// 0
