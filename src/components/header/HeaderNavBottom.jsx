import React, { useEffect } from "react";
import * as Nav from "./headerStyle";
import * as Comm from "../common";
import { useHerder, useRouter } from "../../hooks/commen";
import { HeaderWriteBtn } from "./HeaderWriteBtn";

export function HeaderNavBottom() {
  const { navLink, WriteBtn, headerRef, handleScroll } = useHerder();
  const { onNavigate } = useRouter();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Nav.NavBotom ref={headerRef} $color={Comm.theme.color.yellow}>
      <Comm.FlexBox $jc="space-between" style={{ width: "100%" }}>
        <Comm.CustomUl>
          {/* 전체메뉴 */}
          <Comm.Customli size={16} $type={"headerMenu"}>
            <Comm.FlexBox>
              <Comm.AlbaIcons top={2} left={-47} size={20} />
              <p>전체메뉴</p>
              <div className="bottomLine"></div>
            </Comm.FlexBox>
          </Comm.Customli>

          {/* 채용정보, 인재정보, 알바스토리 */}
          {navLink.map(({ size, path, NavText }) => (
            <Comm.Customli
              key={`${NavText}, ${path}`}
              size={size}
              $type={"headerMenu"}
            >
              <Comm.FlexBox onClick={onNavigate(path)}>
                <p>{NavText}</p>
                <div className="bottomLine"></div>
              </Comm.FlexBox>
            </Comm.Customli>
          ))}
        </Comm.CustomUl>

        <Comm.FlexBox>
          {WriteBtn.map((write) => (
            <HeaderWriteBtn key={write.text} {...write} />
          ))}
        </Comm.FlexBox>
      </Comm.FlexBox>
    </Nav.NavBotom>
  );
}
