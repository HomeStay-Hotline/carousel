import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlaceHeader from './PlaceHeader';
import PlaceCarousel from './PlaceCarousel';
import ActivityHeader from './ActivityHeader';
import ActivityCarousel from './ActivityCarousel';
import './styles/App.css';

export default function App() {
  const [places, setPlaces] = useState([]);
  const [viewPlaces, setViewPlaces] = useState([]);
  const [activities, setActivities] = useState([]);
  const [viewActivities, setViewActivities] = useState([]);
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
        setViewPlaces(fakePlaces.slice(0, 4));
      })
      .catch((err) => {
        console.error(err);
      });

    const activitiesURL = `/api/home/${id}/images/activities`;
    axios.get(activitiesURL)
      .then((response) => {
        const fakeActivs = response.data[0].info;
        setActivities(fakeActivs);
        setViewActivities(fakeActivs.slice(0, 4));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleArrowClick = (direction) => {
    if (direction === 'r') {
      // update page count
      // update places that are shown
      if (pageNumb === 1) {
        console.log(places);
        setPageNumb(pageNumb + 1);
        setViewPlaces(places.slice(4, 8));
      } else if (pageNumb === 2) {
        setPageNumb(pageNumb + 1);
        setViewPlaces(places.slice(8));
      } else {
        setPageNumb(1);
        setViewPlaces(places.slice(0, 4));
      }
    } else if (direction === 'l') {
      if (pageNumb === 3) {
        setPageNumb(pageNumb - 1);
        setViewPlaces(places.slice(4, 8));
      } else if (pageNumb === 2) {
        setPageNumb(pageNumb - 1);
        setViewPlaces(places.slice(0, 4));
      } else {
        setPageNumb(3);
        setViewPlaces(places.slice(8));
      }
    }
  };

  return (
    <div className="app-comp">
      <div>
        <PlaceHeader handleArrowClick={handleArrowClick} pageNumb={pageNumb} />
        <PlaceCarousel places={viewPlaces} />
      </div>
      <div>
        <ActivityHeader />
        <ActivityCarousel activities={viewActivities} />
      </div>
    </div>
  );
}
