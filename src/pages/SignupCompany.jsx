import React, { useState } from "react";
import * as Comm from "../components/common";
import * as Auth from "../components/auth";
import { useRouter } from "../hooks/commen";

export function SignupCompany() {
  const { onNavigate } = useRouter();
  const [showPW, setShowPw] = useState(false);
  const [gender, setGender] = useState("male");

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const [inputValue, setUnputValue] = useState({
    email: "",
    password: "",
    passwordch:"",
    username: "",
    gender,
  });

  const handleInuptChange = (e) => {
    const {name, value} = e.target
    setUnputValue({...inputValue, [name]:value})
  };

  return (
    <Comm.Selection>
      <Auth.AuthSiguupLayout>
        <Auth.AuthSignupTitle children="기업회원 가입" />
        <Comm.FlexBox $fd="column" $gap={40}>
          <Comm.FlexBox
            as="form"
            $fd="column"
            $gap={15}
            style={{ width: "100%" }}
          >
            <div style={{width:"100%"}}>
              <Auth.AuthSection>
                <div style={{ position: "relative" }}>
                  <Auth.AuthInput
                    id="userid"
                    type="email"
                    placeholder="이메일"
                    maxLength={15}
                  />
                  <Auth.AuthLabel htmlFor="userid">
                    이이디 (4~15자 영문, 숫자)
                  </Auth.AuthLabel>
                </div>
              </Auth.AuthSection>
              <div>사용가능한 아이디 입니다.</div>
              <div>4자~15자 사이의 영문 또는 숫자만 가능합니다.</div>
              <div>이미 사용중이거나 탈퇴한 아이디입니다.</div>
            </div>

            <div style={{width:"100%"}}>
            <Auth.AuthSection>
              <div style={{ position: "relative" }}>
                <Auth.AuthInput
                  id="userpw"
                  type={showPW ? "text" : "password"}
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
                <Auth.AuthInput id="pwdhecked" type="password" placeholder="비밀번호 확인" maxLength={15}/>
                <Auth.AuthLabel htmlFor="pwdhecked">
                  비밀번호 재입력
                </Auth.AuthLabel>
              </div>
            </Auth.AuthSection>
            <div>보안등급: 높음 보안등급이 높을 수록 서비스를 안전하게 이용할 수 있습니다.</div>
            <div>영문, 숫자, 특수문자(?, !, * 등)를 조합하여 입력해 주세요.</div>
            <div>비밀번호와 일치하지 않습니다. 다시 입력하세요</div>
            </div>

            <div style={{width:"100%"}}>
              <Auth.AuthSection>
                <div style={{ position: "relative" }}>
                  <Auth.AuthInput
                    id="userid"
                    type="text"
                    maxLength={15}
                    placeholder="이름"
                  />
                  <Auth.AuthLabel htmlFor="userid">
                    이름
                  </Auth.AuthLabel>
                </div>
              </Auth.AuthSection>
              <div>사용가능한 아이디 입니다.</div>
              <div>4자~15자 사이의 영문 또는 숫자만 가능합니다.</div>
              <div>이미 사용중이거나 탈퇴한 아이디입니다.</div>
            </div>

            <div style={{width:"100%"}}>
              <Auth.AuthSection>
                <div style={{ position: "relative" }}>
                  <Auth.AuthInput
                    id="userid"
                    type="text"
                    placeholder="사업자번호, 하이픈 없이 숫자만 입력해주세요."
                    maxLength={10}
                  />
                  <Auth.AuthLabel htmlFor="userid">
                    사업자번호
                  </Auth.AuthLabel>
                </div>
              </Auth.AuthSection>
              <div>유효하지 않은 사업자번호 입니다.// 2066270306 10자리 </div>
              <div>4자~15자 사이의 영문 또는 숫자만 가능합니다.</div>
              <div>이미 사용중이거나 탈퇴한 아이디입니다.</div>
            </div>

            <Comm.Button $type="authSignup" onClick={()=>alert("가입여부")} style={{width:"100%"}}>가입하기</Comm.Button>
          </Comm.FlexBox>
        </Comm.FlexBox>
      </Auth.AuthSiguupLayout>
    </Comm.Selection>
  );
}

/*
From 
  하나의 inupt 
  selection
    div
      div 
        inupt
        label
*/

/*
  // 이용약관에 전체 동의 하지 않음 
  아이디
  비빌번호 8~15자리, 영문/숫자 또는특수문자 조합
  이름 - 유효성 검사
  생련월일 - 유효성검사
  이메일 - 유효성검사 
  휴대폰 인증번호
  가입하기 버튼

  API
  email: string,
  passward: string,
  username: string,
  gender: string
  enterprisecode : string
*/
