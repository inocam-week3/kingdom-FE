import { useState } from "react";
import * as RTK from "../../redux";

export const useStoriesEdit = () => {
  const [edit, setEdit] = useState(false);
  const [deleteStoriesComments] = RTK.useDeleteStoriesCommentsRTKMutation();
  const [PatchCommentsRTK] = RTK.usePatchStoriesCommentsRTKMutation();

  const onDeleteComment = (postId, commentsId) => () => {
    deleteStoriesComments({ postId, commentsId });
  };

  const onToggle = () => {
    setEdit(!edit);
  };

  const onPatchComment = (postId, commentsId, patchComments) => () => {
    PatchCommentsRTK({
      postId,
      commentsId,
      payload: { content: patchComments },
    });
    setEdit(!edit);
  };
  return { edit, onDeleteComment, onPatchComment, onToggle };
};
