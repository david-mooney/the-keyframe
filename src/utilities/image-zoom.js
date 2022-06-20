import mediumZoom from 'medium-zoom';

const defaultOptions = {
  margin: 24,
  scrollOffset: 40,
  container: null,
  template: null,
  excludedSelector: null,
  background: 'var(--color-background)',
  zIndex: 'var(--z-modal)',
};

const applyZoomEffect = ({ excludedSelector, includedSelector, ...options }) => {
  const images = [...document.querySelectorAll('.gatsby-resp-image-image')].filter(
    image => !image.classList.contains('medium-zoom-image')
  );

  if (images.length > 0) {
    mediumZoom(images, options);
  }
};

const onRouteUpdate = (_, pluginOptions) => {
  const options = { ...defaultOptions, ...pluginOptions };
  applyZoomEffect(options);
};

export default onRouteUpdate;
