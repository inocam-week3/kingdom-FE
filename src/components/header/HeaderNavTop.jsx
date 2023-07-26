import React from "react";
import { NavTop } from "./headerStyle";
import * as Comm from "../common";
import { useRouter } from "../../hooks/commen";
import { useDispatch, useSelector } from "react-redux";
import { deleteToken, selectToken } from "../../redux/modules/tokenSlice";

export function HeaderNavTop() {
  const auth = useSelector(selectToken); // auth, email, userName // 변수 이름으로 -> 
  const { onNavigate } = useRouter();
  const dispatch = useDispatch()
  const onSubmitSearch = (e) => {
    e.preventDefault();
  };

  const onLogout = () => {
      // 쿠키(accessToken, refreshtoken)와 전역상태에서 관리하고 있는 decode 정보 초기화 
      document.cookie = `accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `refreshtoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      dispatch(deleteToken())
  }

  return (
    <NavTop>
      <Comm.Figure
        width={"150px"}
        type="logo"
        onClick={onNavigate("/")}
        children={
          <img
            src={require("../../assets/images/HeavenLogo.png")}
            alt="HeavenLogo"
          />
        }
      />
      <Comm.Form
        $type="headerSearch"
        $jc="space-between"
        onSubmit={onSubmitSearch}
      >
        <Comm.Input
          type="text"
          $type="headerSearchInput"
          placeholder="검색어"
        />
        <Comm.AlbaIcons />
      </Comm.Form>
      {auth.sub ? (
        <Comm.CustomUl
          $type="bottomLine"
          style={{ position: "absolute", top: 0, right: "-20px" }}
        >
          <Comm.Customli
            $type="headerAuth"
            children={<div onClick={onLogout}>로그아웃</div>}
          />
          <Comm.Customli
            $type="bottomLine"
            $before="horizon"
            // onClick={onNavigate("/signup")}
            children={<p>회원정보 수정</p>}
          />
        </Comm.CustomUl>
      ) : (
        <Comm.CustomUl
          $type="bottomLine"
          style={{ position: "absolute", top: 0, right: "-20px" }}
        >
          <Comm.Customli
            $type="headerAuth"
            children={<div onClick={onNavigate("/login")}>로그인</div>}
          />
          <Comm.Customli
            $type="bottomLine"
            $before="horizon"
            onClick={onNavigate("/signup")}
            children={<p>회원가입</p>}
          />
        </Comm.CustomUl>
      )}
    </NavTop>
  );
}
