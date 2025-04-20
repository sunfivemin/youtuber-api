const express = require("express");
const app = express();
const youtuberRouter = require("./routes/youtubers");

app.use(express.json());
app.use("/youtubers", youtuberRouter);

// const cors = require("cors");
// app.use(cors());
// npm install cors

app.listen(1234, () => {
  console.log("🚀 서버 실행: http://localhost:1234");
});
