import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

export default function PlaceCard({ place }) {
  const [heartColor, setHeartColor] = useState(false);
  const [show, setShow] = useState(false);
  const handleHeartClick = () => {
    setHeartColor(!heartColor);
  };
  const resetModalView = () => {
    setShow(false);
  };

  return (
    <>
      {show
        ? (
          <Modal
            handleHeartClick={handleHeartClick}
            resetModalView={resetModalView}
            addOrDelete={heartColor ? 'Remove from' : 'Add to'}
            image={place.url}
          />
        )
        : '' }
      <div className="placecard-container">
        <div className="place-image-container">
          <img className="place-img" src={place.url} alt="airbnb listing" loading="lazy" />
          <div className="white-circle" />
          {place.price % 2 === 0 ? <div className="superhost-icon">SUPERHOST</div> : ''}
          <div
            role="button"
            onClick={() => {
              setShow(!show);
            }}
            className="a-heart-container"
          >
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
    </>
  );
}

PlaceCard.propTypes = {
  place: PropTypes.shape({
    beds: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    listing_type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    total_ratings: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
