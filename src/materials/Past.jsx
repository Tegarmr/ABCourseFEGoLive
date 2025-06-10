import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

export default function Past() {
  return (
    <div className="page-layout">
      <aside class="sidebar">
        <Sidebar />
      </aside>
    <div className="App">
      <div class="header-container">
        <h1 class="title">SIMPLE PAST TENSE</h1>
        <h2 class="subtitle">Waktu Lampau Sederhana</h2>
      </div>

      <div class="content-container">
        <h3 class="section-title">Pengertian Simple Past Tense</h3>
        <p class="section-description">
          Simple Past Tense adalah bentuk kata kerja yang digunakan untuk
          menyatakan suatu tindakan atau kejadian yang terjadi di masa lalu dan
          sudah selesai. Tense ini sering digunakan dalam narasi atau cerita
          untuk menggambarkan peristiwa lampau.
        </p>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Fungsi dan Penggunaan Simple Past Tense
          </h4>
          <div class="sub-content custom-bg-1">
            a. Menyatakan Kejadian yang Terjadi dan Selesai di Masa Lalu
            Digunakan untuk peristiwa yang terjadi pada waktu tertentu di masa
            lalu. Contoh: She visited her grandmother last week. (Dia
            mengunjungi neneknya minggu lalu.) They watched a movie yesterday.
            (Mereka menonton film kemarin.) b. Menyatakan Serangkaian Kejadian
            di Masa Lalu Sering digunakan untuk menceritakan peristiwa secara
            kronologis. Contoh: I woke up, took a shower, and left for work.
            (Saya bangun, mandi, dan berangkat kerja.) c. Menyatakan Kebiasaan
            di Masa Lalu yang Sudah Tidak Dilakukan Lagi Contoh: She played the
            piano when she was a child. (Dia bermain piano ketika masih kecil.)
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Pola Kalimat dalam Simple Past Tense
          </h4>
          <div class="sub-content custom-bg-2">
            a. Kalimat Positif (Affirmative Sentence) Subjek + Verb 2 +
            Objek/Keterangan I went to the beach last summer. She studied hard
            for the exam. Catatan: Kata kerja berubah menjadi bentuk past (Verb
            2). Untuk kata kerja regular, tambahkan -ed (play → played, work →
            worked). Sedangkan irregular verbs memiliki bentuk khusus (go →
            went, eat → ate, see → saw). b. Kalimat Negatif (Negative Sentence)
            Subjek + did not (didn't) + Verb 1 + Objek/Keterangan I did not go
            to the beach last summer. She did not study hard for the exam.
            Catatan: Kata kerja kembali ke bentuk dasar (Verb 1) setelah
            menggunakan "did not". c. Kalimat Interogatif (Interrogative
            Sentence) Did + Subjek + Verb 1 + Objek/Keterangan? Did you go to
            the beach last summer? Did she study hard for the exam? Jawaban
            Singkat (Short Answers) Did you visit your grandma? → Yes, I did. /
            No, I didn't. Did he finish his work? → Yes, he did. / No, he
            didn't.
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Kata Keterangan Waktu yang Sering Digunakan dalam Simple Past Tense
            Tense
          </h4>
          <div class="sub-content custom-bg-1">
            Beberapa kata keterangan waktu yang sering digunakan: Yesterday
            (kemarin) Last night/week/month/year (tadi malam/minggu lalu/bulan
            lalu/tahun lalu) A few days ago (beberapa hari yang lalu) In 2010
            (pada tahun 2010) When I was a child (ketika saya masih anak-anak)
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Perbedaan Simple Past Tense dengan Present Perfect Tense
          </h4>
          <div class="sub-content custom-bg-2">
            <table className="w-full border-collapse border-2 border-black">
              <thead>
                <tr>
                  <th className="border-2 border-black p-2 text-center font-bold bg-gray-100">
                    Simple Past Tense
                  </th>
                  <th className="border-2 border-black p-2 text-center font-bold bg-gray-100">
                    Present Perfect Tense
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-2 border-black p-2">
                    Menunjukkan kejadian di masa lalu yang telah selesai
                  </td>
                  <td className="border-2 border-black p-2">
                    Menunjukkan kejadian di masa lalu yang masih memiliki efek
                    di masa sekarang
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-black p-2">
                    Menggunakan keterangan waktu spesifik (yesterday, last week)
                  </td>
                  <td className="border-2 border-black p-2">
                    Tidak menggunakan keterangan waktu spesifik (just, already,
                    ever)
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-black p-2">
                    Contoh: <b>I saw</b> that movie last night.
                  </td>
                  <td className="border-2 border-black p-2">
                    Contoh: <b>I have seen</b> that movie before.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Kesalahan Umum dalam Simple Past Tense
          </h4>
          <div class="sub-content custom-bg-1">
            <b>
              Menggunakan bentuk Verb 2 setelah "did" dalam kalimat negatif atau
              interogatif.
            </b>
            ❌ She did not went to school. → ✅ She did not go to school. ❌ Did
            you saw the movie? → ✅ Did you see the movie? Menggunakan
            keterangan waktu yang tidak cocok ❌ I have visited Japan last year.
            → ✅ I visited Japan last year.
          </div>
        </div>

        {/* <div class="navigation-buttons">
          <button class="nav-button">
            <span class="arrow">&lt;</span> Previous
          </button>
          <button class="nav-button">
            <Link to={'/past/quiz'} class="nav-link">
              Kuis
            </Link>
          </button>
          <button class="nav-button">
            Next <span class="arrow">&gt;</span>
          </button>
        </div> */}
        <div className="navigation-buttons">
          <Link to={'/presentPerfectContinuousTense'} className="nav-link">
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
              <Link to={'/past/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <Link to={'/pastContinuousTense'} className="nav-link">
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
