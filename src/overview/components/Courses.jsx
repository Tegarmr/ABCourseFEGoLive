import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const API_URL = import.meta.env.VITE_API_URL;

export default function Courses() {
  const [course, setCourse] = useState([])
  const [activeFilter, setActiveFilter] = useState("all")
  
  const fetchCourses = async (filter = null) => {
    try {
      let url = `${API_URL}/api/materi`
      if (filter && filter !== 'all') {
        url += `?filter=${filter}`
      }
      
      const response = await axios.get(url, {
        withCredentials: true
      })

      const materi = response.data.data.materi

      const mappedCourses = materi.map(course => ({
        name: course.judul,
        id2: course.nama_materi,
        materi_id: course.materi_id,
        progress: course.quiz.length != 0 ? (course.bestScore >= 80 ? 100 : Math.min(course.bestScore, 75)) : 0,
        // Menggunakan status yang sudah dikalkulasi dari backend
        status: getDisplayStatus(course.status),
        isLocked: course.isLocked,
        bestScore: course.bestScore || 0
      }))

      // Sortir materi - yang selesai di atas
      mappedCourses.sort((a, b) => {
        if (a.status === "Completed" && b.status !== "Completed") return -1
        if (a.status !== "Completed" && b.status === "Completed") return 1
        return 0
      })
    
      setCourse(mappedCourses)
    } catch (error) {
      console.error("Error fetching courses:", error)
    }
  }
  
  // Fungsi untuk mengkonversi status dari backend ke format tampilan
  const getDisplayStatus = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed'
      case 'in_progress':
        return 'Incomplete'
      case 'not_started':
        return 'Not Started'
      default:
        return 'Not Started'
    }
  }

  useEffect(() => {
    fetchCourses()
  }, [])
  
  // Mengubah filter aktif dan mengambil data yang difilter
  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
    fetchCourses(filter)
  }

  // Helper function to determine progress bar color
  const getProgressBarColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-400";
      case "Incomplete":
        return "bg-yellow-400";
      case "Not Started":
        return "bg-gray-200";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="main-content">
          <h1 className="page-title">Courses</h1>
          <p className="welcome-message">
            Your progress is really good. Ready for your next lesson?
          </p>

          <div className="courses-grid">
            {course?.map((course, index) => (
              course.isLocked ? (
                <div
                  key={index}
                  className="course-card locked"
                >
                  <div className="course-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="course-name">{course.name}</h3>
                  <div className="course-progress-container">
                    <div
                      className={`course-progress-bar ${getProgressBarColor(
                        course.status
                      )}`}
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="course-status">
                    {course.status}
                    {course.bestScore > 0 && (
                      <span className="best-score"> - Nilai: {Math.round(course.bestScore)}%</span>
                    )}
                  </div>
                  <div className="course-locked-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        stroke="#FFC107"
                        strokeWidth="2"
                      />
                      <path
                        d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                        stroke="#FFC107"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              ) : (
                <Link
                  to={`/${course.id2}`}
                  key={index}
                  className="course-card"
                >
                  <div className="course-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="course-name">{course.name}</h3>
                  <div className="course-progress-container">
                    <div
                      className={`course-progress-bar ${getProgressBarColor(
                        course.status
                      )}`}
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="course-status">
                    {course.status}
                    {course.bestScore > 0 && (
                      <span className="best-score"> - Nilai: {Math.round(course.bestScore)}%</span>
                    )}
                  </div>
                </Link>
              )
            ))}
          </div>
        </div>

        <div className="courses-sidebar">
          <div className="filter-section">
            <h3 className="filter-title">Filter by</h3>

            <button 
              className={`filter-button ${activeFilter === 'all' ? 'filter-all' : ''}`}
              onClick={() => handleFilterChange('all')}
            >
              <span className="filter-dot dot-yellow"></span>
              <span>Show All</span>
            </button>

            <button 
              className={`filter-button ${activeFilter === 'completed' ? 'filter-all' : ''}`}
              onClick={() => handleFilterChange('completed')}
            >
              <span className="filter-dot dot-green"></span>
              <span>Completed</span>
            </button>

            <button 
              className={`filter-button ${activeFilter === 'in_progress' ? 'filter-all' : ''}`}
              onClick={() => handleFilterChange('in_progress')}
            >
              <span className="filter-dot dot-red"></span>
              <span>Incomplete</span>
            </button>

            <button 
              className={`filter-button ${activeFilter === 'not_started' ? 'filter-all' : ''}`}
              onClick={() => handleFilterChange('not_started')}
            >
              <span className="filter-dot dot-gray"></span>
              <span>Not Started</span>
            </button>
            
            <button 
              className={`filter-button ${activeFilter === 'locked' ? 'filter-all' : ''}`}
              onClick={() => handleFilterChange('locked')}
            >
              <span className="filter-dot dot-darkgray"></span>
              <span>Locked!</span>
            </button>
          </div>

          <div className="reminder-card">
            <div className="lock-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="11"
                  width="18"
                  height="11"
                  rx="2"
                  stroke="#FFC107"
                  strokeWidth="2"
                />
                <path
                  d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                  stroke="#FFC107"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="reminder-title">REMINDER</h3>
            <p className="reminder-text">
              This material is locked. Please complete and pass the previous
              material to continue your learning journey.
            </p>
          </div>

          {/* <div className="grammar-checker-card">
            <div className="grammar-checker-content">
              <div>
                <h3 className="grammar-checker-title">Grammar Checker</h3>
                <p className="grammar-checker-text">
                  Check your grammar skills
                </p>
              </div>
              <button className="arrow-button">
                <svg
                  width="24"
                  height="24"
                  viewBox="20 4 1 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

<style>
  {`
    .course-card.locked {
      position: relative;
      opacity: 0.7;
      cursor: not-allowed;
    }
    
    .course-card.locked::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.05);
      z-index: 1;
      border-radius: 8px;
    }
    
    .course-locked-icon {
      position: absolute;
      top: 12px;
      right: 12px;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 50%;
      width: 28px;
      height: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
    }
    
    .best-score {
      font-size: 0.8em;
      opacity: 0.8;
    }
  `}
</style>
