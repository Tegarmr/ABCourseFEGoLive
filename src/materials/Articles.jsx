import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

export default function Articles() {
  return (
    <div className="page-layout">
      <aside class="sidebar">
        <Sidebar />
      </aside>
      <div className="App">
        <div class="header-container">
          <h1 class="title">ARTICLES</h1>
          <h2 class="subtitle">A, AN, THE</h2>
        </div>

        <div class="content-container">
          <h3 class="section-title">Pengertian</h3>
          <p class="section-description">
            Articles dalam bahasa Inggris adalah kata yang digunakan untuk
            menentukan atau mengidentifikasi kata benda (noun). Ada tiga jenis
            article dalam bahasa Inggris: <b>Indefinite Articles</b>: "a" dan "an"
            <b>Definite Article</b>: "the" <b>Zero Article</b> (tanpa article)
          </p>

          <div className="sub-section">
            <h4 className="sub-section-title">1. Indefinite Articles (A, An)</h4>
            <div className="sub-content custom-bg-1">
              <p>
                Indefinite articles digunakan ketika kita berbicara tentang
                sesuatu yang tidak spesifik atau belum pernah disebutkan
                sebelumnya.
              </p>

              <h5>A vs. An</h5>
              <ul>
                <li>
                  "A" digunakan sebelum kata yang dimulai dengan bunyi konsonan.
                </li>
                <li>
                  "An" digunakan sebelum kata yang dimulai dengan bunyi vokal (a,
                  e, i, o, u).
                </li>
              </ul>

              <h5>Contoh Penggunaan:</h5>
              <ul>
                <li>
                  A cat is sitting on the chair. (Seekor kucing sedang duduk di
                  kursi.)
                </li>
                <li>
                  She saw an elephant at the zoo. (Dia melihat seekor gajah di
                  kebun binatang.)
                </li>
                <li>
                  I bought a book and an apple. (Saya membeli sebuah buku dan
                  sebuah apel.)
                </li>
              </ul>

              <h5>Kapan Menggunakan "A" dan "An"?</h5>
              <ol>
                <li>
                  <strong>
                    Sebelum kata benda tunggal yang dapat dihitung (singular
                    countable nouns)
                  </strong>
                  <ul>
                    <li type="circle">She is a teacher. (Dia seorang guru.)</li>
                    <li type="circle">He has an idea. (Dia punya sebuah ide.)</li>
                  </ul>
                </li>
                <li>
                  <strong>Ketika menyebutkan sesuatu untuk pertama kali</strong>
                  <ul>
                    <li type="circle">
                      I saw a dog in the park. The dog was very cute. (Saya
                      melihat seekor anjing di taman. Anjing itu sangat lucu.)
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Sebelum profesi</strong>
                  <ul>
                    <li type="circle">She is a doctor. (Dia seorang dokter.)</li>
                    <li type="circle">
                      He wants to be an actor. (Dia ingin menjadi seorang aktor.)
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Dalam ekspresi kuantitas</strong>
                  <ul>
                    <li type="circle">A few (beberapa)</li>
                    <li type="circle">A little (sedikit)</li>
                    <li type="circle">A lot of (banyak)</li>
                  </ul>
                </li>
              </ol>

              <p>
                <strong>Catatan:</strong> Penggunaan "a" dan "an" tergantung pada
                pengucapan, bukan hanya huruf pertama.
              </p>
              <ul>
                <li>
                  A university (karena "university" diucapkan sebagai
                  "you-niversity")
                </li>
                <li>An hour (karena "hour" diucapkan sebagai "our")</li>
              </ul>
            </div>
          </div>

          <div className="sub-section">
            <h4 className="sub-section-title">2. Definite Article (The)</h4>
            <div className="sub-content custom-bg-2">
              <p>
                Definite article "the" digunakan ketika kita berbicara tentang
                sesuatu yang spesifik atau sudah diketahui oleh pendengar atau
                pembaca.
              </p>

              <h5>Contoh Penggunaan "The":</h5>
              <ol>
                <li>
                  <strong>Ketika benda sudah disebutkan sebelumnya</strong>
                  <ul>
                    <li type="circle">
                      I saw a dog. The dog was very friendly. (Saya melihat seekor
                      anjing. Anjing itu sangat ramah.)
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Ketika hanya ada satu dalam konteks tertentu</strong>
                  <ul>
                    <li type="circle">
                      The moon is bright tonight. (Bulan sangat terang malam ini.)
                    </li>
                    <li type="circle">
                      The sun rises in the east. (Matahari terbit di timur.)
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>
                    Dengan kata benda unik atau umum yang hanya ada satu
                  </strong>
                  <ul>
                    <li type="circle">
                      The president of Indonesia (Presiden Indonesia)
                    </li>
                    <li type="circle">
                      The Eiffel Tower is in Paris. (Menara Eiffel ada di Paris.)
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>
                    Dengan nama sungai, laut, samudra, dan gunung berantai
                  </strong>
                  <ul>
                    <li type="circle">The Amazon River (Sungai Amazon)</li>
                    <li type="circle">The Atlantic Ocean (Samudra Atlantik)</li>
                    <li type="circle">The Alps (Pegunungan Alpen)</li>
                  </ul>
                </li>
                <li>
                  <strong>
                    Dengan kata benda yang sudah jelas dalam konteksnya
                  </strong>
                  <ul>
                    <li type="circle">
                      Can you pass me the salt? (Bisakah kamu memberikan saya
                      garam itu?)
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>
                    Dengan superlative adjectives (kata sifat tingkat tertinggi)
                  </strong>
                  <ul>
                    <li type="circle">
                      She is the best student in the class. (Dia adalah siswa
                      terbaik di kelas.)
                    </li>
                    <li type="circle">
                      That was the most interesting book I've read. (Itu adalah
                      buku paling menarik yang pernah saya baca.)
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Dengan alat musik</strong>
                  <ul>
                    <li type="circle">
                      He plays the piano. (Dia bermain piano.)
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          <div className="sub-section">
            <h4 className="sub-section-title">3. Zero Article (Tanpa Article)</h4>
            <div className="sub-content custom-bg-1">
              <p>
                Zero article berarti tidak menggunakan "a", "an", atau "the".
                Biasanya terjadi dalam kasus berikut:
              </p>

              <ol>
                <li>
                  <strong>Dengan nama orang</strong>
                  <ul>
                    <li type="circle">
                      I met John yesterday. (Saya bertemu John kemarin.)
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>
                    Dengan nama negara (kecuali yang memiliki "kingdom", "states",
                    atau "republic")
                  </strong>
                  <ul>
                    <li type="circle">
                      She lives in Indonesia. (Dia tinggal di Indonesia.)
                    </li>
                    <li type="circle">
                      He visited the United States. (Dia mengunjungi Amerika
                      Serikat.)
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Dengan bahasa</strong>
                  <ul>
                    <li type="circle">
                      He speaks French. (Dia berbicara bahasa Prancis.)
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Dengan makanan dan minuman dalam bentuk umum</strong>
                  <ul>
                    <li type="circle">I like coffee. (Saya suka kopi.)</li>
                    <li type="circle">
                      She eats rice every day. (Dia makan nasi setiap hari.)
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Dengan olahraga dan permainan</strong>
                  <ul>
                    <li type="circle">
                      They play football. (Mereka bermain sepak bola.)
                    </li>
                    <li type="circle">I love chess. (Saya suka catur.)</li>
                  </ul>
                </li>
                <li>
                  <strong>Dengan mata pelajaran akademik</strong>
                  <ul>
                    <li type="circle">
                      He studies mathematics. (Dia belajar matematika.)
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Dengan nama hari, bulan, dan tahun</strong>
                  <ul>
                    <li type="circle">Today is Monday. (Hari ini hari Senin.)</li>
                    <li type="circle">
                      She was born in July. (Dia lahir di bulan Juli.)
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Dengan nama bandara, stasiun, dan jalan raya</strong>
                  <ul>
                    <li type="circle">
                      He lives on Oxford Street. (Dia tinggal di Jalan Oxford.)
                    </li>
                    <li type="circle">
                      I arrived at Heathrow Airport. (Saya tiba di Bandara
                      Heathrow.)
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          {/* <div className="navigation-buttons">
            <Link to="/previous" className="nav-button">
              <span className="arrow">&lt;</span> Previous
            </Link>

            <Link to="/articles/quiz" className="nav-button">
              Kuis
            </Link>

            <Link to="/next" className="nav-button">
              Next <span className="arrow">&gt;</span>
            </Link>
          </div> */}
          <div className="navigation-buttons">
            <Link to={'/passiveVoice'} className="nav-link">
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
              <Link to={'/articles/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <Link to={'/conjunctions'} className="nav-link">
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
