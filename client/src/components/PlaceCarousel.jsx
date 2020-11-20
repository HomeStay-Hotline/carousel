import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from './PlaceCard';

export default function PlaceCarousel({ places, connectedRef }) {
  const randomKey = () => (Math.random() * Math.random() * Math.random());
  return (
    <div className="place-carousel-container" ref={connectedRef}>
      {places.map((place) => <PlaceCard place={place} key={randomKey()} />)}
    </div>
  );
}

PlaceCarousel.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
  connectedRef: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};
