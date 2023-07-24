import React from "react";
import { NavTop } from "./headerStyle";
import * as Comm from "../common";
import { useRoter } from "../../hooks/commen";

export function HeaderNavTop() {
  const { onNavigate } = useRoter();
  const onSubmitSearch = (e) => {
    e.preventDefault()
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
      <Comm.Form $type="headerSearch" $jc="space-between" onSubmit={onSubmitSearch}>
        <Comm.Input
          type="text"
          $type="headerSearchInput"
          placeholder="검색어"
        />
        <Comm.AlbaIcons />
      </Comm.Form>
      <Comm.CustomUl $type="bottomLine" style={{position:"absolute", top:0, right:"-20px"}}>
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
    </NavTop>
  );
}