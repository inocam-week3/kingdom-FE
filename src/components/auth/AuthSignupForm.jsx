import React, { useState } from 'react'
import * as Comm from '../common';
import * as Auth from './authStyle';

export function AuthSignupForm({ signupTpye,onSubmitSignup,inputValue,handleInuptChange,validiteMsg, children, submitBTN}) {
  const [showPW, setShowPw] = useState(false);
  return (
    <Comm.Selection>
    <Auth.AuthSiguupLayout>
      <Auth.AuthSignupTitle children={`${signupTpye} 가입`} />
      <Comm.FlexBox $fd="column" $gap={40}>
        <Comm.FlexBox
          as="form"
          $fd="column"
          $gap={15}
          style={{ width: "100%" }}
          onSubmit={onSubmitSignup}
        >
          <div style={{ width: "100%" }}>
            <Auth.AuthSection>
              <div style={{ position: "relative" }}>
                <Auth.AuthInput
                  id="userid"
                  type="email"
                  value={inputValue.email}
                  name="email"
                  onChange={handleInuptChange}
                  placeholder="이메일 형식으로 입력해 주세요"
                  maxLength={30}
                />
                <Auth.AuthLabel htmlFor="userid">
                  이이디 (4~15자 영문, 숫자)
                </Auth.AuthLabel>
              </div>
            </Auth.AuthSection>
            <Auth.ValidateInputMsg $color={validiteMsg.validteEmail[1]}>
              {validiteMsg.validteEmail[0]}
            </Auth.ValidateInputMsg>
            <div></div>
          </div>

          <div style={{ width: "100%" }}>
            <Auth.AuthSection>
              <div style={{ position: "relative" }}>
                <Auth.AuthInput
                  id="userpw"
                  type={showPW ? "text" : "password"}
                  name="password"
                  value={inputValue.password}
                  onChange={handleInuptChange}
                  placeholder="비밀번호"
                  maxLength={15}
                />
                <Auth.AuthLabel htmlFor="userpw">
                  비밀번호 8~15자의 영문/숫자 또는 특수문자 조합
                </Auth.AuthLabel>
                <Auth.PasswordToggleBtn onClick={() => setShowPw(!showPW)}>
                  {showPW ? "숨김" : "표시"}
                </Auth.PasswordToggleBtn>
              </div>
              <div style={{ position: "relative" }}>
                <Auth.AuthInput
                  id="pwchecked"
                  type="password"
                  placeholder="비밀번호 확인"
                  value={inputValue.passwordch}
                  name="pwchecked"
                  onChange={handleInuptChange}
                  maxLength={15}
                />
                <Auth.AuthLabel htmlFor="pwdhecked">
                  비밀번호 재입력
                </Auth.AuthLabel>
              </div>
            </Auth.AuthSection>
            <Auth.ValidateInputMsg $color={validiteMsg.validtepassword[1]}>
              {validiteMsg.validtepassword[0]}
            </Auth.ValidateInputMsg>
            <Auth.ValidateInputMsg $color={validiteMsg.passwordChMsg[1]}>
              {validiteMsg.passwordChMsg[0]}
            </Auth.ValidateInputMsg>
          </div>

          <div style={{ width: "100%" }}>
            <Auth.AuthSection>
              <div style={{ position: "relative" }}>
                <Auth.AuthInput
                  id="username"
                  type="text"
                  name="username"
                  value={inputValue.username}
                  onChange={handleInuptChange}
                  maxLength={15}
                  placeholder="이름"
                />
                <Auth.AuthLabel htmlFor="username">이름</Auth.AuthLabel>
              </div>
            </Auth.AuthSection>
          </div>

          {children}

          <Comm.Button
            $type="authSignup"
            $color={submitBTN}
            onClick={onSubmitSignup}
            style={{ width: "100%" }}
          >
            가입하기
          </Comm.Button>
        </Comm.FlexBox>
      </Comm.FlexBox>
    </Auth.AuthSiguupLayout>
  </Comm.Selection>
);
}

