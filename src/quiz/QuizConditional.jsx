// src/pages/QuizPage1.jsx
import React from "react";
import Quiz from "./components/Quiz";
import quizConditional from "./soal/quizConditional";

export default function QuizConditional() {
  return <Quiz id={16} data={quizConditional} />;
}
