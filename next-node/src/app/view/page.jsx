"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:4000/api/posts?id=${id}`)
        .then((res) => res.json())
        .then((data) => setPost(data));
    }
  }, [id]);

  if (!post) return <div>로딩 중...</div>;

  return (
    <>
      <div className="container">
        <div className="view-con">
          <h2>{post.title}</h2>
          <p>작성자: {post.user}</p>
          <p>{post.content}</p>
        </div>
      </div>
    </>
  );
}
