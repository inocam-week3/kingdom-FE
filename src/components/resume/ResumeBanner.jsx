import React from "react";
import * as ReBanner from "./resumeBannerStyle";

export function ResumeBanner() {
  return (
    <ReBanner.Outline>
      <ReBanner.Inline>
        <a
          href="http://www.alba.co.kr/customer/notice/NoticeView.asp?idx=739&page=2&pagesize=20"
          target="_blank"
          rel="noreferrer"
        >
          <ReBanner.Icon $size={42}>
            <img
              src={require(`../../assets/images/resumesubside_icon.png`)}
              alt="대포통장사기를 조심하세요!!!!"
            />
          </ReBanner.Icon>
          <span>
            <strong>대포통장사기를 조심하세요!!!!</strong>
            <br />
            통장, 카드, 비밀번호를 요구하나요?
          </span>
        </a>
      </ReBanner.Inline>
      <ReBanner.Inline>
        <ReBanner.AD>
          <img
            src={require(`../../assets/images/resumebanner_pc_480x80.png`)}
            alt="첫 만남 기념 특별 혜택 드림!"
          />
        </ReBanner.AD>
      </ReBanner.Inline>
      <ReBanner.Inline>
        <a
          href="http://www.alba.co.kr/story/brand/AdStory.asp"
          target="_blank"
          rel="noreferrer"
        >
          <p>
            <strong>알바천국 광고 보러가기</strong>
            <br />
            알바천국의 모든 광고스토리
          </p>
          <ReBanner.Icon
            $size={42}
            $top={0}
            $left={-40}
            children={
              <img
                src={require(`../../assets/images/resumesubside_icon.png`)}
                alt="알바천국 광고 보러가기"
              />
            }
          />
        </a>
      </ReBanner.Inline>
    </ReBanner.Outline>
  );
}
