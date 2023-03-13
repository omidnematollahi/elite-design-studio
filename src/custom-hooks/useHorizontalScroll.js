import { useRef, useEffect } from 'react';

export function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY == 0) return;
        // e.preventDefault();
        let scrollDirection = e.deltaY > 0 ? 1 : -1;
        el.scrollBy({
          // left: e.deltaY < 0 ? -300 : 300,
          left: e.deltaY < 0 ? -300 : 300,
          behavior: 'smooth',
        });
        let scrollLeft = Math.round(el.scrollLeft);
        let maxScrollLeft = Math.round(el.scrollWidth - el.clientWidth);
        if (
          (scrollDirection === -1 && scrollLeft > 0) ||
          (scrollDirection === 1 && scrollLeft < maxScrollLeft)
        )
          e.preventDefault();
        return true;
      };
      el.addEventListener('wheel', onWheel, false);
      let mouseDown = false;
      let startX, scrollLeft;

      let startDragging = function (e) {
        mouseDown = true;
        startX = e.pageX - el.offsetLeft;
        scrollLeft = el.scrollLeft;
      };
      let stopDragging = function (event) {
        mouseDown = false;
      };

      el.addEventListener('mousemove', (e) => {
        e.preventDefault();
        if (!mouseDown) {
          return;
        }
        const x = e.pageX - el.offsetLeft;
        const scroll = x - startX;
        el.scrollLeft = scrollLeft - scroll;
      });
      el.addEventListener('mousedown', startDragging, false);
      el.addEventListener('mouseup', stopDragging, false);
      el.addEventListener('mouseleave', stopDragging, false);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);
  return elRef;
}
