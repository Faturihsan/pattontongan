import Header from "../components/Header";
import { img1, batas } from "../assets";
import { styles } from "../styles";
import NewsSection from "../components/NewsSection";
import TempatWisataSection from "../components/TempatWisataSection";
import Footer from "../components/Footer";
import { newsData, tempatWisataData } from "../constants";

const LandingPage = () => {
  return (
    <main className="flex flex-col">
      <Header />
      <div className="relative flex flex-col items-center justify-center">
        <img src={img1} alt="" className="w-full max-h-screen object-cover" />
        <h1 className={`text-center text-white font-bold drop-shadow-lg text-[64px] absolute`}>
          Selamat Datang di Website Resmi <br></br>Desa Pattontongan
        </h1>
      </div>

      <section id="profil" className={`${styles.paddingX} flex flex-col gap-8 mt-8`}>
        <h1 className={`${styles.headingL} text-center`}>Profil Desa</h1>
        <div className="flex gap-36 items-center profil">
          <img src={batas} alt="" className="flex w-[480px] items-center justify-center" />
          <p>
            Desa Pattontongan merupakan salah satu dari 4 (empat) Desa di
            Wilayah Kecamatan Mandai yang terletak di 8 km ibukota
            kecamatan Mandai, Diarah selatan dengan Batas Desa Bonto marannu
            Kecamatan Mongcongloe, Sebelah Utara batas dengan Desa Tenrigangkae
            Kecamatan Mandai, Sebelah Timur Batas Desa Kurusumange Kecamatan
            Tanralili, dan sebelah Barat batas dengan Desa Bajimangai Kecamatan
            Mandai
          </p>
        </div>
      </section>

      <section id="berita" className={`${styles.paddingX} flex flex-col gap-8 berita mt-8`}>
        <h1 className={`${styles.headingL} text-center`}>Berita Desa</h1>
        <NewsSection news={newsData} />
      </section>

      <section id="wisata" className={`${styles.paddingX} flex flex-col gap-8 wisata mt-8`}>
        <h1 className={`${styles.headingL} text-center`}>Tempat Wisata</h1>
        <TempatWisataSection attractions={tempatWisataData} />
      </section>

      <Footer />
    </main>
  );
};

export default LandingPage;
