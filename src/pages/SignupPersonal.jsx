import React, { useEffect, useState } from "react";
import * as Comm from "../components/common";
import * as Auth from "../components/auth";
import { useSignupRTKMutation } from "../redux";
import { useRouter } from "../hooks/commen";

export function SignupPersonal() {
  const { onNavigate } = useRouter();
  const [showPW, setShowPw] = useState(false);

  const [validiteMsg, setValiditeMse] = useState({
    validteEmail: ["", false],
    validtepassword: ["", false],
    passwordChMsg: ["", false],
  });

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    pwchecked: "",
    username: "",
    gender: "male",
  });

  const handleInuptChange = (e) => {
    const { name, value } = e.target;

    setInputValue({ ...inputValue, [name]: value });
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // +@ , +\. 에서 볼 수 있듯이 선행되는 문자와, @ . 사이에 내용과, . 듸에 내용에 모두 내용이 있을 때 정규식이 통과된다.
      // 문자열의 시작이 [^] 대괄호 안에서 시작되는 캐럿(^)은 지정된 세트 안에 뒷따르는 내용이 없는 것을 탐색한다.
      // [^\s@] : \s 는 공백, @ 은 @ 를 의미한다.
      // ^ 문자열의 시작을
      // $ 문자열의 마지막을 의미한다.

      emailRegex.test(value)
        ? setValiditeMse({
            ...validiteMsg,
            validteEmail: ["사용 가능한 이메일입니다.", true],
          })
        : setValiditeMse({
            ...validiteMsg,
            validteEmail: ["이메일을 입력해주세요(exam@.exam.com)", false],
          });
    }
    if (name === "password") {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#?$%^&*]).{8,15}$/;
      value.length < 8
        ? setValiditeMse({
            ...validiteMsg,
            validtepassword: ["8자 이상 입력해 주세요.", false],
          })
        : passwordRegex.test(value)
        ? setValiditeMse({
            ...validiteMsg,
            validtepassword: [
              "보안등급: 높음 보안등급이 높을 수록 서비스를 안전하게 이용할 수 있습니다.",
              true,
            ],
          })
        : setValiditeMse({
            ...validiteMsg,
            validtepassword: [
              "알파벳 대문자,알파벳 소문자, 숫자, 특수문자(?, !, * 등)를 조합하여 입력해 주세요.",
              false,
            ],
          });
    }
    if (name === "pwchecked") {
      !validiteMsg.validtepassword[1]
        ? setValiditeMse({ ...validiteMsg, passwordChMsg: ["", false] })
        : validiteMsg.validtepassword[1] && inputValue.password === value
        ? setValiditeMse({
            ...validiteMsg,
            passwordChMsg: ["비밀번호가 일치합니다.", true],
          })
        : setValiditeMse({
            ...validiteMsg,
            passwordChMsg: ["입력하신 비밀번호가 서로 다릅니다.", false],
          });
    }
  };

  const [onPostSignup, { data, isError, isSuccess, error }] =
    useSignupRTKMutation();

  const onSubmitSignup = async (e) => {
    e.preventDefault();

    if (
      validiteMsg.passwordChMsg[1] &&
      validiteMsg.validteEmail[1] &&
      validiteMsg.validtepassword[1]
    ) {
        onPostSignup({
          email: inputValue.email,
          password: inputValue.password,
          username: inputValue.username,
          gender: inputValue.gender,
          enterpriseCode: "0",
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      alert(data);
      onNavigate("/login")();
    } else {
      console.log("회원가입 실패", error?.message);
    }
  }, [data, isError, isSuccess, error, onNavigate]);

  /*
    CHRT-GPT
    React Query와 Redux Toolkit Query (RTK Query)에서의 성공과 오류 처리를 조금 다르게 접근다. 
    React Query - 퀴리나 뮤테이션을 정의할 때 제공하는 onSuccess, onError 콜백을 사용하여 성공과 오류 처리를 즉시 처리한다. 
    RTK Query는 useMutation과 useQuery 훅을 제공하지만, 
    React Query와 달리 내장된 onSuccess와 onError 콜백을 제공하지 않습니다. 
    대신에 성공과 오류 처리를 수동으로 useEffect 훅을 사용하여 처리해야 한다. 
    
    - useEffect 훅은 data, isError, isSuccess를 감시하고, 이 중 어느 하나라도 변경되면 성공 또는 오류 처리에 해당하는 코드 블록을 실행한다. 
    - React Query는 onSuccess과 onError를 통해 성공과 오류 처리를 더 간편하지만,
    - RTK Query는 설정이 간소화되고 자동 상태 관리, 내장 캐싱 및 백그라운드 데이터 가져오기 기능 등 다른 이점을 제공한다. 
  */

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

            <div style={{ width: "100%" }}>
              <Auth.AuthSection>
                <div
                  style={{
                    position: "relative",
                    height: "54px",
                    paddingTop: "30px",
                  }}
                >
                  <Auth.AuthLabel children="성별" />
                  <Comm.FlexBox
                    $gap={5}
                    $jc="flex-start"
                    style={{ paddingLeft: "15px" }}
                  >
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

                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      // style={{ display: "none" }}
                      checked={inputValue.gender === "female"}
                      onChange={handleInuptChange}
                    />
                    <label htmlFor="female">여성</label>
                  </Comm.FlexBox>
                </div>
              </Auth.AuthSection>
            </div>

            <Comm.Button
              $type="authSignup"
              $color={true}
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
