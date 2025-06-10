import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

export default function PresentPerfect() {
  return (
    <div className="page-layout">
    <aside class="sidebar">
    <Sidebar />
    </aside>
    <div className="App">
      <div class="header-container">
        <h1 class="title">PRESENT PERFECT TENSE</h1>
        <h2 class="subtitle">Waktu Sekarang Sempurna Sudah Terjadi</h2>
      </div>

      <div class="content-container">
        <h3 class="section-title">Pengertian Present Perfect Tense</h3>
        <p class="section-description">
          Present Perfect Tense adalah bentuk kata kerja yang digunakan untuk
          menyatakan tindakan yang telah terjadi pada suatu waktu di masa lalu
          namun masih memiliki kaitan dengan masa kini. Tindakan ini bisa saja
          baru selesai atau memiliki dampak terhadap situasi saat ini.
        </p>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Fungsi dan Penggunaan Present Perfect Tense
          </h4>
          <div class="sub-content custom-bg-1">
            .Present Perfect Tense memiliki beberapa fungsi utama: a. Menyatakan
            Tindakan yang Baru Saja Selesai (Recently Completed Actions)
            Digunakan untuk menjelaskan suatu tindakan yang baru saja selesai
            dan memiliki pengaruh terhadap saat ini. Contoh: I have just
            finished my homework. She has already eaten. b. Menyatakan
            Pengalaman Hidup (Life Experiences) Digunakan untuk membicarakan
            pengalaman seseorang tanpa menyebutkan waktu spesifik kapan
            pengalaman itu terjadi. Contoh: They have visited Japan. He has
            never tried sushi before. c. Menyatakan Peristiwa yang Dimulai di
            Masa Lalu dan Masih Berlangsung (Unfinished Actions) Digunakan untuk
            menyatakan sesuatu yang dimulai di masa lalu dan masih berlanjut
            hingga sekarang. Contoh: She has lived in Jakarta for ten years. We
            have worked here since 2015. d. Menyatakan Hasil dari Sebuah
            Tindakan (Results or Consequences) Digunakan untuk menyatakan suatu
            tindakan di masa lalu yang hasilnya masih relevan hingga sekarang.
            Contoh: I have lost my keys. (Saya kehilangan kunci, dan sampai
            sekarang belum menemukannya.) The team has won the championship.
            (Tim telah memenangkan kejuaraan, dan hasil ini masih berlaku.) e.
            Menyatakan Peristiwa yang Terjadi Berkali-kali (Repeated Actions)
            Digunakan untuk menjelaskan sesuatu yang terjadi berkali-kali di
            waktu yang tidak spesifik. Contoh: She has visited Bali many times.
            We have watched that movie three times.
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Pola Kalimat dalam Present Perfect Tense
          </h4>
          <div class="sub-content custom-bg-2">
            Present Perfect Tense memiliki tiga bentuk utama: positif, negatif,
            dan interogatif. a. Kalimat Positif (Affirmative Sentence) Pola:
            Subjek + have/has + Verb-3 (past participle) + Objek/Keterangan
            Contoh: I have finished my work. She has traveled to Europe. They
            have studied English for five years. b. Kalimat Negatif (Negative
            Sentence) Pola: Subjek + have/has + not + Verb-3 (past participle) +
            Objek/Keterangan Contoh: I have not (haven’t) finished my work. She
            has not (hasn’t) traveled to Europe. They have not (haven’t) studied
            English for five years. c. Kalimat Interogatif (Interrogative
            Sentence) Pola: Have/Has + Subjek + Verb-3 (past participle) +
            Objek/Keterangan? Contoh: Have you finished your work? Has she
            traveled to Europe? Have they studied English for five years? d.
            Jawaban Singkat (Short Answers) Have you finished your work? → Yes,
            I have. / No, I haven’t. Has she traveled to Europe? → Yes, she has.
            / No, she hasn’t.
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Kata Keterangan Waktu yang Sering Digunakan dalam Present Perfect
            Tense
          </h4>
          <div class="sub-content custom-bg-1">
            Beberapa kata keterangan waktu yang sering digunakan dalam Present
            Perfect Tense: Just (baru saja) → She has just arrived. Already
            (sudah) → They have already finished the project. Yet (belum,
            digunakan dalam kalimat negatif/interogatif) → Have you eaten yet?
            Ever (pernah, digunakan dalam pertanyaan) → Have you ever been to
            Bali? Never (tidak pernah) → She has never tried sushi. For (selama,
            menunjukkan durasi waktu) → We have lived here for five years. Since
            (sejak, menunjukkan titik waktu tertentu) → He has worked here since
            2010.
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Perbedaan Present Perfect Tense dengan Simple Past Tense
          </h4>
          <div class="sub-content custom-bg-2">
            Present Perfect sering membingungkan dengan Simple Past Tense.
            Berikut perbedaannya: Present Perfect Tense Simple Past Tense Tidak
            menyebutkan waktu spesifik Menyebutkan waktu spesifik Menggunakan
            "have/has + Verb-3" Menggunakan "Verb-2" Contoh: I have seen that
            movie. Contoh: I saw that movie yesterday.
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Kesalahan Umum dalam Present Perfect Tense
          </h4>
          <div class="sub-content custom-bg-1">
            Beberapa kesalahan yang sering terjadi: Menggunakan waktu spesifik
            dengan Present Perfect ❌ I have visited Paris last year. → ✅ I
            visited Paris last year. Menggunakan Verb-1 atau Verb-2, bukan
            Verb-3 ❌ She has go to school. → ✅ She has gone to school. Lupa
            menggunakan have/has ❌ He finished his homework. → ✅ He has
            finished his homework. Menggunakan 'since' dengan durasi waktu,
            bukan titik waktu ❌ I have lived here since five years. → ✅ I have
            lived here for five years.
          </div>
        </div>

        {/* <div class="navigation-buttons">
          <button class="nav-button">
            <span class="arrow">&lt;</span> Previous
          </button>
          <button class="nav-button">
            {" "}
            <Link to={'/presentperfect/quiz'} class="nav-link">
              Kuis
            </Link>
          </button>
          <button class="nav-button">
            Next <span class="arrow">&gt;</span>
          </button>
        </div> */}
        <div className="navigation-buttons">
          <Link to={'/presentContinuousTense'} className="nav-link">
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
              <Link to={'/presentperfect/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <Link to={'/presentPerfectContinuousTense'} className="nav-link">
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
    </div >
    
  );
}
