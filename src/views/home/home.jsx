import React, { useEffect, useRef, useState } from 'react';
import './home.scss';
import useIntersection from '../../custom-hooks/useIntersection';
import { Profile } from '../../view-components/home/profile/profile';
import { Projects } from '../../view-components/home/projects/projects';
import { Footer } from '../../components/footer/footer';
import { Comments } from '../../view-components/home/comments/comments';
import SlideShow from '@/view-components/contact/slideshow';
import firstImage from '@/assets/images/1.jpg';
import secondImage from '@/assets/images/2.png';
import thirdImage from '@/assets/images/3.jpg';
import forthImage from '@/assets/images/4.jpg';
import fifthImage from '@/assets/images/5.jpg';
import { isMobile } from 'react-device-detect';

function Home() {
  const [firstLoad, setFirstLoad] = useState(false);
  const [bannerAnimated, setBannerAnimated] = useState(false);
  const homeRef = useRef(null);
  const profileRef = useRef(null);
  const projectsRef = useRef(null);
  const commentsRef = useRef(null);
  const footerRef = useRef(null);
  const profileIsInViewport = useIntersection(profileRef, '300px');
  const projectsIsInViewport = useIntersection(projectsRef);
  const commentsIsInViewport = useIntersection(commentsRef);
  const footerIsInViewport = useIntersection(footerRef);

  useEffect(() => {
    console.log(profileRef);
    setTimeout(() => {
      setFirstLoad(true);
      setTimeout(() => {
        setBannerAnimated(true);
      }, 100);
    }, 2000);
  }, []);

  const slides = [
    {
      image: firstImage,
      content: 'Improving The Unimproved',
    },
    {
      image: secondImage,
      content: 'What we doing',
    },
    {
      image: thirdImage,
      content: 'About Elite Design Studio',
    },
    {
      image: forthImage,
      content: 'About Elite Design Studio',
    },
    {
      image: fifthImage,
      content: 'About Elite Design Studio',
    },
  ];

  return (
    <div className="home" ref={homeRef}>
      <div className="home__firstSection">
        {!firstLoad ? (
          <div className="home__animatedText">
            <h1>
              <span>Improving</span>
              <span>The</span>
              <span>Unimproved</span>
            </h1>
          </div>
        ) : (
          <>
            <div className="home__banner">
              {/* <div className="home__banner__image">
                <h1>Improving The Unimproved</h1>
              </div> */}
              <SlideShow slides={slides} delay={7000} />
              <div className={`home__banner__drop ${bannerAnimated ? 'covered' : ''}`}></div>
            </div>
          </>
        )}
      </div>
      <div className="home__mock"></div>
      <div className="home__secondSection" ref={profileRef}>
        <Profile toggle={profileIsInViewport}></Profile>
      </div>
      <div className="home_forthSection" ref={commentsRef}>
        <Comments toggle={commentsIsInViewport}></Comments>
      </div>
      <div className="home_thirdSection" ref={projectsRef}>
        <Projects toggle={projectsIsInViewport}></Projects>
      </div>
      <div className="home__footer" ref={footerRef}>
        <Footer toggle={footerIsInViewport}></Footer>
      </div>
    </div>
  );
}

export default Home;
