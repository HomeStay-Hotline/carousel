import React, { useState } from 'react';
import './styles/ActivityCard.css';

export default function ActivityCard({ activity }) {
  const [heartColor, setHeartColor] = useState(false);
  const handleHeartClick = () => {
    setHeartColor(!heartColor);
    console.log(heartColor);
  };
  return (
    <div className="activity-card-container">
      <div className="activity-image-container">
        <img className="activity-img" src={activity.url} alt="nearby activity" />
        <div onClick={handleHeartClick} className="a-heart-container">
          {heartColor
            ? <div className="activity-heart-icon" style={{ background: 'red' }} />
            : <div className="activity-heart-icon" style={{ background: 'black' }} />}
        </div>
      </div>
      <div className="activity-rating-container">
        <span className="activity-star-icon" />
        <span className="activity-rating">{activity.rating}</span>
      </div>
      <p className="activity-descrip">
        {activity.activity_name}
      </p>
      <p>
        $
        {activity.price}
        {' '}
        / person
      </p>
    </div>
  );
}
