import React from "react";

const NewsDetail = ({ image, title, content }) => {
  return (
    <main className="px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">{title}</h1>
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-cover mb-8"
      />
      <article className="text-gray-700 text-lg">{content}</article>
    </main>
  );
};

export default NewsDetail;
