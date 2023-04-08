import './services.scss';

import SlideShow from '@/view-components/contact/slideshow';
import firstImage from '@/assets/images/services/service10.jpg';
import secondImage from '@/assets/images/services/service11.jpg';
import thirdImage from '@/assets/images/services/service12.jpg';
import interior from '@/assets/images/services/Interior.jpg';
import exterior from '@/assets/images/services/Exterior.jpg';
import landscape from '@/assets/images/services/Landscape.JPG';
import space from '@/assets/images/services/space-planning.jpeg';
import commercial from '@/assets/images/services/Commercial.jpg';
import material from '@/assets/images/services/service5.jpg';
import { useState, useRef } from 'react';
import Footer from '@/components/footer/footer';
import useIntersection from '../../custom-hooks/useIntersection';

function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsRef = useRef(null);
  const tabsIsInViewport = useIntersection(tabsRef);
  const panelRef = useRef(null);
  const panelIsInViewport = useIntersection(panelRef);
  const footerRef = useRef(null);
  const footerIsInViewport = useIntersection(footerRef);
  const descriptionRef = useRef(null);
  const descriptionIsInViewport = useIntersection(descriptionRef);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) => {
    return activeIndex === index ? className : '';
  };
  const slides = [
    {
      image: firstImage,
      content: 'Our Services',
    },
    {
      image: secondImage,
      content: 'What we doing',
    },
    {
      image: thirdImage,
      content: 'About Elite Design Studio',
    },
  ];

  const [tabs, setTabs] = useState([
    {
      title: 'Interior Residential Design',
      active: true,
    },
    {
      title: 'Exterior Residential Design',
      active: false,
    },
    {
      title: 'Landscape Design',
      active: false,
    },
    {
      title: 'Space Planning',
      active: false,
    },
    {
      title: 'Commercial Design',
      active: false,
    },
    {
      title: 'Material Specification',
      active: false,
    },
  ]);

  return (
    <div className="services">
      <SlideShow slides={slides} delay={7000} />
      <div className="services__mock"></div>
      <div ref={descriptionRef}>
        <section
          className={`services__description ${
            descriptionIsInViewport ? 'visible animate__animated animate__backInUp' : ''
          }`}
        >
          <p>
            We differentiate ourselves from our competitors in that we don’t just design; we help you figure
            out how to bring your personality into your building, too.
          </p>
          <p>
            Whatever your vision and budget, we’ll help you find the appropriate design package as a first
            step in creating an outdoor space which serves as an extension of your home.
          </p>
        </section>
      </div>
      <div ref={tabsRef}>
        <section
          className={`services__tabs ${
            tabsIsInViewport ? 'visible animate__animated animate__slideInUp' : ''
          }`}
        >
          <ul className="services__tab-list">
            {tabs.map((tab, index) => {
              return (
                <li className="services__tab-item" key={index}>
                  <a
                    className={`services__tab-link ${checkActive(index, 'active')}`}
                    onClick={() => handleClick(index)}
                  >
                    {tab.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
      <div ref={panelRef}></div>
      <section
        className={`services__panel ${
          panelIsInViewport ? 'visible animate__animated animate_slideInUp' : ''
        }`}
      >
        <div
          className={`services__tab-content interior ${checkActive(0, 'active')}`}
          style={{ backgroundImage: `url(${interior})` }}
        >
          <div className="services__explaination">
            <h1>Interior Residential Design</h1>
            <p>
              Residential projects are where our business began 12 years ago. People want to feel good in a
              space. We can make it happen by creating environments that are pleasing, aesthetic, and
              functional.
            </p>
            <p>
              We believe that all design disciplines need to work together. our interior design schemes are
              developed in close coordination with our in-house interior architecture, architectural design,
              lighting and landscaping design teams to ensure a harmonious aesthetic that results in
              exceptionally well executed, balanced and beautifully finished homes.
            </p>
            <p>
              We understand that when you deal with a person’s home, it’s different. Owners are invested in
              their dream both financially and emotionally. This journey matters. By constantly improving it,
              we’re able to minimize stress, allowing you to enjoy what should be one of the most exciting
              times in your life.
            </p>
          </div>
        </div>
        <div
          className={`services__tab-content exterior ${checkActive(1, 'active')}`}
          style={{ backgroundImage: `url(${exterior})` }}
        >
          <div className="services__explaination">
            <h1>Exterior Residential Design</h1>
            <p>
              Our responsibility to a project extends beyond the walls of the building. We always seize the
              opportunity to maximize the relationship between the structure and its external context.
            </p>
          </div>
        </div>
        <div
          className={`services__tab-content landscape ${checkActive(2, 'active')}`}
          style={{ backgroundImage: `url(${landscape})` }}
        >
          <div className="services__explaination">
            <h1>Landscape Design</h1>
            <p>
              We take a holistic approach to each design project and the relationship and connection between
              the interior and exterior is key to the overall ambience.
            </p>
            <p>
              A well designed landscape complements the interior and architectural features of a property,
              often with the interior aesthetic being carried through into the outside space, blurring the
              boundary between inside and out.
            </p>
          </div>
        </div>
        <div
          className={`services__tab-content space ${checkActive(3, 'active')}`}
          style={{ backgroundImage: `url(${space})` }}
        >
          <div className="services__explaination">
            <h1>Space Planning</h1>
            <p>
              Space planning is a complex process with many factors to consider. The principles of space
              planning involve satisfying a defined criteria on a priority basis – as a result, space planning
              is frequently about compromise. That being said, there is often more than one solution to
              planning out the space requirements of a building.
            </p>
          </div>
        </div>
        <div
          className={`services__tab-content commercial ${checkActive(4, 'active')}`}
          style={{ backgroundImage: `url(${commercial})` }}
        >
          <div className="services__explaination">
            <h1>Commercial Design</h1>
            <p>
              Our success in the residential sector is rooted in our commitment to detail quality and service.
              We carry these same values into our commercial projects, in ways that specialist commercial
              contractors often do not.
            </p>
            <p>
              Commercial projects will always bring their own challenges of course, and are often more
              time-sensitive. We’re able to accommodate your needs, programming seven-day weeks or
              out-of-hours working if properties are occupied.
            </p>
          </div>
        </div>
        <div
          className={`services__tab-content material ${checkActive(5, 'active')}`}
          style={{ backgroundImage: `url(${material})` }}
        >
          <div className="services__explaination">
            <h1>Material specification</h1>
            <p>
              Our success in the residential sector is rooted in our commitment to detail quality and service.
              We carry these same values into our commercial projects, in ways that specialist commercial
              contractors often do not.
            </p>
          </div>
        </div>
      </section>
      <div className="home__footer" ref={footerRef}>
        <Footer toggle={footerIsInViewport}></Footer>
      </div>
    </div>
  );
}

export default Services;
