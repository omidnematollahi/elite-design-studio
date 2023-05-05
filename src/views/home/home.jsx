import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@/components/button/button';

import './home.scss';
import useIntersection from '../../custom-hooks/useIntersection';
import { Profile } from '../../view-components/home/profile/profile';
import { Projects } from '../../view-components/home/projects/projects';
import { Footer } from '../../components/footer/footer';
import { Comments } from '../../view-components/home/comments/comments';
import Modal from '@/components/modal/modal';
import SlideShow from '@/view-components/contact/slideshow';
import firstImage from '@/assets/images/1.jpg';
import secondImage from '@/assets/images/2.png';
import thirdImage from '@/assets/images/3.jpg';
import forthImage from '@/assets/images/4.jpg';
import fifthImage from '@/assets/images/5.jpg';
import { isMobile } from 'react-device-detect';

const ModalContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #5c3aff;
  }
`;

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);
  const [bannerAnimated, setBannerAnimated] = useState(false);
  const homeRef = useRef(null);
  const profileRef = useRef(null);
  const projectsRef = useRef(null);
  const commentsRef = useRef(null);
  const footerRef = useRef(null);
  const profileIsInViewport = useIntersection(profileRef);
  const projectsIsInViewport = useIntersection(projectsRef);
  const projectsMostOnInViewport = useIntersection(projectsRef, '-330px');
  const commentsIsInViewport = useIntersection(commentsRef);
  const footerIsInViewport = useIntersection(footerRef);

  useEffect(() => {
    setTimeout(() => {
      setFirstLoad(true);
      setTimeout(() => {
        setBannerAnimated(true);
      }, 100);
    }, 2000);
  }, []);

  useEffect(() => {
    const element = projectsRef.current;
    const headerOffset = 57;
    if (projectsRef && projectsMostOnInViewport) {
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, [projectsMostOnInViewport]);

  function handlOpenModal(open) {
    console.log('close modal');
    setIsOpen(open);
  }

  const slides = [
    {
      image: firstImage,
      content: 'Improving The Unimproved',
    },
    {
      image: secondImage,
      content: 'Improving The Unimproved',
    },
    {
      image: thirdImage,
      content: 'Improving The Unimproved',
    },
    {
      image: forthImage,
      content: 'Improving The Unimproved',
    },
    {
      image: fifthImage,
      content: 'Improving The Unimproved',
    },
  ];

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const endpoint = 'https://wk6cn3gzmkinqppdowvrz2dokq0xuzrf.lambda-url.us-west-2.on.aws/'; // Add this later
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { fullName, email, message, type };
    const fetchPromise = fetch(endpoint, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      body: JSON.stringify(data),
    });
    fetchPromise
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        toast.success('Your message sent successfully');
        setLoading(false);
        handlOpenModal(false);
      });
  };

  return (
    <div className="home" ref={homeRef}>
      <ToastContainer />
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
        <Comments handlOpenModal={handlOpenModal} toggle={commentsIsInViewport}></Comments>
      </div>
      <h1>Projects</h1>
      <div className="home_thirdSection" ref={projectsRef}>
        <Projects toggle={projectsIsInViewport}></Projects>
      </div>
      <div className="home__footer" ref={footerRef}>
        <Footer toggle={footerIsInViewport}></Footer>
      </div>

      <Modal isOpen={isOpen} handleClose={() => handlOpenModal(false)}>
        <ModalContent>
          <form className="contact__project-form" action={endpoint} onSubmit={handleSubmit} method="POST">
            <div className="contact__project-form__group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                placeholder=""
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="contact__project-form__group">
              <label htmlFor="email">Email *</label>
              <input
                type="text"
                id="email"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="contact__project-form__group">
              <label htmlFor="type">Type of project *</label>
              <input
                type="text"
                id="type"
                placeholder=""
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            <div className="contact__project-form__group">
              <label htmlFor="message">Send Message *</label>
              <textarea
                id="message"
                placeholder="Text Here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <Button type="submit" loading={loading} text="Submit"></Button>
          </form>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Home;
