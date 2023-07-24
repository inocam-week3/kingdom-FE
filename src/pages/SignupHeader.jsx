import React from "react";
import * as Comm from "../components/common";
import { useAuthHeader, useRoter } from "../hooks/commen";
import * as Auth from "../components/auth";

export function SignupHeader() {
  const { signupNavLink } = useAuthHeader();
  const { onNavigate } = useRoter();
  return (
    <Comm.PageLayout $width="820px">
      {/* ** Header **  */}
      <Auth.AuthHeader>
        {signupNavLink.map(({ size, path, NavTitle }, index) =>
          index === 0 ? (
            <Comm.Customli key={NavTitle} size={size}>
              <Comm.FlexBox onClick={onNavigate(`/${path}`)}>
                {NavTitle}
              </Comm.FlexBox>
            </Comm.Customli>
          ) : (
            <Comm.Customli key={NavTitle} size={size} $before="horizon">
              <Comm.FlexBox onClick={onNavigate(`/${path}`)}>
                {NavTitle}
              </Comm.FlexBox>
            </Comm.Customli>
          )
        )}
      </Auth.AuthHeader>
      {/* ** Body **  */}
      <Auth.AuthSignupBody />
    </Comm.PageLayout>
  );
}

// useEffect(()=>{
//   async function comformEmail () {
//     try {
//       // const res = await axios.get(`/api/auth/email?=${authinfo.email}`) // 중복일 때
//       const res = await axios.get(`/api/auth/email?=${"asdfasdf@naver.com"}`) // 사용가능한 이메일 때
//       console.log(res.data.info)
//       return
//     }
//     catch (error) {
//       console.log(error.response.data.error)
//     }
//   }
//   comformEmail()
// },[])
// const [inputValue, setInputValue] = useState({

//   email:"",
//   password:""
// })

// const onChangInput = () => (e) => {
//   const {name, value} = e.target
//   setInputValue({...inputValue, [name]:value})
// }

// const onClickLogin = (sns) => () => {
//   window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=ca694ae46e22b997351afa5a92c6c63a&response_type=code&redirect_uri=http://localhost:8080/api/auth/${sns}`
// }
