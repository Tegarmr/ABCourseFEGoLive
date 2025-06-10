// src/pages/QuizPage1.jsx
import React from "react";
import Quiz from "./components/Quiz";
import quizQuestionWords from "./soal/quizQuestionWords";

export default function QuizQuestionWords() {
  return <Quiz id={11} data={quizQuestionWords} />;
}
