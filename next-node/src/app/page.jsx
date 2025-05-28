"use client";

import Post from "@/components/Post";
import styles from "./page.module.css";
import Tap from "@/components/Tap";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [tapFilter, setTapFilter] = useState(null);
  // const [display, setDisplay] = useState('block');
  const BASE_URL = "http://localhost:4000/api/posts";

  useEffect(() => {
    const fetchposts = async () => {
      try {
        const response = await fetch(BASE_URL);
        console.log("request");
        const data = await response.json();
        console.log("받은 데이터:", data); // 구조 확인

        setPosts(data.reverse());
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
        alert("정보를 불러오는 데 실패했습니다.");
      }
    };

    fetchposts();
  }, []);

  const handleTapClick = (tap) => {
    if (tap !== tapFilter) {
      setTapFilter(tap);
    } else {
      setTapFilter(null);
    }
  };
  console.log(tapFilter);

  let revers = posts.reverse();

  return (
    <>
      <div className="container">
        <Tap></Tap>
        <Link href={"/write"}>
          <button>글쓰기</button>
        </Link>
        <ul className="posts">
          {posts.map((post, index) => (
            <Post
              key={post.id}
              id={post.id}
              tap={post.tap}
              title={post.title}
              user={post.user}
            ></Post>
          ))}
        </ul>
      </div>
    </>
  );
}
