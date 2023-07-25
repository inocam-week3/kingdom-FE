import { useRef, useState } from "react";

export const useHerder = () => {
  const [headerFixed, setHeaderFixed] = useState(false);
  const headerRef = useRef(null);
  const handleScroll = () => {
    const scrllPosition = window.scrollY;
    if (scrllPosition > 180 && !headerFixed) {
      setHeaderFixed(true);
    } else if (scrllPosition <= 180 && headerFixed) {
      setHeaderFixed(false);
    }

    if (headerFixed && headerRef) {
      headerRef.current.style.position = "fixed";
      headerRef.current.style.top = "0";
    } else {
      headerRef.current.style.position = "relative";
      headerRef.current.style.top = "auto";
    }
  };

  const navLink = [
    {
      size: 16,
      path: "/job",
      NavText: "채용정보",
    },
    {
      size: 16,
      path: "/resume",
      NavText: "인재정보",
    },
    {
      size: 16,
      path: "/stories/1",
      NavText: "알바스토리",
    },
  ];

  const WriteBtn = [
    {
      color:"lightyellow",
      fcolor:"black363",
      path:"/resumewrite",
      text:"이력서등록"
    },
    {
      color:"lightblue",
      fcolor:"white",
      path:"/jobwrite",
      text:"공고등록"
    }
  ]

  return { navLink, WriteBtn, headerRef, handleScroll };
};
