// src/pages/QuizPage1.jsx
import React from "react";
import Quiz from "./components/Quiz";
import quizSimplePresentTense from "./soal/quizSimplePresentTense";

export default function QuizSimplePresentTense() {
  return <Quiz id={9} data={quizSimplePresentTense} />;
}
