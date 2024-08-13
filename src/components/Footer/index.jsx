import React from 'react';
import { logodesa } from '../../assets';

const Footer = () => {
  return (
    <footer className="bg-[#38C793] text-black px-6 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Desa Pattontongan</h2>
            <p className="text-black">
              Kecamatan Mandai, Kabupaten Maros
            </p>
          </div>
          <img src={logodesa} alt="" className='h-[96px] w-[96px]'/>
          <div className="flex flex-col md:flex-row md:gap-8">
            <ul className="mb-4 md:mb-0">
              <li><a href="/" className="hover:underline">Beranda</a></li>
              <li><a href="/profile" className="hover:underline">Profil Desa</a></li>
              <li><a href="/news" className="hover:underline">Berita</a></li>
              <li><a href="/contact" className="hover:underline">Wisata</a></li>
            </ul>
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p className="text-black">Email: <a href="mailto:info@desa.com" className="hover:underline">info@desa.com</a></p>
              <p className="text-black">Phone: +123 456 7890</p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-black">
          <p>&copy; {new Date().getFullYear()} Desa Pattontongan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
