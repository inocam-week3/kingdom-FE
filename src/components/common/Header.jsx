import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { authinfo } from "../../mock/testData";
import { useRoter } from "../../hooks/commen";
import { FlexBox } from "./GlobalStyle";
import * as Comm from "./commonStyle";
import { Figure } from "./Figure";
import { Albaicons } from "./Albaicons";
import { theme } from "./theme";

const authLogin = async () => {
  try {
    const res = await axios.post(`/api/auth/login`, authinfo); // 로그인 성공
    // const res = await axios.post(`/api/auth/login`, {...authinfo, email:"asdf"}) // 이메일이 틀렸을 때
    // const res = await axios.post(`/api/auth/login`, {...authinfo, passward:"asdf"}) // 비밀번호가 틀렸을 때
    document.cookie = `accessToken=${res.headers.authorization} path=/`;
    // console.log(res.headers.authorization)
  } catch (error) {
    console.log(error.response.data.error);
  }
};

// --------------------------------------------------------------------------------------------------------------------------------------------

export function Header() {
  const { navigate } = useRoter();

  useEffect(() => {
    authLogin();
  }, []);

  return (
    <>
      <Comm.PageLayout>
        <Comm.HeaderOutline>
          {/* 배너, 헤더1, 헤더지 */}
          <Figure
            type="banner"
            children={<img src={require("../../assets/images/homeTopNavBanner.png")} alt="homeTopNavBanner"/>} />
          <Comm.NavTop>
            <Figure
              width={"150px"}
              type="logo"
              children={
                <img src={require("../../assets/images/HeavenLogo.png")} alt="HeavenLogo" />
              }
            />
              <Comm.Form $type="headerSearch" $jc="space-between">
                  <Comm.Input type="text" $type="headerSearchInput" placeholder="검색어"/>
                  <Albaicons/>
              </Comm.Form>
              <FlexBox>
                {/* <Bestalba>
                  <li>주말알바</li>
                  <li>단기</li>
                  <li>당일</li>
                </Bestalba> */}
              </FlexBox>
              <Comm.CustomUl $type="headerAuth">
                <Comm.Customli $type="headerAuth" children={<p>로그인</p>}/>
                <Comm.Customli $type="headerAuth" $before="horizon" children={<p>회원가입</p>}/>
              </Comm.CustomUl>
          </Comm.NavTop>
          <Comm.NavBotom> 
            <FlexBox $jc="space-between" style={{width:"100%"}}>
              <Comm.CustomUl>
                <Comm.Customli size={16} $type={"headerMenu"} >
                  <FlexBox>
                    <Albaicons top={2} left={-47} size={20}/><p>전체메뉴</p>
                    <div className="bottomLine"></div>
                  </FlexBox>
                  
                </Comm.Customli>
                <Comm.Customli size={16} $before="horizon" $type={"headerMenu"}>
                <FlexBox>
                <p>채용정보</p>
                <div className="bottomLine"></div>
                </FlexBox>
                  </Comm.Customli>
                <Comm.Customli size={16} $type={"headerMenu"}>
                <FlexBox>
                <p>인재정보</p>
                <div className="bottomLine"></div>
                </FlexBox>
                </Comm.Customli>
                <Comm.Customli size={16} $type={"headerMenu"}>
                  <FlexBox>
                <p>알바스토리</p>
                <div className="bottomLine"></div>
                </FlexBox>
                </Comm.Customli>
              </Comm.CustomUl>
            <FlexBox>
              <Comm.Button $color={theme.color.lightyellow} $fcolor={theme.color.black363} onClick={()=>navigate('resumewrite')}>
                <FlexBox>
                  <Albaicons top={-44} size={30}/> 
                  <p >이력서등록</p>
                </FlexBox>
              </Comm.Button>
              <Comm.Button $color={theme.color.lightblue} $fcolor={theme.color.white} onClick={()=>navigate('jobwrite')}>
                <FlexBox>
                  <Albaicons top={-44} left={-50} size={30}/>
                  <p >공고등록</p> 
                </FlexBox>
              </Comm.Button>
            </FlexBox>
            </FlexBox>
          </Comm.NavBotom>
        </Comm.HeaderOutline>
        <Outlet />
      </Comm.PageLayout>
    </>
  );
}
