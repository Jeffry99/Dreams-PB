// Modal.js
import React from 'react';

const Modal = ({ isOpen, closeModal, children }) => {
  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <span className="close-button" id="close-button-contact" onClick={closeModal}>
            &times;
          </span>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;