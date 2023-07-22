export const useAuthLoginHeader = () => {
  const navLink = [
    {
      size: 16,
      path: "/job",
      NavTitle: "사용정보",
    },
    {
      size: 16,
      path: "/resume",
      NavTitle: "인재정보",
    },
    {
      size: 16,
      path: "/story",
      NavTitle: "알바스토리",
    },
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

  return { navLink , snsLogin };
};
    