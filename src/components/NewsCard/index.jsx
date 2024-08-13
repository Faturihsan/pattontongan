import React from "react";

const NewsCard = ({ image, title, description, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
        <a href={link} className="text-blue-600 mt-4 block">
          Baca Selengkapnya
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
