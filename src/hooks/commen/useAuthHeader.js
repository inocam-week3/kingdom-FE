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
      size:38
    },
    {
      title:"카카오",
      top:-110,
      left:-41,
      size:38
    },
    {
      title:"페이스북",
      top:-110,
      left:-83,
      size:38
    },
    {
      title:"Apple",
      top:-110,
      left:-123,
      size:38
    }
  ]

  return { loginNavLink, signupNavLink, snsLogin };
};
    