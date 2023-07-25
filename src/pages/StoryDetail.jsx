import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "../hooks/commen";
import { CustomUl, Customli, Figure, FlexBox } from "../components/common";
import * as Story from "../components/story/";
import { BiListUl } from 'react-icons/bi'

export function StoryDetail() {
  const { onNavigate, id } = useRouter();
  const [storyDetailData, setstoryDetailData] = useState([]);
  const [comment, setComment] = useState("")

  useEffect(() => {
    async function getStoryDetails() {
      try {
        const res = await axios.get(`/api/stories/${id}`);
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

  const onChangeComment = (e) => {
    const replace = e.target.value.replace("(?:\r\n|\r|\n)/g", <br/>)
    setComment(replace)
  }

  const onSubmitComment = (e) => {
    alert(comment)
  }

  // (?:\r\n|\r|\n)/g // textarea 줄바꿈처리 

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
      <Story.StoryComment $bottomLine={true}>댓글 {storyDetailData.commentList?.length}</Story.StoryComment>
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
        <Story.StoryComment $gap={10} style={{width:"100%"}}>
          <Story.StoryCommentText 
            value={comment}
            onChange={onChangeComment} 
            placeholder="광고성 글이나 근거없는 비방글 또는 계시판 성격과 맞지 않는 글은 삭제 후 이용제한 처리 됩니다."/>
          <Story.StoryCommentTextBtn onClick={onSubmitComment} children="답글"/>
        </Story.StoryComment>
        <FlexBox $jc="space-between" style={{width:"100%", padding:"15px 20px"}}>
          <Story.StorieIndexBtn onClick={onNavigate('/stories/1')}><BiListUl size={30}/><p>목록</p></Story.StorieIndexBtn>
          <Story.StorieIndexBtn onClick={onNavigate('/storywrite')} $type="write"><p>글쓰기</p></Story.StorieIndexBtn>
        </FlexBox>
      </Story.StoryDetailLayout>
    </div>
  );
}
