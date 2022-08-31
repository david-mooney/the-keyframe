import imageZoom from 'fast-image-zoom';

const zoom = () => {
  imageZoom({
    selector: '.gatsby-resp-image-image',
    // exceed: true,
  });
};

export default zoom;
