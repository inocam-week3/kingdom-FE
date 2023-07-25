import React from "react";
import { ResumeBanner } from "../components/resume";
import { ResumeList } from "../components/resume";

export function Resume() {

  return (
    <>
      <ResumeBanner />
      <ResumeList />
      {/* {resumes &&
        resumes.map((item) => (
          <section key={item.id} onClick={onNavigate(`/resume/${item.id}`)}>
            {item.username}
          </section>
        ))} */}
    </>
  );
}
