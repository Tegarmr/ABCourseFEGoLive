import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

const PresentPerfectContinuousTense = () => {
  return (
    <div className="page-layout">
      <aside class="sidebar">
        <Sidebar />
      </aside>
    <div className="App">
      <div className="header-container">
        <h1 className="title">PRESENT PERFECT CONTINUOUS TENSE</h1>
        <h2 className="subtitle">Waktu yang Telah Dimulai dan Masih Berlangsung</h2>
      </div>

      <div className="content-container">
        <h3 className="section-title">Definisi</h3>
        <p className="section-description">
          Present Perfect Continuous Tense adalah bentuk kata kerja yang digunakan untuk menyatakan suatu tindakan yang dimulai di masa lalu dan masih berlangsung hingga sekarang atau baru saja selesai, dengan penekanan pada durasi.
        </p>

        <div className="sub-section">
          <h4 className="sub-section-title">Fungsi dan Penggunaan</h4>
          <div className="sub-content custom-bg-2">
            <ul>
              <li><strong>Aktivitas yang dimulai di masa lalu dan masih berlangsung:</strong> I have been studying since morning.</li>
              <li><strong>Aktivitas yang baru saja selesai tapi hasilnya masih terasa:</strong> She has been crying, that’s why her eyes are red.</li>
              <li><strong>Penekanan pada durasi aktivitas:</strong> They have been working here for five years.</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Pola Kalimat</h4>
          <div className="sub-content custom-bg-1">
            <h5>Kalimat Positif</h5>
            <p>Subjek + have/has + been + Verb-ing</p>
            <ul>
              <li>I have been reading this book for two hours.</li>
              <li>She has been working all day.</li>
            </ul>

            <h5>Kalimat Negatif</h5>
            <p>Subjek + have/has + not + been + Verb-ing</p>
            <ul>
              <li>He has not been studying lately.</li>
              <li>They have not been exercising regularly.</li>
            </ul>

            <h5>Kalimat Interogatif</h5>
            <p>Have/Has + Subjek + been + Verb-ing?</p>
            <ul>
              <li>Have you been watching TV?</li>
              <li>Has she been sleeping well?</li>
            </ul>

            <h5>Jawaban Singkat</h5>
            <ul>
              <li>Yes, I have. / No, I haven’t.</li>
              <li>Yes, she has. / No, she hasn’t.</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Keterangan Waktu Umum</h4>
          <div className="sub-content custom-bg-2">
            <ul>
              <li>For (selama), Since (sejak)</li>
              <li>All day, All morning, Lately, Recently</li>
            </ul>
            <p><strong>Contoh:</strong> We have been waiting since 10 a.m. / He has been working all day.</p>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Perbedaan dengan Present Perfect</h4>
          <div className="sub-content custom-bg-1">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Present Perfect</th>
                  <th>Present Perfect Continuous</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>I have read five books this month.</td>
                  <td>I have been reading this book for two hours.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Kesalahan Umum</h4>
          <div className="sub-content custom-bg-2">
            <ul>
              <li>❌ He has be working → ✅ He has been working</li>
              <li>❌ They has been playing → ✅ They have been playing</li>
              <li>❌ She have been studying → ✅ She has been studying</li>
            </ul>
          </div>
        </div>

        {/* <div class="navigation-buttons">
          <button class="nav-button">
            <span class="arrow">&lt;</span> Previous
          </button>
          <button class="nav-button">
            <Link to={'/quiz/present-perfect-continuous-tense'} class="nav-link">
              Kuis
            </Link>
          </button>
          <button class="nav-button">
            Next <span class="arrow">&gt;</span>
          </button>
        </div> */}
        <div className="navigation-buttons">
          <Link to={'/presentperfect'} className="nav-link">
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
              <Link to={'/present-perfect-continuous-tense/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <Link to={'/past'} className="nav-link">
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

export default PresentPerfectContinuousTense;
