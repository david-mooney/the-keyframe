import React from 'react';

const ScrollToTop = () => {
  const handleClick = () => {
    document.body.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <button type="button" onClick={handleClick} aria-label="Scroll to top">
      Back to Top
    </button>
  );
};

export default ScrollToTop;
