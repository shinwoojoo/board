"use client";

import { useRouter } from "next/navigation";

const Post = ({ id, tap = "일반", title = 1234567890, user = "익명" }) => {
  const router = useRouter();

  return (
    <li
      className="posts-list"
      id={id}
      onClick={() => router.push(`/view?id=${id}`)}
    >
      <div>
        {tap} |<span className="title">{title}</span>
      </div>
      <div>{user}</div>
    </li>
  );
};

export default Post;
