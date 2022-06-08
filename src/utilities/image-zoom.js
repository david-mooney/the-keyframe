import mediumZoom from 'medium-zoom';

// @see https://github.com/francoischalifour/medium-zoom#options
const defaultOptions = {
  margin: 24,
  background: 'var(--color-background)',
  scrollOffset: 40,
  container: null,
  template: null,
  zIndex: 3,
  excludedSelector: null,
};

const imageClass = '.gatsby-resp-image-image';
const ZOOM_STYLE_ID = 'medium-zoom-styles';
const FIRST_CONTENTFUL_PAINT = 'first-contentful-paint';
const TRANSITION_EFFECT = 'opacity 0.5s, transform .3s cubic-bezier(.2,0,.2,1)';

function onFirstPaint(callback) {
  if (!window.performance || !window.PerformanceObserver) {
    return;
  }

  const po = new PerformanceObserver(list =>
    list
      .getEntries()
      .filter(({ entryType }) => entryType === 'paint')
      .map(({ name }) => name === FIRST_CONTENTFUL_PAINT)
      .forEach(callback)
  );

  try {
    po.observe({ entryTypes: ['measure', 'paint'] });
  } catch (e) {
    console.error(e);
    po.disconnect();
  }
}

function injectStyles(options) {
  const styleTag = document.querySelector(`#${ZOOM_STYLE_ID}`);

  if (styleTag) {
    return;
  }

  const { zIndex } = options;
  const node = document.createElement('style');
  const styles = `
    .medium-zoom--opened > .medium-zoom-overlay,
    .medium-zoom--opened > .medium-zoom-image,
	  img.medium-zoom-image--opened {
      z-index: ${zIndex}
    }
  `;
  node.id = ZOOM_STYLE_ID;
  node.innerHTML = styles;
  document.head.appendChild(node);
}

function applyZoomEffect({ excludedSelector, includedSelector, ...options }) {
  const imagesSelector = excludedSelector ? `${imageClass}:not(${excludedSelector})` : imageClass;

  let imageElements = Array.from(document.querySelectorAll(imagesSelector));
  if (includedSelector) {
    const includedEls = Array.from(document.querySelectorAll(includedSelector));
    imageElements = imageElements.concat(includedEls);
  }
  const images = imageElements
    .filter(el => !el.classList.contains('medium-zoom-image'))
    .map(el => {
      function onImageLoad() {
        const originalTransition = el.style.transition;
        el.style.transition = `${originalTransition}, ${TRANSITION_EFFECT}`;
        el.removeEventListener('load', onImageLoad);
      }
      el.addEventListener('load', onImageLoad);
      el.setAttribute('tabIndex', 0);
      el.addEventListener('keydown', e => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          el.click();
        }
      });
      return el;
    });

  if (images.length > 0) {
    mediumZoom(images, options);
  }
}

const onRouteUpdate = (_, pluginOptions) => {
  const options = { ...defaultOptions, ...pluginOptions };

  injectStyles(options);
  onFirstPaint(() => applyZoomEffect(options));
  applyZoomEffect(options);
};

export default onRouteUpdate;
