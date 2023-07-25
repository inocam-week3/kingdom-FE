import * as Comm from "../common";
import * as Auth from "./authStyle";
import React, { useState } from "react";
import { LoginInfo } from "./LoginInfo";
import { AuthLoginForm } from "./AuthLoginForm";
import { AuthLoginUtils } from "./AuthLoginUtils";
import { useAuthHeader, useRouter } from "../../hooks/commen";

export function AuthLoginBody() {
  const { onNavigate } = useRouter();
  const { snsLogin, onSNSLogin } = useAuthHeader();
  const [personal, setPorsonal] = useState(false);

  return (
    <Comm.Selection>
      <Auth.AuthLayout>
        <Auth.AuthTitle>
          <h1>로그인 후 다양한 서비스를 이용해 보세요</h1>
          <div>
            아직 알바천국 회원이 아니시면, 지금{" "}
            <span onClick={onNavigate("/signup")}>회원가입</span>을 해주세요.
          </div>
        </Auth.AuthTitle>
        <Auth.LoginArticle $state={personal}>
          <div className="loginBox">
            <Auth.LoginBox $state={personal}>
              <div className="logintypeBox">
                <Auth.LogintypeBtn
                  $state={personal}
                  onClick={() => setPorsonal(false)}
                >
                  <h2>개인회원</h2>
                  <p>(일자리 찾기)</p>
                </Auth.LogintypeBtn>
                <Auth.LogintypeBtn
                  $state={!personal}
                  onClick={() => setPorsonal(true)}
                >
                  <h2>기업회원</h2>
                  <p>(알바생 찾기)</p>
                </Auth.LogintypeBtn>
              </div>
              {/* ** 로그인Form **  */}
              <AuthLoginForm personal={personal} />
              {/* ** 회원가입 및 정보찾기 BTN  **  */}
              <AuthLoginUtils />
              {/* ** 소셜 로그인 **  */}
              {!personal && (
                <Auth.SNSLogin>
                  {snsLogin.map(({ title, login, ...rest }) => (
                    <Auth.SNSBtn key={title} onClick={onSNSLogin(login)}>
                      <Comm.SNSIcons {...rest} />
                      <p>{title}</p>
                    </Auth.SNSBtn>
                  ))}
                </Auth.SNSLogin>
              )}
            </Auth.LoginBox>
          </div>
          {/* ** 로그인 관련 상세정보 **  */}
          <div
            className="loginBox"
            children={<LoginInfo $state={personal} />}
          />
        </Auth.LoginArticle>
      </Auth.AuthLayout>
    </Comm.Selection>
  );
}
