import React from "react";

export default function ResumeBanner() {
  return (
    <div>
      <div>
        <a
          href="http://www.alba.co.kr/customer/notice/NoticeView.asp?idx=739&page=2&pagesize=20"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../../assets/images/resumesubside_icon.png")}
            alt="ResumesideIcon"
          />
          <strong>대포통장사기를 조심하세요!!!!</strong>
          통장, 카드, 비밀번호를 요구하나요?
        </a>
      </div>
      <div>
        <img
          src={require("../../assets/images/resumebanner_pc_480x80.png")}
          alt="첫 만남 기념 특별 혜택 드림!"
        />
      </div>
      <div>
        <a
          href="http://www.alba.co.kr/story/brand/AdStory.asp"
          target="_blank"
          rel="noreferrer"
        >
          <strong>알바천국 광고 보러가기</strong>
          알바천국의 모든 광고스토리
          <img
            src={require("../../assets/images/resumesubside_icon.png")}
            alt="ad"
          />
        </a>
      </div>
    </div>
  );
}
