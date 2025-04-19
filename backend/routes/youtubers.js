const express = require("express");
const router = express.Router();
let db = new Map();
let id = 1;

// 기본 더미 데이터
const dummy = [
  { channelTitle: "105ya", sub: "593만명", videoNum: "999개" },
  { channelTitle: "침펄맨", sub: "1593만명", videoNum: "5699개" },
  { channelTitle: "테오", sub: "93만명", videoNum: "99개" },
];
dummy.forEach((yt) => db.set(id++, yt));

// 전체 조회
router.get("/", (req, res) => {
  const list = [];
  for (let [key, value] of db.entries()) {
    list.push({ id: key, ...value });
  }
  res.json(list);
});

// 개별 조회
router.get("/:id", (req, res) => {
  const numericId = parseInt(req.params.id);
  const youtuber = db.get(numericId);
  if (!youtuber) return res.json({ message: "없는 유튜버입니다." });
  res.json({ id: numericId, ...youtuber });
});

// 등록
router.post("/", (req, res) => {
  const { channelTitle, sub, videoNum } = req.body;
  db.set(id++, { channelTitle, sub, videoNum });
  res.json({ message: `${channelTitle} 유튜버님 응원합니다!` });
});

// 수정
router.put("/:id", (req, res) => {
  const numericId = parseInt(req.params.id);
  if (!db.has(numericId))
    return res.status(404).json({ message: "없는 유튜버입니다." });
  db.set(numericId, req.body);
  res.json({ message: "수정 완료" });
});

// 삭제
router.delete("/:id", (req, res) => {
  const numericId = parseInt(req.params.id);
  if (!db.has(numericId))
    return res.status(404).json({ message: "없는 유튜버입니다." });
  db.delete(numericId);
  res.json({ message: "삭제 완료" });
});

module.exports = router;
