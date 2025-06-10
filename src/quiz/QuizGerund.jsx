// src/pages/QuizPage1.jsx
import React from "react";
import Quiz from "./components/Quiz";
import quizGerund from "./soal/quizGerund";

export default function QuizGerund() {
  return <Quiz id={30} data={quizGerund} />;
}
