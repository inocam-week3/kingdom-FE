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


## 프로젝트를 위한 회의 

1. 
    <details>
    <summary>7월 22일(토요일) 프로젝트 2일차 회의</summary>

    - 로그인 API연결
    - Home -> 리덕스까지 확장 
    - Jobs, resume, story -> 생성을 제외하고는 Morking API연결 -> 리덕스까지 확장 
    - 전역 스타일 정리까지를 목표 
        - max-width : 1070px
        - 반응형 
        - 공용 버튼 >> 이력서/공고 등록 색상만 다른데 > 이 버튼이 다른 곳에도 쓰이는지 
        - 공용 인풋 
    </details>

- 헤더 살펴보기 
    
  ```jsx
  /*
    html, body 
    margin: 0;
    padding: 0;

    body
    font-size: 13px;
    font-family: 'Malgun Gothic',-apple-system,BlinkMagSystemFont,'AppleGothicNeoSD','Microsoft NeoGothic','Droid sans',Sans-serif;
    line-height: 1.2;
    letter-spacing: -1px;
    background: #f7f7f7; 
  */

  // width, hegith, position

  // ------------------------------------------------------------------ @media (min-width) : 700px, 보다 작아지면 display: none
  <div /> 최상단 배너 : (미숙) 1260, 70px,relative
    - 경로 : assets > img > homeTopNavBanner.png
    - <div /> 이미지 담은 공간 -> <figure /> -> 그 위에 <a />  글자 색상을 투명으로 하고, 링크를 연결
    - <a /> 7일간 보지 않기 
  <div> 헤더1 Outline :
  width : 100%, min-width : 1260
  
   logo : width : 151(px)
    max-length : "20"

     - <div> Inner : 1260 * 110 (px) , relative
            - <h1> 로고 : , , absolute
                <a =>'/'>
                    <img>
              경로 : assets > img > HeavenLogo.png
            - <div> 검색어 500(px) , 
            <input 355 (px)>, // 검색 BiSearch
            - <ul> 연관검색어 650{px} , ,
            - <ul> 로그인, 회원가입 , , absolute

  <div> 헤더2 Outline : 100%, , relative   -> body.scroll => position:fixed
    - <div> 헤더1 Inner : 1260, 56(px) , 
        - <ul> 네비게이션 : , , , float:left
        - <ul> 이력서 및 공고 등록 , , , float:right
              -<li> float:left
                    <a> height:36(px)

  // ------------------------------------------------------------------ @media (max-width) : 700px, 보다 커지면 display: none
  - 베너는 없고
  <div> 헤더1
  <div> 헤더2
```  
    