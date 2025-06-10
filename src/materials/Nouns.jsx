import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

const Nouns = () => {
  return (
    <div className="page-layout">
      <aside class="sidebar">
        <Sidebar />
      </aside>
    <div className="App">
      <div className="header-container">
        <h1 className="title">NOUNS</h1>
        <h2 className="subtitle">Kata Benda</h2>
      </div>

      <div className="content-container">
        <h3 className="section-title">Definisi</h3>
        <p className="section-description">
          Kata yang digunakan untuk menunjukkan nama orang, benda, binatang,
          tempat, ide, gagasan, kualitas, pikiran, perasaan, tindakan dan lain
          sebagainya.
        </p>

        <div className="sub-section">
          <h4 className="sub-section-title">Jenis-Jenis</h4>
          <div className="sub-content custom-bg-2">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Jenis</th>
                  <th>Sifat</th>
                  <th>Contoh</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Common Nouns</td>
                  <td>Umum</td>
                  <td>House, car, chair, box, pencil, television</td>
                </tr>
                <tr>
                  <td>Proper Nouns</td>
                  <td>Nama diri (orang, tempat, bulan)</td>
                  <td>Siti, Jakarta, Desember</td>
                </tr>
                <tr>
                  <td>Material Nouns</td>
                  <td>Sudah ada di alam</td>
                  <td>Sun, iron, clay, air, steel, glass</td>
                </tr>
                <tr>
                  <td>Collective Nouns</td>
                  <td>Tunggal tapi berarti jamak</td>
                  <td>Staff, committee, company, family, enemy, team, audience, crew</td>
                </tr>
                <tr>
                  <td>Abstract Nouns</td>
                  <td>Ide/gagasan/konsep</td>
                  <td>Show, agreement, beauty, information</td>
                </tr>
                <tr>
                  <td>Countable Nouns</td>
                  <td>Dapat dihitung</td>
                  <td>Man, table, chair, spoons, child, pen</td>
                </tr>
                <tr>
                  <td>Uncountable Nouns</td>
                  <td>Tidak dapat dihitung</td>
                  <td>Water, coffee, sugar, sand</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="sub-section">
  <h4 className="sub-section-title">Uncountable Noun</h4>
  <div className="sub-section custom-bg-1">
  <p className="section-description">Ciri-ciri:</p>
  <ul className="section-description">
    <li>Tidak bisa menggunakan kata sandang tidak tentu (<em>indefinite article</em>: “a/an”)</li>
    <li><strong>Salah</strong>: I need <s>a water</s></li>
    <li><strong>Benar</strong>: I need <u>some water</u></li>
    <li>Tidak bisa ditempatkan kata bilangan secara langsung</li>
    <li>Menggunakan <strong>partitive</strong> (kata yang menunjukkan bagian dari keseluruhan)</li>
  </ul>
  </div>

  <div className="sub-content custom-bg-1">
    <h5 className="sub-section-title">Partitive Examples</h5>
    <table className="styled-table">
      <thead>
        <tr>
          <th>Kategori</th>
          <th>Contoh</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Satu bagian penuh</td>
          <td>
            A loaf of bread<br />
            A bar of soap<br />
            A bar of chocolate
          </td>
        </tr>
        <tr>
          <td>Sebagian dari keseluruhan</td>
          <td>
            A slice of bread<br />
            A pinch of salt
          </td>
        </tr>
        <tr>
          <td>Suatu kumpulan</td>
          <td>
            A pack of cigarettes<br />
            A bottle of milk
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


        <div className="sub-section">
          <h4 className="sub-section-title">Formation of Nouns</h4>
          <div className="sub-content custom-bg-2">
            <h5>Dari Adjective (Kata Sifat)</h5>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Adjective</th>
                  <th>Meaning</th>
                  <th>Noun</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>true</td><td>benar</td><td>truth</td><td>kebenaran</td></tr>
                <tr><td>deep</td><td>dalam</td><td>depth</td><td>kedalaman</td></tr>
                <tr><td>busy</td><td>sibuk</td><td>business</td><td>kesibukan</td></tr>
                <tr><td>lazy</td><td>malas</td><td>laziness</td><td>kemalasan</td></tr>
                <tr><td>fluent</td><td>lancar</td><td>fluency</td><td>kelancaran</td></tr>
                <tr><td>intimate</td><td>intim</td><td>intimacy</td><td>keintiman</td></tr>
                <tr><td>active</td><td>giat</td><td>activity</td><td>kegiatan</td></tr>
                <tr><td>honest</td><td>jujur</td><td>honesty</td><td>kejujuran</td></tr>
                <tr><td>patient</td><td>sabar</td><td>patience</td><td>kesabaran</td></tr>
                <tr><td>present</td><td>hadir</td><td>presence</td><td>kehadiran</td></tr>
              </tbody>
            </table>
          </div>
          <div className="sub-content custom-bg-1">
            <h5>Dari Verb (Kata Kerja)</h5>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Verb</th>
                  <th>Meaning</th>
                  <th>Noun</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>train</td><td>melatih</td><td>trainee</td><td>Yang berlatih</td></tr>
                <tr><td>maintain</td><td>merawat</td><td>maintenance</td><td>perawatan</td></tr>
                <tr><td>create</td><td>mencipta</td><td>creator</td><td>pencipta</td></tr>
                <tr><td>fail</td><td>gagal</td><td>failure</td><td>kegagalan</td></tr>
                <tr><td>marry</td><td>menikah</td><td>marriage</td><td>pernikahan</td></tr>
                <tr><td>educate</td><td>mendidik</td><td>education</td><td>pendidikan</td></tr>
                <tr><td>make</td><td>membuat</td><td>maker</td><td>pembuat</td></tr>
                <tr><td>arrive</td><td>datang</td><td>arrival</td><td>kedatangan</td></tr>
                <tr><td>deliver</td><td>mengirim</td><td>delivery</td><td>pengiriman</td></tr>
                <tr><td>choose</td><td>memilih</td><td>choice</td><td>pilihan</td></tr>
                <tr><td>pay</td><td>membayar</td><td>payment</td><td>pembayaran</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* <div class="navigation-buttons">
          <button class="nav-button">
            <span class="arrow">&lt;</span> Previous
          </button>
          <button class="nav-button">
            <Link to={'/quiz/nouns'} class="nav-link">
              Kuis
            </Link>
          </button>
          <button class="nav-button">
            Next <span class="arrow">&gt;</span>
          </button>
        </div> */}
        <div className="navigation-buttons">
            <Link to={'/app'} className="nav-link">
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
              Home
            </button>
            </Link>
            <button className="nav-button">
              <Link to={'/nouns/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <Link to={'/pronouns'} className="nav-link">
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
};

export default Nouns;