import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Modal({
  handleHeartClick, resetModalView, addOrDelete, image,
}) {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show ? (
        <div className="modal-container">
          <div className="modall">
            <p className="modal-question">
              {`${addOrDelete} your favorites?`}
            </p>
            <div className="preview-button-container">
              <img className="modal-image" src={image} alt="small preview" />
              <div className="modal-button-container">
                <button
                  className="modal-button"
                  type="button"
                  onClick={() => {
                    setShow(!show);
                    handleHeartClick();
                    resetModalView();
                  }}
                >
                  Yes
                </button>
                <button
                  className="modal-button"
                  type="button"
                  onClick={() => {
                    setShow(!show);
                    resetModalView();
                  }}
                >
                  Maybe later
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : ''}
    </div>
  );
}

Modal.propTypes = {
  handleHeartClick: PropTypes.func.isRequired,
  resetModalView: PropTypes.func.isRequired,
  addOrDelete: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
