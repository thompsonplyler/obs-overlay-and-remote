import React, { useEffect } from "react";
import io from "socket.io-client";
import style from "@assets/styles/Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={style.gridContainer}>
      <div className={style.gridItem}>
        <QuestionButton />
      </div>
    </div>
  );
}

function QuestionButton() {
  let socket;

  useEffect(() => {
    socket = io("http://localhost:3131");
    socket.on("connected", () => {});
    socket.on("question", () => {
      console.log("Question emitter observed.");
    });
  }, []);

  const clickHandler = () => {
    socket.emit("question");
  };

  return <button onClick={clickHandler}> Any Questions? </button>;
}
