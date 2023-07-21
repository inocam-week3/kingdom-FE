import { rest } from "msw";
import * as MockData from "./testData";

export const handlers = [
  // login - 로그인 체크 (성공, 이메일 틀렸을 때, 비밀번호 틀렸을 때)
  rest.post("/api/auth/login", async(req, res, ctx) => {
    const {email, passward} = await req.json()
    if (MockData.authinfo.email === email && MockData.authinfo.passward === passward) {
      return res(
        ctx.status(200),
        ctx.json({
          success : true,
          info : "message", // 반환값이 없을 때는 message, 반환값이 올때는 실제 데이터가 담겨진다.
          error : null
        }),
        ctx.set("authorization", MockData.headers)
      );
    } else if (MockData.authinfo.email !== email) {
      return res(
        ctx.status(400),
        ctx.json({
          success : false,
          info : null,
          error : "존재하지 않는 이메일입니다."
        }),
      );
    } else {
      return res(
        ctx.status(400),
        ctx.json({
          success : false,
          info : null,
          error : "비밀번호가 틀렸습니다."
        }),
      );
    };
  }),

  // Register - 이메일 중복체크
  rest.get("/api/auth/email", async(req, res, ctx) => {
    const {href} = await req.url
    if (MockData.authinfo.email === href.split('email?=')[1]) {
      return res(
        ctx.status(400),
        ctx.json({
          success : false,
          info : null,
          error : "이미 존재하는 아이디입니다.", 
        }),
      );
    } else {
      return res(
        ctx.status(200),
        ctx.json({
          success : true,
          info : "사용 가능한 아이디입니다.", // 반환값이 없을 때는 message, 반환값이 올때는 실제 데이터가 담겨진다.
          error : null
        }),
      );
    };
  }),

  // HomePage - homejobs
  rest.get("/api/homejobs", async(req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success : false,
        info : MockData.homeMorkDataJobs,
        error : null
      }),
    );
  }),

  // HomePage - homeStories
  rest.get("/api/homestories", async(req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success : false,
        info : MockData.jobDetailMorkData,
        error : null
      }),
    );
  }),

  // Job - JodsData
  rest.get("/api/job", async(req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success : false,
        info : MockData.jobsMorkData,
        error : null
      }),
    );
  }),

  // Job - JodDetatilData
  rest.get("/api/job/:id", async(req, res, ctx) => {
    const {id} = await req.params
    const find = MockData.jobDetailMorkData.find(jobs => jobs.id === +id)
    return res(
      ctx.status(200),
      ctx.json({
      success : false,
      info : find,
      error : null
    })
    )
  })








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

        ctx.status(400),
      ctx.json({
        success : true,
        info : null,
        error : "Error message", // 반환값이 없을 때는 message, 반환값이 올때는 실제 데이터가 담겨진다.
      }),
*/