import { rest } from "msw";
import { headers } from "./testData/auth";



export const handlers = [
  rest.get("/api/auth/login", async(req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success : true,
        info : "message", // 반환값이 없을 때는 message, 반환값이 올때는 실제 데이터가 담겨진다.
        error : null
      }),
      ctx.set("authorization", headers)
    )
    }),
  ]   


/*
  MSW 모킹라이브러리 - 실제 사용법, ctx.status(200), ctx.status(400),
  req : 매핑 요청에 대한 정보
  res : 매핑 응답을 생성한는 기능적 유틸리티
  ctx : 모의 응답의 상태코드, 헤더, 본문 등을 설정하는 데 도움이 되는 함수 그룹이다.

  ctx.status(200),
  ctx.json({
    success : true,
    info : "message", // 반환값이 없을 때는 message, 반환값이 올때는 실제 데이터가 담겨진다.
    error : null
  }),
  ctx.set("authorization", headers)

  ctx.status(400),
  ctx.json({message : "비밀번호가 일치하지 않습니다."}),
*/