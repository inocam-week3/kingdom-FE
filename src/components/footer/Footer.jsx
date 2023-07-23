import React from "react";
import * as Foot from "./footerStyle";
import Selection1 from "./Selection1";
import Selection2 from "./Selection2";
import Selection3 from "./Selection3";
import Selection4 from "./Selection4";

export function Footer() {
  return (
    <Foot.FooterLayout $fd="column">
      <Selection1 />
      <Selection2 />
      <Selection3 />
      <Selection4 />
    </Foot.FooterLayout>
  );
}
