import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function ActivityHeader({ passedRef }) {
  const [pageNumbActivs, setPageNumbActivs] = useState(1);
  const handleArrowClickActivities = (direction) => {
    if (direction === 'r') {
      if (pageNumbActivs !== 3) {
        setPageNumbActivs(pageNumbActivs + 1);
        passedRef.scrollBy(1150, 0);
      } else {
        setPageNumbActivs(1);
        passedRef.scrollBy(-3450, 0);
      }
    } else if (pageNumbActivs !== 1) {
      setPageNumbActivs(pageNumbActivs - 1);
      passedRef.scrollBy(-1150, 0);
    } else {
      setPageNumbActivs(3);
      passedRef.scrollBy(3450, 0);
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
          className="left-button activity"
          type="button"
          aria-label="left button"
          onClick={() => { handleArrowClickActivities('l'); }}
        >
          <div className="left-chevron" />
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          className="right-button activity"
          type="button"
          aria-label="right button"
          onClick={() => { handleArrowClickActivities('r'); }}
        >
          <div className="right-chevron" />
        </button>
      </span>
    </div>
  );
}

ActivityHeader.propTypes = {
  passedRef: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};
