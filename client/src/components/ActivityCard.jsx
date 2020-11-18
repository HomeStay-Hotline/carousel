import React, { useState } from 'react';

export default function ActivityCard({ activity }) {
  const [heartColor, setHeartColor] = useState(false);
  console.log('rendering card again');
  const handleHeartClick = () => {
    setHeartColor(!heartColor);
    console.log(heartColor);
  };
  return (
    <div className="activity-card-container">
      <div className="activity-image-container">
        <img className="activity-img" src={activity.url} alt="nearby activity" />
        <div className="white-circle" />
        <div onClick={handleHeartClick} className="a-heart-container">
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
        $
        {activity.price}
      </span>
      <span className="activity-pperson">
        {' '}
        / person
      </span>
    </div>
  );
}
