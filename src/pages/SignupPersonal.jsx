import React, { useState } from "react";
import * as Comm from "../components/common";
import * as Auth from "../components/auth";
// import { useRoter } from "../hooks/commen";

export function SignupPersonal() {
  // const { onNavigate } = useRoter();
  const [showPW, setShowPw] = useState(false);
  
  const [validiteMsg, setValiditeMse] = useState({
    validteEmail : ["", false],
    validtepassword : ["", false],
    passwordChMsg : ["", false]
  }) 


  const [inputValue, setUnputValue] = useState({
    email: "",
    password: "",
    pwchecked:"",
    username: "",
    gender: "male"

  });

  const handleInuptChange = (e) => {
    const {name, value} = e.target

    setUnputValue({...inputValue, [name]:value})
    if(name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // +@ , +\. 에서 볼 수 있듯이 선행되는 문자와, @ . 사이에 내용과, . 듸에 내용에 모두 내용이 있을 때 정규식이 통과된다. 
      // 문자열의 시작이 [^] 대괄호 안에서 시작되는 캐럿(^)은 지정된 세트 안에 뒷따르는 내용이 없는 것을 탐색한다. 
      // [^\s@] : \s 는 공백, @ 은 @ 를 의미한다. 
      // ^ 문자열의 시작을 
      // $ 문자열의 마지막을 의미한다. 

      emailRegex.test(value)  
      ? setValiditeMse({...validiteMsg, validteEmail:["사용 가능한 이메일입니다.", true]})
      : setValiditeMse({...validiteMsg, validteEmail:["이메일을 입력해주세요(exam@.exam.com)", false]})
    }
    if(name === "password") {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#?$%^&*]).{8,15}$/
      value.length < 8 
        ? setValiditeMse({...validiteMsg, validtepassword:["8자 이상 입력해 주세요.", false]})
        : passwordRegex.test(value)
        ? setValiditeMse({...validiteMsg, validtepassword:["보안등급: 높음 보안등급이 높을 수록 서비스를 안전하게 이용할 수 있습니다.", true]})
        : setValiditeMse({...validiteMsg, validtepassword:["알파벳 대문자,알파벳 소문자, 숫자, 특수문자(?, !, * 등)를 조합하여 입력해 주세요.", false]})
    }
    if(name === "pwchecked") {
      !validiteMsg.validtepassword[1] 
      ? setValiditeMse({...validiteMsg, passwordChMsg:["", false]})
      : validiteMsg.validtepassword[1] && inputValue.password === value
      ? setValiditeMse({...validiteMsg, passwordChMsg:["비밀번호가 일치합니다.", true]})
      : setValiditeMse({...validiteMsg, passwordChMsg:["입력하신 비밀번호가 서로 다릅니다.", false]})
    }
  };

  return (
    <Comm.Selection>
      <Auth.AuthSiguupLayout>
        <Auth.AuthSignupTitle children="개인회원 가입" />
        <Comm.FlexBox $fd="column" $gap={40}>
          <Comm.FlexBox
            as="form"
            $fd="column"
            $gap={15}
            style={{ width: "100%" }}
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
              <Auth.ValidateInputMsg $color={validiteMsg.validteEmail[1]}>{validiteMsg.validteEmail[0]}</Auth.ValidateInputMsg>
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
              <Auth.ValidateInputMsg $color={validiteMsg.validtepassword[1]}>{validiteMsg.validtepassword[0]}</Auth.ValidateInputMsg>
              <Auth.ValidateInputMsg $color={validiteMsg.passwordChMsg[1]}>{validiteMsg.passwordChMsg[0]}</Auth.ValidateInputMsg>

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

            <div style={{ width: "100%" }}>
              <Auth.AuthSection>
                <div style={{ position: "relative", height: "54px" }}>
                  <Auth.AuthLabel children="성별" />
                  <br />
                  <br />
                  <a>
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      // style={{ display: "none" }}
                      checked={inputValue.gender === "male"}
                      onChange={handleInuptChange}
                    />
                    <label htmlFor="male">남성</label>
                  </a>
                  <a>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      // style={{ display: "none" }}
                      checked={inputValue.gender === "female"}
                      onChange={handleInuptChange}
                    />
                    <label htmlFor="female" >여성</label>
                  </a>
                </div>
              </Auth.AuthSection>
            </div>

            <Comm.Button
              $type="authSignup"
              $color={true}
              onClick={() => alert(JSON.stringify(inputValue))}
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
