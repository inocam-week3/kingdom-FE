import React from "react";
import * as Comm from "../common";
import { useRouter } from "../../hooks/commen";

export function AuthLoginUtils() {
  const { onNavigate } = useRouter();
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
        <Comm.FlexBox onClick={() => alert("기능 구현 중")}>
          <p>비밀번호 찾기</p>
        </Comm.FlexBox>
      </Comm.Customli>
    </Comm.CustomUl>
  );
}
