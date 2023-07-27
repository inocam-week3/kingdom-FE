import React, { useState } from "react";
import * as Story from "./storyStyle";
import { FlexBox } from "../common";
import { useStoriesEdit } from "../../hooks/stories/useStoriesEdit";

export function StoriesCommentsEdit({postId, commentsId, commentText}) {
  const [patchComments, setPatchComments] = useState(commentText)
  const  { edit, onDeleteComment, onPatchComment, onToggle } = useStoriesEdit()

  return (
    <div>
      <FlexBox
        $jc="flex-start"
        style={{ position: "absolute", top: "10px", right: "20px" }}
      >
        <Story.StoryDetailBtn
          onClick={onToggle}
          children={edit ? "취소하기" : "수정하기"}
        />
        <Story.StoryDetailBtn
          onClick={onDeleteComment(postId, commentsId)}
          children="삭제하기"
        />
      </FlexBox>
      {edit && (
        <Story.StoryComment $gap={10} style={{ width: "100%", padding: "15px 0" }}>
          <Story.StoryCommentText
            value={patchComments}
            onChange={(e)=>setPatchComments(e.target.value)}
          />
          <Story.StoryCommentTextBtn
            onClick={onPatchComment(postId, commentsId, patchComments)}
            children="답글"
          />
        </Story.StoryComment>
      )}
    </div>
  );
}
