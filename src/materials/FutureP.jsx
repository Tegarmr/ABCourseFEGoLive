import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

export default function FutureP() {
  return (
    <div className="page-layout">
      <aside class="sidebar">
        <Sidebar />
      </aside>
      <div className="App">
        <div class="header-container">
          <h1 class="title">FUTURE PERFECT TENSE</h1>
          <h2 class="subtitle">
            Waktu Yang Akan Datang Sempurna Akan Sudah Terjadi
          </h2>
        </div>

        <div class="content-container">
          <h3 class="section-title">Pengertian Future Perfect Tense</h3>
          <p class="section-description">
            Future Perfect Tense adalah bentuk waktu yang digunakan untuk
            menyatakan suatu tindakan yang akan sudah selesai pada titik waktu
            tertentu di masa depan. Tense ini sering digunakan untuk menekankan
            bahwa suatu peristiwa akan telah selesai sebelum kejadian lain atau
            sebelum waktu tertentu.
          </p>

          <div class="sub-section">
            <h4 class="sub-section-title">Fungsi Future Perfect Tense</h4>
            <div class="sub-content custom-bg-1">
              1. Menyatakan suatu tindakan yang akan telah selesai sebelum waktu
              tertentu di masa depan. Contoh: "By next year, I will have graduated
              from university." (Tahun depan, saya akan telah lulus dari
              universitas.) 2. Menyatakan suatu tindakan yang akan selesai sebelum
              tindakan lain terjadi di masa depan. Contoh: "She will have finished
              her homework before her parents come home." (Dia akan telah
              menyelesaikan pekerjaannya sebelum orang tuanya pulang.) 3.
              Menyatakan prediksi tentang sesuatu yang akan selesai di masa depan.
              Contoh: "By 2050, scientists will have discovered a cure for
              cancer." (Pada tahun 2050, para ilmuwan akan telah menemukan obat
              untuk kanker.)
            </div>
          </div>

          <div class="sub-section">
            <h4 class="sub-section-title">Struktur Future Perfect Tense</h4>
            <div class="sub-content custom-bg-2">
              Future Perfect Tense dibentuk dengan menggunakan "will have" + past
              participle (V3).
              <b>
                {" "}
                Kalimat Positif (+) Subjek + will have + past participle (V3) +
                keterangan waktu{" "}
              </b>
              Contoh: "By next month, she will have completed her training." "We
              will have finished the project by tomorrow."{" "}
              <b>
                {" "}
                Kalimat Negatif (-) Subjek + will not (won't) have + past
                participle (V3) + keterangan waktu{" "}
              </b>{" "}
              Contoh: "By next month, she won’t have completed her training." "We
              won’t have finished the project by tomorrow."{" "}
              <b>
                {" "}
                Kalimat Interogatif (?) Will + subjek + have + past participle
                (V3) + keterangan waktu?
              </b>{" "}
              Contoh: "Will she have completed her training by next month?" "Will
              we have finished the project by tomorrow?"
            </div>
          </div>

          <div class="sub-section">
            <h4 class="sub-section-title">
              Keterangan Waktu yang Sering Digunakan
            </h4>
            <div class="sub-content custom-bg-1">
              By next week/month/year (Pada minggu/bulan/tahun depan), By the time
              (Pada saat), Before (Sebelum), By 2025 (Pada tahun 2025), By
              tomorrow (Pada besok hari).
            </div>
          </div>

          <div class="sub-section">
            <h4 class="sub-section-title">
              Kesalahan Umum dalam Future Perfect Tense
            </h4>
            <div class="sub-content custom-bg-2">
              1. Menggunakan "will" setelah "have" ❌ "I will have went to the
              store." ✅ "I will have gone to the store." 2. Salah menggunakan
              bentuk kata kerja ketiga (V3) ❌ "She will have finish her
              homework." ✅ "She will have finished her homework." 3. Salah
              menempatkan "by" dalam kalimat waktu ❌ "By she arrives, we will
              have eaten." ✅ "By the time she arrives, we will have eaten."
            </div>
          </div>

          <div class="sub-section">
            <h4 class="sub-section-title">
              Perbedaan Future Perfect Tense dengan Future Simple dan Future
              Continuous
            </h4>
            <div class="sub-content custom-bg-1">
              <b> Future Simple (will + V1) </b> digunakan untuk menyatakan
              kejadian yang akan terjadi di masa depan tanpa menyatakan apakah
              telah selesai atau belum. Contoh: "I will finish my work soon."
              <b> Future Continuous (will be + V-ing) </b> digunakan untuk
              menyatakan suatu kejadian yang sedang berlangsung pada titik waktu
              tertentu di masa depan. Contoh: "At this time tomorrow, I will be
              working on my project."
              <b> Future Perfect (will have + V3) </b> digunakan untuk menyatakan
              suatu tindakan yang akan sudah selesai pada titik waktu tertentu di
              masa depan. Contoh: "By tomorrow, I will have finished my work."
            </div>
          </div>

          {/* <div class="navigation-buttons">
            <button class="nav-button">
              <span class="arrow">&lt;</span> Previous
            </button>
            <button class="nav-button">
              <Link to={'/futurep/quiz'} class="nav-link">
                Kuis
              </Link>
            </button>
            <button class="nav-button">
              Next <span class="arrow">&gt;</span>
            </button>
          </div> */}
          <div className="navigation-buttons">
            <Link to={'/futureContinousTense'} className="nav-link">
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
              <Link to={'/futurep/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <Link to={'/futurePerfectContinousTense'} className="nav-link">
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
