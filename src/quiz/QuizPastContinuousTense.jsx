// src/pages/QuizPage1.jsx
import React from "react";
import Quiz from "./components/Quiz";
import quizPastContinuousTense from "./soal/quizPastContinuousTense";

export default function QuizPastContinuousTense() {
  return <Quiz id={22} data={quizPastContinuousTense} />;
}
