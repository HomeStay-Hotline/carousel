import React from 'react';
import ActivityCard from './ActivityCard';

export default function ActivityCarousel({ activities }) {
  const randomKey = () => (Math.random() * Math.random() * Math.random());
  return (
    <div className="activity-carousel-container">
      {activities.map((activity) => <ActivityCard activity={activity} key={randomKey()} />)}
    </div>
  );
}
