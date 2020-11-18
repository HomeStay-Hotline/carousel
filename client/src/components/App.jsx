import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlaceHeader from './PlaceHeader';
import PlaceCarousel from './PlaceCarousel';
import ActivityHeader from './ActivityHeader';
import ActivityCarousel from './ActivityCarousel';
import './styles/App.css';
import './styles/Headers.css';
import './styles/PlaceCarousel.css';
import './styles/ActivityCarousel.css';
import './styles/PlaceCard.css';
import './styles/ActivityCard.css';

export default function App() {
  const [places, setPlaces] = useState([]);
  const [activities, setActivities] = useState([]);
  const [pageNumb, setPageNumb] = useState(1);
  const [pageNumbActivs, setPageNumbActivs] = useState(1);

  useEffect(() => {
    console.log('useEffect called');
    const id = Math.floor(Math.random() * 100);
    const placesURL = `/api/home/${id}/images/places`;
    axios.get(placesURL)
      .then((response) => {
        const fakePlaces = response.data[0].info;
        console.log('axios get running');
        setPlaces(fakePlaces);
      })
      .catch((err) => {
        console.error(err);
      });

    const activitiesURL = `/api/home/${id}/images/activities`;
    axios.get(activitiesURL)
      .then((response) => {
        const fakeActivs = response.data[0].info;
        setActivities(fakeActivs);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="app-comp">
      <div>
        <PlaceHeader />
        <PlaceCarousel places={places} />
      </div>
      <div>
        <ActivityHeader />
        <ActivityCarousel activities={activities} />
      </div>
    </div>
  );
}
