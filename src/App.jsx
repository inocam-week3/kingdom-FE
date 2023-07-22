import React from "react";
import * as Pages from "./pages";
import { Header } from "./components/common";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Pages.Home />} />
        <Route path="signup" element={<Pages.Signup />} />
        <Route path="job" element={<Pages.Job />} />
        <Route path="resume" element={<Pages.Resume />} />
        <Route path="story" element={<Pages.Story />} />
        <Route path="messenger" element={<Pages.Messenger />} />
        <Route element={<Pages.ProtectiveRouter />}>
          <Route path="job/:id" element={<Pages.JobDetail />} />
          <Route path="resume/:id" element={<Pages.ResumeDetail />} />
          <Route path="story/:id" element={<Pages.StoryDetail />} />
          <Route path="jobwrite" element={<Pages.JobWrite />} />
          <Route path="resumewrite" element={<Pages.ResumeWrite />} />
          <Route path="storywrite" element={<Pages.StoryWrite />} />
        </Route>
        <Route path="*" element={<Pages.NotFound />} />
      </Route>
      <Route path="login" element={<Pages.Login />} />
    </Routes>
  );
}

export default App;
