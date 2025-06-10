// src/pages/QuizPage1.jsx
import React from "react";
import Quiz from "./components/Quiz";
import quizFuturePerfectContinuousTense from "./soal/quizFuturePerfectContinuousTense";

export default function QuizFuturePerfectContinuousTense() {
  return <Quiz id={25} data={quizFuturePerfectContinuousTense} />;
}
