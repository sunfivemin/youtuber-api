const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

// 경로 및 유틸 함수 정의
const DB_PATH = path.join(__dirname, "../data/db.json");

// 유틸 함수
const readData = () => {
  const raw = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(raw).youtubers;
};

// db.json 파일에 저장하는 쓰기 함수
const writeData = (list) => {
  fs.writeFileSync(DB_PATH, JSON.stringify({ youtubers: list }, null, 2));
};

// 다음 등록할 유튜버의 id를 자동으로 계산해주는 함수
const getNextId = (list) => {
  const ids = list.map((yt) => yt.id);
  return ids.length === 0 ? 1 : Math.max(...ids) + 1; // 가장 큰 id 찾아서 +1
};

// 전체 조회
router.get("/", (req, res) => {
  const list = readData();
  res.json(list);
});

// 개별 조회
router.get("/:id", (req, res) => {
  const list = readData();
  const numericId = parseInt(req.params.id);
  const youtuber = list.find((yt) => yt.id === numericId);
  if (!youtuber) {
    return res.status(404).json({ message: "없는 youtuber입니다." });
  }
  res.json(youtuber);
});

// 등록
router.post("/", (req, res) => {
  const list = readData(); // db.json에서 유튜버 데이터 불러오기
  const newId = getNextId(list); // list 데이터를 매개변수로 받아서 id 계산

  const newYoutuber = { id: newId, ...req.body }; // 새 유튜버 객체 생성
  list.push(newYoutuber); // 배열에 추가
  writeData(list); // 변경된 list를 db.json에 다시 저장

  res.json({
    message: `${req.body.channelTitle} 유튜버님 생활을 응원합니다!`,
    id: newId,
  });
});

// 수정
router.put("/:id", (req, res) => {
  const list = readData();
  const numericId = parseInt(req.params.id);
  const index = list.findIndex((yt) => yt.id === numericId);

  if (index === -1) {
    return res.status(404).json({ message: "없는 youtuber입니다." });
  }

  list[index] = { id: numericId, ...req.body };
  writeData(list);
  res.json({ message: "수정 완료", id: numericId });
});

// 삭제
router.delete("/:id", (req, res) => {
  const list = readData();
  const numericId = parseInt(req.params.id);
  const newList = list.filter((yt) => yt.id !== numericId);

  if (list.length === newList.length) {
    return res.status(404).json({ message: "없는 youtuber입니다." });
  }

  writeData(newList);
  res.json({ message: `id ${numericId} 유튜버 삭제 완료` });
});

module.exports = router;
