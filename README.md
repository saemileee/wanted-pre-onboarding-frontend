# 원티드 프리온보딩 프론트엔드

## 1. 지원자

<hr>
👩‍💻 이새미
  
</br>

## 2. 프로젝트의 실행 방법

<hr>
1️⃣ 프로젝트 패키지 설치

```
npm i
```

2️⃣ 프로젝트 실행

```
npm run start
```

</br>

## 3. 데모 영상

<hr>

🔗 <a href="https://wanted-pre-onboarding-frontend-tau-dun.vercel.app/signin" target="_blank">배포 링크로 확인하기</a>


</br>

## 4. 사용 라이브러리

<hr>

🔗 React Router

🪄 Sass

📡 Axios

🧩 TypeScript

🛠️ eslint

</br>

## 5. 앱 구조

<hr>

![structure](https://velog.velcdn.com/images/saemileee/post/300b58c3-ec55-4479-999d-1f2b01f5cfea/image.png)

[👀 피그잼으로 보기](https://www.figma.com/file/tiGHnMK87OJzI7a6pN4wGz/%ED%88%AC%EB%91%90-%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EC%95%B1-%EA%B5%AC%EC%A1%B0?type=whiteboard&node-id=0%3A1&t=M9g7GuaNIW4bEMYI-1)

이전 프로젝트들을 리팩토링할 때 대부분의 로직이 포함된 파일인 컴포넌트 파일 내에서 코드를 분석해서 관심사를 파악하고 수정하는 것이 비효율적이고 사이드이펙트를 캐치하기 힘들었습니다.
UI변경, 데이터패칭, 데이터가공(비즈니스 로직)의 관심사를 분리하고, 관심사 분리에 따라 파일과 폴더를 구분하여 추후 유지보수가 필요할 때 수정이 필요한 관심사가 무엇인지 파악하면 해당 파일만 확인하고 코드를 수정하면 효율적일 것 같다 생각해 해당 구조를 생각하게 되었습니다.

## 6. 데이터 흐름

<hr>

1. `하위 컴포넌트`에서 UI 이벤트가 발생합니다.
2. `custom hook`에서 UI 이벤트를 감지합니다.
3. `custom hook`에서는 `fetch 모듈`을 통해 데이터를 받아오고 `dispatch`를 이용하여 데이터를 가공하여 `전역 상태를 업데이트`합니다.
   - 데이터는 `custom hook`으로만 변경 가능합니다.
4. 전역 상태는 `Provider`를 통해 `페이지`에서 `컴포넌트`로 전달합니다.

## 7. 디렉토리 구조와 역할

<hr>

```
📦 src
├── 📂 api
├── 📂 components
│   ├── 📂 common
│   ├── 📂 signIn
│   ├── 📂 signUp
│   └── 📂 todo
├── 📂 constants
├── 📂 contexts
├── 📂 hooks
├── 📂 interface
├── 📂 pages
├── 📂 styles
│   ├── 📂 Auth
│   ├── 📂 Todo
│   └── 📂 common
└── 📂 utils
```

- `index.tsx` : root에 App 생성

- `App.tsx` : 라우팅

- `📂 api` : api 관련 ts 파일

  - `api.ts` : axios 메서드에 따른 함수 호출 기본 설정 모듈화
  - `...Fetcher.ts` : 컴포넌트 별 필요한 비동기 함수 모듈화

- `📂 pages` : 페이지 컴포넌트

  - `Page 컴포넌트.tsx` : 앱 전체 공통 UI, 페이지별 메인 컴포넌트, 로그인 여부에 따른 리다이렉트 처리, Provider로 전역 상태 하위 컴포넌트로 전달

- `📂 components` : 페이지 별 메인 컴포넌트 및 하위 컴포넌트

  - `📂 common` : 공통으로 쓰이는 컴포넌트 집합
    - `Auth.tsx` : 로그인/회원가입 관련 공통 인풋 컴포넌트 집합
    - `Buttons.tsx` : 공통 네비게이션 버튼 컴포넌트
    - `Header.tsx` : 공통 헤더 컴포넌트
  - `📂 signIn`
    - `index.tsx` : 로그인 메인 컴포넌트, 최종 Form submit UI 이벤트 발생
    - `📂 signUp`
    - `index.tsx` : 회원가입 메인 컴포넌트, 최종 Form submit UI 이벤트 발생
  - `📂 todo`
    - `index.tsx` : 투두리스트 메인 컴포넌트, 투두리스트 초기화 이벤트 발생
    - `Create.tsx` : 투두리스트 추가 컴포넌트, 투두 추가 UI 이벤트 처리
    - `List.tsx` : 투두리스트 컴포넌트, 투두 완료/수정/삭제 UI 이벤트 처리, 수정모드 및 수정된 값 상태 관리

- `📂 contexts` : ContextAPI 보일러플레이트

  - `AuthFormContext.tsx` : 회원관련 폼 전역 상태 관리 (인풋 value, 유효성 검사 결과)
  - `TodoContext.tsx` : 투두리스트 전역 상태 관리

- `📂 hooks`

  - `useAuth.ts` : 로그인 상태 확인, 토큰 세팅/삭제 훅
  - `useAuthForm.ts` : 폼 변경/제출, 폼의 유효성 검사 훅
  - `useTodoList.ts` : 투두 CRUD, get 훅
  - `useValidation.ts` : 인풋 필드 별 유효성 검사 훅

- `📂 utils`

  - `validationUtils.ts` : 유효성 검사 정규표현식 유틸

- `📂 constants`

  - `apiKey.ts` : api 연결 도메인 (.env 대체)
  - `message.ts` : 에러/성공 메세지
  - `routes.ts` : 페이지 별 라우트

- `📂 interface` : 인터페이스/타입

- `📂 styles`
  - `📂 common` : 공통 적용 스타일
    - `_global.scss` : body, 메인컴포넌트 wrapper 스타일
    - `_reset.css` : reset 스타일
    - `_variables.scss` : 스타일 변수
    - `header.scss` : 헤더 컴포넌트 스타일
  - `📂 Auth`
    - `auth.module.scss` : 회원가입/로그인 관련 스타일 모듈
  - `📂 Todo`
    - `todo.module.scss` : 투두 관련 스타일 모듈

## 8. 고민/보완 점

<hr>

- Context 보일러플레이트의 타입 모듈화
- 선언형 함수, function 함수 구분
- 함수명 통일
  - remove/delete
- 디렉토리/파일 명 통일
  - 현재는 컴포넌트 관련된 파일 명은 pascal case, 이 외는 camel case
- 재사용성에 초점을 맞춘 custom hook 사용
  - Input 생성/데이터 상태 관리 => 폼 데이터 업데이트 관련 커스텀 훅 고려 필요
  - api 모듈 커스텀 훅
- 로그인 여부 관련 전역 상태 관리
  - 현재는 custom hook 으로 로그인 여부 확인
- 데이터 패칭(초기화) 시점 고민
  - 사용자가 투두리스트를 수정하면 클라이언트단에서 업데이트 한 상태를 렌더링하고, 사용자가 새로고침하는 시점에 패칭하여 데이터를 초기화 하면 어떨지.. => 서버로 부터 받는 투두 id 고려 필요
- custom hook 으로 관심사 분리를 하는 것에 대한 의문
  - useTodoList의 경우에는 재사용성보다는 관심사 분리에 초점이 맞춰져 있는것 같음. 커스텀훅으로 비즈니스 로직에 대한 관심사를 분리하는 것이맞을지?
  - 투머치로 코드를 추상화 한 것은 아닐지? (타인이 내가 만든 커스텀 훅을 사용하거나 내가 정한 앱 구조에 따라 코드를 작성하기 어렵지는 않을지?)
- 투두 전역 상태를 커스텀훅을 거치지 않고 바로 사용하는 것이 관심사 분리 의미가 퇴색되게 하는 것은 아닐지?
