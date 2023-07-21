# 알바천국 클론코딩 

## 개발 스토리 

### 1. 프로젝트 개요
- 팀원 : (FE) 박영찬, 송미숙, 이채연
- 개간 : 2022년 07월 21일(금) ~ 07월 27일(목)  

### 2. 프로젝트 소개

<details>
<summary>(1) 라이브러리 목록보기</summary>

|라이브러리|버전|내용|
|:--|:--|:--|
|axios|@1.4.0|프로미스 기반의 통신 라이브러리|
|dayjs|@1.11.9|날짜 포메팅을 위한 라이브러리|   
|msw|@1.2.3|Morking Server Worker 모킹 테스트를 위한 라이브러리|
|reduxjs/@toolkit|@1.9.5|전역상태 관리 및 비동기 처리를 위한 라이브러리|
|react-redux|@8.1.1|redux를 리액트에서 쉽게 사용하기 위한 라이브러리|
|react-icons|@4.10.1|리액트에서 제공하는 아이콘 라이브러리|
|react-router-dom|@6.14.2|SPA기반 리액트에서 라우팅을 설정하는 라이브러리|
|styled-components|@6.0.4|Css in Js를 위한 스타일 라이브러리|    

- MSW 라이브러리 사용법 
    ```javascript 
    // MSW 만들기
    export const handlers = [
    rest.get("/api/auth/login", async(req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({messsge:}),
            ctx.set("authorization", headers),
            ctx.set("messsge", "Success")
        )
        }),
    ]  

    // 컴포넌트에서는 실제 서버와 통신하듯이 입력하면 됩니다.
    useEffect(()=> {
    async function authLogin () {
        const res = await axios.get(`/api/auth/login`)
        console.log(res.headers.authorization)
    }
    authLogin()
    },[])
    ```
</details>

<details>
<summary>(2) 페이지별 주요기능</summary>

|라우트|담당지|내용|
|:--|:--|:--|
|Home|OOO|메인페이지|
|Job, JobDetail|OOO|채용정보에 대한 소개페이지|
|Resume, ResumeDetail|OOO|인재정보에 대한 소개페이지|
|Story, StoryDetail|OOO|알바후기에 대한 커뮤니티페이지|
|Messenger|OOO|웹소켓을 활용한 채팅페이지|
</details>

<details>
<summary>(3) 챌린지</summary>
</details>

<details>
<summary>(4) 추가, 도전계획</summary>
</details>

### 3. 트러블 슈팅

<details>
<summary>(1) 트러블이슈 : 내용 (1)</summary>
</details>
<details>
<summary>(2) 트러블이슈 : 내용 (2)</summary>
</details>
<details>
<summary>(3) 트러블이슈 : 내용 (3)</summary>
</details>
<details>
<summary>(4) 트러블이슈 : 내용 (4)</summary>
</details>
