import React from 'react';
import PlaceCard from './PlaceCard';

export default function PlaceCarousel({ places }) {
  const randomKey = () => (Math.random() * Math.random() * Math.random());
  return (
    <div className="place-carousel-comp">
      {places.map((place) => (<PlaceCard place={place} key={randomKey()} />))}
    </div>
  );
}
