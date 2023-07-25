import { useState } from "react";
import { useSignupRTKMutation } from "../../redux";

export const useSignupCompony = () => {
  // (1) 기업회원 input Value를 위한 상태
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    pwchecked: "",
    username: "",
    enterprisecode: "",
  });

  // (2) 개인개인 유효성 검사를 위한 상태
  const [validiteMsg, setValiditeMse] = useState({
    validteEmail: ["", false],
    validtepassword: ["", false],
    passwordChMsg: ["", false],
    enterprisecode: ["", false],
  });

  // (2-1) 개인회원 유효성 검사를 위한 검증함수
  const handleInuptChange = (e) => {
    const { name, value } = e.target;
    if (name === "enterprisecode") {
      const replace = value.replace(/\D/g, "")
      setInputValue({ ...inputValue, [name]: replace })

    } else {
      setInputValue({ ...inputValue, [name]: value })
    }
    
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
    if (name === "enterprisecode") {
      console.log(inputValue.enterprisecode.length);
      inputValue.enterprisecode.length === 0
        ? setValiditeMse({ ...validiteMsg, enterprisecode: ["", false] })
        : inputValue.enterprisecode.length <=8
        ? setValiditeMse({ ...validiteMsg, enterprisecode: ["사업자번호 10자리를 입력해주세요.(하이븐 없이)", false] })
        : setValiditeMse({ ...validiteMsg, enterprisecode: ["유효한 사업자번호입니다", true] })
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
          enterprisecode: inputValue.enterprisecode,
        });
      }
    };


  return {validiteMsg, inputValue,handleInuptChange, onSubmitSignup, data, isError, isSuccess, error};
};
