import React, { useState } from "react";
import { Figure, FlexBox } from "../components/common";
import imageCompression from "browser-image-compression";
import { Input, StoriesTable, WriteBtn } from "../components/story";
import { usePostStoriesRTKMutation } from "../redux/api";
import { useRouter } from "../hooks/commen";

export function StoryWrite() {
  const { onNavigate } = useRouter();
  const [inputValue, setinputValue] = useState({
    title: "",
    content: "",
  });
  const onChangeContent = (e) => {
    const { name, value } = e.target;
    setinputValue({ ...inputValue, [name]: value });
  };

  const [onPostStories] = usePostStoriesRTKMutation();

  const [postImge, setpostImg] = useState("");
  const [showImg, setShowImg] = useState([]);
  // 이미지 리사이징에 대한 핸들러
  const actionImgResize = async (files) => {
    const options = {
      maxSizeMB: 1, // 1000000b === 1000kb === 1mb //
      maxWidthOrHeight: 3000,
      useWebWorker: true,
    };
    try {
      const compressBlob = await imageCompression(files, options);
      const compressFile = new File([compressBlob], files.name, {
        type: files.type,
      });
      return compressFile;
    } catch (e) {
      alert(e.message);
    }
  };

  // 이미지 업로드에 대한 핸들러(미리보기 및, 리사이징 처리 )
  const onUploadFiles = async (e) => {
    setShowImg([]);
    for (let i = 0; i < e.target.files.length; i++) {
      let file = e.target.files[i];
      let reader = new FileReader();
      reader.onload = () => {
        setShowImg((showImg) => [...showImg, reader.result]);
      };
      reader.readAsDataURL(file);
    }
    const compressingImg = [];
    for (let i = 0; i < e.target.files.length; i++) {
      const compressed = await actionImgResize(e.target.files[i]);
      compressingImg.push(compressed);
    }
    setpostImg(compressingImg);
    setpostImg(e.target.files[0]);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(
      "data",
      new Blob(
        [
          JSON.stringify({
            title: inputValue.title,
            content: inputValue.content,
          }),
        ],
        { type: "application/json" }
      )
    );
    postImge && formData.append("file", postImge);
    if (inputValue.title && inputValue.content && showImg[0]) {
      onPostStories(formData);
      setShowImg([]);
      setpostImg("");
      setinputValue({
        title: "",
        content: "",
      });
      onNavigate(-1)();
    } else if(!inputValue.title) {
      alert("제목이 입력되지 않았습니다.")
    } else if(!inputValue.content) {
      alert("내용이 입력되지 않았습니다.")
    }else if(!showImg[0]) {
      alert("이미지가 입력되지 않았습니다.")
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

      <StoriesTable $gtc="100px 1fr" $bottomLine="th">
        <FlexBox className="writeTitle">작성자</FlexBox>
        <FlexBox $jc="flex-start">
          <p>박영찬</p>
        </FlexBox>
      </StoriesTable>
      <StoriesTable $gtc="100px 1fr" $bottomLine="td">
        <FlexBox className="writeTitle">제목</FlexBox>
        <FlexBox $jc="flex-start">
          <Input
            type="text"
            name="title"
            value={inputValue.title}
            onChange={onChangeContent}
          />
        </FlexBox>
      </StoriesTable>
      <StoriesTable
        $gtc="100px 1fr"
        style={{ height: "500px" }}
        $bottomLine="td"
      >
        <FlexBox className="writeTitle">내용</FlexBox>
        <FlexBox $jc="flex-start">
          <Input
            as="textarea"
            type="text"
            name="content"
            value={inputValue.content}
            onChange={onChangeContent}
            style={{ height: "100%" }}
          />
        </FlexBox>
      </StoriesTable>
      <StoriesTable
        $gtc="100px 1fr"
        style={{ height: "auto" }}
        $bottomLine="td"
      >
        <FlexBox className="writeTitle">이미지첨부</FlexBox>
        <FlexBox $jc="flex-start" $ai="start" $fd="column">
          <Input type="file" onChange={onUploadFiles} />
          <p>* 이미지 용량 400kb 이하의 GIF, JPEG 파일만 등록 가능합니다.</p>
        </FlexBox>
      </StoriesTable>
      <FlexBox $gap={20}>
        <WriteBtn $check={true} children="완료" onClick={onSubmitHandler} />
        <WriteBtn children="취소" />
      </FlexBox>
    </div>
  );
}

// title, content, image
