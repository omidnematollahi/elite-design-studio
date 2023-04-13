import './projects.scss';
import Footer from '@/components/footer/footer';
import Masonry from 'react-masonry-css';
import { useRef, createRef, useEffect, useState } from 'react';
import useIntersection from '@/custom-hooks/useIntersection';
import useOnLoadImages from '@/custom-hooks/useOnLoadImages';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { PROJECT_LIST } from '@/constants/projects';
import { FILTERS } from '@/constants/project-filters';
import Dropdown from 'react-multilevel-dropdown';

function Projects() {
  const wrapperRef = useRef(null);
  const imagesLoaded = useOnLoadImages(wrapperRef);
  const navigate = useNavigate();
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 2,
    500: 1,
  };
  const footerRef = useRef(null);
  const footerIsInViewport = useIntersection(footerRef);
  const [projectList, setProjectList] = useState(PROJECT_LIST);
  const elementsRef = useRef(projectList.map(() => createRef()));
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
      <section className="projects__filter animate__animated animate__backInUp">
        <span>Filters</span>
        {FILTERS.map((filter) => {
          return (
            <>
              {filter.children ? (
                <Dropdown
                  title={filter.category}
                  key={filter.category}
                  menuClassName="text-14 py-8 px-5 my-0 mx-16 border-b-1 border-solid border-blue hover:border-black"
                >
                  {filter.children
                    ? filter.children.map((item) => (
                        <Dropdown.Item position="right" key={item.category}>
                          {item.category}
                        </Dropdown.Item>
                      ))
                    : ''}
                </Dropdown>
              ) : (
                <button className="filter-btn">{filter.category}</button>
              )}
            </>
          );
        })}
      </section>
      <div className="projects__items" ref={wrapperRef}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {projectList.map((item, index) => {
            return (
              <div
                className={`projects__item ${elementsAreInViewport[index] ? 'visible' : ''}`}
                ref={elementsRef.current[index]}
                key={index}
                onClick={() => goToDetails(item.id)}
              >
                {imagesLoaded ? <img src={item.images[0]} /> : <Skeleton count={5} />}
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
