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

    return <div> 
            <Navbar />
            <PageHeader headertitle="Convencional" />
            <section className="contact-page-area pd-top-100 pd-bottom-70">
                <div className="booth-container">
                    <div className='booth-text booth-type'>
                        <h4>Convencional</h4>
                        <p>Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto</p>
                        <h4>Convencional</h4>
                        <p>Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto
                        Aqui va texto</p>
                    </div>
                    <div className='booth-image booth-type'>
                        <img src="https://i.imgur.com/jtYo08o.jpg" alt="imagen"/>
                    </div>
                </div>          
                <ContactModal/>
            </section>
            <Footer />
            </div>

        }
}

export default Convencional