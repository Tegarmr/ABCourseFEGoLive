import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

export default function Present() {
  return (
    <div className="page-layout">
      <aside class="sidebar">
        <Sidebar />
      </aside>
    <div className="App">
      <div class="header-container">
        <h1 class="title">SIMPLE PRESENT TENSE</h1>
        <h2 class="subtitle">Waktu Sekarang Sederhana</h2>
      </div>

      <div class="content-container">
        <h3 class="section-title">Definisi</h3>
        <p class="section-description">
          Simple Present Tense adalah bentuk kata kerja yang digunakan untuk
          menyatakan kebiasaan, fakta umum, atau kejadian yang terjadi secara
          rutin. Tense ini juga dapat digunakan untuk menyatakan peristiwa yang
          akan terjadi dalam waktu dekat (jadwal tetap) serta dalam kalimat
          imperatif dan instruksi.
        </p>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Fungsi dan Penggunaan Simple Present Tense
          </h4>
          <div class="sub-content custom-bg-1">
            Simple Present Tense memiliki beberapa fungsi utama, yaitu: a.
            Menyatakan Kebiasaan atau Rutinitas (Habitual Actions) Digunakan
            untuk menunjukkan tindakan yang dilakukan secara berulang atau
            kebiasaan sehari-hari. Contoh: She wakes up at 6 a.m. every day.
            They go to school by bus. b. Menyatakan Fakta Umum atau Kebenaran
            Ilmiah (General Truths or Facts) Digunakan untuk menyatakan fakta
            yang selalu benar atau aturan umum. Contoh: The Earth revolves
            around the Sun. Water boils at 100°C. c. Menyatakan Jadwal atau
            Rencana Tetap (Scheduled Events) Digunakan untuk menyatakan kejadian
            yang sudah memiliki jadwal tetap, seperti jadwal transportasi atau
            acara resmi. Contoh: The train leaves at 7 p.m. The store opens at 9
            a.m. d. Memberikan Instruksi atau Arahan (Instructions &
            Imperatives) Digunakan untuk memberikan arahan atau instruksi yang
            bersifat umum. Contoh: Open the door, please. Mix the flour and
            sugar. e. Menyatakan Keadaan atau Perasaan (States & Emotions)
            Digunakan untuk menyatakan kondisi atau keadaan yang bersifat tetap.
            Contoh: She likes coffee. He owns a car.
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Pola Kalimat dalam Simple Present Tense
          </h4>
          <div class="sub-content custom-bg-2">
            Simple Present Tense memiliki tiga bentuk utama, yaitu kalimat
            positif, negatif, dan interogatif. a. Kalimat Positif (Affirmative
            Sentence) Pola: Subjek + Verb-1 (s/es untuk subjek he, she, it) +
            Objek/Keterangan Contoh: I play football every weekend. She reads a
            book before bed. The sun rises in the east. b. Kalimat Negatif
            (Negative Sentence) Pola: Subjek + do/does + not + Verb-1 +
            Objek/Keterangan Untuk I, you, we, they → gunakan do not (don’t)
            Untuk he, she, it → gunakan does not (doesn’t) Contoh: I do not
            (don’t) like coffee. She does not (doesn’t) watch TV. They do not
            (don’t) go to school on Sundays. c. Kalimat Interogatif
            (Interrogative Sentence) Pola: Do/Does + Subjek + Verb-1 +
            Objek/Keterangan? Contoh: Do you like ice cream? Does he play the
            piano? Do they study every day? d. Jawaban Singkat (Short Answers)
            Dalam menjawab pertanyaan interogatif dengan Simple Present Tense,
            kita bisa menggunakan jawaban pendek. Contoh: Do you like coffee? →
            Yes, I do. / No, I don’t. Does she play tennis? → Yes, she does. /
            No, she doesn’t.
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Penambahan Akhiran -s/-es pada Kata Kerja
          </h4>
          <div class="sub-content custom-bg-1">
            Untuk subjek he, she, it, kata kerja mendapat akhiran -s atau -es.
            Tambahkan -s untuk kata kerja biasa: He drinks coffee. She writes a
            letter. Tambahkan -es untuk kata kerja yang berakhiran -o, -ch, -sh,
            -ss, -x, -z: He goes to school. She watches TV. It crashes into the
            wall. Jika kata kerja berakhiran konsonan + y, ubah y menjadi i lalu
            tambahkan -es: He studies English. She carries a bag.
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">
            Kata Keterangan Waktu yang Sering Digunakan dalam Simple Present
            Tense
          </h4>
          <div class="sub-content custom-bg-2">
            Dalam Simple Present Tense, sering digunakan kata keterangan waktu
            berikut: Every day, every week, every month, every year Always,
            usually, often, sometimes, rarely, never On Mondays, in the morning,
            at night Contoh penggunaan: I always wake up at 6 a.m. She sometimes
            visits her grandmother. They never eat fast food. Kesalahan Umum
            dalam Simple Present Tense Beberapa kesalahan yang sering terjadi
            dalam penggunaan Simple Present Tense: Lupa menambahkan -s atau -es
            pada kata kerja untuk subjek he, she, it. ❌ She go to school. → ✅
            She goes to school. Menggunakan kata kerja bentuk ke-2 atau ke-3
            dalam Simple Present Tense. ❌ He went to work every day. → ✅ He
            goes to work every day. Menggunakan do/does dalam kalimat positif.
            ❌ She does goes to school. → ✅ She goes to school. Menggunakan
            do/does tetapi masih menambahkan -s pada kata kerja dalam kalimat
            negatif dan interogatif. ❌ She doesn't goes to school. → ✅ She
            doesn't go to school. ❌ Does he likes football? → ✅ Does he like
            football?
          </div>
        </div>

        {/* <div class="navigation-buttons">
          <button class="nav-button">
            <span class="arrow">&lt;</span> Previous
          </button>
          <button class="nav-button">
            {" "}
            <Link to={'/present/quiz'} class="nav-link">
              Kuis
            </Link>
          </button>
          <button class="nav-button">
            Next <span class="arrow">&gt;</span>
          </button>
        </div> */}
        <div className="navigation-buttons">
          <Link to={'/tenses'} className="nav-link">
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
              <Link to={'/present/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <Link to={'/presentContinuousTense'} className="nav-link">
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
