import React from "react";
import * as Comm from "../components/common";
import { useAuthHeader, useRouter } from "../hooks/commen";
import * as Auth from "../components/auth";
import { Outlet } from "react-router-dom";

export function SignupHeader() {
  const { signupNavLink } = useAuthHeader();
  const { onNavigate } = useRouter();
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
      <Outlet />
    </Comm.PageLayout>
  );
}