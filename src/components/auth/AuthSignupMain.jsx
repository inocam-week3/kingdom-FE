import React from "react";
import * as Comm from "../common";
import * as Auth from "./authStyle";
import { SignupTypeIcons } from "./SignupTypeIcons";
import { SignupSNSIcons } from "./SignupSNSIcons";
import { useRouter } from "../../hooks/commen";

export function AuthSignupMain() {
  const { onNavigate } = useRouter();
  return (
    <Comm.Selection>
      <Auth.AuthSiguupLayout>
        <Auth.AuthSignupTitle children="알바천국 회원가입을 환영합니다." />
        <Comm.FlexBox $fd="column" $gap={40}>
          <Comm.FlexBox $fd="column" $gap={15} style={{ width: "100%" }}>
            <Auth.AuthSignupType $signupbtnColor="yellow">
              <div className="signupClickArea" onClick={onNavigate('/signup/personal')}>
                <div className="signupType">
                  <SignupTypeIcons />
                  <h3>개인회원</h3>
                  <p>알바, 천국에 다 있어요.</p>
                </div>
                <div className="signupbtn">개인회원 가입하기</div>
              </div>
              <Auth.AuthSignupBottomBtn $jc="space-between">
                <Comm.FlexBox $gap={10} onClick={()=>alert("기능 구현 중")} style={{width:"100%", cursor:"pointer", height:"48px", borderRight:"1px solid #eee" }}><SignupSNSIcons top={-40} left={-35}/>네이버</Comm.FlexBox>
                <Comm.FlexBox $gap={10} onClick={()=>alert("기능 구현 중")} style={{width:"100%", cursor:"pointer", height:"48px", borderRight:"1px solid #eee" }}><SignupSNSIcons top={-40} left={-53}/>카카오톡</Comm.FlexBox>
                <Comm.FlexBox $gap={10} onClick={()=>alert("기능 구현 중")} style={{width:"100%", cursor:"pointer", height:"48px", borderRight:"1px solid #eee" }}><SignupSNSIcons top={-40} left={-17}/>페이스북</Comm.FlexBox>
                <Comm.FlexBox $gap={10} onClick={()=>alert("기능 구현 중")} style={{width:"100%", cursor:"pointer", height:"48px"  }}><SignupSNSIcons top={-40} left={2}/>Apple</Comm.FlexBox>
              </Auth.AuthSignupBottomBtn>
            </Auth.AuthSignupType>
          </Comm.FlexBox>

          <Comm.FlexBox $fd="column" $gap={15} style={{ width: "100%" }}>
            <Auth.AuthSignupType $signupbtnColor="blue">
            <div className="signupClickArea" onClick={onNavigate('/signup/company')}>
                <div className="signupType">
                  <SignupTypeIcons left={-49}/>
                  <h3>기업회원</h3>
                  <p>알바생, 천국에 다있어요.</p>
                  <p>(사업자등록번호 필수입력)</p>
                </div>
                <div className="signupbtn">기업회원 가입하기</div>
              </div>
              <Auth.AuthSignupBottomBtn $gap={10} style={{height:"48px"}}>
                빠르고 간편한 공고등록대행 <a href="tel:1661-2544">1661-2544</a>
              </Auth.AuthSignupBottomBtn>
            </Auth.AuthSignupType>
          </Comm.FlexBox>
        </Comm.FlexBox>
      </Auth.AuthSiguupLayout>
    </Comm.Selection>
  );
}
