import { logodesa } from "../../assets";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 px-9 py-6 flex justify-between items-center bg-[#38C793] z-50 shadow-md">
      <div>
        <img src={logodesa} alt="Logo Desa Pattontongan" className="h-[76px] w-[76px] border-black" />
      </div>
      <div className="flex items-center ml-auto">
        <ul className="flex gap-8 text-white font-bold">
          <li>
            <a href="#home" className="relative group">Beranda
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#profil" className="relative group">Profil Desa
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#berita" className="relative group">Berita
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#wisata" className="relative group">Wisata
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
