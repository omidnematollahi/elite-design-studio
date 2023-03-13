import { useState, useEffect, useRef } from 'react';
import './slideshow.scss';

export default function Slideshow({ slides, delay }) {
  const [index, setIndex] = useState(null);
  const timeoutRef = useRef(null);
  const sliderRef = useRef(null);
  const backdropRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setIndex(0);
    }, 50);
    let lastScrollTop = 0;
    window.addEventListener(
      'scroll',
      function () {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        let height = sliderRef.current.offsetHeight;
        let doc = document.documentElement;
        let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (st > lastScrollTop) {
          // downscroll code
          const finalOpacity = 1 - (height - top) / height;
          backdropRef.current.style.opacity = finalOpacity;
        } else if (st < lastScrollTop) {
          // upscroll code
          const finalOpacity = 0;
          backdropRef.current.style.opacity = finalOpacity;
        }
        lastScrollTop = st <= 0 ? 0 : st;
      },
      false,
    );
  }, []);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1)),
      delay,
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div className="slideshow">
      <div className="slideshow__slider" ref={sliderRef}>
        <div className="slideshow__backdrop" ref={backdropRef}></div>
        {slides.map((slide, idx) => (
          <div
            className={`slideshow__slide ${index === idx ? ' active' : ''}`}
            key={idx}
            style={{
              backgroundImage: `linear-gradient(0deg,rgba(0,0,0,.5),rgba(0,0,0,.5)), url(${slide.image})`,
              display: `${index === idx ? 'flex' : 'none'}`,
            }}
          >
            <h1>{slide.content}</h1>
          </div>
        ))}
      </div>
      <div className="slideshow__dots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`slideshow__dot ${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
