import React from 'react';
import PlaceCard from './PlaceCard';
import './styles/PlaceCarousel.css';

export default function PlaceCarousel({ places }) {
  const randomKey = () => (Math.random() * Math.random() * Math.random());
  return (
    <div className="place-carousel-container">
      {places.map((place) => (<PlaceCard place={place} key={randomKey()} />))}
    </div>
  );
}
