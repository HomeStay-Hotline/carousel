import React from 'react';

export default function Modal({ show }) {
  return (
    <div>
      {show ? (
        <div className="modal">
          my modal
          <button
            className="modal-button"
            type="button"
            onClick={() => {
              // setShow(!show);
              console.log('hi');
            }}
          >
            X
          </button>
        </div>
      ) : ''}
    </div>
  );
}
