import React from "react";
import * as Foot from "./footerStyle";
import * as Comm from "../common";

function Selection3() {
  return (
    <Foot.Selection3>
      <Comm.Figure width="120px">
        <img
          src={require("../../assets/images/footer_company.png")}
          alt="footer_company"
        />
      </Comm.Figure>
      <address>
        (주)미디어윌네트웍스 서울특별시 강남구 테헤란로 322 동관 20층 | 대표이사
        : 김병섭
        <br />
        사업자등록번호 : 617-81-48252 부가통신사업 : 제021047호 통신판매업신고 :
        제2011-서울강남-03265호 직업정보제공사업 신고번호 : 서울강남 제2008-30호
      </address>
      <div>Copyright © (주)미디어윌네트웍스. All Rights Reserved.</div>
    </Foot.Selection3>
  );
}

export default Selection3