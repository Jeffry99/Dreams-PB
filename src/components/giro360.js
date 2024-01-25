import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer';
import ContactModal from './global-components/contact-modal';
class Giro360 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div> 
            <Navbar />
            <PageHeader headertitle="Giro 360" />
            <section className="contact-page-area pd-top-100 pd-bottom-70">
                <div className="booth-container row">
                    <div className='booth-text booth-type col-6-lg'>
                        <h4>Giro 360</h4>
                        <p>Nuestro Photo Booth 360 ofrece una presentación espectacular con su configuración elegante y acogedora. Captando la atención de todos con la brillante y lujosa exhibición de luces que brinda a los asistentes al evento una experiencia única.</p>
                        <h4>Calidad:</h4>
                        <p>Utilizamos una variedad de iluminación profesional con calidad de estudio mientras capturamos su momento especial con calidad 4K con acceso prácticamente instantáneo a sus fotos en línea o directamente a sus invitados.</p>
                        <h4>El Servicio:</h4>
                        <p>Entendemos la importancia de brindar un excelente servicio al cliente y hacer de nuestros clientes nuestra prioridad. Nos esforzamos por brindar nuestro servicio 5 estrellas a todos y cada uno de los eventos a los que atendemos, con nuestro inigualable servicio al cliente, presentación y calidad del producto.</p>
                    </div>
                    <div className='booth-type booth-image col-6-lg'>
                        <img class="gif360" src={publicUrl+"assets/img/360.gif"} alt="imagen"/>
                    </div>
                </div>
                
                <div className="designs">
                    <h2>Diseños Personalizados</h2>
                    <br></br>
                    <img class="marco marco1" src={publicUrl+"assets/img/marco1.png"}></img>
                    <img class="marco marco2" src={publicUrl+"assets/img/marco2.png"}></img>
                    <br></br>
                    <br></br>
                    <div class="row prices-container">
                        <div class="column list">
                        <ul>
                            <li>Montaje y desmontaje</li>
                            <li>Videos ilimitados</li>
                            <li>Diseño personalizado de marco para el video</li>
                            <li>Se comparte el video de forma instantánea por Whatsapp</li>
                            <li>Iluminación LED</li>
                            <li>Amplia variedad de accesorios</li>
                            <li>Rótulos divertidos para toda ocasión o rótulos personalizados (costo adicional +)</li>
                            <li>Entrega de la totalidad de fotografías en formato digital en USB</li>
                            <li>El costo del transporte fuera de la GAM depende de la distancia</li>

                        </ul>
                        </div>
                        <div class="column pricing">
                            <img src={publicUrl+"assets/img/prices360.png"}></img>
                        </div>
                    </div>
                </div>     

                <ContactModal/>
            </section>
            <Footer />
            </div>

        }
}

export default Giro360