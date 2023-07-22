import React from "react";
import * as Comm from "../components/common";
import * as Auth from "../components/auth";

export function Login() {
  return (
    <Comm.PageLayout $width="820px">
      {/* ** Header **  */}
      <Auth.AuthHeader/>
      {/* ** Body **  */}
      <Auth.AuthLoginBody/>
    </Comm.PageLayout>
  );
}

