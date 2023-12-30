import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import GalleryComponent from './gallery-component';
import Footer from './global-components/footer';

const BlogPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Galería" />
        <GalleryComponent />
        <Footer />
    </div>
}

export default BlogPage

