import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

export default function Prepositions() {
  return (
    <div className="page-layout">
      <aside class="sidebar">
        <Sidebar />
      </aside>
    <div className="App">
      <div class="header-container">
        <h1 class="title">PREPOSITIONS</h1>
        <h2 class="subtitle">Kata Depan</h2>
      </div>

      <div class="content-container">
        <h3 class="section-title">Pengertian</h3>
        <p class="section-description">
          Prepositions adalah kata depan yang digunakan untuk menunjukkan
          hubungan antara kata benda, kata ganti, atau frasa lainnya dalam suatu
          kalimat. Prepositions sering digunakan untuk menunjukkan tempat
          (place), waktu (time), alat transportasi (means of transport), dan
          hubungan lainnya. Berikut adalah berbagai jenis prepositions beserta
          penggunaannya:
        </p>

        <div className="sub-section">
          <h4 className="sub-section-title">
            1. Prepositions of Place (Kata Depan Tempat)
          </h4>
          <div className="sub-content custom-bg-1">
            <h5>a. In, On, At</h5>

            <p>Digunakan untuk menunjukkan lokasi suatu benda atau orang.</p>

            <ul>
              <li>
                <strong>In</strong> (di dalam): Digunakan untuk ruang tertutup
                atau area tertentu.
                <ul>
                  <li type="circle">
                    The books are <strong>in</strong> the bag. (Buku-buku ada di
                    dalam tas.)
                  </li>
                  <li type="circle">
                    She lives <strong>in</strong> Jakarta. (Dia tinggal di
                    Jakarta.)
                  </li>
                </ul>
              </li>
              <li>
                <strong>On</strong> (di atas permukaan): Digunakan untuk sesuatu
                yang berada di atas permukaan.
                <ul>
                  <li type="circle">
                    The phone is <strong>on</strong> the table. (Telepon ada di
                    atas meja.)
                  </li>
                  <li type="circle">
                    There is a picture <strong>on</strong> the wall. (Ada gambar
                    di dinding.)
                  </li>
                </ul>
              </li>
              <li>
                <strong>At</strong> (di titik tertentu): Digunakan untuk lokasi
                yang spesifik.
                <ul>
                  <li type="circle">
                    She is <strong>at</strong> the bus stop. (Dia berada di
                    halte bus.)
                  </li>
                  <li type="circle">
                    We met <strong>at</strong> the park. (Kami bertemu di
                    taman.)
                  </li>
                </ul>
              </li>
            </ul>

            <h5>b. Above, Over, Below, Under</h5>

            <p>
              Digunakan untuk menunjukkan posisi relatif suatu benda terhadap
              benda lain.
            </p>

            <ul>
              <li>
                <strong>Above</strong> (di atas, tetapi tidak menyentuh)
                <ul>
                  <li type="circle">
                    The painting is <strong>above</strong> the sofa. (Lukisan
                    ada di atas sofa.)
                  </li>
                </ul>
              </li>
              <li>
                <strong>Over</strong> (di atas, bisa menyentuh atau menutupi)
                <ul>
                  <li type="circle">
                    There is a bridge <strong>over</strong> the river. (Ada
                    jembatan di atas sungai.)
                  </li>
                </ul>
              </li>
              <li>
                <strong>Below</strong> (di bawah, tetapi tidak menyentuh)
                <ul>
                  <li type="circle">
                    The temperature is <strong>below</strong> zero. (Suhunya di
                    bawah nol.)
                  </li>
                </ul>
              </li>
              <li>
                <strong>Under</strong> (di bawah, bisa menyentuh atau tertutup)
                <ul>
                  <li type="circle">
                    The shoes are <strong>under</strong> the bed. (Sepatu ada di
                    bawah tempat tidur.)
                  </li>
                </ul>
              </li>
            </ul>

            <h5>c. Between, Among, Beside, Next to</h5>

            <p>Menunjukkan posisi relatif suatu benda terhadap benda lain.</p>

            <ul>
              <li>
                <strong>Between</strong> (di antara dua benda)
                <ul>
                  <li type="circle">
                    The school is <strong>between</strong> the bank and the
                    hospital. (Sekolah ada di antara bank dan rumah sakit.)
                  </li>
                </ul>
              </li>
              <li>
                <strong>Among</strong> (di antara banyak benda)
                <ul>
                  <li type="circle">
                    She was <strong>among</strong> her friends. (Dia berada di
                    antara teman-temannya.)
                  </li>
                </ul>
              </li>
              <li>
                <strong>Beside</strong> (di samping)
                <ul>
                  <li type="circle">
                    The lamp is <strong>beside</strong> the bed. (Lampu ada di
                    samping tempat tidur.)
                  </li>
                </ul>
              </li>
              <li>
                <strong>Next to</strong> (bersebelahan dengan)
                <ul>
                  <li type="circle">
                    The supermarket is <strong>next to</strong> the pharmacy.
                    (Supermarket ada di sebelah apotek.)
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">
            2. Prepositions of Time (Kata Depan Waktu)
          </h4>
          <div className="sub-content custom-bg-2">
            <h5>a. In, On, At</h5>

            <p>Digunakan untuk menunjukkan waktu tertentu.</p>

            <ul>
              <li>
                <strong>In</strong> (untuk periode waktu yang lebih luas)
                <ul>
                  <li type="circle">
                    We were born <strong>in</strong> 1999. (Kami lahir pada
                    tahun 1999.)
                  </li>
                  <li type="circle">
                    She goes to school <strong>in</strong> the morning. (Dia
                    pergi ke sekolah pada pagi hari.)
                  </li>
                </ul>
              </li>
              <li>
                <strong>On</strong> (untuk hari dan tanggal tertentu)
                <ul>
                  <li type="circle">
                    My birthday is <strong>on</strong> Monday. (Ulang tahunku
                    pada hari Senin.)
                  </li>
                  <li type="circle">
                    They met <strong>on</strong> July 4th. (Mereka bertemu pada
                    4 Juli.)
                  </li>
                </ul>
              </li>
              <li>
                <strong>At</strong> (untuk waktu yang spesifik)
                <ul>
                  <li type="circle">
                    The class starts <strong>at</strong> 8 AM. (Kelas dimulai
                    pada pukul 8 pagi.)
                  </li>
                  <li type="circle">
                    We have lunch <strong>at</strong> noon. (Kami makan siang
                    pada tengah hari.)
                  </li>
                </ul>
              </li>
            </ul>

            <h5>b. During, For, While, When</h5>

            <p>
              Digunakan untuk menjelaskan durasi atau hubungan waktu suatu
              peristiwa.
            </p>

            <ul>
              <li>
                <strong>During</strong> (selama suatu periode waktu)
                <ul>
                  <li type="circle">
                    It rained <strong>during</strong> the night. (Hujan turun
                    selama malam.)
                  </li>
                </ul>
              </li>
              <li>
                <strong>For</strong> (selama durasi tertentu)
                <ul>
                  <li type="circle">
                    They stayed here <strong>for</strong> two weeks. (Mereka
                    tinggal di sini selama dua minggu.)
                  </li>
                </ul>
              </li>
              <li>
                <strong>While</strong> (selama suatu aktivitas berlangsung)
                <ul>
                  <li type="circle">
                    She cooked <strong>while</strong> I was studying. (Dia
                    memasak sementara saya belajar.)
                  </li>
                </ul>
              </li>
              <li>
                <strong>When</strong> (ketika suatu peristiwa terjadi)
                <ul>
                  <li type="circle">
                    I was happy <strong>when</strong> I saw you. (Saya bahagia
                    ketika melihatmu.)
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">
            3. Prepositions of Means of Transport (Kata Depan Alat Transportasi)
          </h4>
          <div className="sub-content custom-bg-1">
            <p>Menunjukkan cara seseorang bepergian.</p>

            <ul>
              <li>
                <strong>By</strong> (menggunakan alat transportasi umum atau
                pribadi)
                <ul>
                  <li type="circle">
                    She goes to work <strong>by</strong> bus. (Dia pergi bekerja
                    naik bus.)
                  </li>
                  <li type="circle">
                    He traveled <strong>by</strong> plane. (Dia bepergian dengan
                    pesawat.)
                  </li>
                </ul>
              </li>
              <li>
                <strong>On</strong> (berada di atas kendaraan yang bisa dinaiki)
                <ul>
                  <li type="circle">
                    They were <strong>on</strong> a train. (Mereka berada di
                    dalam kereta.)
                  </li>
                  <li type="circle">
                    She is <strong>on</strong> a bike. (Dia berada di atas
                    sepeda.)
                  </li>
                </ul>
              </li>
              <li>
                <strong>In</strong> (di dalam kendaraan tertutup)
                <ul>
                  <li type="circle">
                    He is <strong>in</strong> a car. (Dia berada di dalam
                    mobil.)
                  </li>
                  <li type="circle">
                    They are <strong>in</strong> a taxi. (Mereka berada di dalam
                    taksi.)
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">
            4. Other Particular Prepositions (Preposisi Khusus Lainnya)
          </h4>
          <div className="sub-content custom-bg-2">
            <p>Beberapa preposisi khusus yang sering digunakan:</p>

            <ul>
              <li>
                <strong>Of</strong> (dari)
                <ul>
                  <li type="circle">
                    A glass <strong>of</strong> water. (Segelas air.)
                  </li>
                  <li type="circle">
                    The door <strong>of</strong> the house. (Pintu rumah.)
                  </li>
                </ul>
              </li>
              <li>
                <strong>With</strong> (dengan)
                <ul>
                  <li type="circle">
                    He wrote <strong>with</strong> a pen. (Dia menulis dengan
                    pena.)
                  </li>
                  <li type="circle">
                    She came <strong>with</strong> her friend. (Dia datang
                    bersama temannya.)
                  </li>
                </ul>
              </li>
              <li>
                <strong>About</strong> (tentang)
                <ul>
                  <li type="circle">
                    We talked <strong>about</strong> the project. (Kami
                    berbicara tentang proyek.)
                  </li>
                  <li type="circle">
                    This book is <strong>about</strong> history. (Buku ini
                    tentang sejarah.)
                  </li>
                </ul>
              </li>
              <li>
                <strong>From</strong> (dari)
                <ul>
                  <li type="circle">
                    She is <strong>from</strong> Indonesia. (Dia dari
                    Indonesia.)
                  </li>
                  <li type="circle">
                    This gift is <strong>from</strong> my mother. (Hadiah ini
                    dari ibuku.)
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* <div class="navigation-buttons">
          <button class="nav-button">
            <span class="arrow">&lt;</span> Previous
          </button>
          <button class="nav-button">
            {" "}
            <Link to={'/prepositions/quiz'} class="nav-link">
              Kuis
            </Link>
          </button>
          <button class="nav-button">
            Next <span class="arrow">&gt;</span>
          </button>
        </div> */}
        <div className="navigation-buttons">
          <Link to={'/conjunctions'} className="nav-link">
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
              <Link to={'/prepositions/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <Link to={'/conditionals'} className="nav-link">
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
