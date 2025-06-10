import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

const Conjunctions = () => {
  return (
    <div className="page-layout">
      <aside class="sidebar">
        <Sidebar />
      </aside>
      <div className="App">
        <div className="header-container">
          <h1 className="title">CONJUNCTIONS</h1>
          <h2 className="subtitle">Kata Penghubung</h2>
        </div>

        <div className="content-container">
          <h3 className="section-title">Pengertian</h3>
          <p className="section-description">
            Conjunctions adalah kata penghubung yang digunakan untuk menghubungkan kata, frasa, klausa, atau kalimat dalam bahasa Inggris. Berikut adalah beberapa jenis conjunctions beserta penggunaannya.
          </p>

          <div className="sub-section">
            <h4 className="sub-section-title">1. Correlative Conjunctions (Kata Hubung Berpasangan)</h4>
            <div className="sub-section custom-bg-1">
              <ul className="section-description">
                <li><strong>Either ... or:</strong> You can either come with us or stay at home.</li>
                <li><strong>Neither ... nor:</strong> Neither the teacher nor the students were in the classroom.</li>
                <li><strong>Not only ... but also:</strong> He is not only smart but also hardworking.</li>
                <li><strong>Both ... and:</strong> Both my brother and I love football.</li>
              </ul>
            </div>
          </div>

          <div className="sub-section">
            <h4 className="sub-section-title">2. Subordinating Conjunctions (Kata Hubung Subordinatif)</h4>
            <div className="sub-section custom-bg-2">
              <ul className="section-description">
                <li><strong>Although, Though, Even Though:</strong> Although it was raining, we went to the park.</li>
                <li><strong>Despite, In spite of:</strong> Despite his efforts, he failed the exam.</li>
                <li><strong>Because, Because of, As, Since:</strong> Because he was sick, he didn’t go to school.</li>
              </ul>
            </div>
          </div>

          <div className="sub-section">
            <h4 className="sub-section-title">3. Conjunctions of Purpose (Kata Hubung Tujuan)</h4>
            <div className="sub-section custom-bg-1">
              <ul className="section-description">
                <li><strong>To:</strong> He studies hard to pass the exam.</li>
                <li><strong>In order to:</strong> She left early in order to catch the train.</li>
                <li><strong>So that:</strong> I spoke slowly so that everyone could understand.</li>
                <li><strong>For:</strong> This book is for learning English.</li>
              </ul>
            </div>
          </div>

          <div className="sub-section">
            <h4 className="sub-section-title">4. Conjunctions of Result (Kata Hubung Hasil)</h4>
            <div className="sub-section custom-bg-2">
              <ul className="section-description">
                <li><strong>Too:</strong> The coffee is too hot to drink.</li>
                <li><strong>So:</strong> He was tired, so he went to bed early.</li>
              </ul>
            </div>
          </div>

          <div className="sub-section">
            <h4 className="sub-section-title">5. Other Conjunctions</h4>
            <div className="sub-section custom-bg-1">
              <ul className="section-description">
                <li><strong>Either:</strong> You can choose either this book or that one.</li>
                <li><strong>Neither:</strong> Neither of them is available.</li>
              </ul>
            </div>
          </div>

          {/* <div class="navigation-buttons">
            <button class="nav-button">
              <span class="arrow">&lt;</span> Previous
            </button>
            <button class="nav-button">
              <Link to={'/quiz/conjunctions'} class="nav-link">
                Kuis
              </Link>
            </button>
            <button class="nav-button">
              Next <span class="arrow">&gt;</span>
            </button>
          </div> */}
          <div className="navigation-buttons">
            <Link to={'/articles'} className="nav-link">
            <button className="nav-button">
              <svg width="24" height="24" viewBox="20 4 1 24" fill="none" className="arrow arrow-left">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
              </svg>
              Previous
            </button>
                  </Link>
            <button className="nav-button">
              <Link to={'/conjunctions/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <Link to={'/prepositions'} className="nav-link">
            <button className="nav-button">
              Next
              <svg width="24" height="24" viewBox="20 4 1 24" fill="none" className="arrow arrow-right">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
              </svg>
            </button>
                  </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conjunctions;
