import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

const FuturePerfectContinuousTense = () => {
  return (
    <div className="page-layout">
      <aside class="sidebar">
        <Sidebar />
      </aside>
    <div className="App">
      <div className="header-container">
        <h1 className="title">FUTURE PERFECT CONTINUOUS TENSE</h1>
        <h2 className="subtitle">Waktu Yang Akan Datang Sempurna Sedang Berlangsung</h2>
      </div>

      <div className="content-container">
        <h3 className="section-title">Pengertian</h3>
        <p className="section-description">
          Future Perfect Continuous Tense adalah bentuk waktu yang digunakan untuk
          menyatakan suatu aksi yang sudah dimulai di masa lalu dan masih akan berlangsung
          hingga titik waktu tertentu di masa depan. Tense ini menekankan durasi suatu kejadian
          yang sedang berlangsung dan akan terus berlanjut hingga waktu yang ditentukan.
        </p>

        <div className="sub-section">
          <h4 className="sub-section-title">Fungsi dan Penggunaan</h4>
          <div className="sub-section custom-bg-1">
          <ul className="section-description">
            <li>Menyatakan suatu kejadian yang telah berlangsung selama periode tertentu dan masih akan berlangsung di masa depan</li>
            <li>Menunjukkan durasi aktivitas yang sedang berlangsung hingga masa depan sebelum sesuatu yang lain terjadi</li>
            <li>Menggambarkan suatu kejadian berkelanjutan yang dapat menyebabkan dampak di masa depan</li>
          </ul>
        </div>
          <div className="sub-content custom-bg-1">
            <h5>Contoh Kalimat:</h5>
            <ul>
              <li>By next year, I will have been working at this company for five years.</li>
              <li>By the time you arrive, we will have been waiting for two hours.</li>
              <li>By midnight, she will have been studying for six hours.</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Pola Kalimat</h4>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Jenis</th>
                <th>Struktur</th>
                <th>Contoh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Positif</td>
                <td>Subjek + will have been + Verb-ing</td>
                <td>By next month, he will have been living in this city for ten years.</td>
              </tr>
              <tr>
                <td>Negatif</td>
                <td>Subjek + will not (won’t) have been + Verb-ing</td>
                <td>By 2025, they won’t have been working on this project for three years.</td>
              </tr>
              <tr>
                <td>Interogatif</td>
                <td>Will + Subjek + have been + Verb-ing?</td>
                <td>Will he have been living in this city for ten years by next month?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Keterangan Waktu Umum</h4>
          <div className="sub-section custom-bg-2">
          <ul className="section-description">
            <li>By next year/month/week</li>
            <li>By the time</li>
            <li>Before</li>
            <li>For + duration</li>
            <li>By 2025</li>
          </ul>
        </div>
      </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Kesalahan Umum</h4>
          <div className="sub-section custom-bg-1">
          <ul className="section-description">
            <li>❌ By tomorrow, she will have been studies for five hours → ✅ she will have been studying</li>
            <li>❌ I will have been living here since five years → ✅ I will have been living here for five years</li>
            <li>❌ By next month, he will have been working → ✅ he will have been working for ten years</li>
          </ul>
        </div>
      </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Perbedaan dengan Tense Lain</h4>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Tipe Tense</th>
                <th>Penjelasan</th>
                <th>Contoh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Future Simple</td>
                <td>Untuk kejadian yang akan terjadi di masa depan</td>
                <td>I will travel to Japan next year.</td>
              </tr>
              <tr>
                <td>Future Continuous</td>
                <td>Untuk kejadian yang sedang berlangsung di masa depan</td>
                <td>At this time tomorrow, I will be traveling to Japan.</td>
              </tr>
              <tr>
                <td>Future Perfect</td>
                <td>Untuk kejadian yang sudah selesai sebelum titik waktu tertentu di masa depan</td>
                <td>By next year, I will have traveled to Japan.</td>
              </tr>
              <tr>
                <td>Future Perfect Continuous</td>
                <td>Untuk kejadian yang telah berlangsung dan akan terus berlangsung hingga titik waktu tertentu di masa depan</td>
                <td>By next year, I will have been traveling for six months.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <div class="navigation-buttons">
          <button class="nav-button">
            <span class="arrow">&lt;</span> Previous
          </button>
          <button class="nav-button">
            <Link to={'/quiz/future-perfect-continuous-tense'} class="nav-link">
              Kuis
            </Link>
          </button>
          <button class="nav-button">
            Next <span class="arrow">&gt;</span>
          </button>
        </div> */}
        <div className="navigation-buttons">
          <Link to={'/futurep'} className="nav-link">
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
              <Link to={'/future-perfect-continuous-tense/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <Link to={'/adjective'} className="nav-link">
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

export default FuturePerfectContinuousTense;
