import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

const Conditionals = () => {
  return (
    <div className="page-layout">
      <aside class="sidebar">
        <Sidebar />
      </aside>
    <div className="App">
      <div className="header-container">
        <h1 className="title">CONDITIONAL SENTENCES</h1>
        <h2 className="subtitle">Kalimat Pengandaian</h2>
      </div>

      <div className="content-container">
        <h3 className="section-title">Pengertian</h3>
        <p className="section-description">
          Conditional sentences (kalimat pengandaian) digunakan untuk menyatakan kondisi dan akibat yang mungkin terjadi. Kalimat ini terbagi dalam beberapa jenis berikut:
        </p>

        <div className="sub-section">
          <h4 className="sub-section-title">1. Conditional Sentences</h4>

        <div className="sub-section custom-bg-1">
          <div className="sub-sub-section">
            <h5 className="sub-section-title">a. Conditional Type 1 (Kemungkinan di Masa Depan)</h5>
            <p className="section-description">
              Formula: <strong>If + Simple Present, will + Verb 1</strong><br/>
              Contoh:
              <ul>
                <li>If you study hard, you will pass the exam.</li>
                <li>If it rains, we will stay at home.</li>
              </ul>
            </p>
          </div>
          

          <div className="sub-sub-section">
            <h5 className="sub-section-title">b. Conditional Type 2 (Hipotesis di Masa Sekarang atau Masa Depan)</h5>
            <p className="section-description">
              Formula: <strong>If + Simple Past, would + Verb 1</strong><br/>
              Contoh:
              <ul>
                <li>If I were rich, I would buy a big house.</li>
                <li>If she had more time, she would travel around the world.</li>
              </ul>
              <em>Catatan: "were" digunakan untuk semua subjek.</em>
            </p>
          </div>

          <div className="sub-sub-section">
            <h5 className="sub-section-title">c. Conditional Type 3 (Hipotesis di Masa Lalu)</h5>
            <p className="section-description">
              Formula: <strong>If + Past Perfect, would have + Verb 3</strong><br/>
              Contoh:
              <ul>
                <li>If you had studied harder, you would have passed the test.</li>
                <li>If they had left earlier, they would not have missed the train.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

        <div className="sub-section">
          <h4 className="sub-section-title">2. As If dan As Though</h4>
          <div className="sub-section custom-bg-2">
          <p className="section-description">
            Digunakan untuk membandingkan situasi dengan sesuatu yang tidak nyata atau tidak benar-benar terjadi.<br/>
            Contoh:
            <ul>
              <li>She talks as if she knew everything.</li>
              <li>He looked as though he had seen a ghost.</li>
            </ul>
            <em>Catatan: As if dan As though bisa saling menggantikan.</em>
          </p>
        </div>
      </div>

        <div className="sub-section">
          <h4 className="sub-section-title">3. Wish (Pengandaian atau Harapan yang Tidak Nyata)</h4>

          <div className="sub-section custom-bg-1">
          <div className="sub-sub-section">
            <h5 className="sub-section-title">a. Wish untuk Masa Sekarang</h5>
            <p className="section-description">
              Formula: <strong>Subject + Wish + Past Simple</strong><br/>
              Contoh:
              <ul>
                <li>I wish I were taller.</li>
                <li>She wishes she had a car.</li>
              </ul>
            </p>
          </div>

          <div className="sub-sub-section">
            <h5 className="sub-section-title">b. Wish untuk Masa Lalu</h5>
            <p className="section-description">
              Formula: <strong>Subject + Wish + Past Perfect</strong><br/>
              Contoh:
              <ul>
                <li>I wish I had studied harder.</li>
                <li>He wishes he hadn't missed the flight.</li>
              </ul>
            </p>
          </div>

          <div className="sub-sub-section">
            <h5 className="sub-section-title">c. Wish untuk Masa Depan</h5>
            <p className="section-description">
              Formula: <strong>Subject + Wish + Would + Verb 1</strong><br/>
              Contoh:
              <ul>
                <li>I wish it would stop raining.</li>
                <li>She wishes he would call her.</li>
              </ul>
              <em>Catatan: Digunakan saat menginginkan perubahan di masa depan.</em>
            </p>
          </div>
        </div>
    </div>

    {/* <div class="navigation-buttons">
            <button class="nav-button">
              <span class="arrow">&lt;</span> Previous
            </button>
            <button class="nav-button">
              <Link to={'/quiz/conditional'} class="nav-link">
                Kuis
              </Link>
            </button>
            <button class="nav-button">
              Next <span class="arrow">&gt;</span>
            </button>
          </div> */}
          <div className="navigation-buttons">
            <Link to={'/prepositions'} className="nav-link">
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
              <Link to={'/conditional/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <Link to={'/indirect'} className="nav-link">
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

export default Conditionals;