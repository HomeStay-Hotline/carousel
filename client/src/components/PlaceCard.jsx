import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function PlaceCard({ place }) {
  const [heartColor, setHeartColor] = useState(false);
  const handleHeartClick = () => {
    setHeartColor(!heartColor);
  };
  return (
    <div className="placecard-container">
      <div className="place-image-container">
        <img className="place-img" src={place.url} alt="airbnb listing" />
        <div className="white-circle" />
        {place.price % 2 === 0 ? <div className="superhost-icon">SUPERHOST</div> : ''}
        <div onClick={handleHeartClick} className="a-heart-container">
          {heartColor
            ? <div className="place-heart-icon" style={{ background: 'red' }} />
            : <div className="place-heart-icon" style={{ background: 'black' }} />}
        </div>
      </div>
      <div className="place-rating-container">
        <span className="star-icon">&#9733;&nbsp;</span>
        <span className="place-rating">{place.rating}</span>
        &nbsp;
        <span className="p-numb-reviews">
          (
          {place.total_ratings}
          )
        </span>
      </div>
      <div className="place-info-container">
        <span className="place-listing-type">
          {place.listing_type}
        </span>
        <span className="place-numb-beds">
          {' '}
          &middot;
          {' '}
          {place.beds}
          {' '}
        </span>
        <span className="place-listing-type">
          beds
        </span>
      </div>
      <p className="place-location">{place.location}</p>
      <span className="place-price">
        $
        {place.price}
      </span>
      <span className="place-pnight">
        {' '}
        / night
      </span>
    </div>
  );
}

PlaceCard.propTypes = {
  place: PropTypes.shape({
    beds: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    total_ratings: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
