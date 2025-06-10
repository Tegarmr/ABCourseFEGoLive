import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

export default function PastP() {
  return (
    <div className="page-layout">
      <aside class="sidebar">
        <Sidebar />
      </aside>
    <div className="App">
      <div class="header-container">
        <h1 class="title">PAST PERFECT TENSE</h1>
        <h2 class="subtitle">Waktu Lampau Sempurna</h2>
      </div>

      <div class="content-container">
        <h3 class="section-title">Pengertian Past Perfect Tense</h3>
        <p class="section-description">
          Past Perfect Tense adalah bentuk kata kerja yang digunakan untuk
          menyatakan suatu kejadian yang telah selesai sebelum kejadian lain di
          masa lalu. Dengan kata lain, tense ini menunjukkan urutan dua kejadian
          di masa lalu, di mana satu kejadian selesai lebih dulu sebelum
          kejadian lainnya terjadi.
        </p>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Fungsi dan Penggunaan Past Perfect Tense
          </h4>
          <div class="sub-content custom-bg-1">
            a. Menunjukkan Kejadian yang Selesai Sebelum Kejadian Lain di Masa
            Lalu Past Perfect digunakan untuk menyatakan bahwa suatu peristiwa
            telah terjadi sebelum peristiwa lain di masa lalu. Contoh: I had
            finished my homework before my mother came home. (Saya telah
            menyelesaikan pekerjaan rumah saya sebelum ibu saya pulang.) She had
            left when I arrived. (Dia telah pergi ketika saya tiba.) b.
            Menyatakan Pengalaman di Masa Lalu Sebelum Kejadian Lain Past
            Perfect digunakan untuk menyatakan pengalaman yang terjadi sebelum
            waktu tertentu di masa lalu. Contoh: I had never seen such a
            beautiful beach before we went to Bali. (Saya belum pernah melihat
            pantai yang begitu indah sebelum kami pergi ke Bali.) He had visited
            that museum before it was closed. (Dia telah mengunjungi museum itu
            sebelum ditutup.) c. Menggunakan Past Perfect dalam Kalimat Tidak
            Langsung (Reported Speech) Saat kita melaporkan ucapan seseorang
            dalam bentuk tidak langsung, Past Perfect digunakan untuk
            menggantikan Simple Past dalam pernyataan langsung. Contoh: Direct
            Speech: She said, "I saw him yesterday." Reported Speech: She said
            that she had seen him the day before. d. Mengungkapkan Keinginan
            atau Penyesalan di Masa Lalu Past Perfect juga dapat digunakan dalam
            klausa pengandaian (Conditional Sentences Type 3) untuk menyatakan
            situasi yang tidak terjadi di masa lalu. Contoh: If I had studied
            harder, I would have passed the exam. (Jika saya belajar lebih giat,
            saya akan lulus ujian.) She would have come if she had known about
            the meeting. (Dia akan datang jika dia tahu tentang pertemuan itu.)
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Pola Kalimat dalam Past Perfect Tense
          </h4>
          <div class="sub-content custom-bg-2">
            a. Kalimat Positif (Affirmative Sentence) Subjek + had + Verb-3
            (Past Participle) + Objek/Keterangan I had finished my homework
            before my mother arrived. They had left when we reached the station.
            b. Kalimat Negatif (Negative Sentence) Subjek + had not (hadn't) +
            Verb-3 + Objek/Keterangan I had not (hadn't) finished my homework
            before my mother arrived. They had not (hadn't) left when we reached
            the station. c. Kalimat Interogatif (Interrogative Sentence) Had +
            Subjek + Verb-3 + Objek/Keterangan? Had you finished your homework
            before your mother arrived? Had they left when we reached the
            station? Jawaban Singkat (Short Answers): Had she studied before the
            test? → Yes, she had. / No, she hadn’t. Had they arrived before the
            meeting started? → Yes, they had. / No, they hadn’t.
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Kata Keterangan Waktu yang Sering Digunakan dalam Past Perfect Tense
          </h4>
          <div class="sub-content custom-bg-1">
            Beberapa kata keterangan waktu yang sering digunakan: Before
            (sebelum), After (setelah), When (ketika), By the time (pada saat),
            Already (sudah), Never (tidak pernah), Until then (sampai saat itu).
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Perbedaan Past Perfect Tense dengan Simple Past Tense
          </h4>
          <div class="sub-content custom-bg-2">
            <table className="w-full border-collapse border-2 border-black">
              <thead>
                <tr>
                  <th className="border-2 border-black p-2 text-center font-bold bg-gray-100">
                    Past Perfect Tense
                  </th>
                  <th className="border-2 border-black p-2 text-center font-bold bg-gray-100">
                    Simple Past Tense
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-2 border-black p-2">
                    Menunjukkan kejadian yang terjadi lebih dulu di masa lalu
                  </td>
                  <td className="border-2 border-black p-2">
                    Menunjukkan kejadian di masa lalu tanpa membandingkan dengan
                    kejadian lain
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-black p-2">
                    Menggunakan "had + Verb-3"
                  </td>
                  <td className="border-2 border-black p-2">
                    Menggunakan "Verb 2"
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-black p-2">
                    Contoh: <b>I had eaten</b> before he arrived.
                  </td>
                  <td className="border-2 border-black p-2">
                    Contoh: <b>I ate</b> dinner at 7 PM.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Kesalahan Umum dalam Past Perfect Tense
          </h4>
          <div class="sub-content custom-bg-1">
            <b> 1. Menggunakan "had" tanpa verb-3 (past participle)</b>❌ I had
            eat breakfast before I left. ✅ I had eaten breakfast before I left.
            <b>
              {" "}
              2. Menggunakan Past Perfect tanpa hubungan dengan kejadian lain di
              masa lalu
            </b>
            ❌ I had gone to the store. ✅ I had gone to the store before she
            called me.
            <b>
              {" "}
              3. Menggunakan Simple Past dalam situasi yang seharusnya
              menggunakan Past Perfect
            </b>
            ❌ After he ate, he left. ✅ After he had eaten, he left.
          </div>
        </div>

        {/* <div class="navigation-buttons">
          <button class="nav-button">
            <span class="arrow">&lt;</span> Previous
          </button>
          <button class="nav-button">
          <Link to={'/pastp/quiz'} class="nav-link">
              Kuis
            </Link>
          </button>
          <button class="nav-button">
            Next <span class="arrow">&gt;</span>
          </button>
        </div> */}
        <div className="navigation-buttons">
          <Link to={'/pastContinuousTense'} className="nav-link">
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
              <Link to={'/pastp/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <Link to={'/pastPerfectContinuousTense'} className="nav-link">
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
