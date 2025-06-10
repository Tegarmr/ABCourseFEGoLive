import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

export default function Indirect() {
  return (
    <div className="page-layout">
    <aside class="sidebar">
    <Sidebar />
    </aside>
    <div className="App">
      <div class="header-container">
        <h1 class="title">INDIRECT SPEECH</h1>
        <h2 class="subtitle">Kalimat Tidak Langsung</h2>
      </div>

      <div class="content-container">
        <h3 class="section-title">Pengertian</h3>
        <p class="section-description">
          Indirect speech (kalimat tidak langsung) digunakan untuk melaporkan
          ucapan seseorang tanpa mengulangi kata-kata secara langsung. Dalam
          indirect speech, kata kerja, kata ganti, serta keterangan waktu dan
          tempat sering mengalami perubahan. Berikut adalah berbagai bentuk
          indirect speech:
        </p>

        <div className="sub-section">
          <h4 className="sub-section-title">
            1. Indirect Speech: Statement (Pernyataan)
          </h4>
          <div className="sub-content custom-bg-1">
            <p>Digunakan untuk melaporkan pernyataan seseorang.</p>

            <h5>Formula:</h5>
            <p>
              <em>
                (Subject + Reporting Verb + That + Subject + Verb dalam bentuk
                yang sesuai)
              </em>
            </p>

            <h5>Perubahan Umum:</h5>
            <ul>
              <li>
                Jika reporting verb dalam bentuk lampau (past tense), tenses
                dalam reported speech juga berubah menjadi bentuk lampau.
              </li>
              <li>
                Kata ganti dan keterangan waktu/tempat sering mengalami
                perubahan.
              </li>
            </ul>

            <h5>Contoh:</h5>
            <ul>
              <li>
                Direct: "I am happy," she said.
                <br />
                Indirect: She said <strong>that</strong> she{" "}
                <strong>was</strong> happy.
              </li>
              <li>
                Direct: "We will go to the party," they said.
                <br />
                Indirect: They said <strong>that</strong> they{" "}
                <strong>would go</strong> to the party.
              </li>
            </ul>

            <h5>Perubahan Kata Keterangan Waktu dan Tempat:</h5>
            <ul>
              <li>now → then</li>
              <li>today → that day</li>
              <li>tomorrow → the next day</li>
              <li>yesterday → the previous day</li>
              <li>next week → the following week</li>
              <li>last week → the previous week</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">
            2. Indirect Speech: Yes/No Questions
          </h4>
          <div className="sub-content custom-bg-2">
            <p>
              Digunakan untuk melaporkan pertanyaan yang jawabannya "ya" atau
              "tidak". Kata "if" atau "whether" digunakan dalam indirect speech.
            </p>

            <h5>Formula:</h5>
            <p>
              <em>
                (Subject + Reporting Verb + If/Whether + Subject + Verb dalam
                bentuk yang sesuai)
              </em>
            </p>

            <h5>Contoh:</h5>
            <ul>
              <li>
                Direct: "Do you like coffee?" he asked.
                <br />
                Indirect: He asked <strong>if</strong> I <strong>liked</strong>{" "}
                coffee.
              </li>
              <li>
                Direct: "Did she pass the exam?" they asked.
                <br />
                Indirect: They asked <strong>whether</strong> she{" "}
                <strong>had passed</strong> the exam.
              </li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">
            3. Indirect Speech: Question Word (WH-Questions)
          </h4>
          <div className="sub-content custom-bg-1">
            <p>
              Digunakan untuk melaporkan pertanyaan yang dimulai dengan kata
              tanya seperti what, where, when, why, how, dll.
            </p>

            <h5>Formula:</h5>
            <p>
              <em>
                (Subject + Reporting Verb + WH-word + Subject + Verb dalam
                bentuk yang sesuai)
              </em>
            </p>

            <h5>Contoh:</h5>
            <ul>
              <li>
                Direct: "Where do you live?" she asked.
                <br />
                Indirect: She asked <strong>where</strong> I{" "}
                <strong>lived</strong>.
              </li>
              <li>
                Direct: "Why did he leave early?" they asked.
                <br />
                Indirect: They asked <strong>why</strong> he{" "}
                <strong>had left</strong> early.
              </li>
            </ul>

            <p>
              <strong>Catatan:</strong> Tidak ada penggunaan "if" atau "whether"
              dalam indirect WH-questions.
            </p>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">
            4. Indirect Speech: Command (Perintah dan Permintaan)
          </h4>
          <div className="sub-content custom-bg-2">
            <p>
              Digunakan untuk melaporkan perintah atau permintaan yang diberikan
              seseorang. Kata kerja "tell" atau "ask" sering digunakan dalam
              bentuk infinitive (to + verb).
            </p>

            <h5>Formula:</h5>
            <p>
              <em>(Subject + Reporting Verb + Object + To + Verb 1)</em>
            </p>

            <h5>Contoh:</h5>
            <ul>
              <li>
                Direct: "Close the door," she said.
                <br />
                Indirect: She <strong>told</strong> me <strong>to close</strong>{" "}
                the door.
              </li>
              <li>
                Direct: "Please help me," he said.
                <br />
                Indirect: He <strong>asked</strong> me <strong>to help</strong>{" "}
                him.
              </li>
            </ul>

            <p>Untuk larangan (negatif command), gunakan "not to".</p>

            <h5>Contoh:</h5>
            <ul>
              <li>
                Direct: "Don't touch the stove," she said.
                <br />
                Indirect: She <strong>told</strong> me{" "}
                <strong>not to touch</strong> the stove.
              </li>
            </ul>
          </div>
        </div>

        {/* <div class="navigation-buttons">
          <button class="nav-button">
            <span class="arrow">&lt;</span> Previous
          </button>
          <button class="nav-button">
          <Link to={'/indirect/quiz'} class="nav-link">
              Kuis
            </Link>
          </button>
          <button class="nav-button">
            Next <span class="arrow">&gt;</span>
          </button>
        </div> */}
        <div className="navigation-buttons">
          <Link to={'/conditionals'} className="nav-link">
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
              <Link to={'/indirect/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <Link to={'/gerund'} className="nav-link">
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
}
