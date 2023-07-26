import React, { useState } from "react";
import { FlexBox } from "../common";
import * as Story from "./storyStyle";
import { GoHeartFill } from 'react-icons/go'
import { useDeleteStoriesRTKMutation, usePatchStoriesRTKMutation, usePostStoriesLikeRTKMutation } from "../../redux";
import { useRouter } from "../../hooks/commen";

export function StoriesEdit({postId, title, content, userLikes}) {
  const [edit, setEdit] = useState(false);
  const [patchStoriesT, setPatchStoriesT] = useState(title)
  const [patchStories, setPatchStories] = useState(content)
  const [onPatchStories] = usePatchStoriesRTKMutation();
  const [onLikeStories] = usePostStoriesLikeRTKMutation()
  const [onDeleteStories] = useDeleteStoriesRTKMutation()
  const { onNavigate } = useRouter();
  const onSubmitStories = () => {
    const formData = new FormData();
    formData.append(
      "data",
      new Blob([JSON.stringify({ title:patchStoriesT, content:patchStories })], {
        type: "application/json",
      })
    );
    onPatchStories({ postId, payload: formData });
    setEdit(!edit)
    setPatchStories("")
  };

  const onDeleteStoriesHandler = () => {
    onDeleteStories(postId)
    onNavigate(-1)()
  }

  const onLike = () => {
    onLikeStories(postId)
  }


  return (
    <div>
      <FlexBox
        $gap={5}
        style={{ position: "absolute", top: "20px", right: "20px" }}
      >
        <Story.StoryDetailBtn
        // onClick={onDeleteJob(data.id)}
        >
          <FlexBox onClick={onLike} $gap={5}><p>좋아요</p> <GoHeartFill color={userLikes ? "red" : "black"}/></FlexBox>
        </Story.StoryDetailBtn>

        <>
          <Story.StoryDetailBtn onClick={()=>setEdit(!edit)}>{edit ? "취소하기" : "수정하기"}</Story.StoryDetailBtn>
          <Story.StoryDetailBtn onClick={onDeleteStoriesHandler}>삭제하기</Story.StoryDetailBtn>
        </>
      </FlexBox>
      {edit && (
        <Story.StoryComment $gap={10} style={{ width: "100%", padding: "15px 0", position:"relative" }}>
          <Story.StoryCommentText
            value={patchStories}
            style={{ padding: "30px 10px" }}
            onChange={(e)=>setPatchStories(e.target.value)}
          />
          <div style={{ width: "600px",position:"absolute", top:"20px", left:"10px"}} ><span style={{ width: "80px"}}>제목수정 :</span> <input type="text" value={patchStoriesT} onChange={(e)=>setPatchStoriesT(e.target.value)} placeholder="dffdf" style={{ width: "520px"}}/></div>
          <Story.StoryCommentTextBtn
            onClick={onSubmitStories}
            children="수정하기"
          />
        </Story.StoryComment>
      )}
    </div>
  );
}
