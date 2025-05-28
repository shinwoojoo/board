"use client";

import { useEffect, useState } from "react";

const Tap = ({ change, tapState }) => {
  const [tap, setTap] = useState(null);
  useEffect(() => {
    if (tapState) {
    }
    setTap(tapState);
  }, []);
  const tapChange = (e) => {
    console.log(e.target.id);
    let targetId = e.target.id;
    if (tap !== targetId) {
      setTap(targetId);
    }
  };

  return (
    <ul className="tap_list" id={tap} onClick={change}>
      <li
        id="일반"
        style={
          tap == "일반"
            ? { backgroundColor: "yellow" }
            : { backgroundColor: "#fff" }
        }
        onClick={tapChange}
      >
        일반
      </li>
      <li
        id="질문"
        style={
          tap == "질문"
            ? { backgroundColor: "yellow" }
            : { backgroundColor: "#fff" }
        }
        onClick={tapChange}
      >
        질문
      </li>
    </ul>
  );
};

export default Tap;
