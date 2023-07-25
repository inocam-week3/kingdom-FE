import React, { useEffect } from "react";
import * as Auth from "../components/auth";
import { useRouter } from "../hooks/commen";
import * as Comm from "../components/common";
import { useSignupPersonal } from "../hooks/auth/useSignupPersonal";

export function SignupPersonal() {
  const { onNavigate } = useRouter();

  const {
    validiteMsg, // 유효성검사MSG
    inputValue,  // inputValue
    handleInuptChange, // inputValuechange
    onSubmitSignup, // 회원가입 Submit
    // 회원가입 결과에 따른 리다이렉트 로직
    data, 
    isError,
    isSuccess,
    error,
  } = useSignupPersonal();

  useEffect(() => {
    if (isSuccess) {
      onNavigate("/login", { replace: true })();
    } else if (isError) {
      console.log("회원가입 실패", error?.message);
    }
  }, [data, isError, isSuccess, error, onNavigate]);

  return (
    <Auth.AuthSignupForm
      signupTpye="개인회원"
      onSubmitSignup={onSubmitSignup}
      inputValue={inputValue}
      handleInuptChange={handleInuptChange}
      validiteMsg={validiteMsg}
      submitBTN={true}
    >
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
                checked={inputValue.gender === "male"}
                onChange={handleInuptChange}
              />
              <label htmlFor="male">남성</label>

              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={inputValue.gender === "female"}
                onChange={handleInuptChange}
              />
              <label htmlFor="female">여성</label>
            </Comm.FlexBox>
          </div>
        </Auth.AuthSection>
      </div>
    </Auth.AuthSignupForm>
  );
}