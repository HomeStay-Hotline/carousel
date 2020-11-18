import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from './PlaceCard';

export default function PlaceCarousel({ places }) {
  const randomKey = () => (Math.random() * Math.random() * Math.random());
  return (
    <div className="place-carousel-container">
      {places.map((place) => <PlaceCard place={place} key={randomKey()} />)}
    </div>
  );
}

PlaceCarousel.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
};
