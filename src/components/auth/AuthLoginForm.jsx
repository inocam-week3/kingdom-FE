import React, { useEffect, useState } from "react";
import * as Auth from "./authStyle";
import * as Comm from "../common";
import { useRouter } from "../../hooks/commen";
import { useLoginRTKMutation } from "../../redux/api";

export function AuthLoginForm({ personal }) {
  const [onGetLogin, { data, isError, isSuccess, error }] =
    useLoginRTKMutation();
  const { onNavigate } = useRouter();
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const onChangeValue = (e) => {
    const { name, value } = e.target;
    setLoginValue({ ...loginValue, [name]: value });
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    loginValue.email && loginValue.password && onGetLogin(loginValue);
  };

  useEffect(() => {
    if (isSuccess) {
      onNavigate(-1)();
    } else if (isError) {
      alert("회원가입 실패", error);
    }
  }, [onNavigate, data, isError, isSuccess, error]);

  return (
    <Auth.LoginWriteLayout
      as="form"
      $gap={8}
      $type="loginWrite"
      onChange={onChangeValue}
    >
      <Auth.LoginWriteBox>
        <Comm.Input
          $type="login"
          onChange={onChangeValue}
          name="email"
          value={loginValue.email}
          placeholder="아이디"
        />
        <Comm.Input
          $type="login"
          onChange={onChangeValue}
          name="password"
          value={loginValue.password}
          placeholder="비밀번호"
        />
      </Auth.LoginWriteBox>
      <Comm.Button
        $type="login"
        $state={!personal}
        onClick={onSubmitLogin}
        children="로그인"
      />
    </Auth.LoginWriteLayout>
  );
}

// test5@g.commm
// qwer1234!
