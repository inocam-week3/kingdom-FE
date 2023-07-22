import React from "react";
import * as Auth from "./authStyle";
import * as Comm from "../common";

export function AuthLoginForm({ personal }) {
  const onSubmitLogin = (e) => {
    e.preventDefault();
  };

  return (
    <Auth.LoginWriteLayout
      as="form"
      $gap={8}
      $type="loginWrite"
      onSubmit={onSubmitLogin}
    >
      <Auth.LoginWriteBox>
        <Comm.Input $type="login" placeholder="아이디" />
        <Comm.Input $type="login" placeholder="비밀번호" />
      </Auth.LoginWriteBox>
      <Comm.Button $type="login" $state={!personal} children="로그인" />
    </Auth.LoginWriteLayout>
  );
}
