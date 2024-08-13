import React from 'react';

const TempatWisataCard = ({ image, title, description, link }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg w-full sm:w-80 lg:w-96">
      <img src={image} alt={title} className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
        <h2 className="text-2xl text-white font-semibold mb-2 text-center">{title}</h2>
        <p className="text-gray-300 text-center mb-4">{description}</p>
        <a href={link} className="text-sm text-white bg-blue-600 px-4 py-2 rounded-full">Lihat Selengkapnya</a>
      </div>
    </div>
  );
};

export default TempatWisataCard;
