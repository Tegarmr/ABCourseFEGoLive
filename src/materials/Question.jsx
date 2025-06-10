import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

export default function Question() {
  return (
    <div className="page-layout">
      <aside class="sidebar">
        <Sidebar />
      </aside>
    <div className="App">
      <div class="header-container">
        <h1 class="title">QUESTION WORDS</h1>
        <h2 class="subtitle">Kata Tanya</h2>
      </div>

      <div class="content-container">
        <h3 class="section-title">Pengertian</h3>
        <p class="section-description">
          Question words atau kata tanya adalah kata yang digunakan untuk
          mengajukan pertanyaan dalam bahasa Inggris. Kata-kata ini sering
          digunakan dalam kalimat interogatif untuk mendapatkan informasi
          tertentu. Berikut adalah daftar question words beserta penjelasan dan
          contohnya.
        </p>

        <div class="sub-section">
          <h4 class="sub-section-title">1. WHAT (Apa, Apa yang)</h4>
          <div class="sub-content custom-bg-1">
            Digunakan untuk menanyakan informasi umum tentang sesuatu. Contoh:
            What is your name? (Siapa namamu?) What do you want to eat? (Apa
            yang ingin kamu makan?) What time is it? (Jam berapa sekarang?)
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">2. WHOM (Siapa - Objek)</h4>
          <div class="sub-content custom-bg-2">
            Digunakan untuk menanyakan tentang seseorang sebagai objek dalam
            kalimat. Contoh: Whom did you meet yesterday? (Siapa yang kamu temui
            kemarin?) Whom should I ask for help? (Kepada siapa saya harus
            meminta bantuan?) Catatan: Dalam percakapan sehari-hari, whom sering
            digantikan dengan who, meskipun secara tata bahasa whom lebih tepat
            dalam konteks objek.
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">3. WHEN (Kapan)</h4>
          <div class="sub-content custom-bg-1">
            Digunakan untuk menanyakan waktu. Contoh: When is your birthday?
            (Kapan ulang tahunmu?) When did they arrive? (Kapan mereka tiba?)
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">
            4. WHERE (Di mana, Ke mana, Dari mana)
          </h4>
          <div class="sub-content custom-bg-2">
            Digunakan untuk menanyakan lokasi atau tempat. Contoh: Where do you
            live? (Di mana kamu tinggal?) Where is the nearest hospital? (Di
            mana rumah sakit terdekat?) Where are you going? (Ke mana kamu
            pergi?)
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">5. WHICH (Yang mana)</h4>
          <div class="sub-content custom-bg-1">
            Digunakan untuk menanyakan pilihan antara dua atau lebih hal.
            Contoh: Which dress do you prefer? (Gaun yang mana yang kamu sukai?)
            Which is your favorite color? (Warna mana yang menjadi favoritmu?)
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">6. WHOSE (Milik siapa)</h4>
          <div class="sub-content custom-bg-2">
            Digunakan untuk menanyakan kepemilikan. Contoh: Whose book is this?
            (Buku siapa ini?) Whose car is parked outside? (Mobil siapa yang
            diparkir di luar?)
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">7. WHY (Mengapa)</h4>
          <div class="sub-content custom-bg-1">
            Digunakan untuk menanyakan alasan. Contoh: Why are you late?
            (Mengapa kamu terlambat?) Why did she leave so early? (Mengapa dia
            pergi begitu cepat?)
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">8. HOW (Bagaimana, Seberapa)</h4>
          <div class="sub-content custom-bg-2">
            Digunakan untuk menanyakan cara atau kondisi sesuatu. Contoh: How do
            you make a cake? (Bagaimana cara membuat kue?) How are you?
            (Bagaimana kabarmu?) How much does this cost? (Berapa harga ini?)
            How many apples do you have? (Berapa banyak apel yang kamu punya?)
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">9. Kata Tanya Turunan Dari How</h4>
          <div class="sub-content custom-bg-1">
            Selain bentuk dasar how, terdapat beberapa varian untuk menanyakan
            sesuatu dengan lebih spesifik: How much → Menanyakan harga atau
            jumlah yang tidak dapat dihitung. How much is this laptop? (Berapa
            harga laptop ini?) How many → Menanyakan jumlah yang dapat dihitung.
            How many students are in the class? (Berapa banyak siswa di kelas
            ini?) How long → Menanyakan durasi atau panjang sesuatu. How long
            will it take? (Berapa lama waktu yang dibutuhkan?) How far →
            Menanyakan jarak. How far is your school from here? (Seberapa jauh
            sekolahmu dari sini?) How old → Menanyakan usia. How old are you?
            (Berapa umurmu?) How often → Menanyakan frekuensi. How often do you
            exercise? (Seberapa sering kamu berolahraga?) How fast → Menanyakan
            kecepatan. How fast can you run? (Seberapa cepat kamu bisa berlari?)
            How deep → Menanyakan kedalaman. How deep is the ocean here?
            (Seberapa dalam laut di sini?)
          </div>
        </div>

        <div class="sub-section">
          <h4 class="sub-section-title">10. Kata Tanya Tambahan</h4>
          <div class="sub-content custom-bg-2">
            Selain question words utama, ada beberapa kombinasi kata tanya yang
            sering digunakan: What time → Menanyakan waktu spesifik. What time
            does the train leave? (Jam berapa kereta berangkat?) What kind of →
            Menanyakan jenis atau tipe. What kind of music do you like? (Jenis
            musik apa yang kamu suka?) What for → Menanyakan tujuan. What is
            this tool for? (Alat ini digunakan untuk apa?) Who else → Menanyakan
            orang tambahan selain yang sudah disebut. Who else is coming to the
            party? (Siapa lagi yang datang ke pesta?)
          </div>
        </div>

        {/* <div class="navigation-buttons">
          <button class="nav-button">
            <span class="arrow">&lt;</span> Previous
          </button>
          <button class="nav-button">
            {" "}
            <Link to={'/question/quiz'} class="nav-link">
              Kuis
            </Link>
          </button>
          <button class="nav-button">
            Next <span class="arrow">&gt;</span>
          </button>
        </div> */}
        <div className="navigation-buttons">
          <Link to={'/modalAuxilliary'} className="nav-link">
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
              <Link to={'/question/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <Link to={'/verbs'} className="nav-link">
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
