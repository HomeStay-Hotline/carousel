import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import PlaceCard from './PlaceCard';

export default function PlaceCarousel({ places, forwardedRef }) {
  const randomKey = () => (Math.random() * Math.random() * Math.random());
  return (
    <div className="place-carousel-container" ref={forwardedRef}>
      {places.map((place) => <PlaceCard place={place} key={randomKey()} />)}
    </div>
  );
}

PlaceCarousel.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
  forwardedRef: PropTypes.object.isRequired, // dom element
};
