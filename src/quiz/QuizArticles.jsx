// src/pages/QuizPage1.jsx
import React from "react";
import Quiz from "./components/Quiz";
import quizArticles from "./soal/quizArticles";

export default function QuizArticles() {
  return <Quiz id={3 } data={quizArticles} />;
}
