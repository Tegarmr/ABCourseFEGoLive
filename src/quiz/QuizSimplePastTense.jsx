// src/pages/QuizPage1.jsx
import React from "react";
import Quiz from "./components/Quiz";
import quizSimplePastTense from "./soal/quizSimplePastTense";

export default function QuizSimplePastTense() {
  return <Quiz id={7} data={quizSimplePastTense} />;
}
