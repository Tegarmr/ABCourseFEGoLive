import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

const Verbs = () => {
  return (
    <div className="page-layout">
      <aside class="sidebar">
        <Sidebar />
      </aside>
    <div className="App">
      <div className="header-container">
        <h1 className="title">VERBS</h1>
        <h2 className="subtitle">Kata Kerja</h2>
      </div>

      <div className="content-container">
        <h3 className="section-title">Pengertian</h3>
        <p className="section-description">
        Verbs atau kata kerja adalah kata yang menunjukkan tindakan, kejadian, atau keadaan dalam suatu kalimat. Kata kerja dalam bahasa Inggris memiliki berbagai bentuk dan aturan penggunaannya.
        </p>

        <div className="sub-section">
          <h4 className="sub-section-title">1. Can - Could</h4>
          <div className="sub-content custom-bg-1">
          <p className="section-description">
            <strong>Can</strong> digunakan untuk menyatakan kemampuan di masa sekarang atau masa depan.<br/>
            Contoh: She can swim very well.<br/>
          </p>
          <p className="section-description">
            <strong>Could</strong> adalah bentuk lampau dari can, juga digunakan untuk menyatakan kemungkinan atau permintaan sopan.<br/>
            Contoh: When I was younger, I could run fast.<br/>
            Could you help me with this task?
          </p>
        </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">2. May - Might</h4>
          <div className="sub-content custom-bg-2">
          <p className="section-description">
            <strong>May</strong> digunakan untuk menyatakan kemungkinan atau izin secara formal.<br/>
            Contoh: You may leave now. / It may rain tomorrow.<br/>
            <strong>Might</strong> menunjukkan kemungkinan yang lebih kecil.<br/>
            Contoh: She might be at home now.
          </p>
        </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">3. Must - Have to</h4>
          <div className="sub-content custom-bg-1">
          <p className="section-description">
            <strong>Must</strong> menyatakan kewajiban kuat atau berasal dari diri sendiri.<br/>
            Contoh: You must wear a seatbelt.<br/>
            <strong>Have to</strong> menyatakan kewajiban dari luar.<br/>
            Contoh: I have to wake up early.<br/>
            <strong>Mustn’t</strong> menunjukkan larangan kuat.<br/>
            Contoh: You mustn’t smoke here.
          </p>
        </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">4. Shall - Will</h4>
          <div className="sub-content custom-bg-1">
          <p className="section-description">
            <strong>Shall</strong> digunakan dalam tawaran formal atau dokumen hukum.<br/>
            Contoh: Shall I open the window?<br/>
            <strong>Will</strong> digunakan untuk masa depan atau janji.<br/>
            Contoh: She will visit us tomorrow.
          </p>
        </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">5. Should - Ought to</h4>
          <div className="sub-content custom-bg-1">
          <p className="section-description">
            <strong>Should</strong> dan <strong>Ought to</strong> digunakan untuk memberi saran atau nasihat.<br/>
            Contoh: You should eat more vegetables. / You ought to apologize.
          </p>
        </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">6. Would</h4>
          <div className="sub-content custom-bg-2">
          <p className="section-description">
            Digunakan dalam kalimat pengandaian, permintaan sopan, dan kebiasaan masa lalu.<br/>
            Contoh: If I were you, I would study harder. / Would you like tea?
          </p>
        </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">7. Needn’t - Mustn’t</h4>
          <div className="sub-content custom-bg-1">
          <p className="section-description">
            <strong>Needn’t</strong> menunjukkan bahwa sesuatu tidak perlu dilakukan.<br/>
            Contoh: You needn’t bring an umbrella.<br/>
            <strong>Mustn’t</strong> menunjukkan larangan.<br/>
            Contoh: You mustn’t park here.
          </p>
        </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">8. Had Better</h4>
          <div className="sub-content custom-bg-2">
          <p className="section-description">
            Digunakan untuk saran dengan konsekuensi jika tidak dilakukan.<br/>
            Contoh: You had better study. / He had better not be late.
          </p>
        </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">9. Would Rather</h4>
          <div className="sub-content custom-bg-1">
          <p className="section-description">
            Menyatakan preferensi atau pilihan.<br/>
            Contoh: I would rather stay home. / She would rather sleep than watch TV.
          </p>
        </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">10. Used to</h4>
          <div className="sub-content custom-bg-2">
          <p className="section-description">
            Menyatakan kebiasaan di masa lalu yang tidak dilakukan lagi.<br/>
            Contoh: He used to smoke. / They used to live in New York.
          </p>
        </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">11. Tambahan Modal Auxiliary Lainnya</h4>
          <div className="sub-content custom-bg-1">
          <p className="section-description">
            <strong>Dare</strong> menunjukkan tantangan atau keberanian.<br/>
            Contoh: How dare you speak to me like that?<br/>
            <strong>May as well / Might as well</strong>: menyarankan sesuatu karena tidak ada pilihan lebih baik.<br/>
            Contoh: We might as well take a taxi.
          </p>
        </div>
        </div>

        {/* <div class="navigation-buttons">
          <button class="nav-button">
            <span class="arrow">&lt;</span> Previous
          </button>
          <button class="nav-button">
            <Link to={'/'} class="nav-link">
              Kuis
            </Link>
          </button>
          <button class="nav-button">
            Next <span class="arrow">&gt;</span>
          </button>
        </div> */}
        <div className="navigation-buttons">
          <Link to={'/question'} className="nav-link">
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
              <Link to={'/verbs/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <Link to={'/adverb'} className="nav-link">
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

export default Verbs;