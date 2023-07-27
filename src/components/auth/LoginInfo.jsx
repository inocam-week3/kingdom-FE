import React from "react";
import { LoginContents } from "../common";
import { LoginInfoTitle } from "./authStyle";

const personal = [
  {
    top: 0,
    left: 0,
    subTitle: "원-클릭 입사지원",
    text: ["알바천국 이력서만 있으면", "클릭 한 번에 입사지원 끝"],
  },
  {
    top: 0,
    left: -70,
    subTitle: "SMART 맞춤 채용정보",
    text: ["희망 근무조건을 입력하면", "매칭율 높은 공고를 알려드려요"],
  },
  {
    top: 0,
    left: -140,
    subTitle: "알바상담센터",
    text: [
      "임금체불, 근로계약, 부당대우 등",
      "각종문제에 무료상담 지원해드려요",
    ],
  },
];

const company = [
  {
    top: -70,
    left: 0,
    subTitle: "쉽고 빠른 공고등록",
    text: ["AI 추천기능으로 더 빨라진 공고등록!", "지원자도 한곳에서 쉽게 괸리할 수 있어요."],
  },
  {
    top: -70,
    left: -70,
    subTitle: "무료공고 & 할인쿠폰 제공",
    text: ["알바천국 기업회원은 공고등록이 무료!", "할인쿠폰 등 다양한 혜택을 제공해 드려요"],
  },
  {
    top: -70,
    left: -140,
    subTitle: "정액권 • 이력서 열람상품 구매 가능",
    text: [
      "최대 35% 할인된 정액권 상품과 인재에게",
      "바로 연락 가능한 이력서 열람 상품도 있어요",
    ],
  },
];

export function LoginInfo({$state}) {
  return (
    <>
      <h1>{$state ? "기업회원 특별서비스" : "개인회원 특별서비스"}</h1>
      {$state ? company.map(({ top, left, subTitle, text }) => (
        <LoginInfoTitle key={subTitle}>
          <div className="loginInfo">
            <LoginContents top={top} left={left} size={64} />
            <div className="subscript">
              <h2>{subTitle}</h2>
              <p>{text[0]}</p>
              <p>{text[1]}</p>
            </div>
          </div>
        </LoginInfoTitle>
      ))
    
    :personal.map(({ top, left, subTitle, text }) => (
      <LoginInfoTitle key={subTitle}>
        <div className="loginInfo">
          <LoginContents top={top} left={left} size={64} />
          <div className="subscript">
            <h2>{subTitle}</h2>
            <p>{text[0]}</p>
            <p>{text[1]}</p>
          </div>
        </div>
      </LoginInfoTitle>
    ))
    }
    </>
  );
}
