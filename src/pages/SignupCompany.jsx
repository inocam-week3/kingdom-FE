import React, { useEffect } from "react";
import * as Auth from "../components/auth";
import { useRouter } from "../hooks/commen";
import { useSignupCompony } from "../hooks/auth/useSignupCompony";

export function SignupCompany() {
  const { onNavigate } = useRouter();
  const {
    validiteMsg, // 유효성검사MSG
    inputValue, // inputValue
    handleInuptChange, // inputValuechange
    onSubmitSignup, // 회원가입 Submit
    // 회원가입 결과에 따른 리다이렉트 로직
    data,
    isError,
    isSuccess,
    error,
  } = useSignupCompony();


  useEffect(() => {
    if (isSuccess) {
      alert(data);
      onNavigate("/login", { replace: true })();
    } else if (isError) {
      console.log("회원가입 실패", error?.message);
    }
  }, [data, isError, isSuccess, error, onNavigate]);

  console.log(JSON.stringify(inputValue));

  return (
    <Auth.AuthSignupForm
      signupTpye="기업회원"
      onSubmitSignup={onSubmitSignup}
      inputValue={inputValue}
      handleInuptChange={handleInuptChange}
      validiteMsg={validiteMsg}
    >
      <div style={{ width: "100%" }}>
        <Auth.AuthSection>
          <div style={{ position: "relative" }}>
            <Auth.AuthInput
              id="enterpriseCode"
              type="text"
              name="enterpriseCode"
              value={inputValue.enterpriseCode}
              placeholder="사업자번호, 하이픈 없이 숫자만 입력해주세요."
              onChange={handleInuptChange}
              maxLength={10}
            />
            <Auth.AuthLabel htmlFor="enterpriseCode">사업자번호</Auth.AuthLabel>
          </div>
        </Auth.AuthSection>
        <Auth.ValidateInputMsg $color={validiteMsg.enterpriseCode[1]} children={validiteMsg.enterpriseCode[0]}/>
      </div>
    </Auth.AuthSignupForm>
  );
}
