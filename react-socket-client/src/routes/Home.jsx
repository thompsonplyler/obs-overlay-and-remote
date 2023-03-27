import React from "react";
import Question from "../components/Question";
// import "./Home.css";
import style from "@assets/styles/Home.module.css";

export default function Home() {
  return (
    <main className={style.container}>
      <Question />
    </main>
  );
}
