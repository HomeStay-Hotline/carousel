import React from 'react';

export default function PlaceCard({ place }) {
  return (
    <div>
      <div className="image-container">
        <img src={place.url} alt="airbnb listing" />
        <span className="heart-icon" />
      </div>
      <div className="star-rating-container">
        <span className="star-icon" />
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
