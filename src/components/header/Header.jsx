// import axios from "axios";
import React, { useLayoutEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { HeaderNavTop } from "./HeaderNavTop";
import { HeaderNavBottom } from "./HeaderNavBottom";
import { HeaderBanner } from "./HeaderBanner";
import { PageLayout } from "../common";
import { HeaderOutline } from "./headerStyle";
import { Footer } from "../footer";

export function Header() {
  const {pathname} = useLocation()
  useLayoutEffect(()=> {
    window.scrollTo(0,0)
  }, [pathname])
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
        <Footer/>
      </PageLayout>
    </>
  );
}

