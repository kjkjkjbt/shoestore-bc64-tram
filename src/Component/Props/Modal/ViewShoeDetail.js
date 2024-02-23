import React from 'react';

const Modal = ({ content }) => {
  return (
    <div className="modal">
      {content && (
        <div className="modal-content">
          <span className="close">&times;</span>
          <h2>{content.name}</h2>
          <p>{content.description}</p>
          {/* Other details */}
        </div>
      )}
    </div>
  );
};

export default Modal;
