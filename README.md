# 알바천국 클론코딩 
<img src='./src/assets/알바천국.png' width="100%">

### 1. 프로젝트 개요

- 팀원 : (FE) 박영찬, 송미숙, 이채연
- 개간 : 2022년 07월 21일(금) ~ 07월 27일(목)  

### 2. 프로젝트 소개


<details>
<summary>(1) 라이브러리 목록보기</summary>

|라이브러리|버전|내용|
|:--|:--|:--|
|axios|@1.4.0|프로미스 기반의 통신 라이브러리|
|browser-image-compression|@2.0.2|이미지 리사이징 라이브러리|   
|dayjs|@1.11.9|날짜 포메팅을 위한 라이브러리|   
|jwt-decode|@3.1.2|JWT를 디코드하기 위한 라이브러리|   
|msw|@1.2.3|Morking Server Worker 모킹 테스트를 위한 라이브러리|
|reduxjs/@toolkit|@1.9.5|전역상태 관리 및 비동기 처리를 위한 라이브러리|
|react-redux|@8.1.1|redux를 리액트에서 쉽게 사용하기 위한 라이브러리|
|react-icons|@4.10.1|리액트에서 제공하는 아이콘 라이브러리|
|react-router-dom|@6.14.2|SPA기반 리액트에서 라우팅을 설정하는 라이브러리|
|styled-components|@6.0.4|Css in Js를 위한 스타일 라이브러리|   
</details>

<details>
<summary>(2) 페이지별 주요기능</summary>

|라우트|담당지|내용|
|:--|:--|:--|
|공용 Header, Footer|박영찬, 송미숙, 이채연|중첩라우트에 의해서 프로젝트 전체에서 사용될 공용라우터|
|Home|송미숙, 이채연|메인페이지|
|Job, JobDetail|송미숙|채용정보에 대한 소개페이지|
|Resume, ResumeDetail|이채연|인재정보에 대한 소개페이지|
|Story, StoryDetail|박영찬|알바후기에 대한 커뮤니티페이지|
|Login, Signup|박영찬|로그인페이지|
</details>

### 3. 기술스택

<details>
<summary>(1) DX(개발자경험적) 측면에서의, MSW 라이브러리를 활용한 ` MockingServer ` 기반 프로젝트 진행</summary>

- 프론트엔드의 개발자경험 향상을 위해, MockingServer를 구축하고, 실제 통시과 유사하게 프로젝트를 진행하였음, 이를 기반으로 실제 API 통신에서 각각의 통신 상황을 유연하게 대처할 수 있었음

</details>

<details>
<summary>(2) React-Router-dom을 활용한 중첩라우터와 프로텍티드 라우터</summary>

- 리렌더링이 필요없는 `공용헤더`와 `공용푸터`를 비롯한 부분에 중첩라우트를 활용하여 성능을 향상시킴
- ` 프로텍티드 라우터 `를 활용하여, 페이지에 권한을 부여하여 비인가유저가 접근하며 로그인으로 유도하도록 하였음

    ```jsx
    import React from 'react'
    import { useSelector } from 'react-redux';
    import { Navigate, Outlet } from 'react-router-dom';
    import { selectToken } from '../redux/modules/tokenSlice';

    export function ProtectiveRouter() {
      let {decodeToken} = useSelector(selectToken)
      console.log(JSON.stringify(!decodeToken));
      return !decodeToken ? <Outlet/> : <Navigate to={"/login"}/>
    }
    ```
</details>

<details>
<summary>(3) Axios를 활용한 인터셉터와 refreshToken</summary>

- Axios 라이브러리가 지원하는 인터셉터를 활용하여, 모든 API의 상황에서 재사용되는 토큰정보의 활용을 관리하였음
- refreshToken을 활용하여, accessToken 만료시, 
  조건에 따라서 accessToken을 발급받음과 동시에 요청을 처리하도록 대응하여, 보안적 측면을 고려함

</details>

<details>
<summary>(4) Styled-Components를 활용한 전역상태의 디자인통일성</summary>

- ThemeProvider를 활용하여, 프로젝트 전반에 걸친 색상의 제어를 마련
- css메소드를 통해서 공용 태그의 확장을 통해 코드의 재사용성을 추구함 

</details>

<details>
<summary>(5) Redux(createAsyncThunk)-RTKquery-Axios</summary>

- 전역상태 관리를 위해 Redux를 도입하였고
- 비동기통신을 위해 reduxjs/toolkit의 createAsyncThunk와 RTKquery를 활용하여 redux 안에서 유지보수가 간결한 체계를 도입하였음

</details>

<details>
<summary>(6) Github-Actions를 활용한 프로젝트 파일의 CD(지속적 배포)를 마련</summary>

- 프로젝트에 .yml 파일을 통해, github와 S3 사이의 파이프라인을 구축하고
- dev 브랜치가 변경되면, 이에 대응하여 Github-Actions이 파일을 S3로 빌드하게 함으로 DX(개발자환경) 측면을 향상

</details>

### 4. 트러블 슈팅

<details>
<summary>(1) 트러블이슈 : 내용 (1) github 파일 대소문자문제  </summary>

- 기존의 파일 변경시, github에서 대소문자 구분을 하지 못하여 반영되지 못하는 사레 
- [참고][https://papababo.tistory.com/entry/git-은-폴더파일명의-대소문자를-개무시한다-그럼-우째]하여 문제 해결
</details>
<details>

<summary>(2) 트러블이슈 : 내용 (2) Document.cookies 의 경로지정 실수에 따른 토큰의 무한복제</summary>

```javascript 
instance.interceptors.response.use((config) => {
  if (config.headers.authorization) {
    const expiresTime = new Date() // new Date(1690253395000).toUTCString()
    expiresTime.setMinutes(expiresTime.getMinutes()+30)
    document.cookie = `accessToken=${config.headers.authorization}; expires=${expiresTime.toUTCString()}; path=/;`
  } 
  if (config.headers.refreshtoken) {
    const expiresTime = new Date()
    expiresTime.setDate(expiresTime.getDate()+3)
    // expires=${expiresTime.toUTCString()} path=/; 
    // 두 속성 사이에 세미콜론(;)을 누락함으로 토큰을 제거해도 해당 라우트의 경로로 토큰이 계속하여 발생하는 문제가 있었음
    document.cookie = `refreshtoken=${config.headers.refreshtoken}; expires=${expiresTime.toUTCString()}; path=/;`
  }
  return config;
});
```

</details>
<details>
<summary>(3) 트러블이슈 : 내용 (3) UX 측면에서 useRef를 활용한 input 태그 focus()</summary>

- 목표 : 수정 버튼을 누르면 input 자동적으로 포커스가 가도록 하려고 했으나 해결되지 않았습니다.
- 시도 : 백그라운컬러를 지정해서 사용자가 수정 중이라는 것을 알 수 있게끔 했습니다.
- 해결 : 버튼을 눌러 isEdit 상태가 true 일 때 현재 상태에서 inputRef가 동작하여 자동으로 포커스 가도록 합니다.

```jsx
useEffect(()=>{
  inputRef.current && inputRef.current.focus()
},[inputRef, isEdit])
```

</details>
<details>
<summary>(4) 트러블이슈 : 내용 (4) </summary>

문제 상황 : 네비게이트 시 404 에러
해결 : api 주소와 라우터 주소가 달라서 생긴 일이었습니다.
저번 주차에서는 api 주소와 라우터 주소를 같게 설정해서 오류가 날 일이 없었는데, 이번에 네비게이트는 App.jsx 의 path 경로를 봐야한다는 사실을 알게 되었습니다.

</details>


