import React, { useState } from 'react';
import Modal from './global-components/modal';
import ContactModal from './global-components/contact-modal';

let publicUrl = process.env.PUBLIC_URL+'/'
let selectedServices = [];

const ServicesModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleClickService = (event) => {
        const service = event.target;

        if(!selectedServices.includes(service)) {
            selectedServices.push(service);
            service.style.backgroundColor = "grey";
            service.style.backgroundBlendMode = "multiply";
            service.innerHTML = '';
            service.appendChild(createCheckImg());
        }
        else {
            selectedServices = selectedServices.filter(item => item !== service);
            service.innerHTML = '';
            service.style.backgroundBlendMode = "normal";

            switch (service.id) {

                case "service-convencional":
                    service.innerHTML = "<p class='unselectable-text'>Convencional</p>";
                break;
                case "service-pantalla-verde":
                    service.innerHTML= "<p class='unselectable-text'>Pantalla Verde</p>";
                break;
                case "service-neon":
                    service.innerHTML = "<p class='unselectable-text'>Neón</p>";
                break;
                case "service-video":
                    service.innerHTML = "<p class='unselectable-text'>Vídeo</p>";
                break;
                case "service-giro":
                    service.innerHTML = "<p class='unselectable-text'>Giro 360</p>";
                break;
                default:
                    console.log('default');
            }
        }
    }

    const createCheckImg = () => {
        var imgElement = document.createElement('img');
        imgElement.src = publicUrl + 'assets/img/check.png';
        imgElement.className = "check-img";

        return imgElement;
    }

    return (
        <div>
            <div className='btn-container'>
                <button className="main-btn" onClick={openModal}>¡Cotiza Aquí!</button>
            </div>

            <Modal isOpen={isModalOpen} closeModal={closeModal}>
                <section className="services-container"> 
                    <div className="pics">
                        <div className="row">
                            <div className='service col-lg-4' id='service-convencional' onClick={handleClickService}>
                                <p className="unselectable-text">Convencional</p>
                            </div>
                            <div className='service col-lg-4' id='service-pantalla-verde' onClick={handleClickService}>
                                <p className="unselectable-text">Pantalla Verde</p>
                            </div>
                            <div className='service col-lg-4' id='service-neon' onClick={handleClickService}>
                                <p className="unselectable-text">Neón</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className='service col-lg-6' id='service-video' onClick={handleClickService}>
                                <p className="unselectable-text">Vídeo</p>
                            </div>
                            <div className='service col-lg-6' id='service-giro' onClick={handleClickService}>
                                <p className="unselectable-text">Giro 360</p>
                            </div>
                        </div>
                    </div>
                    <ContactModal/>
                </section>
            </Modal>
        </div>
    );
};


export default ServicesModal;