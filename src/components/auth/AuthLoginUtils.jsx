import React, { useEffect } from "react";
import * as Comm from "../common";
import { useRouter } from "../../hooks/commen";
import { useLoginRTKMutation } from "../../redux";

export function AuthLoginUtils() {
  const { onNavigate } = useRouter();
  const [onGetLogin, { data, isError, isSuccess, error }] = useLoginRTKMutation()
  const onSubmitLogin = () => {
    onGetLogin({email: "test5@g.commm", password:"qwer1234!"})
  };

  useEffect(()=>{
    if(isSuccess) {
      onNavigate(-1)()
    }

  },[onNavigate, data, isError, isSuccess, error])
  return (
    <Comm.CustomUl style={{ marginTop: "30px" }}>
      <Comm.Customli size={16}>
        <Comm.FlexBox onClick={onNavigate("/signup")}>
          <p style={{ fontWeight: "800" }}>회원가입</p>
        </Comm.FlexBox>
      </Comm.Customli>
      <Comm.Customli size={16} $before="horizon">
        <Comm.FlexBox onClick={() => alert("기능 구현 중")}>
          <p>아아디찾기</p>
        </Comm.FlexBox>
      </Comm.Customli>
      <Comm.Customli size={16} $before="horizon">
        <Comm.FlexBox onClick={onSubmitLogin}>
          <p>테스트계정으로 로그인하기</p>
        </Comm.FlexBox>
      </Comm.Customli>
    </Comm.CustomUl>
  );
}
