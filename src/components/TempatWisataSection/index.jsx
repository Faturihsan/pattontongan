import React from 'react';
import TempatWisataCard from '../TempatWisataCard';

const TempatWisataSection = ({ attractions }) => {
  return (
    <section className="px-8 py-16">
      {/* <h1 className="text-4xl font-bold text-center mb-12">Tempat Wisata</h1> */}
      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {attractions.map((attraction, index) => (
          <TempatWisataCard
            key={index}
            image={attraction.image}
            title={attraction.title}
            description={attraction.description}
            link={attraction.link}
          />
        ))}
      </div>
    </section>
  );
};

export default TempatWisataSection;
