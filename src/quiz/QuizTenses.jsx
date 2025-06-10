// src/pages/QuizPage1.jsx
import React from "react";
import Quiz from "./components/Quiz";
import quizTenses from "./soal/quizTenses";

export default function QuizVerbs() {
  return <Quiz id={14} data={quizTenses} />;
}
