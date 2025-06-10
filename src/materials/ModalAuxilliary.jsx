import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

const ModalAuxiliary = () => {
  return (
    <div className="page-layout">
      <aside class="sidebar">
        <Sidebar />
      </aside>
    <div className="App">
      <div className="header-container">
        <h1 className="title">MODAL AUXILIARY VERBS</h1>
        <h2 className="subtitle">Kata Kerja Modal</h2>
      </div>

      <div className="content-container">
        <h3 className="section-title">Pengertian</h3>
        <p className="section-description">
          Modal Auxiliary Verbs adalah kata kerja bantu yang digunakan untuk menunjukkan kemungkinan, izin, keharusan, atau kemampuan dalam suatu tindakan. Modal verbs tidak berubah bentuk sesuai subjek dan selalu diikuti oleh kata kerja dasar (bare infinitive).
        </p>

        <div className="sub-section">
          <h4 className="sub-section-title">Daftar Modal Verbs dan Penggunaannya</h4>
          <div className="sub-content custom-bg-2">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Modal Verb</th>
                  <th>Fungsi</th>
                  <th>Contoh</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Can - Could</td>
                  <td>Kemampuan / Permintaan sopan</td>
                  <td>She can swim well. / Could you help me?</td>
                </tr>
                <tr>
                  <td>May - Might</td>
                  <td>Izin formal / Kemungkinan</td>
                  <td>You may go. / She might be at home.</td>
                </tr>
                <tr>
                  <td>Must - Have to</td>
                  <td>Kewajiban / Larangan</td>
                  <td>You must wear a seatbelt. / I have to study. / You mustn’t smoke here.</td>
                </tr>
                <tr>
                  <td>Shall - Will</td>
                  <td>Penawaran / Masa depan</td>
                  <td>Shall I help you? / He will arrive tomorrow.</td>
                </tr>
                <tr>
                  <td>Should - Ought to</td>
                  <td>Saran / Nasihat</td>
                  <td>You should eat healthy food. / You ought to rest.</td>
                </tr>
                <tr>
                  <td>Would</td>
                  <td>Kondisional / Permintaan sopan</td>
                  <td>I would go if I had time. / Would you like tea?</td>
                </tr>
                <tr>
                  <td>Needn’t - Mustn’t</td>
                  <td>Tidak perlu / Larangan kuat</td>
                  <td>You needn’t worry. / You mustn’t park here.</td>
                </tr>
                <tr>
                  <td>Had Better</td>
                  <td>Saran dengan konsekuensi</td>
                  <td>You had better study tonight.</td>
                </tr>
                <tr>
                  <td>Would Rather</td>
                  <td>Preferensi</td>
                  <td>I would rather stay home.</td>
                </tr>
                <tr>
                  <td>Used to</td>
                  <td>Kebiasaan masa lalu</td>
                  <td>He used to smoke.</td>
                </tr>
                <tr>
                  <td>Tambahan</td>
                  <td>Dare, May/Might as well</td>
                  <td>How dare you! / We might as well go now.</td>
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
            <Link to={'/quiz/modal-auxiliary'} class="nav-link">
              Kuis
            </Link>
          </button>
          <button class="nav-button">
            Next <span class="arrow">&gt;</span>
          </button>
        </div> */}
        <div className="navigation-buttons">
          <Link to={'/adjective'} className="nav-link">
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
              <Link to={'/modal-auxiliary/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <Link to={'/question'} className="nav-link">
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

export default ModalAuxiliary;
