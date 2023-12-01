const express = require("express");

// Express 애플리케이션 설정
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 라우트 정의
app.get("/", (req, res) => {
  res.send(
    'Web Example: Enter a number <form method="post" action="/save"><input type="number" name="value" required><button type="submit">Save</button></form>'
  );
});

app.post("/save", (req, res) => {
  const { value } = req.body;
  res.send(`You entered: ${value}`);
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
