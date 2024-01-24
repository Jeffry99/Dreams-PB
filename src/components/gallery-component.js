import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

var images = [];
const links = [
    'https://i.imgur.com/NUvfNpB.jpg',
    'https://i.imgur.com/KDp8ugl.jpg',
    'https://i.imgur.com/k6woCZt.jpg',
    'https://i.imgur.com/ZbL64jm.jpg',
    'https://i.imgur.com/AD6cS4I.jpg',
    'https://i.imgur.com/sFdRjLS.jpg',
    'https://i.imgur.com/oG9XgDK.jpg',
    'https://i.imgur.com/690ABJ9.jpg',
    'https://i.imgur.com/zBDksTg.jpg',
    'https://i.imgur.com/zOKwoib.jpg',
    'https://i.imgur.com/yglBEIW.jpg',
    'https://i.imgur.com/ZP8ZGWM.jpg',
    'https://i.imgur.com/Qu04TUF.jpg',
    'https://i.imgur.com/0nwM3Yb.jpg',
    'https://i.imgur.com/TtgX5Ro.jpg',
    'https://i.imgur.com/6fjltMg.jpg',
    'https://i.imgur.com/WGyUy8l.jpg',
    'https://i.imgur.com/cV797lI.jpg',
    'https://i.imgur.com/3nAy4dO.jpg',
    'https://i.imgur.com/vi6VUQg.jpg',
    'https://i.imgur.com/Gupxedf.jpg',
    'https://i.imgur.com/4pXqNww.jpg',
    'https://i.imgur.com/nQvUB01.jpg',
    'https://i.imgur.com/jtYo08o.jpg'
];  

function transformImages(links) {
    links.forEach( x => {
        let image = {
            original: x,
            thumbnail: x
        }
        images.push(image);
    })
}

transformImages(links);

const Gallery_Component = () => {
    return <div className="gallery-container">
        <ImageGallery items={images} />
    </div> 
    
}

export default Gallery_Component