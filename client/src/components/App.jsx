import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlaceHeader from './PlaceHeader';
import PlaceCarousel from './PlaceCarousel';
import ActivityHeader from './ActivityHeader';
import ActivityCarousel from './ActivityCarousel';
import './styles/App.css';

export default function App() {
  const [places, setPlaces] = useState([]);
  const [activities, setActivities] = useState([]);
  const [pageNumb, setPageNumb] = useState(1);

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

  const handleArrowClick = (direction) => {
    const carouselDiv = document.querySelector('.place-carousel-container');
    if (direction === 'r') {
      if (pageNumb !== 3) {
        setPageNumb(pageNumb + 1);
        carouselDiv.scrollBy(1000, 0);
      } else {
        setPageNumb(1);
        carouselDiv.scrollBy(-3000, 0);
      }
    } else if (direction === 'l') {
      if (pageNumb !== 1) {
        setPageNumb(pageNumb - 1);
        carouselDiv.scrollBy(-1000, 0);
      } else {
        setPageNumb(3);
        carouselDiv.scrollBy(3000, 0);
      }
    }
  };

  return (
    <div className="app-comp">
      <div>
        <PlaceHeader handleArrowClick={handleArrowClick} pageNumb={pageNumb} />
        <PlaceCarousel places={places} />
      </div>
      <div>
        <ActivityHeader />
        <ActivityCarousel activities={activities} />
      </div>
    </div>
  );
}
