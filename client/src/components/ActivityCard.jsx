import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

export default function ActivityCard({ activity }) {
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
            image={activity.img}
          />
        )
        : '' }
      <div className="activity-card-container">
        <div className="activity-image-container">
          <img className="activity-img" src={activity.img} alt="nearby activity" loading="lazy" />
          <div className="white-circle" />
          <div
            role="button"
            onClick={() => {
              setShow(!show);
            }}
            className="a-heart-container"
          >
            {heartColor
              ? <div className="activity-heart-icon" style={{ background: 'red' }} />
              : <div className="activity-heart-icon" style={{ background: 'black' }} />}
          </div>
        </div>
        <div className="activity-rating-container">
          <span className="star-icon">&#9733;&nbsp;</span>
          <span className="activity-rating">{activity.rating}</span>
          &nbsp;
          <span className="a-numb-reviews">
            (
            {activity.total_ratings}
            )
          </span>
        </div>
        <p className="activity-descrip">
          {activity.activity_name}
        </p>
        <span className="activity-price">
          {activity.price}
        </span>
        <span className="activity-pperson">
          {' '}
          / person
        </span>
      </div>
    </>
  );
}

ActivityCard.propTypes = {
  activity: PropTypes.shape({
    activity_name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    total_ratings: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};
