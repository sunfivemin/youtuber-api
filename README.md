# 📺 Youtuber Management App

유튜버 정보를 등록, 조회, 수정, 삭제할 수 있는 간단한 CRUD 기반의 웹 애플리케이션입니다.  
백엔드는 **Express.js**, 프론트는 **React + TailwindCSS**로 구성되었으며,  
**Storybook**을 통해 UI 컴포넌트를 문서화하였습니다.

---

## 🛠️ 기술 스택

- **Backend**: Node.js, Express
- **Frontend**: React, Axios, Tailwind CSS
- **Component Library**: Storybook
- **API 통신**: RESTful API

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

### 2. 프론트엔드 실행 (Vite 기반)

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

- 간단한 REST API 실습 및 프론트 연동 연습용으로 적합합니다.
- 실무에서 자주 사용하는 **컴포넌트 분리 방식**, **API 폴더링**, **스토리북 문서화 흐름**을 연습할 수 있습니다.
