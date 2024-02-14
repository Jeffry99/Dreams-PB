import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import FaqPage from './section-components/faq';
import Footer from './global-components/footer';

const Faq = () => {
    return <div className='booth-background'>
        <Navbar />
        <PageHeader headertitle="Preguntas Frecuentes" subheader="Preguntas Frecuentes"  />
        <FaqPage />
        <Footer />
    </div>
}

export default Faq

