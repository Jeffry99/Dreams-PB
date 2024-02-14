import React, { useState } from 'react';
import Modal from './modal';
import ContactForm from '../section-components/contact-form';

const ContactModal = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className='btn-container'>
        <button className="main-btn" onClick={openModal}>Cotizar</button>
      </div>

      <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <ContactForm/>
      </Modal>
    </div>
  );
};

export default ContactModal;