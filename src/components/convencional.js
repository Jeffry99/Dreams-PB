import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer';
import ContactModal from './global-components/contact-modal';
class Convencional extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="booth-background"> 
            <Navbar />
            <PageHeader headertitle="Convencional" />
            <section className="contact-page-area pd-top-100 pd-bottom-70">
                <div className="booth-container row">
                    <div className='booth-text booth-type col-6-lg' >
                        <h4 className='color-black'>Photobooth Convencional</h4>
                        <p className='color-black'>Eleve su evento con nuestro Photobooth clásico, versátil y elegante. Desde configuraciones al aire libre hasta entornos íntimos, se adapta a cualquier ocasión. Personalizable para bodas o eventos corporativos, garantiza recuerdos únicos con tecnología fotográfica de última generación</p>
                        <h4 className='color-black'>Calidad insuperable:</h4>
                        <p className='color-black'>Nuestros fotomatones clásicos, con cámaras DSLR de primera y iluminación profesional, capturan momentos con claridad excepcional y colores vibrantes. Además de fotos impresas al instante, ofrecen experiencias interactivas con accesorios y fondos personalizables, garantizando recuerdos únicos y divertidos en cualquier evento, desde bodas hasta reuniones corporativas</p>
                        <h4 className='color-black'>El Servicio:</h4>
                        <p className='color-black'>Como empresa dirigida por veteranos, nos destacamos por nuestro servicio al cliente con reseñas altamente calificadas. Nuestro equipo, con un organizador de bodas certificado, personaliza cada experiencia de fotomatón para que se alinee con sus necesidades específicas. Al elegirnos, añades emoción y elegancia a tu evento, dejando una impresión duradera en ti y tus invitados</p>
                    </div>
                    <div className='booth-type booth-image col-6-lg'>
                        <img src="https://i.imgur.com/KDp8ugl.jpg" alt="Photobooth Convencional"/>
                    </div>
                </div>
                
                <div className="designs">
                    <h2>Diseños Personalizados</h2>
                    <br></br>
                    <img src={publicUrl+"assets/img/disenos.png"}/>
                    <br></br>
                    <br></br><br></br>
                    <h2>Gama de Cortinas</h2>
                    <div className='row courtins-container'>
                        <div className='column courtin-container'>
                            <img className="courtin" src={publicUrl+"assets/img/cortinas/01.png"}/>
                            <h5>Dorado</h5>
                        </div>
                        <div className='column courtin-container'>
                            <img className="courtin" src={publicUrl+"assets/img/cortinas/02.png"}/>
                            <h5>Neón</h5>
                        </div>
                        <div className='column courtin-container'>
                            <img className="courtin" src={publicUrl+"assets/img/cortinas/03.png"}/>
                            <h5>Plata</h5>
                        </div>
                        <div className='column courtin-container'>
                            <img className="courtin" src={publicUrl+"assets/img/cortinas/04.png"}/>
                            <h5>Pantalla Verde</h5>
                        </div>
                    </div>
                    <br></br>
                    <br></br><br></br>
                    <div class="row prices-container">
                        <div class="column list">
                        <ul>
                            <li>Montaje y desmontaje</li>
                            <li>Videos ilimitados</li>
                            <li>Diseño personalizado de impresiones</li>
                            <li>Impresiones de fotos instantáneas alta calidad y de forma ilimitada 2x6 o 4x6 (costo adicional +$20)</li>
                            <li>Diferentes cortinas de fondo</li>
                            <li>Amplia variedad de accesorios</li>
                            <li>Rótulos divertidos para toda ocasión o rótulos personalizados (costo adicional +)</li>
                            <li>Álbum de fotos personalizados (costo adicional +)</li>
                            <li>Greenscreen para crear fondos personalizados (opcional) </li>
                            <li>Entrega de la totalidad de fotografías en formato digital en USB</li>
                            <li>El costo del transporte fuera de la GAM depende de la distancia</li>
                        </ul>
                        </div>
                        <div class="column pricing">
                            <img src={publicUrl+"assets/img/prices1.png"}></img>
                        </div>
                    </div>
                </div>     
                <ContactModal/>
            </section>
            <Footer />
            </div>

        }
}

export default Convencional