// src/pages/QuizPage1.jsx
import React from "react";
import Quiz from "./components/Quiz";
import quizAdjectives from "./soal/quizAdjectives";

export default function QuizAdjectives() {
  return <Quiz id={1} data={quizAdjectives} />;
}
