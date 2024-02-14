import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarV2 extends Component {

	render() {
		let publicUrl = process.env.PUBLIC_URL+'/'
		let imgattr = 'logo'
		let anchor = '#'
		return (
			<div>
				<div className="dkt-sitebar-menu">
				<div className="dkt-sitebar-menu">
					<span className="dkt-sitebar-close" ><i className="fa fa-times" /></span>
					<div className="dkt-details-inner">
						<div className="logo go-top">
							<Link to="/"><img src={publicUrl+"assets/img/logo-3.png"} alt="img" /></Link>
						</div>
					</div>
				</div>
				</div>
				<div id="navbar" className="navbar-area navbar-area-2 go-top navbar-background">
				<nav className="navbar navbar-expand-lg">
					<div className="container nav-container">
					<div className="responsive-mobile-menu">
						<button className="menu toggle-btn d-block d-lg-none" data-target="#dkt_main_menu" aria-expanded="false" aria-label="Toggle navigation">
						<span className="icon-left" />
						<span className="icon-right" />
						</button>
					</div>
					<div className="logo">
						<Link className="main-logo" to="/"><img src={publicUrl+"assets/img/logo-long.png"} alt="img" /></Link>
					</div>
					<div className="nav-right-part nav-right-part-mobile">
					</div>
					<div className="collapse navbar-collapse" id="dkt_main_menu">
						<ul className="navbar-nav menu-open">
							<li><Link to="/">Inicio</Link></li>
							<li><Link to="/convencional">Convencional</Link></li>
							<li><Link to="/giro360">Giro 360</Link></li>


							<li className="menu-item-has-children current-menu-item">
							<a href="#">Info</a>
							<ul className="sub-menu">
							<li><Link to="/about">Nosotros</Link></li>
							<li><Link to="/gallery">Galería</Link></li>
							<li><Link to="/faq">FAQ</Link></li>
							<li><Link to="/contact">Contacto</Link></li>
							</ul>
						</li>
						</ul>
					</div>
					<div className="nav-right-part nav-right-part-desktop">
						<ul>
							<li className="menu-bar dropdown-menu-btn"><i className="fa fa-bars" /></li>
						</ul>
					</div>
					</div>
				</nav>
				</div>
			</div>


		)
	}
}


export default NavbarV2