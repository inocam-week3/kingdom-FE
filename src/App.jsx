import React from "react";
import * as Pages from "./pages";
import { Header } from "./components/common";
import { Route, Routes } from "react-router-dom";
import { AuthSignupMain } from "./components/auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>

        <Route index element={<Pages.Home />} />
        <Route path="job" element={<Pages.Job />} />
        <Route path="resume" element={<Pages.Resume />} />
        <Route path="stories/:id" element={<Pages.Stories />} />
        <Route path="messenger" element={<Pages.Messenger />} />
        <Route path="job/:id" element={<Pages.JobDetail />} />
          <Route path="resume/:id" element={<Pages.ResumeDetail />} />
          <Route path="stories/:id/:id" element={<Pages.StoryDetail />} />
          <Route path="*" element={<Pages.NotFound />} />
        <Route element={<Pages.ProtectiveRouter />}>
          <Route path="jobwrite" element={<Pages.JobWrite />} />
          <Route path="resumewrite" element={<Pages.ResumeWrite />} />
          <Route path="storywrite" element={<Pages.StoryWrite />} />
          <Route path="*" element={<Pages.NotFound />} />
        </Route>
        <Route path="*" element={<Pages.NotFound />} />
      </Route>
      <Route path="/login" element={<Pages.Login />} />
      <Route path="/signup" element={<Pages.SignupHeader />} >
        <Route index element={<AuthSignupMain />} />
        <Route path="personal" element={<Pages.SignupPersonal />} />
        <Route path="company" element={<Pages.SignupCompany />} />  
        <Route path="*" element={<Pages.NotFound />} />
      </Route>
      <Route path="*" element={<Pages.NotFound />} />
    </Routes>
  );
}

export default App;
