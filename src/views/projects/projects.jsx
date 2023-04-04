import './projects.scss';
import Footer from '@/components/footer/footer';
import Masonry from 'react-masonry-css';
import { useRef, createRef } from 'react';
import useIntersection from '@/custom-hooks/useIntersection';

import firstImage from '@/assets/images/projects/1-min.jpg';
import secondImage from '@/assets/images/projects/2-min.jpg';
import thirdImage from '@/assets/images/projects/3-min.jpg';
import forthImage from '@/assets/images/projects/4-min.jpg';
import fifthImage from '@/assets/images/projects/5-min.jpg';
import sixthImage from '@/assets/images/projects/6-min.JPG';
import seventhImage from '@/assets/images/projects/7-min.JPG';
import eigthImage from '@/assets/images/projects/8-min.JPG';
import ninthImage from '@/assets/images/projects/9-min.JPG';
import tenthImage from '@/assets/images/projects/10-min.JPG';
import eleventhImage from '@/assets/images/projects/11-min.JPG';
import twelfthImage from '@/assets/images/projects/12-min.JPG';
import theThirteenthImage from '@/assets/images/projects/13-min.JPG';
import theForteenthImage from '@/assets/images/projects/14-min.JPG';
import theFifteenthImage from '@/assets/images/projects/15-min.JPG';
import theSixteenthImage from '@/assets/images/projects/16-min.JPG';

function Projects() {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 2,
    500: 1,
  };
  const data = [
    {
      image: firstImage,
      title: 'image1',
    },
    {
      image: secondImage,
      title: 'image2',
    },
    {
      image: thirdImage,
      title: 'image3',
    },
    {
      image: forthImage,
      title: 'image4',
    },
    {
      image: fifthImage,
      title: 'image5',
    },
    {
      image: sixthImage,
      title: 'image6',
    },
    {
      image: seventhImage,
      title: 'image7',
    },
    {
      image: eigthImage,
      title: 'image8',
    },
    {
      image: ninthImage,
      title: 'image9',
    },
    {
      image: tenthImage,
      title: 'image10',
    },
    {
      image: eleventhImage,
      title: 'image11',
    },
    {
      image: twelfthImage,
      title: 'image12',
    },
    {
      image: theThirteenthImage,
      title: 'image13',
    },
    {
      image: theForteenthImage,
      title: 'image14',
    },
    {
      image: theFifteenthImage,
      title: 'image15',
    },
    {
      image: theSixteenthImage,
      title: 'image15',
    },
  ];
  const footerRef = useRef(null);
  const footerIsInViewport = useIntersection(footerRef);
  const elementsRef = useRef(data.map(() => createRef()));
  const elementsAreInViewport = [];
  elementsRef.current.forEach((elementRef, index) => {
    elementsAreInViewport[index] = useIntersection(elementRef, '-210px');
  });

  return (
    <div className="projects">
      <div className="projects__description">
        <h1>Projects</h1>
        <p>
          ELITE Design works closely with each of our clients, taking great time and care to ensure we achieve
          their aesthetic and lifestyle aspirations for the project. Please see below a few of our selected
          projects that illustrate our innovative and wide ranging approach to design.
        </p>
      </div>
      <div className="projects__items">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.map((item, index) => {
            return (
              <div
                className={`projects__item ${
                  elementsAreInViewport[index] ? 'visible animate__animated animate__slideInUp' : ''
                }`}
                ref={elementsRef.current[index]}
                key={index}
              >
                <img src={item.image} />
                <span>{item.title}</span>
                <div className="projects__hover-box">
                  <div className="projects__hover-box__text">
                    <span>open</span>
                  </div>
                  <div className="projects__hover-box__line"></div>
                  <div className="projects__hover-box__text">
                    <span>case</span>
                  </div>
                </div>
              </div>
            );
          })}
        </Masonry>
      </div>
      <div className="home__footer" ref={footerRef}>
        <Footer toggle={footerIsInViewport}></Footer>
      </div>
    </div>
  );
}

export default Projects;
