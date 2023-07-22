import axios from "axios";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { authinfo } from "../../mock/testData";
import { useRoter } from "../../hooks/commen";
import { styled } from "styled-components";
import { FlexBox } from "./GlobalStyle";

export function Header() {
  const { navigate } = useRoter();
  const Nav = [
    {path :'/', pathName:"Home"},
    {path :'/job', pathName:"Job"},
    {path :'/job/:id', pathName:"JobDetail"},
    {path :'/jobwrite', pathName:"JobWrite"},
    {path :'/resume', pathName:"Resume"},
    {path :'/resume/:id', pathName:"ResumeDetail"},
    {path :'/resumewrite', pathName:"ResumeWrite"},
    {path :'/story', pathName:"Story"},
    {path :'/story/:id', pathName:"StoryDetail"},
    {path :'/storywrite', pathName:"StoryWrite"},
    {path :'/messenger', pathName:"Messenger"},
    {path :'/signup', pathName:"signup"},
  ]
  useEffect(()=> {
    async function authLogin () {
        try {
          const res = await axios.post(`/api/auth/login`, authinfo) // 로그인 성공
          // const res = await axios.post(`/api/auth/login`, {...authinfo, email:"asdf"}) // 이메일이 틀렸을 때
          // const res = await axios.post(`/api/auth/login`, {...authinfo, passward:"asdf"}) // 비밀번호가 틀렸을 때
          document.cookie = `accessToken=${res.headers.authorization} path=/`
          // console.log(res.headers.authorization)
        }
        catch (error) {
          console.log(error.response.data.error)
        }
    }
    authLogin()
    },[])
  return (
    <>
      <TestDiv>
        {Nav.map(({path, pathName}) => <NavButton key={pathName} onClick={()=>navigate(`${path}`)}>{pathName}</NavButton>)}
      </TestDiv>
      <Outlet />
    </>
  );
}

const TestDiv = styled(FlexBox)`
  border: 1px solid red;
`;
const NavButton = styled.button`
  border: none;
  background-color: white;
  padding: 10px;
  &:hover {
    background-color : #eee;
  }
`