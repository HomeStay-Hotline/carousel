import React, { useState, useEffect, useRef } from 'react';
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
  const childRefPlace = useRef({});
  const childRefActiv = useRef({});

  useEffect(() => {
    // const id = Math.floor(Math.random() * 100);
    const id = 2;
    const placesURL = `/api/home/${id}/images/places`;
    axios.get(placesURL)
      .then((response) => {
        const fakePlaces = response.data[0].info;
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

    // setElement(childRef.current); // NEWW
    // console.log(childRef.current);
    // const test = childRef.current;
    // test.scrollBy(750, 0);

    // old === childRef.current
  }, []);

  return (
    <div className="app-comp">
      {console.log('rendered')}
      <div>
        <PlaceHeader passedRef={childRefPlace.current} />
        <PlaceCarousel places={places} connectedRef={childRefPlace} />
      </div>
      <div>
        <ActivityHeader passedRef={childRefActiv.current} />
        <ActivityCarousel activities={activities} connectedRef={childRefActiv} />
      </div>
    </div>
  );
}
