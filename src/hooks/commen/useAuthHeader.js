import { useLoginSNSRTKMutation } from "../../redux";

export const useAuthHeader = () => {
  const loginNavLink = [
    {
      size: 16,
      path: "job",
      NavTitle: "사용정보",
    },
    {
      size: 16,
      path: "resume",
      NavTitle: "인재정보",
    },
    {
      size: 16,
      path: "stories/1",
      NavTitle: "알바스토리",
    },
  ];

  const signupNavLink = [
    {
      size: 16,
      path: "",
      NavTitle: "HOME",
    },
    {
      size: 16,
      path: "login",
      NavTitle: "로그인",
    }
  ];

  const snsLogin = [
    {
      title:"네이버",
      top:-110,
      left:0,
      size:38,
      login:"naver"
    },
    {
      title:"카카오",
      top:-110,
      left:-41,
      size:38,
      login:"kakao"
    },
    {
      title:"페이스북",
      top:-110,
      left:-83,
      size:38,
      login:"facebook"
    },
    {
      title:"Apple",
      top:-110,
      left:-123,
      size:38,
      login:"apple"
    }
  ]

  const [postLoginSNS] = useLoginSNSRTKMutation()
  const onSNSLogin = (sns) => async () => {
    let res;
    if (sns === "kakao") {
      res = (window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=ca694ae46e22b997351afa5a92c6c63a&response_type=code&redirect_uri=http://localhost:3000/api/auth/${sns}`)
      await postLoginSNS(res)
    }
  }

  return { loginNavLink, signupNavLink, snsLogin, onSNSLogin };
};
    
// http://localhost:3000/api/auth/kakao?code=Hnt_hBKhb8XVUcTkx1SlYmd3LGFVxV9k222E_Io5sJiygmjTkSuJ9pP5wQ94iARTKbqaIAo9cxcAAAGJkM-Qqw