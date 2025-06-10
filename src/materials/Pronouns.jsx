import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

const Pronouns = () => {
  return (
    <div className="page-layout">
      <aside class="sidebar">
        <Sidebar />
      </aside>
    <div className="App">
      <div className="header-container">
        <h1 className="title">PRONOUNS</h1>
        <h2 className="subtitle">Kata Ganti</h2>
      </div>

      <div className="content-container">
        <h3 className="section-title">Definisi</h3>
        <p className="section-description">
          Kata yang digunakan untuk menggantikan kata benda sehingga kata benda yang sama tidak digunakan berulang-ulang.
        </p>

        <div className="sub-section">
          <h4 className="sub-section-title">Jenis - Jenis Pronouns</h4>
          <div className="sub-content custom-bg-2">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Jenis</th>
                  <th>Singular</th>
                  <th>Plural</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Subjective Pronoun</td>
                  <td>I, you, he, she, it</td>
                  <td>we, you, they</td>
                </tr>
                <tr>
                  <td>Possessive Adjective</td>
                  <td>my, your, his, her, its</td>
                  <td>our, your, their</td>
                </tr>
                <tr>
                  <td>Possessive Pronoun</td>
                  <td>mine, yours, his, hers, its</td>
                  <td>ours, yours, theirs</td>
                </tr>
                <tr>
                  <td>Object Pronoun</td>
                  <td>me, you, him, her, it</td>
                  <td>us, you, them</td>
                </tr>
                <tr>
                  <td>Reflexive Pronoun</td>
                  <td>myself, yourself, himself, herself, itself</td>
                  <td>ourselves, yourselves, themselves</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Indefinite dan Demonstrative Pronouns</h4>
          <div className="sub-content custom-bg-1">
            <h5>Indefinite Pronouns</h5>
            <p>Digunakan untuk menunjukkan seseorang atau sesuatu yang tidak diketahui secara pasti.</p>
            <ul>
              <li><strong>-one / -body:</strong> someone, anyone, everyone, no one</li>
              <li><strong>-thing:</strong> something, anything, everything, nothing</li>
            </ul>
            <h5>Demonstrative Pronouns</h5>
            <p>Menunjukkan sesuatu secara spesifik, digunakan sebagai subjek atau objek.</p>
            <ul>
              <li>This, That, These, Those</li>
            </ul>
          </div>
        </div>

        {/* <div class="navigation-buttons">
          <button class="nav-button">
            <span class="arrow">&lt;</span> Previous
          </button>
          <button class="nav-button">
            <Link to={'/quiz/pronouns'} class="nav-link">
              Kuis
            </Link>
          </button>
          <button class="nav-button">
            Next <span class="arrow">&gt;</span>
          </button>
        </div> */}
        <div className="navigation-buttons">
          <Link to={'/nouns'} className="nav-link">
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
              <Link to={'/pronouns/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <Link to={'/helpingVerbs'} className="nav-link">
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

export default Pronouns;
