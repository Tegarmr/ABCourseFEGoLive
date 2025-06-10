import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

const PassiveVoice = () => {
  return (
    <div className="page-layout">
      <aside class="sidebar">
        <Sidebar />
      </aside>
    <div className="App">
      <div className="header-container">
        <h1 className="title">PASSIVE VOICE</h1>
        <h2 className="subtitle">Kalimat Pasif</h2>
      </div>

      <div className="content-container">
        <h3 className="section-title">Pengertian</h3>
        <p className="section-description">
          Passive voice atau kalimat pasif adalah bentuk kalimat di mana fokusnya terletak pada penerima aksi, bukan pelaku aksi. Digunakan ketika pelaku tidak diketahui, tidak penting, atau ingin menekankan objek.
        </p>

        <div className="sub-section">
          <h4 className="sub-section-title">Passive Voice dalam Semua Tenses</h4>

          <div className="table-wrapper custom-bg-2">
            <h5 className="sub-section-title">A. Present Tense</h5>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Tense</th>
                  <th>Kalimat Aktif</th>
                  <th>Kalimat Pasif</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Simple Present</td>
                  <td>She writes a letter.</td>
                  <td>A letter is written by her.</td>
                </tr>
                <tr>
                  <td>Present Continuous</td>
                  <td>They are watching a movie.</td>
                  <td>A movie is being watched by them.</td>
                </tr>
                <tr>
                  <td>Present Perfect</td>
                  <td>He has completed the project.</td>
                  <td>The project has been completed by him.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table-wrapper custom-bg-1">
            <h5 className="sub-section-title">B. Past Tense</h5>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Tense</th>
                  <th>Kalimat Aktif</th>
                  <th>Kalimat Pasif</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Simple Past</td>
                  <td>She painted the wall.</td>
                  <td>The wall was painted by her.</td>
                </tr>
                <tr>
                  <td>Past Continuous</td>
                  <td>They were building a bridge.</td>
                  <td>A bridge was being built by them.</td>
                </tr>
                <tr>
                  <td>Past Perfect</td>
                  <td>He had finished the assignment.</td>
                  <td>The assignment had been finished by him.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table-wrapper custom-bg-2">
            <h5 className="sub-section-title">C. Future Tense</h5>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Tense</th>
                  <th>Kalimat Aktif</th>
                  <th>Kalimat Pasif</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Simple Future</td>
                  <td>She will write a book.</td>
                  <td>A book will be written by her.</td>
                </tr>
                <tr>
                  <td>Future Continuous</td>
                  <td>They will be repairing the road.</td>
                  <td>(Tidak umum digunakan)</td>
                </tr>
                <tr>
                  <td>Future Perfect</td>
                  <td>She will have finished the task.</td>
                  <td>The task will have been finished by her.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table-wrapper custom-bg-1">
            <h5 className="sub-section-title">D. Passive Voice dalam Modals</h5>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Modal</th>
                  <th>Aktif</th>
                  <th>Pasif</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Can</td>
                  <td>She can solve the problem.</td>
                  <td>The problem can be solved by her.</td>
                </tr>
                <tr>
                  <td>Must</td>
                  <td>They must complete the project.</td>
                  <td>The project must be completed by them.</td>
                </tr>
                <tr>
                  <td>Should</td>
                  <td>He should repair the car.</td>
                  <td>The car should be repaired by him.</td>
                </tr>
                <tr>
                  <td>Might</td>
                  <td>We might watch the movie.</td>
                  <td>The movie might be watched by us.</td>
                </tr>
                <tr>
                  <td>Have to</td>
                  <td>You have to finish the assignment.</td>
                  <td>The assignment has to be finished by you.</td>
                </tr>
                <tr>
                  <td>Going to</td>
                  <td>She is going to bake a cake.</td>
                  <td>A cake is going to be baked by her.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table-wrapper custom-bg-2">
            <h5 className="sub-section-title">E. Passive Voice dalam Infinitive dan Gerund</h5>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Jenis</th>
                  <th>Aktif</th>
                  <th>Pasif</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Infinitive</td>
                  <td>I want to help him.</td>
                  <td>I want to be helped by him.</td>
                </tr>
                <tr>
                  <td>Gerund</td>
                  <td>I dislike people calling me late at night.</td>
                  <td>I dislike being called late at night.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* <div class="navigation-buttons">
          <button class="nav-button">
            <span class="arrow">&lt;</span> Previous
          </button>
          <button class="nav-button">
            <Link to={'/quiz/passive-voice'} class="nav-link">
              Kuis
            </Link>
          </button>
          <button class="nav-button">
            Next <span class="arrow">&gt;</span>
          </button>
        </div> */}
        <div className="navigation-buttons">
          <Link to={'/adverb'} className="nav-link">
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
              <Link to={'/passive-voice/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <Link to={'/articles'} className="nav-link">
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

export default PassiveVoice;