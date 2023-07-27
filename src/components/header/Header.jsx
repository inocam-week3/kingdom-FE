import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { HeaderNavTop } from "./HeaderNavTop";
import { HeaderNavBottom } from "./HeaderNavBottom";
import { HeaderBanner } from "./HeaderBanner";
import { PageLayout } from "../common";
import { HeaderOutline } from "./headerStyle";
import { Footer } from "../footer";
import { useDispatch } from "react-redux";
import { setDecodeToken } from "../../redux/modules/tokenSlice";

export function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    const refreshtoken =
      document.cookie &&
      document.cookie
        .split(";")
        .filter((cookies) => cookies.includes("refreshtoken"))[0]
        ?.split("=")[1];
    if (!!refreshtoken) {
      dispatch(setDecodeToken(refreshtoken));
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
