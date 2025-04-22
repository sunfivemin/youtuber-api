# 📺 Youtuber Management App

유튜버 정보를 등록, 조회, 수정, 삭제할 수 있는 간단한 **CRUD 기반의 REST API 실습 프로젝트**입니다.  
백엔드는 **Express.js**, 프론트는 **React + Tailwind CSS** 기반으로 구성되었으며,  
**Storybook**을 통해 공통 UI 컴포넌트를 문서화하였습니다.

---

## 🛠️ 기술 스택

| 영역               | 기술                                              |
| ------------------ | ------------------------------------------------- |
| **Backend**        | Node.js, Express                                  |
| **Frontend**       | React, Axios, Tailwind CSS                        |
| **Component Docs** | Storybook                                         |
| **API 통신**       | RESTful API 방식 사용 (GET / POST / PUT / DELETE) |

---

## 📁 프로젝트 구조

```
/backend
├── app.js
├── routes/
└── data/

frontend/
├── src/
│   ├── api/
│   ├── components/
│   ├── pages/
│   └── App.jsx
├── public/
└── tailwind.config.js
```

---

## 🚀 실행 방법

### 1. 백엔드 실행

```bash
cd backend
npm install
node app.js
```

> 서버 실행: [http://localhost:1234](http://localhost:1234)

---

### 2. 프론트엔드 실행 

```bash
cd frontend
npm install
npm run start
```

> 웹앱 실행: [http://localhost:3000](http://localhost:3000)

---

## 📘 Storybook 실행

컴포넌트 단위 테스트 및 문서 확인

```bash
cd frontend
npm run storybook
```

> 실행 주소: [http://localhost:6006](http://localhost:6006)

---

## ✅ 기능 요약

- [x] 유튜버 등록 (POST)
- [x] 유튜버 전체 조회 (GET)
- [x] 유튜버 개별 조회 (GET by ID)
- [x] 유튜버 수정 (PUT)
- [x] 유튜버 삭제 (DELETE)
- [x] Storybook 기반 컴포넌트 문서화

---

## 💬 기타

- 실무에서 자주 사용하는 **컴포넌트 분리 방식**, **API 폴더링**, **스토리북 문서화 흐름**을 연습할 수 있습니다.
- 블로그에 개발 과정을 정리해두었습니다.
  
👉 [블로그 바로가기](https://main--seonohblog.netlify.app/2.dev-log/express-&-node/express-%EA%B8%B0%EB%B0%98-%EC%9C%A0%ED%8A%9C%EB%B2%84-api-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8.html)
