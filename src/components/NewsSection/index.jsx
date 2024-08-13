import React from "react";
import NewsCard from "../NewsCard";

const NewsSection = ({ news }) => {
  return (
    <section className="px-8 py-16 flex flex-col gap-8">
      {/* <h1 className="text-4xl font-bold text-center">Berita Desa</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <NewsCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
