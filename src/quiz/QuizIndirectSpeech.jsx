// src/pages/QuizPage1.jsx
import React from "react";
import Quiz from "./components/Quiz";
import quizIndirectSpeech from "./soal/quizIndirectSpeech";

export default function QuizIndirectSpeech() {
  return <Quiz id={6} data={quizIndirectSpeech} />;
}
