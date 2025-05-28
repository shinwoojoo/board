"use client";

import Tap from "@/components/Tap";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState("익명");
  const [tap, setTap] = useState("일반");
  const router = useRouter();

  const BASE_URL = "http://localhost:4000/api/posts"; // 서버 주소

  const handleSubmit = async () => {
    try {
      const newPost = {
        tap,
        title,
        content,
        user,
      };

      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) throw new Error("서버 응답 오류");

      alert("게시글이 등록되었습니다!");

      router.push("/");
    } catch (error) {
      console.error("게시글 등록 실패:", error);
      alert("게시글 등록에 실패했습니다.");
    }
  };

  const change = (e) => {
    setTap(e.target.id);
  };
  console.log(tap);
  return (
    <>
      <div className="container">
        <h1>글쓰기</h1>
        <Tap change={(e) => change(e)} tapState={tap}></Tap>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="작성자"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="text"
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button onClick={handleSubmit}>작성 완료</button>
      </div>
    </>
  );
}
