import React from "react";
import * as Foot from "./footerStyle";
import { Prize } from "./Prize";
import { useFooter } from "../../hooks/commen/useFooter";


function Selection4() {
  const {selection4Lists} = useFooter()
  return (
    <Foot.Selection4>
      {selection4Lists.map(({href, ...rest}, index)=>(<figure key={index}><a href={href} children={<Prize {...rest}/>}/></figure>))}
    </Foot.Selection4>
  );
}

export default Selection4;
