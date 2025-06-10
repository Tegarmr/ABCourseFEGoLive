import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

const Gerund = () => {
  return (
    <div className="page-layout">
      <aside class="sidebar">
        <Sidebar />
      </aside>
    <div className="App">
      <div className="header-container">
        <h1 className="title">GERUND</h1>
        <h2 className="subtitle">Kata Kerja Berakhiran -ing sebagai Kata Benda</h2>
      </div>

      <div className="content-container">
        <h3 className="section-title">Pengertian</h3>
        <p className="section-description">
          Gerund adalah bentuk kata kerja (verb) yang berakhiran <strong>-ing</strong>, tetapi berfungsi sebagai <strong>kata benda</strong> (noun) dalam suatu kalimat. Dapat digunakan sebagai subjek, objek, atau pelengkap.
        </p>

        <div className="sub-section">
          <h4 className="sub-section-title">1. Fungsi Gerund dalam Kalimat</h4>
          <div className="sub-section custom-bg-1">
          <div className="sub-sub-section">
            <h5 className="sub-section-title">a. Sebagai Subjek Kalimat</h5>
            <p className="section-description">
              <ul>
                <li>Swimming is my favorite sport.</li>
                <li>Reading improves your knowledge.</li>
              </ul>
            </p>
          </div>
        </div>

          <div className="sub-sub-section">
            <h5 className="sub-section-title">b. Sebagai Objek Kata Kerja</h5>
            <div className="sub-section custom-bg-2">
            <p className="section-description">
              Digunakan setelah beberapa kata kerja tertentu:
              <ul>
                <li>She enjoys singing.</li>
                <li>They avoid talking about politics.</li>
              </ul>
              <strong>Kata kerja umum:</strong> enjoy, avoid, consider, admit, suggest, deny, finish, practice, keep, mind, miss
            </p>
          </div>
        </div>

          <div className="sub-sub-section">
            <h5 className="sub-section-title">c. Sebagai Objek dari Preposisi</h5>
            <div className="sub-section custom-bg-1">
            <p className="section-description">
              <ul>
                <li>She is good at painting.</li>
                <li>He is interested in learning new languages.</li>
              </ul>
              <strong>Preposisi umum:</strong> about, after, before, by, in, on, of, without
            </p>
          </div>
        </div>

          <div className="sub-sub-section">
            <h5 className="sub-section-title">d. Sebagai Pelengkap</h5>
            <div className="sub-section custom-bg-2">
            <p className="section-description">
              <ul>
                <li>His hobby is cycling.</li>
                <li>The most difficult part of learning English is speaking fluently.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

        <div className="sub-section">
          <h4 className="sub-section-title">2. Gerund vs. Infinitive</h4>
          <div className="sub-section custom-bg-2">
          <p className="section-description">
            Beberapa kata kerja bisa diikuti oleh gerund atau infinitive dengan <strong>makna berbeda</strong>.
            <ul>
              <li>I stopped smoking. (Berhenti merokok)</li>
              <li>I stopped to smoke. (Berhenti sejenak untuk merokok)</li>
              <li>I remember locking the door. (Ingat telah mengunci)</li>
              <li>I remembered to lock the door. (Ingat untuk mengunci)</li>
            </ul>
            <strong>Kata kerja umum:</strong> stop, remember, forget, try, regret, need
          </p>
        </div>
      </div>

        <div className="sub-section">
          <h4 className="sub-section-title">3. Gerund dalam Ekspresi Khusus</h4>
          <div className="sub-section custom-bg-1">
          <p className="section-description">
            Ungkapan yang selalu diikuti oleh gerund:
            <ul>
              <li>I can’t help laughing.</li>
              <li>This book is worth reading.</li>
              <li>She has difficulty understanding the lesson.</li>
              <li>It's no use crying over spilled milk.</li>
            </ul>
          </p>
        </div>
      </div>

      {/* <div class="navigation-buttons">
          <button class="nav-button">
            <span class="arrow">&lt;</span> Previous
          </button>
          <button class="nav-button">
            <Link to={'//quiz/gerund'} class="nav-link">
              Kuis
            </Link>
          </button>
          <button class="nav-button">
            Next <span class="arrow">&gt;</span>
          </button>
        </div> */}
        <div className="navigation-buttons">
          <Link to={'/indirect'} className="nav-link">
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
              <Link to={'/gerund/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <Link to={'/subject'} className="nav-link">
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

export default Gerund;
