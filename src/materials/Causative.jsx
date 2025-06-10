import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

export default function Causative() {
  return (
    <div className="page-layout">
      <aside class="sidebar">
        <Sidebar />
      </aside>
      <div className="App">
        <div className="header-container">
          <h1 className="title">CAUSATIVE</h1>
          <h2 className="subtitle">Struktur Kalimat Penyebab</h2>
        </div>

        <div className="content-container">
          <h3 className="section-title">Pengertian</h3>
          <p className="section-description">
            Causative adalah struktur kalimat yang digunakan untuk menunjukkan bahwa seseorang menyebabkan orang lain melakukan sesuatu. Terdapat tiga jenis causative: <strong>have</strong>, <strong>get</strong>, dan <strong>make</strong>.
          </p>

          <div className="sub-section">
            <h4 className="sub-section-title">1. Causative Have</h4>
            <p className="section-description">
              Digunakan ketika seseorang meminta atau menyuruh orang lain untuk melakukan sesuatu.
            </p>
            <p className="section-description"><strong>Rumus:</strong></p>
            <ul className="section-description">
              <li><strong>Active:</strong> Subject + have + object (person) + base verb (V1)</li>
              <li><strong>Passive:</strong> Subject + have + object (thing) + past participle (V3)</li>
            </ul>
            <p className="section-description"><strong>Contoh:</strong></p>
            <ul className="section-description">
              <li>I had my assistant type the report.</li>
              <li>She has the mechanic fix her car.</li>
              <li>He had his house painted last week.</li>
            </ul>
          </div>

          <div className="sub-section">
            <h4 className="sub-section-title">2. Causative Get</h4>
            <p className="section-description">
              Mirip dengan <strong>have</strong>, namun lebih informal dan sering digunakan dalam percakapan.
            </p>
            <p className="section-description"><strong>Rumus:</strong></p>
            <ul className="section-description">
              <li><strong>Active:</strong> Subject + get + object (person) + to-infinitive (to + V1)</li>
              <li><strong>Passive:</strong> Subject + get + object (thing) + past participle (V3)</li>
            </ul>
            <p className="section-description"><strong>Contoh:</strong></p>
            <ul className="section-description">
              <li>I got my brother to help me with my homework.</li>
              <li>She got the waiter to bring her some water.</li>
              <li>He got his car washed.</li>
            </ul>
          </div>

          <div className="sub-section">
            <h4 className="sub-section-title">3. Causative Make</h4>
            <p className="section-description">
              Digunakan ketika seseorang memaksa atau mewajibkan orang lain melakukan sesuatu.
            </p>
            <p className="section-description"><strong>Rumus:</strong></p>
            <ul className="section-description">
              <li><strong>Active:</strong> Subject + make + object (person) + base verb (V1)</li>
              <li><strong>Passive:</strong> Subject + be made + to-infinitive (to + V1)</li>
            </ul>
            <p className="section-description"><strong>Contoh:</strong></p>
            <ul className="section-description">
              <li>The teacher made the students write an essay.</li>
              <li>His boss made him work late.</li>
              <li>They were made to apologize.</li>
            </ul>
          </div>

          {/* <div class="navigation-buttons">
            <button class="nav-button">
              <span class="arrow">&lt;</span> Previous
            </button>
            <button class="nav-button">
              <Link to={'/quiz/causative'} class="nav-link">
                Kuis
              </Link>
            </button>
            <button class="nav-button">
              Next <span class="arrow">&gt;</span>
            </button>
          </div> */}
          <div className="navigation-buttons">
            <Link to={'/subject'} className="nav-link">
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
              <Link to={'/causative/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <button className="nav-button">
              Done
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
          </div>
        </div>
      </div>
    </div>
  );
};
