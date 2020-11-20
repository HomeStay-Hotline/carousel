import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function PlaceHeader({ passedRef }) {
  const [pageNumb, setPageNumb] = useState(1);
  const handleArrowClickPlaces = (direction) => {
    // const carouselDiv = document.querySelector('.place-carousel-container');
    if (direction === 'r') {
      if (pageNumb !== 3) {
        setPageNumb(pageNumb + 1);
        passedRef.scrollBy(1150, 0);
      } else {
        setPageNumb(1);
        passedRef.scrollBy(-3450, 0);
      }
    } else if (pageNumb !== 1) {
      setPageNumb(pageNumb - 1);
      passedRef.scrollBy(-1150, 0);
    } else {
      setPageNumb(3);
      passedRef.scrollBy(3450, 0);
    }
  };

  return (
    <div className="header-comp">
      <span className="header-text">More places to stay</span>
      <span className="arrow-and-count-container">
        <span className="page-count">
          {pageNumb}
          {' '}
          / 3
        </span>
        &nbsp;&nbsp;&nbsp;
        <button
          className="left-button place"
          type="button"
          onClick={() => { handleArrowClickPlaces('l'); }} // here
        >
          <div className="left-chevron" />
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          className="right-button place"
          type="button"
          onClick={() => { handleArrowClickPlaces('r'); }} // here
        >
          <div className="right-chevron" />
        </button>
      </span>
    </div>
  );
}

PlaceHeader.propTypes = {
  passedRef: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};
