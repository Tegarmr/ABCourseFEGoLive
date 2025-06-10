import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

export default function SimpleF() {
  return (
    <div className="page-layout">
      <aside class="sidebar">
        <Sidebar />
      </aside>
    <div className="App">
      <div class="header-container">
        <h1 class="title">SIMPLE FUTURE TENSE</h1>
        <h2 class="subtitle">Waktu Yang Akan Datang Sederhana</h2>
      </div>

      <div class="content-container">
        <h3 class="section-title">Pengertian Simple Future Tense</h3>
        <p class="section-description">
          Simple Future Tense adalah bentuk kata kerja yang digunakan untuk
          menyatakan kejadian yang akan terjadi di masa depan. Tense ini sering
          digunakan untuk membuat prediksi, janji, rencana spontan, atau
          menyatakan sesuatu yang pasti terjadi.
        </p>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Fungsi dan Penggunaan Simple Future Tense
          </h4>
          <div class="sub-content custom-bg-1">
            a. Menyatakan Kejadian yang Akan Terjadi di Masa Depan Contoh: She
            will visit her grandparents next week. (Dia akan mengunjungi
            kakek-neneknya minggu depan.) They will travel to Japan next year.
            (Mereka akan bepergian ke Jepang tahun depan.) b. Menyatakan Janji
            atau Kesediaan untuk Melakukan Sesuatu Contoh: I will help you with
            your homework. (Saya akan membantumu mengerjakan PR.) Don’t worry, I
            will call you later. (Jangan khawatir, saya akan meneleponmu nanti.)
            c. Menyatakan Prediksi atau Perkiraan di Masa Depan Contoh: It will
            rain tomorrow. (Besok akan turun hujan.) The economy will improve
            next year. (Ekonomi akan membaik tahun depan.) d. Menyatakan
            Keputusan yang Dibuat secara Spontan Contoh: A: I don't have any
            money. (Saya tidak punya uang.) B: I will lend you some. (Saya akan
            meminjamkanmu.) e. Memberikan Instruksi atau Perintah dengan Lebih
            Sopan Contoh: You will finish your work before leaving. (Kamu akan
            menyelesaikan pekerjaan sebelum pergi.) You will turn off the lights
            before you go to bed. (Kamu akan mematikan lampu sebelum tidur.)
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Pola Kalimat dalam Simple Future Tense
          </h4>
          <div class="sub-content custom-bg-2">
            a. Kalimat Positif (Affirmative Sentence) Subjek + will + Verb 1
            (base form) + Objek/Keterangan She will study English tomorrow. They
            will watch a movie tonight. b. Kalimat Negatif (Negative Sentence)
            Subjek + will not (won’t) + Verb 1 (base form) + Objek/Keterangan I
            will not (won’t) go to the party. She will not (won’t) buy a new
            phone. c. Kalimat Interogatif (Interrogative Sentence) Will + Subjek
            + Verb 1 (base form) + Objek/Keterangan? Will you help me with my
            project? Will she come to the meeting? Jawaban Singkat (Short
            Answers): Will he call me later? → Yes, he will. / No, he won’t.
            Will they join the trip? → Yes, they will. / No, they won’t.
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Kata Keterangan Waktu yang Sering Digunakan dalam Simple Future
            Tense
          </h4>
          <div class="sub-content custom-bg-1">
            Tomorrow (besok), Next week/month/year (minggu/bulan/tahun depan),
            Soon (segera), In an hour/two days (dalam satu jam/dua hari),
            Someday (suatu hari nanti).
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Perbedaan Simple Future Tense dengan Tense Lainnya
          </h4>
          <div class="sub-content custom-bg-2">
            <table className="w-full border-collapse border-2 border-black">
              <thead>
                <tr>
                  <th className="border-2 border-black p-2 text-center font-bold bg-gray-100">
                    Simple Future Tense
                  </th>
                  <th className="border-2 border-black p-2 text-center font-bold bg-gray-100">
                    Present Continuous (Future Meaning)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-2 border-black p-2">
                    Digunakan untuk rencana spontan atau prediksi
                  </td>
                  <td className="border-2 border-black p-2">
                    Digunakan untuk rencana yang sudah pasti
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-black p-2">
                    Contoh: <b>I will travel</b> to Bali next year.
                  </td>
                  <td className="border-2 border-black p-2">
                    Contoh: <b>I am traveling</b> to Bali next week.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Kesalahan Umum dalam Simple Future Tense
          </h4>
          <div class="sub-content custom-bg-1">
            <b> 1. Menggunakan "will" dengan Verb-2 atau Verb-ing</b>❌ I will
            went to school tomorrow. ✅ I will go to school tomorrow.
            <b> 2. Menggunakan "will" setelah subjek dalam bentuk pertanyaan</b>
            ❌ He will come to the party? ✅ Will he come to the party?
            <b>
              {" "}
              3. Menggunakan Simple Future untuk rencana yang sudah pasti
              (seharusnya Present Continuous)
            </b>
            ❌ We will go to the beach this weekend. (jika sudah pasti) ✅ We
            are going to the beach this weekend.
          </div>
        </div>

        {/* <div class="navigation-buttons">
          <button class="nav-button">
            <span class="arrow">&lt;</span> Previous
          </button>
          <button class="nav-button">
          <Link to={'/simplef/quiz'} class="nav-link">
              Kuis
            </Link>
          </button>
          <button class="nav-button">
            Next <span class="arrow">&gt;</span>
          </button>
        </div> */}
        <div className="navigation-buttons">
          <Link to={'/pastPerfectContinuousTense'} className="nav-link">
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
              <Link to={'/simplef/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <Link to={'/futureContinousTense'} className="nav-link">
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
