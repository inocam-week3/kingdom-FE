import React, { useEffect, useLayoutEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { HeaderNavTop } from "./HeaderNavTop";
import { HeaderNavBottom } from "./HeaderNavBottom";
import { HeaderBanner } from "./HeaderBanner";
import { PageLayout } from "../common";
import { HeaderOutline } from "./headerStyle";
import { Footer } from "../footer";
import { useDispatch } from "react-redux";
import { setDecodeToken } from "../../redux/modules/tokenSlice";
import { useHerder } from "../../hooks/commen";

export function Header() {
  // const { pathname } = useLocation();
  // useLayoutEffect(() => {
  //   handleScroll();
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  const dispatch = useDispatch();
  useEffect(() => {
    const accessToken =
      document.cookie &&
      document.cookie
        .split(";")
        .filter((cookies) => cookies.includes("accessToken"))[0]
        ?.split("=")[1];
    if (!!accessToken) {
      dispatch(setDecodeToken(accessToken));
    }
  }, [dispatch]);

  return (
    <>
      <PageLayout>
        <HeaderOutline>
          {/* 배너 */}
          <HeaderBanner />
          {/* NavTop */}
          <HeaderNavTop />
          {/* NavBottm */}
          <HeaderNavBottom />
        </HeaderOutline>
        <Outlet />
        <Footer />
      </PageLayout>
    </>
  );
}

// !! 변수에 대한 accessToken -> "boolean" -> 값이 있으면 true or False (빈배열, 빈객체, "", 0)
