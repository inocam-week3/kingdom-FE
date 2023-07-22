// import axios from "axios";
import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderNavTop } from "./HeaderNavTop";
import { HeaderNavBottom } from "./HeaderNavBottom";
import { HeaderBanner } from "./HeaderBanner";
import { PageLayout } from "../common";
import { HeaderOutline } from "./headerStyle";

export function Header() {
  return (
    <>
      <PageLayout>
        <HeaderOutline>
          {/* 배너 */}
          <HeaderBanner/>
          {/* NavTop */}
          <HeaderNavTop/>
          {/* NavBottm */}
          <HeaderNavBottom/>
        </HeaderOutline>
        <Outlet />
      </PageLayout>
    </>
  );
}

