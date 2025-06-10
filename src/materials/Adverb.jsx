import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

export default function Adverb() {
  return (
    <div className="page-layout">
      <aside class="sidebar">
        <Sidebar />
      </aside>
      <div className="App">
        <div class="header-container">
          <h1 class="title">Adverb</h1>
          <h2 class="subtitle">Kata Keterangan</h2>
        </div>

        <div class="content-container">
          <h3 class="section-title">Pengertian</h3>
          <p class="section-description">
            Adverb (kata keterangan) adalah kata yang digunakan untuk memberikan
            informasi tambahan tentang kata kerja (verb), kata sifat (adjective),
            atau kata keterangan lainnya. Adverb biasanya menjawab pertanyaan
            "bagaimana?", "kapan?", "seberapa sering?", "seberapa banyak?", "di
            mana?", atau "mengapa?". Berikut adalah beberapa jenis adverb yang
            penting dalam bahasa Inggris:
          </p>

          <div class="sub-section">
            <h4 class="sub-section-title">
              1. Adverb of Manner (Kata Keterangan Cara)
            </h4>
            <div class="sub-content custom-bg-1">
              Adverb of manner menjelaskan bagaimana suatu tindakan dilakukan.
              Biasanya diakhiri dengan -ly. Contoh: She sings beautifully. (Dia
              bernyanyi dengan indah.) He drives carefully. (Dia mengemudi dengan
              hati-hati.) They worked hard. (Mereka bekerja keras.) Catatan: Tidak
              semua adverb of manner berakhiran -ly. Contohnya: fast, hard, well.
            </div>
          </div>

          <div class="sub-section">
            <h4 class="sub-section-title">
              2. Adverb of Frequency (Kata Keterangan Frekuensi)
            </h4>
            <div class="sub-content custom-bg-2">
              Adverb of frequency menjelaskan seberapa sering suatu tindakan
              terjadi. Contoh: Always (selalu) Usually (biasanya) Often (sering)
              Sometimes (kadang-kadang) Rarely (jarang) Never (tidak pernah)
              Contoh kalimat: She always wakes up early. (Dia selalu bangun pagi.)
              I rarely eat fast food. (Saya jarang makan makanan cepat saji.)
            </div>
          </div>

          <div class="sub-section">
            <h4 class="sub-section-title">
              3. Adverb of Certainty (Kata Keterangan Kepastian)
            </h4>
            <div class="sub-content custom-bg-1">
              Adverb of certainty digunakan untuk menunjukkan tingkat keyakinan
              terhadap suatu kejadian. Contoh: Definitely (pasti) Certainly (tentu
              saja) Probably (kemungkinan besar) Possibly (mungkin) Contoh
              kalimat: He is definitely coming to the party. (Dia pasti datang ke
              pesta.) She will probably call you later. (Dia kemungkinan besar
              akan meneleponmu nanti.)
            </div>
          </div>

          <div class="sub-section">
            <h4 class="sub-section-title">
              4. Adverb of Place (Kata Keterangan Tempat)
            </h4>
            <div class="sub-content custom-bg-2">
              Adverb of place digunakan untuk menunjukkan di mana suatu kejadian
              terjadi. Contoh: Here (di sini) There (di sana) Everywhere (di
              mana-mana) Nowhere (tidak di mana-mana) Somewhere (di suatu tempat)
              Contoh kalimat: She looked everywhere for her keys. (Dia mencari
              kuncinya di mana-mana.) He is somewhere in the building. (Dia ada di
              suatu tempat di dalam gedung.)
            </div>
          </div>

          <div class="sub-section">
            <h4 class="sub-section-title">
              5. Adverb of Time (Kata Keterangan Waktu)
            </h4>
            <div class="sub-content custom-bg-1">
              Adverb of time digunakan untuk menunjukkan kapan suatu kejadian
              terjadi. Contoh: Now (sekarang) Then (kemudian) Today (hari ini)
              Tomorrow (besok) Yesterday (kemarin) Contoh kalimat: I will call you
              tomorrow. (Saya akan meneleponmu besok.) They met yesterday. (Mereka
              bertemu kemarin.)
            </div>
          </div>

          <div class="sub-section">
            <h4 class="sub-section-title">
              6. Adverb of Degree (Kata Keterangan Tingkatan)
            </h4>
            <div class="sub-content custom-bg-2">
              Adverb of degree menunjukkan tingkat intensitas suatu kata sifat,
              kata kerja, atau kata keterangan lainnya. Contoh: Very (sangat)
              Quite (cukup) Too (terlalu) Enough (cukup) Almost (hampir) Contoh
              kalimat: She is very happy. (Dia sangat bahagia.) The test was too
              difficult. (Tesnya terlalu sulit.)
            </div>
          </div>

          <div class="sub-section">
            <h4 class="sub-section-title">7. Relative Adverb</h4>
            <div class="sub-content custom-bg-1">
              Relative adverb digunakan untuk menghubungkan klausa dalam suatu
              kalimat. Contoh: Where (di mana) When (kapan) Why (mengapa) Contoh
              kalimat: That is the house where I was born. (Itu rumah tempat saya
              lahir.) I remember the day when we met. (Saya ingat hari ketika kita
              bertemu.)
            </div>
          </div>

          <div class="sub-section">
            <h4 class="sub-section-title">8. Interrogative Adverb</h4>
            <div class="sub-content custom-bg-2">
              Interrogative adverb digunakan untuk menanyakan informasi dalam
              pertanyaan. Contoh: Where (di mana) When (kapan) Why (mengapa) How
              (bagaimana) Contoh kalimat: Where do you live? (Di mana kamu
              tinggal?) Why are you late? (Mengapa kamu terlambat?)
            </div>
          </div>

          <div class="sub-section">
            <h4 class="sub-section-title">9. Fairly, Quite, Rather, Very</h4>
            <div class="sub-content custom-bg-1">
              Kata-kata ini digunakan untuk memberikan penekanan pada kata sifat
              atau kata keterangan. Fairly: cukup, lebih ke positif. Quite: cukup,
              bisa positif atau negatif. Rather: agak, lebih ke negatif. Very:
              sangat. Contoh: The exam was fairly easy. (Ujiannya cukup mudah.)
              This book is quite interesting. (Buku ini cukup menarik.) It’s
              rather cold today. (Hari ini agak dingin.) She is very smart. (Dia
              sangat pintar.)
            </div>
          </div>

          <div class="sub-section">
            <h4 class="sub-section-title">10. Still, Yet, Already</h4>
            <div class="sub-content custom-bg-2">
              Still: masih (untuk sesuatu yang masih berlangsung) Yet: belum
              (digunakan dalam kalimat negatif dan tanya) Already: sudah (untuk
              sesuatu yang sudah terjadi)
            </div>
          </div>

          <div class="sub-section">
            <h4 class="sub-section-title">11. So & Such</h4>
            <div class="sub-content custom-bg-1">
              Digunakan untuk memberikan penekanan pada kata sifat atau kata
              benda. <b>So + adjective/adverb</b> The weather is so cold.
              (Cuacanya sangat dingin.) <b>Such + noun phrase</b> It was such a
              beautiful day. (Hari itu sangat indah.)
            </div>
          </div>

          <div class="sub-section">
            <h4 class="sub-section-title">12. Any More, Any Longer, No Longer</h4>
            <div class="sub-content custom-bg-2">
              Any more / Any longer digunakan dalam kalimat negatif untuk
              menunjukkan bahwa sesuatu tidak lagi terjadi. No longer memiliki
              arti yang sama dengan "not any more", tetapi lebih formal.
            </div>
          </div>

          {/*
          <div class="navigation-buttons">
            <button class="nav-button">
              <span class="arrow">&lt;</span> Previous
            </button>
            <button class="nav-button">
              {" "}
              <Link to={'/adverb/quiz'} class="nav-link">
                Kuis
              </Link>
            </button>
            <button class="nav-button">
              Next <span class="arrow">&gt;</span>
            </button>
          </div>
          */}
          <div className="navigation-buttons">
            <Link to={'/verbs'} className="nav-link">
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
              <Link to={'/adverb/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <Link to={'/passiveVoice'} className="nav-link">
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
