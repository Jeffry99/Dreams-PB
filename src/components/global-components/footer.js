import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

	componentDidMount() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logo"

		return (
			<footer className="footer-area">
				<div className="container">
					<div className="row">
						<div className="col-12 footer">
							<a href="https://www.instagram.com/dreamsphotoboothcr/" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-instagram fa-2x icon-hiperlink"></i>
							</a>
							<a href="https://www.facebook.com/profile.php?id=61552744551716" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-facebook fa-2x icon-hiperlink"></i>
							</a>
							<a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-location-arrow fa-2x icon-hiperlink"></i>
							</a>
						</div>
					</div>
				</div>
				{/*Footer bottom*/}
				<div className="container">
					<div className="copyright-area">
						<div className="row">
							<div className="col-lg-12 align-self-center">
								<p>©2024 CopyRight Dreams Photobooth. All rights reserved. </p>
							</div>
						</div>
					</div>
				</div>
				
			</footer>

			


		)
	}
}


export default Footer_v1