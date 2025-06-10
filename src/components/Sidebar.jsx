"use client"

import { useEffect, useState } from "react"
import { useLocation, useNavigate, Link } from "react-router-dom"
import axios from "axios"
import "../assets/sidebar.css"
import { ArrowLeft } from "lucide-react"

const API_URL = import.meta.env.VITE_API_URL;

const SidebarLayout = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkToken = async () => {
      try {
        await axios.get(`${API_URL}/api/auth/me`, {
          withCredentials: true,
        })
        setLoading(false)
      } catch (error) {
        console.error("Token invalid atau tidak ada, redirect ke login")
        navigate("/login")
      }
    }

    checkToken()
  }, [navigate])

  if (loading) return <div>Loading...</div>

  // Book icon SVG component using the provided SVG
  const BookIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 4.84969V16.7397C22 17.7097 21.21 18.5997 20.24 18.7197L19.93 18.7597C18.29 18.9797 15.98 19.6597 14.12 20.4397C13.47 20.7097 12.75 20.2197 12.75 19.5097V5.59969C12.75 5.22969 12.96 4.88969 13.29 4.70969C15.12 3.71969 17.89 2.83969 19.77 2.67969H19.83C21.03 2.67969 22 3.64969 22 4.84969Z"
        fill="currentColor"
      />
      <path
        d="M10.7083 4.70969C8.87828 3.71969 6.10828 2.83969 4.22828 2.67969H4.15828C2.95828 2.67969 1.98828 3.64969 1.98828 4.84969V16.7397C1.98828 17.7097 2.77828 18.5997 3.74828 18.7197L4.05828 18.7597C5.69828 18.9797 8.00828 19.6597 9.86828 20.4397C10.5183 20.7097 11.2383 20.2197 11.2383 19.5097V5.59969C11.2383 5.21969 11.0383 4.88969 10.7083 4.70969ZM4.99828 7.73969H7.24828C7.65828 7.73969 7.99828 8.07969 7.99828 8.48969C7.99828 8.90969 7.65828 9.23969 7.24828 9.23969H4.99828C4.58828 9.23969 4.24828 8.90969 4.24828 8.48969C4.24828 8.07969 4.58828 7.73969 4.99828 7.73969ZM7.99828 12.2397H4.99828C4.58828 12.2397 4.24828 11.9097 4.24828 11.4897C4.24828 11.0797 4.58828 10.7397 4.99828 10.7397H7.99828C8.40828 10.7397 8.74828 11.0797 8.74828 11.4897C8.74828 11.9097 8.40828 12.2397 7.99828 12.2397Z"
        fill="currentColor"
      />
    </svg>
  )

  return (
    <div className="layout-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <button className="back-button" onClick={() => navigate("/app")}>
            <ArrowLeft size={16} />
          </button>
          <h1 className="sidebar-title">Materials</h1>
        </div>

        <div className="lessons-container">
          {[
            { color: "teal", title: "Nouns", path: "/nouns" },
            { color: "blue", title: "Pronouns", path: "/pronouns" },
            { color: "purple", title: "Helping Verbs", path: "/helpingVerbs" },
            { color: "red", title: "Tenses", path: "/tenses" },
            { color: "teal", title: "Simple Present Tense", path: "/present" },
            { color: "blue", title: "Present Continuous Tense", path: "/presentContinuousTense" },
            { color: "purple", title: "Present Perfect Tense", path: "/presentperfect" },
            { color: "teal", title: "Present Perfect Continuous Tense", path: "/presentPerfectContinuousTense" },    
            { color: "red", title: "Simple Past Tense", path: "/past" },
            { color: "teal", title: "Past Continuous Tense", path: "/pastContinuousTense" },
            { color: "blue", title: "Past Perfect Tense", path: "/pastp" },
            { color: "purple", title: "Past Perfect Continuous Tense", path: "/pastPerfectContinuousTense" },
            { color: "red", title: "Simple Future Tense", path: "/simplef" },
            { color: "teal", title: "Future Continuous Tense", path: "/futureContinousTense" },
            { color: "blue", title: "Future Perfect Tense", path: "/futurep" },
            { color: "purple", title: "Future Perfect Continuous Tense", path: "/futurePerfectContinousTense" },
            { color: "red", title: "Adjectives", path: "/adjective" },
            { color: "teal", title: "Modal Auxilliary", path: "/modalAuxilliary" },
            { color: "blue", title: "Question Words", path: "/question" },
            { color: "purple", title: "Verbs", path: "/verbs" },
            { color: "red", title: "Adverb", path: "/adverb" },
            { color: "teal", title: "Passive Voice", path: "/passiveVoice" },
            { color: "blue", title: "Articles", path: "/articles" },
            { color: "purple", title: "Conjunctions", path: "/conjunctions" },
            { color: "red", title: "Prepositions", path: "/prepositions" },
            { color: "teal", title: "Conditionals", path: "/conditionals" },
            { color: "blue", title: "Indirect Speech", path: "/indirect" },
            { color: "purple", title: "Gerund", path: "/gerund" },
            { color: "red", title: "Subject And Verb Agreement", path: "/subject" },
            { color: "teal", title: "Causative", path: "/causative" },
          ].map((item, index) => (
            <Link to={item.path} key={`lesson-${index}`}>
              <div className={`lesson-card ${item.color}-card ${location.pathname === item.path ? "active" : ""}`}>
                <div className="card-icon">
                  <BookIcon />
                </div>
                <div className="card-content">
                  <span className="card-subtitle">Lesson 0{index + 1}</span>
                  <span className="card-title">{item.title}</span>
                  <span className="card-duration">30 mins</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </aside>

      <main className="main-content">{children}</main>
    </div>
  )
}

export default SidebarLayout
