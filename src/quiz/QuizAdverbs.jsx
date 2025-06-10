// src/pages/QuizPage1.jsx
import React from "react";
import Quiz from "./components/Quiz";
import quizAdverbs from "./soal/quizAdverbs";

export default function QuizAdverbs() {
  return <Quiz id={2} data={quizAdverbs} />;
}
