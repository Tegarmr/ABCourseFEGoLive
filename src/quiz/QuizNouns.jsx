// src/pages/QuizPage1.jsx
import React from "react";
import Quiz from "./components/Quiz";
import quizNouns from "./soal/quizNouns";

export default function QuizNouns() {
  return <Quiz id={17} data={quizNouns} />;
}
