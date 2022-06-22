import mediumZoom from 'medium-zoom';

const defaultOptions = {
  margin: 0,
  scrollOffset: 25,
  background: 'var(--color-background)',
};

const applyZoomEffect = ({ excludedSelector, includedSelector, ...options }) => {
  const images = [...document.querySelectorAll('.gatsby-resp-image-image')].filter(
    image => !image.classList.contains('medium-zoom-image')
  );

  if (images.length > 0) {
    mediumZoom(images, options);
  }
};

const zoomImage = pluginOptions => {
  applyZoomEffect({ ...defaultOptions, ...pluginOptions });
};

export default zoomImage;
