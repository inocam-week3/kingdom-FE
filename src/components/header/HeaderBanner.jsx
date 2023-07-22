import React from "react";
import { Figure } from "../common";

export function HeaderBanner() {
  return (
    <Figure
      type="banner"
      children={
        <img
          src={require("../../assets/images/homeTopNavBanner.png")}
          alt="homeTopNavBanner"
        />
      }
    />
  );
}
