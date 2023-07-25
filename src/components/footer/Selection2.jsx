import React from "react";
import * as Foot from "./footerStyle";
import * as Comm from "../common";
import { useFooter } from "../../hooks/commen/useFooter";

function Selection2() {
  const { selection2Lists } = useFooter();
  return (
    <Foot.Selection2
      $jc="flex-start"
      children={
        <Comm.CustomUl
          children={selection2Lists.map(({ title, ...rest }) => (
            <Comm.Customli
              key={title}
              $type="bottomLine"
              {...rest}
              children={<p>{title}</p>}
            />
          ))}
        />
      }
    ></Foot.Selection2>
  );
}

export default Selection2