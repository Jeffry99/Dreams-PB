import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import ServicesModal from '../services';

class BannerV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

		return  <div class="banner-img">
					<div className="banner-area banner-area-2">
						<div className="container">
						<div className="banner-area-inner">
							<div className="row justify-content-center">
							<div className="col-lg-8 align-self-center">
								<div className="banner-inner">
									<h2>¡Bienvenido a <span>Dreams Photobooth!</span></h2>
									<p>Tu destino para experiencias de photobooth de ensueño en Costa Rica! Capturamos momentos de felicidad y diversión en bodas, fiestas, eventos corporativos y más. ¡Deja que tus sueños se conviertan en recuerdos inolvidables!</p>                   
								</div>
							</div>
							<div className="col-lg-4 align-self-center">
								<div className="thumb">
								{/* <img src={publicUrl+"assets/img/360.gif"} alt="img" /> */}
								</div>
							</div>
							</div>
						</div>
						</div>
					</div>
				</div>
        }
}

export default BannerV2