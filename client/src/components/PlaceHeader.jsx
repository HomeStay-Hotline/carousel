import React from 'react';
import './styles/PlaceHeader.css';

export default function PlaceHeader({ handleArrowClick, pageNumb }) {
  return (
    <div className="place-header-comp">
      <span className="place-header-text">More places to stay</span>
      <span className="arrow-and-count-container">
        <span className="place-page-count">
          {pageNumb}
          /3
        </span>
        {' '}
        <button
          className="right-place-button"
          type="button"
          onClick={() => { handleArrowClick('l'); }}
        >
          {'<'}
        </button>
        {' '}
        <button
          className="left-place-button"
          type="button"
          onClick={() => { handleArrowClick('r'); }}
        >
          {'>'}
        </button>
      </span>
    </div>
  );
}
