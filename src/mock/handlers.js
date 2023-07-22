import { rest } from "msw";
import * as MockData from "./testData";
import { useDispatch } from "react-redux";
import { deleteJobsDate } from "../redux/modules/morkServer";

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
        info : MockData.homeMorkDataStorie,
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
  }),

  // Job - JodDetatilData - DELETE
  rest.delete("/api/job/:id", async(req, res, ctx) => {
    const {id} = await req.params
    return res(
      ctx.status(200),
      ctx.json({
      success : false,
      info : null,
      error : null
    })
    )
  }),

    // Job - JodDetatilData - UPDATE
    rest.patch("/api/job/:id", async(req, res, ctx) => {
      const {id} = await req.params
      const data = await req.body
      const find = MockData.jobDetailMorkData.find(jobs => jobs.id === +id)
      
      return res(
        ctx.status(200),
        ctx.json({
        success : false,
        info : {...find, ...data},
        error : null
      })
      )
    }),


  // Resume - Resume - GET
  rest.get("/api/resumes", async(req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
      success : false,
      info : MockData.resumeData,
      error : null
    })
    )
  }),

    // Resume - ResumeDetatil - GET
    rest.get("/api/resumes/:id", async(req, res, ctx) => {
      const {id} = await req.params
      // console.log("Resume - ResumeDetatil - GET", id)
      const find = MockData.resumeDetailData.find(jobs => jobs.id === +id)
      return res(
        ctx.status(200),
        ctx.json({
        success : false,
        info : find,
        error : null
      })
      )
    }),

  // Resume - ResumeDetatil - DELETE
  rest.delete("/api/resumes/:id", async(req, res, ctx) => {
    const {id} = await req.params
    return res(
      ctx.status(200),
      ctx.json({
      success : false,
      info : null,
      error : null
    })
    )
  }),

    // Resume - ResumeDetatil - UPDATE
    rest.patch("/api/resumes/:id", async(req, res, ctx) => {
      const {id} = await req.params
      const data = await req.body
      const find = MockData.resumeDetailData.find(jobs => jobs.id === +id)
      
      return res(
        ctx.status(200),
        ctx.json({
        success : false,
        info : {...find, ...data},
        error : null
      })
      )
    }),


  // Stories - Stories - GET
  rest.get("/api/stories", async(req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
      success : false,
      info : MockData.StoryData,
      error : null
    })
    )
  }),

  // Stories - StoriesDetatil - GET
  rest.get("/api/stories/:id", async(req, res, ctx) => {
    const {id} = await req.params
    // console.log("Resume - ResumeDetatil - GET", id)
    const find = MockData.storyDetailData.find(jobs => jobs.id === +id)
    return res(
      ctx.status(200),
      ctx.json({
      success : false,
      info : find,
      error : null
    })
    )
  }),

  // Stories - StoriesDetatil - DELETE
  rest.delete("/api/stories/:id", async(req, res, ctx) => {
    const {id} = await req.params
    return res(
      ctx.status(200),
      ctx.json({
      success : false,
      info : null,
      error : null
    })
    )
  }),

    // Stories - StoriesDetatil - UPDATE
    rest.patch("/api/stories/:id", async(req, res, ctx) => {
      const {id} = await req.params
      const data = await req.body
      const find = MockData.storyDetailData.find(jobs => jobs.id === +id)
      
      return res(
        ctx.status(200),
        ctx.json({
        success : false,
        info : {...find, ...data},
        error : null
      })
      )
    }),


  ]   
