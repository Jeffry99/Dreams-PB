import React, { Component, useState, useEffect } from 'react';
const ContactForm = () => {

	const publicUrl = process.env.PUBLIC_URL+'/'
	const mailUrl = "http://localhost:3000/mail";

	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		date: "",
		place: "",
		message: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(mailUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
		.then(response => response.json())
		.then(data => {
			console.log('Response:', data);
		})
		.catch(error => {
			console.error('Error:', error);
		})
	};

	return (
		<section className="contact-form-area contact-container">
			<div className="container">
			<div className="row">
				<div className="col-lg-12">
				<div className="comment-form">
					<div className="section-title text-center">
					<h6>Contacto</h6>
					<h3>¡Contáctate con nosotros!</h3>
					</div>
					<form id="form" className="contact-form-wrap" onSubmit={handleSubmit}>
						<div className="row">
							<div className="col-lg-6 col-md-6 col-12">
								<div className="single-input-wrap input-group">
									<input name="name" type="text" className="form-control" placeholder="Nombre Completo" onChange={handleInputChange} value={formData.name} required/>
									<div className="input-group-prepend">
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-12">
								<div className="single-input-wrap input-group">
									<input type="number" name="phone" className="form-control" placeholder="Teléfono" onChange={handleInputChange} value={formData.phone} required/>
									<div className="input-group-prepend"></div>
								</div>
							</div> 

							<div className="col-lg-6 col-md-6 col-12">
								<div className="single-input-wrap input-group">
									<input type="email" name="email" className="form-control" placeholder="Email" onChange={handleInputChange} value={formData.email} required/>
									<div className="input-group-prepend"></div>
								</div>
							</div> 

							<div className="col-lg-6 col-md-6 col-12">
								<div className="single-input-wrap input-group">
									<input type="date" name="date" className="form-control" placeholder="Fecha" onChange={handleInputChange} value={formData.date} required/>
									<div className="input-group-prepend"></div>
								</div>
							</div> 

							<div className="col-lg-6 col-md-6 col-12">
								<div className="single-input-wrap input-group">
									<input type="text" name="place" className="form-control" placeholder="Provincia, Cantón, Distrito" onChange={handleInputChange} value={formData.place} required/>
									<div className="input-group-prepend"></div>
								</div>
							</div> 

							<div className="col-lg-6 col-md-6 col-12 date-label">
								Fecha del Evento 🡩
							</div> 

							<div className="col-12">
							<div className="single-input-wrap input-group">
								<textarea className="form-control" name="message" rows={4} placeholder="Mensaje" onChange={handleInputChange} value={formData.message} />
								<div className="input-group-prepend"></div>
							</div>
							<div className="submit-area text-center">
								<button type="submit" className="main-btn">Enviar</button>
							</div>
							</div>
						</div>
					</form>
				</div>
				</div>
			</div>
			</div>
		</section>
	);
}

export default ContactForm