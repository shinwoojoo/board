// board-app/server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// 메모리 DB처럼 저장할 게시글 배열
let posts = [];

// 게시글 목록 불러오기
app.get("/api/posts", (req, res) => {
  const { id } = req.query;

  if (id) {
    const post = posts.find((p) => p.id === Number(id));
    if (!post) {
      return res.status(404).json({ message: "게시글을 찾을 수 없음" });
    }
    return res.json(post);
  }

  res.json(posts);
});
let nextId = 1;
// 게시글 추가하기
app.post("/api/posts", (req, res) => {
  const { tap, title, user, content } = req.body;

  if (!tap || !title || !user || !content) {
    return res.status(400).json({ message: "필수 항목 누락" });
  }

  const newPost = {
    id: nextId++,
    tap,
    title,
    user,
    content,
  };

  posts.push(newPost);
  console.log("새 게시글 추가됨:", newPost);

  res.status(201).json({ message: "게시글 등록 완료", post: newPost });
});

app.listen(PORT, () => {
  console.log(`✅ Node API 서버 실행됨: http://localhost:${PORT}`);
});
