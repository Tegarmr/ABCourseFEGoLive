// src/pages/QuizPage1.jsx
import React from "react";
import Quiz from "./components/Quiz";
import quizSimpleFutureTense from "./soal/quizSimpleFutureTense";

export default function QuizSimpleFutureTense() {
  return <Quiz id={12} data={quizSimpleFutureTense} />;
}
