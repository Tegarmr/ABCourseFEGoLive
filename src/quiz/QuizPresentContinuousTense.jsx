// src/pages/QuizPage1.jsx
import React from "react";
import Quiz from "./components/Quiz";
import quizPresentContinuousTense from "./soal/quizPresentContinuousTense";

export default function QuizPresentContinuousTense() {
  return <Quiz id={20} data={quizPresentContinuousTense} />;
}
