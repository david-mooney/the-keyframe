import { useLayoutEffect } from 'react';

const focusableSelector = [
  'a[href]',
  'area[href]',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  'iframe',
  'object',
  '[tabindex]:not([tabindex="-1"])',
  '[contenteditable]',
].join(', ');

// TODO: clean this up + return focus to the element that was focused before

const useTabTrap = (contentRef) => {
  useLayoutEffect(() => {
    const listener = (event) => {
      if (event.key !== 'Tab') return;

      let forceFocus = false;
      let firstFocusableElement = null;

      if (!document.activeElement) {
        forceFocus = true;
      }

      if (!forceFocus && !contentRef.current.contains(document.activeElement)) {
        forceFocus = true;
      }

      if (!forceFocus) {
        let focusableInModal =
          contentRef.current.querySelectorAll(focusableSelector);

        if (event.shiftKey) {
          focusableInModal = Array.prototype.slice.call(focusableInModal);
          focusableInModal.reverse();
        }

        if (
          document.activeElement ===
          focusableInModal[focusableInModal.length - 1]
        ) {
          firstFocusableElement = focusableInModal[0];
          forceFocus = true;
        }
      }

      if (forceFocus) {
        event.preventDefault();
        if (!firstFocusableElement) {
          if (event.shiftKey) {
            firstFocusableElement =
              contentRef.current.querySelectorAll(focusableSelector);
            firstFocusableElement = Array.prototype.slice.call(
              firstFocusableElement
            );
            firstFocusableElement.reverse();
            firstFocusableElement = firstFocusableElement[0];
          } else {
            firstFocusableElement =
              contentRef.current.querySelector(focusableSelector);
          }
        }
        firstFocusableElement.focus();
      }
    };

    document.addEventListener('keydown', listener);

    return () => document.removeEventListener('keydown', listener);
  }, []);
};

export default useTabTrap;
