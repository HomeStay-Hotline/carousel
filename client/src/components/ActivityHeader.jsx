import React, { useState } from 'react';

export default function ActivityHeader({ handleArrowClick, pageNumb}) {
  const [pageNumbActivs, setPageNumbActivs] = useState(1);
  const handleArrowClickActivities = (direction) => {
    const carouselDiv = document.querySelector('.activity-carousel-container');
    if (direction === 'r') {
      if (pageNumbActivs !== 3) {
        setPageNumbActivs(pageNumbActivs + 1);
        carouselDiv.scrollBy(1150, 0);
      } else {
        setPageNumbActivs(1);
        carouselDiv.scrollBy(-3450, 0);
      }
    } else if (direction === 'l') {
      if (pageNumbActivs !== 1) {
        setPageNumbActivs(pageNumbActivs - 1);
        carouselDiv.scrollBy(-1150, 0);
      } else {
        setPageNumbActivs(3);
        carouselDiv.scrollBy(3450, 0);
      }
    }
  };
  return (
    <div className="header-comp">
      <span className="header-text">Things to do nearby</span>
      <span className="arrow-and-count-container">
        <span className="page-count">
          {pageNumbActivs}
          {' '}
          / 3
        </span>
        &nbsp;&nbsp;&nbsp;
        <button
          className="right-button"
          type="button"
          onClick={() => { handleArrowClickActivities('l'); }}
        >
          <div className="left-chevron" />
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          className="left-button"
          type="button"
          onClick={() => { handleArrowClickActivities('r'); }}
        >
          <div className="right-chevron" />
        </button>
      </span>
    </div>
  );
}
