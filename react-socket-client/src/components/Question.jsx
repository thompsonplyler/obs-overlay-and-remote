import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import style from "@assets/styles/Home.module.css";

export default function Question() {
  const [timer, setTimer] = useState(100);
  const [displayProp, setDisplayProp] = useState("none");
  let socket;

  useEffect(() => {
    const socket = io("http://localhost:3131");
    socket.on("connected", () => {});
    socket.on("question", () => {
      console.log("Question emitter observed.");
      setDisplayProp("flex");
      toggleQuestionCountdownTimer();
    });
  }, []);

  const toggleQuestionCountdownTimer = async () => {
    const now = new Date();
    const seconds = now / 1000;
    const countdown = seconds + 10;

    const interval = setInterval(() => {
      const newNow = new Date();
      const newSeconds = newNow / 1000;
      const progressValue = (countdown - newSeconds) * 10;
      setTimer(progressValue);
      if (progressValue <= 0) {
        clearInterval(interval);
        setDisplayProp("none");
      }
    });
    console.log("Timer stopped at: ", interval);
    console.log("How often will I run?");
    // const cleared = clearInterval(interval);
  };

  return (
    <div className={style.display} style={{ display: displayProp }}>
      <h2>Any Questions?</h2>
      <div
        style={{
          display: displayProp,
          backgroundImage: "linear-gradient(to right, #ff512f, #f09819)",
          height: "25px",
          width: `${timer}%`,
        }}
      ></div>
    </div>
  );
}
