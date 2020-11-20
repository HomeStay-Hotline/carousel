import React from 'react';
import PropTypes from 'prop-types';
import ActivityCard from './ActivityCard';

export default function ActivityCarousel({ activities, connectedRef }) {
  const randomKey = () => (Math.random() * Math.random() * Math.random());
  return (
    <div className="activity-carousel-container" ref={connectedRef}>
      {activities.map((activity) => <ActivityCard activity={activity} key={randomKey()} />)}
    </div>
  );
}

ActivityCarousel.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.object).isRequired,
  connectedRef: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};
