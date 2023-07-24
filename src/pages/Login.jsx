import React from "react";
import * as Comm from "../components/common";
import * as Auth from "../components/auth";
import { useAuthHeader, useRoter } from "../hooks/commen";

export function Login() {
  const { loginNavLink } = useAuthHeader();
  const { onNavigate } = useRoter();
  return (
    <Comm.PageLayout $width="820px">
      {/* ** Header **  */}
      <Auth.AuthHeader>
        {loginNavLink.map(({ size, path, NavTitle }, index) =>
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
      <Auth.AuthLoginBody />
    </Comm.PageLayout>
  );
}
