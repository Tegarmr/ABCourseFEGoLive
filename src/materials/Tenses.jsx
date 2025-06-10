import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

export default function Tenses() {
  return (
    <div className="page-layout">
      <aside class="sidebar">
        <Sidebar />
      </aside>
    <div className="App">
      <div class="header-container">
        <h1 class="title">TENSES</h1>
        <h2 class="subtitle">Kala Waktu</h2>
      </div>

      <div class="content-container">
        <h3 class="section-title">Definisi</h3>
        <p class="section-description">
          Tenses adalah bentuk kata kerja yang digunakan untuk menunjukkan waktu
          terjadinya suatu peristiwa atau tindakan dalam suatu kalimat. Dalam
          bahasa Inggris, tenses sangat penting karena perubahan bentuk kata
          kerja dapat memengaruhi makna keseluruhan suatu kalimat.
        </p>

        <div class="sub-section">
          <h4 class="sub-section-title">Kategori Utama Tenses</h4>
          <div class="sub-content custom-bg-1">
            Secara umum, tenses dalam bahasa Inggris dibagi menjadi tiga
            kategori utama berdasarkan waktu: Present (Sekarang) → Menunjukkan
            kejadian yang sedang berlangsung atau fakta yang bersifat umum. Past
            (Lampau) → Menunjukkan kejadian yang terjadi di masa lalu. Future
            (Masa Depan) → Menunjukkan kejadian yang akan terjadi di masa depan.
            Setiap kategori utama ini memiliki empat bentuk yang berbeda, yaitu:
            Simple → Menyatakan fakta, kebiasaan, atau kejadian umum. Continuous
            (Progressive) → Menunjukkan suatu kejadian yang sedang berlangsung
            pada suatu waktu tertentu. Perfect → Menunjukkan suatu kejadian yang
            telah selesai sebelum titik waktu tertentu. Perfect Continuous →
            Menggabungkan aspek perfect dan continuous untuk menunjukkan
            kejadian yang telah berlangsung dalam durasi waktu tertentu.
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Ringkasan 12 Tenses dalam Bahasa Inggris
          </h4>
          <div class="sub-content custom-bg-2">
            Berikut adalah pembagian tenses berdasarkan bentuknya: Present
            Tenses Simple Present → Mengungkapkan kebiasaan atau kebenaran umum.
            Present Continuous → Menunjukkan tindakan yang sedang berlangsung
            saat ini. Present Perfect → Menunjukkan tindakan yang telah selesai
            tetapi masih berhubungan dengan sekarang. Present Perfect Continuous
            → Menunjukkan tindakan yang telah berlangsung selama periode
            tertentu dan masih berlanjut. Past Tenses Simple Past →
            Mengungkapkan tindakan yang terjadi di masa lalu. Past Continuous →
            Menunjukkan tindakan yang sedang berlangsung pada titik waktu
            tertentu di masa lalu. Past Perfect → Menunjukkan tindakan yang
            telah selesai sebelum tindakan lain terjadi di masa lalu. Past
            Perfect Continuous → Menunjukkan tindakan yang berlangsung sebelum
            titik waktu tertentu di masa lalu. Future Tenses Simple Future →
            Menunjukkan tindakan yang akan terjadi di masa depan. Future
            Continuous → Menunjukkan tindakan yang akan sedang berlangsung pada
            waktu tertentu di masa depan. Future Perfect → Menunjukkan tindakan
            yang akan selesai sebelum titik waktu tertentu di masa depan. Future
            Perfect Continuous → Menunjukkan tindakan yang akan berlangsung
            selama periode waktu tertentu sebelum waktu tertentu di masa depan.
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
          <Link to={'/helpingVerbs'} className="nav-link">
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
              <Link to={'/tenses/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <Link to={'/present'} className="nav-link">
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
