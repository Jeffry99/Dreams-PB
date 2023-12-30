import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import ServicesModal from '../services';

class BannerV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

		return  <div>
					<div className="banner-area banner-area-2">
						<div className="container">
						<div className="banner-area-inner">
							<div className="row justify-content-center">
							<div className="col-lg-8 align-self-center">
								<div className="banner-inner">
									<h2>The Biggest Marketplace for <span>Digital Product</span></h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse</p>                   
								</div>
							</div>
							<div className="col-lg-4 align-self-center">
								<div className="thumb">
								<img src={publicUrl+"assets/img/banner/3.png"} alt="img" />
								</div>
							</div>
							</div>
						</div>
						</div>
					</div>
					<ServicesModal/>
				</div>
        }
}

export default BannerV2