import './smooth-move.scss';
import { useRef, useEffect } from 'react';
import firstTimeLogo from '@/assets/images/logo.jpeg';

export default function SmoothMove() {
  const logoRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      console.log(logoRef);
      if (logoRef) {
        logoRef.current.classList.add('move');
      }
    }, 7000);
  }, []);
  return (
    <div className="content">
      <div className="content__container">
        <div className="content__wrapper">
          <div className="content__wrapper__section1">
            <p className="content__container__text">Fundamental Of</p>

            <ul className="content__container__list">
              <li className="first-section__container__list__item">Shaping your Kitchen</li>
              <li className="first-section__container__list__item">Bathroom</li>
              <li className="first-section__container__list__item">Closet</li>
              <li className="first-section__container__list__item">House</li>
              <li className="first-section__container__list__item">Office</li>
              <li className="first-section__container__list__item">Dream</li>
              <li className="first-section__container__list__item">Life</li>
            </ul>
          </div>
          <div className="content__wrapper__section2">
            <p className="content__container__text">Creativity in our DNA</p>
          </div>
        </div>
      </div>
      <div className="content__logo" ref={logoRef}>
        <img src={firstTimeLogo} />
      </div>
    </div>
  );
}
