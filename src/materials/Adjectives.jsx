import { Link } from "react-router-dom";
import "../assets/materi.css";
import Sidebar from "../components/Sidebar";

const data = {
  "en_name": "ADJECTIVES",
  "id_name": "Kata Sifat",
  "title": "Pengertian",
  "description": "Adjective atau kata sifat adalah kata yang digunakan untuk mendeskripsikan atau memberikan informasi tambahan tentang kata benda (noun) atau kata ganti (pronoun). Berikut adalah cakupan materi lengkap mengenai adjectives:",
  "sections": [
    {
      "title": "Position of Adjective (Posisi Adjective dalam Kalimat)",
      "description": "Adjective dalam bahasa Inggris dapat menempati beberapa posisi, yaitu: Sebelum Noun(Attributive Position) Contoh: She has a beautiful house. (Dia memiliki rumah yang indah.) Setelah Linking Verb(Predicative Position) Contoh: The sky is blue. (Langit berwarna biru.) Sebagai Complement dalam Kalimat Contoh: He made me happy. (Dia membuatku bahagia.)"
    },
    {
      "title": "Order of Adjectives (Urutan Adjective dalam Kalimat)",
      "description": "Jika terdapat lebih dari satu adjective dalam satu frasa, maka urutan yang benar harus mengikuti pola berikut: Opinion (Opini) → beautiful, interesting, ugly. Size (Ukuran) → big, small, tall. Age (Usia) → old, young, new. Shape (Bentuk) → round, square, triangular. Color (Warna) → red, blue, yellow. Origin (Asal-usul) → American, Indonesian, Chinese. Material (Bahan) → wooden, metal, cotton. Purpose (Tujuan/Penggunaan) → sleeping (as in sleeping bag), running (as in running shoes). Contoh: A beautiful big old round red Italian wooden dining table. (Sebuah meja makan kayu Italia yang tua, besar, berbentuk bulat, dan indah.)"
    },
    {
      "title": "Function of Adjective (Fungsi Adjective)",
      "content": "Adjective berfungsi untuk: Memberikan deskripsi atau sifat suatu benda (descriptive adjective) Menyatakan jumlah atau urutan (numerical adjective) Menunjukkan kepemilikan (possessive adjective) Menunjukkan pertanyaan (interrogative adjective) Menunjukkan perbandingan (comparative & superlative adjective)"
    },
    {
      "title": "Participle Adjective",
      "content": "Participle adjectives berasal dari verb yang berakhiran -ing atau -ed. Adjective dari Present Participle (-ing): Menunjukkan sesuatu yang menyebabkan perasaan. Contoh: The movie is interesting. (Film itu menarik.) Adjective dari Past Participle (-ed): Menunjukkan perasaan yang dialami seseorang. Contoh: I am interested in the movie. (Saya tertarik dengan film itu.)"
    },
    {
      "title": "Demonstrative Adjective",
      "content": "Demonstrative adjectives digunakan untuk menunjukkan benda tertentu: This (ini, untuk benda tunggal dekat) → This book is mine. That (itu, untuk benda tunggal jauh) → That house is beautiful. These (ini, untuk benda jamak dekat) → These shoes are comfortable. Those (itu, untuk benda jamak jauh) → Those mountains are high."
    },
    {
      "title": "Formation of Adjective (Pembentukan Adjective)",
      "content": "Adjective dapat dibentuk dengan beberapa cara, yaitu: a) Dari Noun ke Adjective Dengan menambahkan suffix (-al, -ous, -ful, -less, -able, -ive, -ry) nature → natural danger → dangerous beauty → beautiful care → careless comfort → comfortable act → active mystery → mysterious. b) Dari Verb ke Adjective Menggunakan akhiran tertentu: talk → talkative bore → boring/bored tire → tiring/tired. c) Dengan Menggunakan Prefix im- → impossible, immature un- → unhappy, unclear in- → invisible, incomplete dis- → dishonest, dissatisfied ir- → irregular, irresponsible"
    },
    {
      "title": "Positive Degree (Tingkat Positif)",
      "content": "Digunakan untuk menyatakan sifat tanpa perbandingan. Contoh: She is tall. (Dia tinggi.)"
    },
    {
      "title": "Comparative Degree (Tingkat Perbandingan)",
      "content": "Digunakan untuk membandingkan dua benda atau orang. Bentuk Regular: Kata sifat pendek: + -er → bigger, taller, smaller Kata sifat panjang: more + adjective → more beautiful, more expensive. Contoh: This book is cheaper than that one. (Buku ini lebih murah daripada yang itu.)"
    },
    {
      "title": "Superlative Degree (Tingkat Superlatif)",

      "content": "Digunakan untuk menunjukkan sesuatu yang paling dibandingkan dengan yang lain. Bentuk Regular: Kata sifat pendek: + -est → biggest, tallest, smallest Kata sifat panjang: most + adjective → most beautiful, most expensive. Contoh: She is the smartest student in the class. (Dia adalah siswa paling pintar di kelas.)"
    },
    {
      "title": "Double Comparative (Perbandingan Ganda)",
      "content": "Digunakan untuk menyatakan peningkatan atau penurunan bertahap. Semakin ... semakin ... → The more, the better. (Semakin banyak, semakin baik.) Contoh: The higher you climb, the colder it gets. (Semakin tinggi kamu mendaki, semakin dingin rasanya.)"
    },
    {
      "title": "The Same As - The Same - Similar",
      "content": "The same as: digunakan untuk menyatakan dua hal yang identik. Contoh: This bag is the same as mine. (Tas ini sama dengan punyaku.) The same: digunakan untuk menunjukkan kesamaan tanpa membandingkan. Contoh: We have the same teacher. (Kita memiliki guru yang sama.) Similar: digunakan untuk menyatakan kemiripan tetapi tidak identik. Contoh: These dresses are similar, but not exactly the same. (Gaun-gaun ini mirip, tetapi tidak benar-benar sama.)"
    },
    {
      "title": "Jenis Adjective Tambahan yang Perlu Diketahui",
      "content": "Quantitative Adjective: Menunjukkan jumlah (few, many, much, little, several). Interrogative Adjective: Digunakan dalam pertanyaan (which, what, whose). Possessive Adjective: Menunjukkan kepemilikan (my, your, his, her, their). Proper Adjective: Dibentuk dari nama tempat atau orang (American, Indonesian, Shakespearean)."
    }
  ]
}

export default function Adjectives() {
  return (
    <div className="page-layout">
      <aside class="sidebar">
        <Sidebar />
      </aside>

      <div className="App">
        <div class="header-container">
          <h1 class="title">{data.en_name}</h1>
          <h2 class="subtitle">{data.id_name}</h2>
        </div>

        <div class="content-container">
          <h3 class="section-title">{data.title}</h3>
          <p class="section-description">{data.description}</p>

          {data.sections.map((section, index) => (
            <div className="sub-section" key={index}>
              <h4 className="sub-section-title">{section.title}</h4>
              <div className={`sub-content ${index % 2 === 0 ? 'custom-bg-1' : 'custom-bg-2'}`}>
                {section.description ? <p>{section.description}</p> : null}
                {section.content ? <p>{section.content}</p> : null}
              </div>
            </div>
          ))}

          <div className="navigation-buttons">
            <Link to={'/futurePerfectContinousTense'} className="nav-link">
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
              <Link to={'/adjective/quiz'} className="nav-link">
                Quiz
              </Link>
            </button>
            <Link to={'/modalAuxilliary'} className="nav-link">
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
