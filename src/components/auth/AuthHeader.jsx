import React from "react";
import * as Comm from "../common";
import { NavBotom } from "../header/headerStyle";
import { useAuthLoginHeader, useRoter } from "../../hooks/commen";

export function AuthHeader() {
  const { onNavigate } = useRoter();
  const { navLink } = useAuthLoginHeader();
  return (
    <NavBotom $color={Comm.theme.color.black363} $width="820px">
      <Comm.FlexBox $jc="space-between" style={{ width: "100%" }}>
        <Comm.Figure
          onClick={onNavigate("/")}
          width="100px"
          type="autLogo"
          children={
            <img
              src={require("../../assets/images/HeavenLogo(2).png")}
              alt="HeavenLogo"
            />
          }
        />

        <Comm.CustomUl $type="login">
          {navLink.map(({ size, path, NavTitle }) => (
            <Comm.Customli key={NavTitle} size={size}>
              <Comm.FlexBox onClick={onNavigate(`/${path}`)}>
                <p>{NavTitle}</p>
                <div className="bottomLine"></div>
              </Comm.FlexBox>
            </Comm.Customli>
          ))}
        </Comm.CustomUl>
      </Comm.FlexBox>
    </NavBotom>
  );
}
