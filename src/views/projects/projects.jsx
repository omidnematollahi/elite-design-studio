import './projects.scss';
import Footer from '@/components/footer/footer';
import Masonry from 'react-masonry-css';
import { useRef, createRef } from 'react';
import useIntersection from '@/custom-hooks/useIntersection';
import { useNavigate } from 'react-router-dom';

import { PROJECT_LIST } from '@/constants/projects';

function Projects() {
  const navigate = useNavigate();
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 2,
    500: 1,
  };
  const data = PROJECT_LIST;
  const footerRef = useRef(null);
  const footerIsInViewport = useIntersection(footerRef);
  const elementsRef = useRef(data.map(() => createRef()));
  const elementsAreInViewport = [];
  elementsRef.current.forEach((elementRef, index) => {
    elementsAreInViewport[index] = useIntersection(elementRef, '-210px');
  });

  const goToDetails = (id) => {
    navigate(`/projects/${id}`);
  };

  return (
    <div className="projects">
      <div className="projects__description animate__animated animate__backInUp">
        <h1>Projects</h1>
        <p>
          ELITE Design works closely with each of our clients, taking great time and care to ensure we achieve
          their aesthetic and lifestyle aspirations for the project. Please see below a few of our selected
          projects that illustrate our innovative and wide ranging approach to design.
        </p>
      </div>
      <section className="projects__filter">
        <span>Filters</span>
      </section>
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
                onClick={() => goToDetails(item.id)}
              >
                <img src={item.images[0]} />
                <span className="projects__title">{item.name}</span>
                <span className="projects__category">{item.category}</span>
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
