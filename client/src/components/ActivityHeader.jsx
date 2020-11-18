import React from 'react';
import './styles/Headers.css';

export default function ActivityHeader({ handleArrowClick, pageNumb}) {
  return (
    <div className="header-comp">
      <span className="header-text">Things to do nearby</span>
      <span className="arrow-and-count-container">
        <span className="page-count">
          {pageNumb}
          {' '}
          / 3
        </span>
        &nbsp;&nbsp;&nbsp;
        <button
          className="right-button"
          type="button"
          onClick={() => { handleArrowClick('l'); }}
        >
          <div className="left-chevron" />
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          className="left-button"
          type="button"
          onClick={() => { handleArrowClick('r'); }}
        >
          <div className="right-chevron" />
        </button>
      </span>
    </div>
  );
}
