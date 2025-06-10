"use client"

import { useState } from "react"
import axios from "axios"
import "./styles.css"
import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react" // Make sure to import ArrowLeft

const API_URL = import.meta.env.VITE_API_URL;

export default function Quiz({ data, id }) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const navigate = useNavigate()

  const handleNext = async () => {
  let finalScore = score;
  if (selected === data[current].answer) {
    finalScore = score + 1; // Hitung skor baru secara manual
    setScore(finalScore);    // Perbarui state seperti biasa
  }

  if (current < data.length - 1) {
    setCurrent(current + 1);
    setSelected(null);
  } else {
    // Teruskan skor final yang sudah dihitung ke submitQuiz
    await submitQuiz(finalScore); 
    setShowResult(true);
  }
}

  const handlePrevious = () => {
    if (current > 0) {
      setCurrent(current - 1)
      setSelected(null)
    }
  }

  const submitQuiz = async (calculatedScore) => { // Terima skor sebagai argumen
  const response = await axios.post(
    `${API_URL}/api/quiz`,
    {
      // Gunakan argumen skor yang sudah dihitung dengan benar
      score: (calculatedScore / data.length) * 100, 
      materi_id: id,
    },
    { withCredentials: true }
  );
};

  const handleBack = () => {
    navigate("/app")
  }

  return (
    <div className="quiz-unique-background">
      {/* Back button added here */}
      <button className="quiz-unique-back-button" onClick={() => navigate("/app")}>
        <ArrowLeft size={16} />
      </button>

      <div className="quiz-unique-container">
        {showResult ? (
          <div className="quiz-unique-result">
            <h2>Quiz Completed!</h2>
            <p>
              Your Score: {score} / {data.length}
            </p>
            <button className="quiz-unique-button" onClick={handleBack}>
              Go Back
            </button>
          </div>
        ) : (
          <div className="quiz-unique-box">
            <h3>{data[current].question}</h3>
            <ul>
              {data[current].options.map((opt, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="radio"
                      name="option"
                      value={index}
                      checked={selected === index}
                      onChange={() => setSelected(index)}
                    />
                    {opt}
                  </label>
                </li>
              ))}
            </ul>
            <div className="quiz-unique-button-container">
              <button
                className={`quiz-unique-button quiz-unique-button-prev ${
                  current === 0 ? "quiz-unique-button-disabled" : ""
                }`}
                onClick={handlePrevious}
                disabled={current === 0}
              >
                Previous
              </button>
              <button className="quiz-unique-button" disabled={selected === null} onClick={handleNext}>
                {current === data.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
