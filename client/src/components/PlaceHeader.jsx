import React from 'react';

export default function PlaceHeader({ handleArrowClick, pageNumb }) {
  return (
    <div className="place-header-comp">
      <span className="place-header-text">More places to stay</span>
      <span className="place-page-count">
        {pageNumb}
        /3
      </span>
      <button
        className="right-button"
        type="button"
        onClick={() => { handleArrowClick('l'); }}
      >
        {'<'}
      </button>
      <button
        className="left-button"
        type="button"
        onClick={() => { handleArrowClick('r'); }}
      >
        {'>'}
      </button>
    </div>
  );
}
