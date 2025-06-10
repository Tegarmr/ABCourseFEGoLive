import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

export default function Subject() {
  return (
    <div className="page-layout">
      <aside class="sidebar">
        <Sidebar />
      </aside>
    <div className="App">
      <div class="header-container">
        <h1 class="title">SUBJECT VERB AGREEMENT</h1>
        <h2 class="subtitle">-</h2>
      </div>

      <div class="content-container">
        <h3 class="section-title">Pengertian</h3>
        <p class="section-description">
          Subject-verb agreement adalah aturan dalam bahasa Inggris yang
          menyatakan bahwa subjek dan kata kerja dalam sebuah kalimat harus
          sesuai dalam jumlah (singular atau plural). Berikut adalah aturan dan
          contoh penggunaannya:
        </p>

        <div class="sub-section">
          <h4 class="sub-section-title">1. Subjek Tunggal dan Jamak</h4>
          <div class="sub-content custom-bg-1">
            Subjek tunggal menggunakan verb singular (kata kerja dengan -s/-es
            pada present tense). Subjek jamak menggunakan verb plural (kata
            kerja tanpa tambahan -s/-es pada present tense). Contoh: She likes
            ice cream. (Dia suka es krim.) ✅ They like ice cream. (Mereka suka
            es krim.) ✅
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">2. Kata Hubung "And" dan "Or"</h4>
          <div class="sub-content custom-bg-2">
            Jika dua subjek dihubungkan dengan and, maka kata kerja berbentuk
            jamak. Jika dua subjek dihubungkan dengan or/nor, kata kerja
            mengikuti subjek yang paling dekat. Contoh: Anna and Tom are
            friends. (Anna dan Tom adalah teman.) ✅ Either Anna or Tom is
            responsible. (Anna atau Tom yang bertanggung jawab.) ✅
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">3. Subjek Tidak Biasa</h4>
          <div class="sub-content custom-bg-1">
            Beberapa kata benda yang terlihat jamak tetapi dianggap tunggal:
            News, mathematics, physics, economics, politics, measles The news is
            shocking. ✅ Indefinite pronouns (everyone, someone, nobody, etc.)
            selalu tunggal: Everyone wants to be happy. ✅
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">4. Kata Benda Kolektif</h4>
          <div class="sub-content custom-bg-2">
            Kata benda kolektif (team, family, audience, committee) bisa tunggal
            atau jamak tergantung konteksnya. Jika dianggap sebagai satu
            kesatuan → tunggal. Jika dianggap sebagai individu dalam kelompok →
            jamak. Contoh: The team is winning. (Tim sedang menang.) ✅ The team
            are arguing about the strategy. (Para anggota tim sedang berdebat
            tentang strategi.) ✅
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">5. Jumlah dan Frasa Kuantitas</h4>
          <div class="sub-content custom-bg-1">
            Kata benda yang didahului oleh each, every, either, neither selalu
            tunggal. Kata benda yang didahului oleh a number of bersifat jamak,
            sedangkan the number of bersifat tunggal. Contoh: Each of the
            students has a book. ✅ The number of students in the class is 30.
            ✅ A number of students are absent. ✅
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">
            6. Subjek Berbentuk Gerund atau Infinitive
          </h4>
          <div class="sub-content custom-bg-2">
            Jika subjeknya adalah gerund (-ing form), maka dianggap tunggal.
            Jika dua gerund dihubungkan dengan "and", maka dianggap jamak.
            Contoh: Swimming is fun. ✅ Reading and writing are important
            skills. ✅
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">7. There is / There are</h4>
          <div class="sub-content custom-bg-1">
            Gunakan there is untuk subjek tunggal dan there are untuk subjek
            jamak. Contoh: There is a book on the table. ✅ There are three
            books on the table. ✅
          </div>
        </div>

        {/* <div class="navigation-buttons">
          <button class="nav-button">
            <span class="arrow">&lt;</span> Previous
          </button>
          <button class="nav-button">
          <Link to={'/subject/quiz'} class="nav-link">
              Kuis
            </Link>
          </button>
          <button class="nav-button">
            Next <span class="arrow">&gt;</span>
          </button>
        </div> */}
        <div className="navigation-buttons">
          <Link to={'/gerund'} className="nav-link">
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
              <Link to={'/subject/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <Link to={'/causative'} className="nav-link">
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
