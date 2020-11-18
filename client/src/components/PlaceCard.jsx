import React, { useState } from 'react';
import './styles/PlaceCard.css';

export default function PlaceCard({ place }) {
  const [heartColor, setHeartColor] = useState(false);
  const handleHeartClick = () => {
    setHeartColor(!heartColor);
    console.log(heartColor);
  };
  return (
    <div className="placecard-container">
      <div className="place-image-container">
        <img className="place-img" src={place.url} alt="airbnb listing" />
        <div onClick={handleHeartClick} className="p-heart-container">
          {heartColor
            ? <div className="place-heart-icon" style={{ background: 'red' }} />
            : <div className="place-heart-icon" style={{ background: 'black' }} />}
        </div>
      </div>
      <div className="place-rating-container">
        <span className="place-star-icon" />
        <span className="place-rating">{place.rating}</span>
      </div>
      <p className="place-listing-type-beds">
        {place.listing_type}
        {' '}
        &middot;
        {' '}
        {place.beds}
        {' '}
        beds
      </p>
      <p className="place-location">{place.location}</p>
      <p className="place-price">
        $
        {place.price}
        {' '}
        / night
      </p>
    </div>
  );
}
