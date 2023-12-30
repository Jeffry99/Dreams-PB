import React, { Component } from 'react';
import Navbar from '../global-components/navbar-v2';
import PageHeader from '../global-components/page-header';
import Footer from '../global-components/footer';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutSection extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div>   
		<Navbar />
		<PageHeader headertitle="Nosotros" />

		<section className="about-area text-center pd-top-100 pd-bottom-70">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-4 col-sm-6">
						<div className="single-about-wrap">
							<div className="thumb-icon">
								<i className="fa fa-heart fa-2x"></i>
							</div>
							<h5>Misión</h5>
							<p>Nuestra misión es brindar servicios de photobooth excepcionales que añadan diversión y emoción a cualquier ocasión. Nos comprometemos a ofrecer una experiencia sin igual, con equipos de alta calidad y personal amable y profesional. Estamos dedicados a ayudar a nuestros clientes a crear recuerdos inolvidables a través de fotografías divertidas y auténticas.</p>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6">
						<div className="single-about-wrap">
							<div className="thumb-icon">
								<i className="fa fa-eye fa-2x"></i>
							</div>
							<h5>Visión</h5>
							<p>Ser la principal elección de nuestros clientes para experiencias fotográficas únicas y memorables. Aspiramos a convertir cada evento en un momento especial, capturando sonrisas y recuerdos que perduran toda la vida.</p>
						</div>
					</div>
				</div>
			</div>      
		</section>
		<Footer />
	</div>
	


        }
}

export default AboutSection