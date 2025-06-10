// src/pages/QuizPage1.jsx
import React from "react";
import Quiz from "./components/Quiz";
import quizPresentPerfectTense from "./soal/quizPresentPerfectTense";

export default function QuizPresentPerfectTense() {
  return <Quiz id={10} data={quizPresentPerfectTense} />;
}
