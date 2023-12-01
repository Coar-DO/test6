const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

// MongoDB 연결 설정
mongoose.connect("mongodb://host.docker.internal:27017/webexample", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MongoDB 스키마 정의
const numberSchema = new mongoose.Schema({
  value: Number,
});

// MongoDB 모델 정의
const NumberModel = mongoose.model("Number", numberSchema);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    'Web Example: Enter a number <form method="post" action="/save"><input type="number" name="value" required><button type="submit">Save</button></form>'
  );
});

app.post("/save", async (req, res) => {
  const { value } = req.body;

  // MongoDB에 저장
  await NumberModel.create({ value });

  res.send(`You entered: ${value}`);
});

app.get("/show", async (req, res) => {
  // MongoDB에서 모든 문서 조회
  const numbers = await NumberModel.find();

  res.send(`Stored Numbers: ${numbers.map((num) => num.value).join(", ")}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
