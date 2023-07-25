import React from 'react'
import * as Foot from './footerStyle'

function Selection1() {
  return (
    <Foot.Selection1>
    <Foot.Sec1first>
      <Foot.TextBoxLeft $fd="column">
        고객센터
        <a href='tel:1661-2288'><strong>1661-2288</strong></a>
        <p>전화 전 자주 묻는 질문을 확인하세요</p>
      </Foot.TextBoxLeft>
      <div>
        평일 09:00 ~ 19:00 (주말, 공휴일 휴무)<br />
        E-mail
        <a href="mailto:help@alba.co.kr">help@alba.co.kr</a> / FAX 02-6455-8955
      </div>
    </Foot.Sec1first>
    <Foot.Sec1second>
      <Foot.FooterIconBox>
        <Foot.FooterIcons $left={"-60px"}>
          <img
            src={require("../../assets/images/footerIcons.png")}
            alt="FooterIcons"
          />
        </Foot.FooterIcons>
        자주묻는 질문
      </Foot.FooterIconBox>
      <Foot.FooterIconBox>
        <Foot.FooterIcons>
          <img
            src={require("../../assets/images/footerIcons.png")}
            alt="FooterIcons"
          />
        </Foot.FooterIcons>
        공고등록대행 문의
      </Foot.FooterIconBox>
      <Foot.FooterIconBox>
        <Foot.FooterIcons $top={"-60px"}>
          <img
            src={require("../../assets/images/footerIcons.png")}
            alt="FooterIcons"
          />
        </Foot.FooterIcons>
        온라인 문의
      </Foot.FooterIconBox>
    </Foot.Sec1second>
    <Foot.Sec1third>
      <div style={{marginLeft:"1.5rem"}}>
        <span>APP 다운로드</span>
        <p>
        언제 어디서나 맞춤 채용정보를<br />
        확인하세요 !
        </p>
        </div>
        <p>
        <img
          src={require("../../assets/images/footer_app.png")}
          alt="FooterIcon"
        />
        </p>
      
    </Foot.Sec1third>
  </Foot.Selection1>
  )
}

export default Selection1