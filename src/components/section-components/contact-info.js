import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ContactInfo extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="contact-page-area pd-top-100 pd-bottom-70">
			  <div className="container">
			    <div className="row justify-content-center">
				  <div className="col-lg-4 col-md-6">
			        <div className="single-contact-wrap text-center">
						<a href="https://maps.app.goo.gl/wPzBoXK4Kc8cLV2y9" target="_blank" rel="noopener noreferrer">
							<div className="thumb-icon">
								<i class="fa fa-location-arrow fa-2x"></i>
							</div>
						</a>
			          <h4>Ubicación</h4>
					  <a href="https://maps.app.goo.gl/wPzBoXK4Kc8cLV2y9" target="_blank" rel="noopener noreferrer">
			          	<p className='social-user'>Heredia, Costa Rica</p>
					  </a>
					  <br/>
			        </div>
			      </div> 
				  <div className="col-lg-4 col-md-6">
			        <div className="single-contact-wrap text-center">
						<a href="https://wa.me/50686322281?text=¡Hola!%20Quisiera%20más%20información" target="_blank" rel="noopener noreferrer">
							<div className="thumb-icon">
								<i class="fa fa-whatsapp fa-2x"></i>
							</div>
						</a>
			          <h4>Whatsapp</h4>
					  <a href="https://wa.me/50686322281?text=¡Hola!%20Quisiera%20más%20información" target="_blank" rel="noopener noreferrer">
					  	<p className='social-user'>+506 8632 2281</p>
					  </a>
					  
					  <br/>
			        </div>
			      </div> 
				  <div className="col-lg-4 col-md-6">
			        <div className="single-contact-wrap text-center">
						<div className="thumb-icon">
							<i class="fa fa-envelope fa-2x"></i>
						</div>
			          <h4>Email</h4>
			          	<p className='social-user'>dreamsphotoboothr@gmail.com</p>
					  <br/>
			        </div>
			      </div> 
				  <div className="col-lg-4 col-md-6">
			        <div className="single-contact-wrap text-center">
						<a href="https://www.instagram.com/dreamsphotoboothcr/" target="_blank" rel="noopener noreferrer">
							<div className="thumb-icon">
								<i class="fa fa-instagram fa-2x"></i>
							</div>
						</a>
			          <h4>Instagram</h4>
					  <a href="https://www.instagram.com/dreamsphotoboothcr/" target="_blank" rel="noopener noreferrer">
			          	<p className='social-user'>@dreamsphotoboothcr</p>
					  </a>
					  <br/>
			        </div>
			      </div> 
				  <div className="col-lg-4 col-md-6">
			        <div className="single-contact-wrap text-center">
						<a href="https://www.facebook.com/profile.php?id=61552744551716" target="_blank" rel="noopener noreferrer">
							<div className="thumb-icon">
								<i class="fa fa-facebook fa-2x"></i>
							</div>
						</a>
			          <h4>Facebook</h4>
					  <a href="https://www.facebook.com/profile.php?id=61552744551716" target="_blank" rel="noopener noreferrer">
			          	<p className='social-user'>Dreamsphotobooth Cr</p>
					  </a>
					  <br/>
			        </div>
			      </div>  
			    </div>
			  </div>          
			</section>

        }
}

export default ContactInfo