import { useState } from "react";
import { useSignupRTKMutation } from "../../redux";

export const useSignupPersonal = () => {
  // (1) 개인개인 input Value를 위한 상태
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    pwchecked: "",
    username: "",
    gender: "male",
  });

  // (2) 개인개인 유효성 검사를 위한 상태
  const [validiteMsg, setValiditeMse] = useState({
    validteEmail: ["", false],
    validtepassword: ["", false],
    passwordChMsg: ["", false],
  });

  // (2-1) 개인회원 유효성 검사를 위한 검증함수
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

  // (3) 개인회원 회원가입을 위한 함수부
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
        enterprisecode: 0,
      });
    }
  };

  return { validiteMsg, inputValue,handleInuptChange, onSubmitSignup, data, isError, isSuccess, error };
};



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
