import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './about.scss';

import SlideShow from '@/view-components/contact/slideshow';
import firstImage from '@/assets/images/contact/1.jpg';
import secondImage from '@/assets/images/contact/2.jpg';
import thirdImage from '@/assets/images/contact/3.jpg';
import forthImage from '@/assets/images/contact/4.jpg';
import Footer from '@/components/footer/footer';

import useIntersection from '@/custom-hooks/useIntersection';

function About() {
  gsap.registerPlugin(ScrollTrigger);

  const descriptionTitleRef = useRef(null);
  const descriptionContentRef = useRef(null);
  const valuesTitleRef = useRef(null);
  const valuesDescriptionRef = useRef(null);
  const intergrityRef = useRef(null);
  const intergrityTextRef = useRef(null);
  const cooperationRef = useRef(null);
  const cooperationTextRef = useRef(null);
  const creativityRef = useRef(null);
  const creativityTextRef = useRef(null);
  const supportRef = useRef(null);
  const supportTextRef = useRef(null);
  const qualityImageRef = useRef(null);
  const qualityHeadingRef = useRef(null);
  const qualityParagraphRef = useRef(null);
  const projectsImageRef = useRef(null);
  const projectsHeadingRef = useRef(null);
  const projectsParagraphRef = useRef(null);
  const supportiveImageRef = useRef(null);
  const supportiveHeadingRef = useRef(null);
  const supportiveParagraphRef = useRef(null);
  const rateImageRef = useRef(null);
  const rateHeadingRef = useRef(null);
  const rateParagraphRef = useRef(null);
  const reviewImageRef = useRef(null);
  const reviewHeadingRef = useRef(null);
  const reviewParagraphRef = useRef(null);
  const footerRef = useRef(null);

  const descriptionTitleIsInViewport = useIntersection(descriptionTitleRef);
  const descriptionContentIsInViewport = useIntersection(descriptionContentRef);
  const valuesTitleIsInViewport = useIntersection(valuesTitleRef);
  const valuesDescriptionIsInViewport = useIntersection(valuesDescriptionRef);
  const integrityIsInViewport = useIntersection(intergrityRef);
  const integrityTextIsInViewport = useIntersection(intergrityTextRef);
  const cooperationIsInViewport = useIntersection(cooperationRef);
  const cooperationTextIsInViewport = useIntersection(cooperationTextRef);
  const creativityIsInViewport = useIntersection(creativityRef);
  const creativityTextIsInViewport = useIntersection(creativityTextRef);
  const supportIsInViewport = useIntersection(supportRef);
  const supportTextIsInViewport = useIntersection(supportTextRef);
  const qualityImageIsInViewport = useIntersection(qualityImageRef);
  const qualityHeadingIsInViewport = useIntersection(qualityHeadingRef);
  const qualityParagraphIsInViewport = useIntersection(qualityParagraphRef);
  const projectsImageIsInViewport = useIntersection(projectsImageRef);
  const projectsHeadingIsInViewport = useIntersection(projectsHeadingRef);
  const projectsParagraphIsInViewport = useIntersection(projectsParagraphRef);
  const supportiveImageIsInViewport = useIntersection(supportiveImageRef);
  const supportiveHeadingIsInViewport = useIntersection(supportiveHeadingRef);
  const supportiveParagraphIsInViewport = useIntersection(supportiveParagraphRef);
  const rateImageIsInViewport = useIntersection(rateImageRef);
  const rateHeadingIsInViewport = useIntersection(rateHeadingRef);
  const rateParagraphIsInViewport = useIntersection(rateParagraphRef);
  const reviewImageIsInViewport = useIntersection(reviewImageRef);
  const reviewHeadingIsInViewport = useIntersection(reviewHeadingRef);
  const reviewParagraphIsInViewport = useIntersection(reviewParagraphRef);
  const footerIsInViewport = useIntersection(footerRef);

  const slides = [
    {
      image: firstImage,
      content: 'About Elite Design Studio',
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
  ];

  useEffect(() => {
    const wrapper = document.querySelector('.wrapper');
    let getRatio = (el) => window.innerHeight / (window.innerHeight + el.offsetHeight);

    gsap.utils.toArray('.about__why').forEach((section, i) => {
      section.bg = section.querySelector('.why-box');
      // the first image (i === 0) should be handled differently because it should start at the very top.
      // use function-based values in order to keep things responsive
      gsap.fromTo(
        section.bg,
        {
          backgroundPosition: () => (i ? `50% ${-window.innerHeight * getRatio(section)}px` : '50% 0px'),
        },
        {
          backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
          ease: 'none',
          scrollTrigger: {
            scroller: wrapper,
            trigger: section,
            start: () => (i ? 'top bottom' : 'top top'),
            end: 'bottom top',
            scrub: true,
            invalidateOnRefresh: true, // to make it responsive
          },
        },
      );
    });
  }, []);

  return (
    <div className="about">
      <SlideShow slides={slides} delay={7000} />
      <section className="about__description">
        <h1
          ref={descriptionTitleRef}
          className={`${descriptionTitleIsInViewport ? 'visible animate__animated animate__slideInUp' : ''}`}
        >
          WE ARE AN ELITE TEAM THAT WORKS TO BUILD THE BEST SOLUTIONS FOR OUR CLIENTS' NEEDS.
        </h1>
        <p
          ref={descriptionContentRef}
          className={`${
            descriptionContentIsInViewport ? 'visible animate__animated animate__slideInUp' : ''
          }`}
        >
          We practice a collaborative art, which begins by listening intently to our client’s goals and
          desires. From initial concepts through to construction completion, we strive to transform their
          aspirations into reality. We believe a fulfilling process for everyone involved ultimately leads to
          the best possible result and the most rewarding experience.
        </p>
      </section>
      <section className="about__mission">
        <div className="about__mission-text">
          <h1>OUR MISSION</h1>
          <p>
            It’s our mission at Architectural Design Associates to provide client focused service through our
            responsible practice of Architecture. Our tradition of dedication, professionalism and outstanding
            customer service is a testament to that mission as we strive each day for excellence in bringing
            our valued clients’ ideas to life and we use design to create a better world.
          </p>
        </div>
      </section>
      <section className="about__values">
        <h1
          className={`about__title ${
            valuesTitleIsInViewport ? 'visible animate__animated animate__slideInUp' : ''
          }`}
          ref={valuesTitleRef}
        >
          VALUES
        </h1>
        <p
          className={`about__text ${
            valuesDescriptionIsInViewport ? 'visible animate__animated animate__slideInUp' : ''
          }`}
          ref={valuesDescriptionRef}
        >
          We live our values; INTEGRITY, COOPARATION, CREATIVITY, and SUPORT are our guideposts. How we
          conduct ourselves in business and the way we approach projects is a reflection of the values on
          which we were raised. We do what we say, and we say what we do. We are proud of our roots and of
          being trustworthy, family-loving, down-to-earth people. For our clients, we embrace hard work and
          opportunity. We are dedicated to doing it the right way, always, to create value for the entire
          community.
        </p>
      </section>
      <section className="about__benefits">
        <div className="about__integrity">
          <h1
            className={`about__title ${
              integrityIsInViewport ? 'visible animate__animated animate__slideInUp' : ''
            }`}
            ref={intergrityRef}
          >
            Integrity
          </h1>
          <p
            className={`about__text ${
              integrityTextIsInViewport ? 'visible animate__animated animate__slideInUp' : ''
            }`}
            ref={intergrityTextRef}
          >
            Maintaining architectural design integrity from the earliest conceptual design stages through
            construction doesn’t just make for better projects—it is also key to avoiding cost overruns.
            Design integrity is about making sure the constructed reality matches your vision in the easiest,
            most efficient manner possible.
          </p>
        </div>
        <div className="about__cooperation">
          <h1
            className={`about__title ${
              cooperationIsInViewport ? 'visible animate__animated animate__slideInUp' : ''
            }`}
            ref={cooperationRef}
          >
            Cooperation
          </h1>
          <p
            className={`about__text ${
              cooperationTextIsInViewport ? 'visible animate__animated animate__slideInUp' : ''
            }`}
            ref={cooperationTextRef}
          >
            We Design, Document and Manage your project through a collaborative partnership with you.We are
            inspired by you. We use our eyes to observe and our ears to listen. We develop a deep
            understanding of your needs and aspirations
          </p>
        </div>
        <div className="about__creativity">
          <h1
            className={`about__title ${
              creativityIsInViewport ? 'visible animate__animated animate__slideInUp' : ''
            }`}
            ref={creativityRef}
          >
            Creativity
          </h1>
          <p
            className={`about__text ${
              creativityTextIsInViewport ? 'visible animate__animated animate__slideInUp' : ''
            }`}
            ref={creativityTextRef}
          >
            We creatively work with you to explore possibilities, to challenge, and in turn to inspire .We
            synthesize, we resolve. Artists only succeed if they struggle for excellence every day. We do not
            accept mediocrity.
          </p>
        </div>
        <div className="about__support">
          <h1
            className={`about__title ${
              supportIsInViewport ? 'visible animate__animated animate__slideInUp' : ''
            }`}
            ref={supportRef}
          >
            Support
          </h1>
          <p
            className={`about__text ${
              supportTextIsInViewport ? 'visible animate__animated animate__slideInUp' : ''
            }`}
            ref={supportTextRef}
          >
            Without our customers we are nothing. We have designed our systems to deliver the best experience
            and support to our customers. You and your needs are at the heart of all that we do.
          </p>
        </div>
      </section>
      <h1>Why Us</h1>
      <section className="about__why">
        <div className="about__quality why-box"></div>
        <div
          className={`image ${
            qualityImageIsInViewport ? 'visible animate__animated animate__slideInUp' : ''
          }`}
          ref={qualityImageRef}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
            <circle cx="48" cy="48" r="48" fill="white"></circle>
            <path
              d="M43.5325 40.0652L42.803 44.4416C42.7119 44.8063 42.8942 45.171 43.1678 45.3534C43.3501 45.4446 43.5325 45.5358 43.7148 45.5358C43.8972 45.5358 43.9883 45.5358 44.1707 45.4446L48.0913 43.3475L52.0119 45.4446C52.2854 45.6269 52.6501 45.5358 53.0148 45.3534C53.2883 45.171 53.4707 44.8063 53.3795 44.4416L52.5589 40.0652L55.7501 36.9652C56.0236 36.6916 56.1148 36.3269 56.0236 36.0534C55.9325 35.6887 55.6589 35.5063 55.2942 35.4152L50.8266 34.7769L48.8207 30.674C48.5472 30.0358 47.453 30.0358 47.1795 30.674L45.1736 34.6858L40.706 35.324C40.3413 35.4152 40.0678 35.5975 39.9766 35.9622C39.8854 36.3269 39.9766 36.6916 40.2501 36.874L43.5325 40.0652ZM45.9942 36.4181C46.2677 36.4181 46.5413 36.1446 46.7236 35.9622L48.0913 33.1358L49.4589 35.9622C49.5501 36.2358 49.8236 36.4181 50.1883 36.4181L53.2883 36.874L51.1001 39.0622C50.9178 39.2446 50.8266 39.6093 50.8266 39.8828L51.3736 42.9828L48.6383 41.524C48.5472 41.4328 48.3648 41.4328 48.1825 41.4328C48.0001 41.4328 47.9089 41.4328 47.7266 41.524L44.9913 42.9828L45.5383 39.8828C45.6295 39.6093 45.4472 39.2446 45.2648 39.0622L43.0766 36.874L45.9942 36.4181Z"
              fill="#7A7A7A"
            ></path>
            <path
              d="M48.0001 51.3708C55.2031 51.3708 61.0384 45.5355 61.0384 38.3325C61.0384 31.1296 55.2031 25.2031 48.0001 25.2031C40.7972 25.2031 34.9619 31.0384 34.9619 38.2414C34.9619 45.4443 40.7972 51.3708 48.0001 51.3708ZM48.0001 27.0267C54.2001 27.0267 59.2149 32.0414 59.2149 38.2414C59.2149 44.4414 54.2001 49.5472 48.0001 49.5472C41.8001 49.5472 36.7854 44.5325 36.7854 38.3325C36.7854 32.1325 41.8001 27.0267 48.0001 27.0267Z"
              fill="#7A7A7A"
            ></path>
            <path
              d="M30.1292 35.6C27.4851 37.5147 27.3027 38.8824 30.1292 40.9794C31.6792 42.1647 31.588 41.9824 30.7674 43.7147C29.3086 46.5412 29.6733 47.8177 33.0468 48.4559C34.9615 48.8206 34.8704 48.7294 34.7792 50.6441C34.688 52.3765 34.7792 54.0177 36.5115 54.2L28.2145 71.0677C28.0321 71.4324 28.1233 71.7971 28.3968 72.0706C28.6704 72.3441 29.0351 72.4353 29.3998 72.3441L36.9674 69.5177L40.7968 76.6294C41.1615 77.3588 42.2557 77.2677 42.438 76.4471L48.091 55.4765L53.7439 76.4471C53.9262 77.2677 55.0204 77.3588 55.3851 76.6294L59.2145 69.5177L66.691 72.3441C67.5115 72.6177 68.1498 71.7971 67.7851 71.0677L59.488 54.2C61.2204 54.0177 61.3115 52.3765 61.2204 50.6441C61.1292 48.7294 61.038 48.8206 62.9527 48.4559C66.3262 47.8177 66.691 46.5412 65.2321 43.7147C64.9586 43.1677 64.5027 42.3471 64.5939 42.0736C64.8674 40.8883 70.8851 39.3383 65.7792 35.6C65.3233 35.2353 64.5939 34.6883 64.5939 34.5059C64.5027 34.2324 64.9586 33.4118 65.2321 32.8647C66.691 30.0383 66.3262 28.7618 62.9527 28.1236C62.4057 28.0324 61.4939 27.85 61.3115 27.5765C61.1292 27.303 61.1292 26.4824 61.2204 25.8441C61.3115 22.7441 60.491 21.65 57.1174 22.5618C55.2027 23.1088 55.2939 23.0177 54.5645 21.3765C53.288 18.55 52.1027 17.9118 49.4586 20.1912C47.9086 21.4677 47.9998 21.4677 46.541 20.1912C43.8968 17.9118 42.7115 18.55 41.4351 21.3765C40.7057 23.1088 40.888 23.1088 38.8821 22.653C35.5086 21.7412 34.688 22.8353 34.7792 25.9353C34.8704 27.85 34.9615 27.7588 33.0468 28.1236C29.6733 28.7618 29.2174 30.0383 30.7674 32.8647C31.588 34.5971 31.6792 34.5059 30.1292 35.6ZM41.1615 73.803L38.2439 68.4236L40.9792 60.8559C41.1615 60.4 40.888 59.853 40.4321 59.6706C39.9762 59.4883 39.4292 59.7618 39.2468 60.2177L36.5115 67.7853L30.8586 69.8824L38.6998 54.0177C38.791 54.0177 38.791 54.0177 38.8821 53.9265C40.7968 53.3794 40.7057 53.4706 41.4351 55.1118C42.438 57.3912 43.5321 58.5765 45.7204 57.0265L41.1615 73.803ZM65.141 69.8824L59.3968 67.7853L56.2968 60.2177C56.1145 59.7618 55.5674 59.4883 55.1115 59.7618C54.6557 59.9441 54.3821 60.4912 54.6557 60.9471L57.7557 68.5147L54.838 73.8941L50.2792 57.2088C52.3762 58.7588 53.5615 57.5736 54.5645 55.2941C55.3851 53.4706 55.2027 53.5618 57.2998 54.1088L65.141 69.8824ZM32.3174 32.0441C31.4057 30.2206 31.3145 30.3118 33.3204 29.9471C36.1468 29.4 36.6939 28.853 36.6027 25.8441C36.5115 23.8383 36.4204 23.8383 38.4262 24.3853C41.3439 25.1147 41.9821 24.6588 43.0762 22.1059C43.8968 20.2824 43.8057 20.1912 45.3557 21.5588C47.5439 23.4736 48.4557 23.4736 50.6439 21.5588C52.1939 20.1912 52.1027 20.1912 52.9233 22.1059C54.0174 24.5677 54.6557 25.1147 57.5733 24.3853C59.5792 23.8383 59.488 23.9294 59.3968 25.8441C59.3968 26.9383 59.3057 28.0324 59.9439 28.7618C60.5821 29.4912 61.5851 29.6736 62.6792 29.9471C64.6851 30.3118 64.6851 30.2206 63.6821 32.0441C63.2262 32.9559 62.6792 33.9588 62.8615 34.9618C63.0439 35.8736 63.9557 36.5118 64.7762 37.15C66.5086 38.4265 66.4174 38.3353 64.7762 39.6118C62.4968 41.253 62.3145 42.0736 63.6821 44.7177C64.5939 46.5412 64.6851 46.45 62.6792 46.8147C59.8527 47.3618 59.3057 48 59.3968 50.9177C59.3968 51.3736 59.488 52.4677 59.3057 52.65C59.2145 52.65 59.3057 52.8324 57.5733 52.3765C54.6557 51.6471 54.0174 52.1941 52.9233 54.6559C52.741 55.1118 52.2851 56.1147 52.0115 56.1147C51.9204 56.1147 51.9204 56.1147 52.0115 56.1147C51.738 56.1147 51.0086 55.4765 50.6439 55.203C48.2733 53.1971 47.4527 53.3794 45.3557 55.203C43.8057 56.4794 43.8968 56.4794 43.0762 54.6559C41.9821 52.1941 41.3439 51.6471 38.4262 52.3765C36.4204 52.9235 36.5115 52.9236 36.6027 50.9177C36.6939 48 36.1468 47.453 33.3204 46.8147C31.3145 46.45 31.3145 46.5412 32.3174 44.7177C33.6851 42.0736 33.4115 41.3441 31.2233 39.6118C29.491 38.3353 29.5821 38.4265 31.2233 37.15C33.4115 35.4177 33.6851 34.6883 32.3174 32.0441Z"
              fill="#7A7A7A"
            ></path>
          </svg>
        </div>
        <h1 className={`${qualityHeadingIsInViewport ? 'visible' : ''}`} ref={qualityHeadingRef}>
          <span>High</span>
          <span>Quality</span>
          <span>Custom</span>
          <span>Design</span>
        </h1>
        <p className={`${qualityParagraphIsInViewport ? 'visible' : ''}`} ref={qualityParagraphRef}>
          <span>We</span>
          <span>believe</span>
          <span>every</span>
          <span>home</span>
          <span>is </span>
          <span>unique </span>
          <span>and </span>
          <span>pride</span>
          <span>ourselves</span>
          <span>on</span>
          <span>designing</span>
          <span>custom</span>
          <span>high-quality</span>
          <span>and</span>
          <span>perfectly</span>
          <span>tailored</span>
          <span>to</span>
          <span>your</span>
          <span>home</span>
          <span>and</span>
          <span>needs</span>
        </p>
      </section>
      <section className="about__why">
        <div className="about__projects why-box"></div>
        <div
          className={`image ${
            projectsImageIsInViewport ? 'visible animate__animated animate__slideInUp' : ''
          }`}
          ref={projectsImageRef}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
            <circle cx="48" cy="48" r="48" fill="white"></circle>
            <g clipPath="url(#clip0_505_108)">
              <path
                d="M69.9996 30.3692C70.0023 29.7716 69.7645 29.1981 69.3396 28.7779L67.2218 26.66C66.8035 26.2372 66.2333 25.9995 65.6385 26H65.6312C65.0401 26.0004 64.4739 26.2382 64.0597 26.66L54.4531 36.2666H35.5333V28.2C35.5333 26.9849 34.5483 26 33.3333 26H31.8666C28.6281 26.0036 26.0036 28.6281 26 31.8666V64.3171C26.1835 67.531 28.8604 70.0331 32.0793 69.9996H67.7997C69.0147 69.9996 69.9996 69.0147 69.9996 67.7997V38.4666C69.9996 37.2516 69.0147 36.2666 67.7997 36.2666H65.0131L69.3397 31.94C69.7607 31.5256 69.9983 30.9599 69.9996 30.3692ZM52.2385 44.3332C52.0833 44.3544 51.9273 44.2998 51.819 44.1865C51.7099 44.0781 51.6559 43.9259 51.6724 43.773L51.9503 41.2797C51.9619 41.2275 51.9766 41.1761 51.9943 41.1257L54.8829 44.0142C54.8352 44.0245 54.7919 44.048 54.7421 44.0538L52.2385 44.3332ZM56.0804 43.1357L52.8713 39.9259L60.8646 31.9326L64.0721 35.1395L56.0804 43.1357ZM61.8986 30.8949L62.9861 29.8081L66.1922 33.015L65.1054 34.1025L61.8986 30.8949ZM27.4667 31.8666C27.4691 29.4376 29.4376 27.469 31.8666 27.4667H33.3333C33.7383 27.4667 34.0666 27.795 34.0666 28.1999V57.533C34.0666 57.938 33.7383 58.2663 33.3333 58.2663H31.8666C30.1819 58.2658 28.5786 58.991 27.4667 60.2565V31.8666ZM67.7997 37.7332C68.2047 37.7332 68.5331 38.0616 68.5331 38.4666V67.7997C68.5331 68.2047 68.2047 68.5331 67.7997 68.5331H32.0793C29.6584 68.5737 27.6303 66.7101 27.4667 64.2944V64.133C27.4691 61.704 29.4376 59.7355 31.8666 59.7331H33.3333C34.5483 59.7331 35.5332 58.7481 35.5332 57.5331V37.7332H52.9864L51.321 39.3986C50.8561 39.8567 50.5636 40.4613 50.4931 41.1102L50.2152 43.6086C50.1923 43.8523 50.2155 44.098 50.2834 44.3331H37.7332C37.3283 44.3331 36.9999 44.6615 36.9999 45.0665C36.9999 45.4715 37.3282 45.7998 37.7332 45.7998H39.9333V65.5997C39.9333 66.0047 40.2616 66.333 40.6666 66.333C41.0717 66.333 41.4 66.0047 41.4 65.5997V55.3331H49.4665V61.1997H44.3332C43.9282 61.1997 43.5999 61.528 43.5999 61.933C43.5999 62.338 43.9282 62.6664 44.3332 62.6664H58.9998C59.8098 62.6664 60.4664 62.0097 60.4664 61.1997V50.1998C60.4664 49.7949 60.1381 49.4665 59.7331 49.4665C59.3281 49.4665 58.9998 49.7948 58.9998 50.1998V53.8664H41.3999V45.7999H52.1857C52.2572 45.8 52.3288 45.7961 52.3999 45.7881L54.9056 45.5029C55.5416 45.4307 56.1352 45.1481 56.5923 44.6999L63.5501 37.7333H67.7997V37.7332ZM58.9998 55.3331V61.1997H50.9331V55.3331H58.9998ZM68.3057 30.9001L67.2291 31.9773L64.023 28.7712L65.1003 27.694C65.2412 27.5493 65.4344 27.4674 65.6364 27.4667C65.842 27.4672 66.0387 27.5501 66.1827 27.6969L68.3035 29.8133C68.451 29.9586 68.5337 30.1571 68.5331 30.3641C68.5324 30.566 68.4505 30.7593 68.3057 30.9001Z"
                fill="#7A7A7A"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_505_108">
                <rect width="44" height="44" fill="white" transform="translate(26 26)"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <h1 className={`${projectsHeadingIsInViewport ? 'visible' : ''}`} ref={projectsHeadingRef}>
          <span>+1k</span>
          <span>completed</span>
          <span>project</span>
        </h1>
        <p className={`${projectsParagraphIsInViewport ? 'visible' : ''}`} ref={projectsParagraphRef}>
          <span>Elite</span>
          <span>architectural</span>
          <span>group</span>
          <span>has</span>
          <span>done</span>
          <span>more</span>
          <span>than</span>
          <span>1000</span>
          <span>projects</span>
          <span>in</span>
          <span>terms</span>
          <span>of</span>
          <span>usage</span>
          <span>and</span>
          <span>models.</span>
          <span>It</span>
          <span>has</span>
          <span>been</span>
          <span>able</span>
          <span>to</span>
          <span>achieve</span>
          <span>many</span>
          <span>successes</span>
          <span>in</span>
          <span>the</span>
          <span>field</span>
          <span>of</span>
          <span>architecture</span>
          <span>and</span>
          <span>design</span>
          <span>due</span>
          <span>to</span>
          <span>its</span>
          <span>creative</span>
          <span>team</span>
          <span>and</span>
          <span>the</span>
          <span>values</span>
          <span>it</span>
          <span>adheres</span>
          <span>to.</span>
        </p>
      </section>
      <section className="about__why">
        <div className="about__supportive why-box"></div>
        <div
          className={`image ${
            supportiveImageIsInViewport ? 'visible animate__animated animate__slideInUp' : ''
          }`}
          ref={supportiveImageRef}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
            <circle cx="48" cy="48" r="48" fill="white"></circle>
            <g clipPath="url(#clip0_505_110)">
              <path
                d="M47.9059 27.8618C48.4925 27.8618 48.9681 27.3862 48.9681 26.7996V22.0622C48.9681 21.4756 48.4925 21 47.9059 21C47.3193 21 46.8438 21.4756 46.8438 22.0622V26.7996C46.8439 27.3862 47.3194 27.8618 47.9059 27.8618Z"
                fill="#7A7A7A"
              ></path>
              <path
                d="M73.8698 57.4901L71.9934 55.6189C71.3259 54.9523 70.4363 54.585 69.4883 54.585C68.8822 54.585 68.3003 54.7358 67.7847 55.0184L64.2487 51.4867L64.421 51.3146C65.8555 49.8773 65.8549 47.5417 64.4209 46.1092C63.9084 45.5958 63.2689 45.2535 62.5719 45.1094C62.6679 44.7781 62.7184 44.4311 62.7184 44.076C62.7184 43.0894 62.3351 42.1642 61.6413 41.4733C61.1288 40.9598 60.4894 40.6175 59.7924 40.4734C59.8883 40.1421 59.9389 39.7952 59.9389 39.44C59.9389 38.4533 59.5556 37.5282 58.8607 36.8362C58.3358 36.312 57.6907 35.9802 57.0133 35.839C57.3757 34.5895 57.066 33.1837 56.083 32.1991C55.2648 31.3843 54.1545 31.0342 53.0846 31.1477L46.0777 29.8214C45.0091 29.6187 43.6746 29.4846 42.8323 30.253C42.7791 30.3015 42.7249 30.3573 42.6715 30.4194C41.3654 29.9433 39.842 30.2268 38.7961 31.2716C38.1022 31.9646 37.72 32.8894 37.72 33.8755C37.72 34.2307 37.7703 34.5776 37.8662 34.909C37.1699 35.0529 36.5312 35.3949 36.0205 35.9066C35.3252 36.599 34.9418 37.5227 34.9411 38.5077C34.9408 38.8637 34.9913 39.2118 35.0877 39.544C34.3911 39.6877 33.752 40.029 33.2397 40.5407C32.5444 41.2352 32.1616 42.1605 32.1616 43.1461C32.1616 43.901 32.3869 44.6202 32.8046 45.2277C32.2773 45.4065 31.7942 45.704 31.3897 46.1081C29.9543 47.5417 29.9538 49.8774 31.3907 51.3169L31.5623 51.4877L28.0259 55.0177C26.7117 54.3989 25.0924 54.6307 24.0079 55.7139L22.1303 57.5861C21.4625 58.2531 21.0948 59.1429 21.0947 60.0913C21.0947 61.0399 21.4625 61.9298 22.1303 62.5969L24.4735 64.9372C24.8885 65.3518 25.5611 65.3514 25.9756 64.9364C26.3902 64.5213 26.3898 63.8488 25.9748 63.4343L23.6316 61.0939C23.3656 60.8282 23.2191 60.4722 23.2191 60.0914C23.2191 59.7108 23.3656 59.3549 23.6309 59.0898L25.5086 57.2174C25.9777 56.7488 26.6957 56.679 27.241 57.005C27.2794 57.0627 27.3238 57.1175 27.3747 57.1685C27.4657 57.2597 27.5696 57.3296 27.6799 57.3808L38.4475 68.1326C38.4987 68.2441 38.5689 68.349 38.6605 68.4408C38.7498 68.5301 38.8516 68.5992 38.9596 68.65C39.1873 68.9075 39.3131 69.2363 39.3131 69.5871C39.3131 69.9679 39.1666 70.3238 38.9006 70.5895L37.0248 72.463C36.4706 73.0148 35.569 73.0147 35.0165 72.4647L32.6733 70.1213C32.2585 69.7065 31.586 69.7065 31.1712 70.1213C30.7564 70.5361 30.7564 71.2086 31.1712 71.6234L33.5161 73.9685C34.2063 74.6558 35.1127 74.9993 36.0195 74.9993C36.9265 74.9993 37.834 74.6553 38.525 73.9673L40.4019 72.0926C41.0698 71.4255 41.4375 70.5358 41.4375 69.5871C41.4375 68.9101 41.2493 68.2636 40.8992 67.7061L44.8792 63.731C44.8834 63.7266 44.8876 63.7223 44.892 63.718C45.3477 63.2469 46.6168 63.335 47.8441 63.4202C48.7161 63.4809 49.6884 63.5483 50.6382 63.4388L54.9966 67.792C54.7143 68.3068 54.5635 68.888 54.5635 69.4931C54.5635 70.4408 54.9313 71.33 55.5991 71.9971L57.4762 73.8718C58.1436 74.5384 59.0332 74.9057 59.9812 74.9057C60.929 74.9057 61.8186 74.5386 62.4861 73.8718L73.8705 62.5012C74.5384 61.8342 74.9061 60.9445 74.9061 59.9959C74.906 59.0474 74.5383 58.1577 73.8698 57.4901ZM45.6822 31.9086L50.2898 32.7807L47.5319 35.5376C47.1053 35.3325 46.5206 34.9501 45.8791 34.3365C45.0011 33.4965 44.3731 32.5268 44.3159 31.9219C44.3158 31.9216 44.3158 31.9213 44.3158 31.9209C44.3158 31.9208 44.3157 31.9207 44.3157 31.9206C44.3116 31.8772 44.3105 31.8425 44.311 31.816C44.4499 31.7823 44.8189 31.7448 45.6822 31.9086ZM40.2972 32.7746C40.8353 32.237 41.6713 32.175 42.2793 32.5868C42.6239 34.0315 43.8563 35.3409 44.4107 35.8714C44.8216 36.2646 46.1401 37.4434 47.4709 37.7674C47.6509 38.0255 47.7489 38.3331 47.7489 38.6578C47.7489 39.0759 47.5881 39.4669 47.295 39.7597C47.0027 40.0525 46.6111 40.2136 46.1922 40.2136C45.7731 40.2136 45.3815 40.0525 45.0879 39.7583L45.0878 39.7582L45.0873 39.7577L40.2971 34.9762C40.0051 34.6845 39.8442 34.2936 39.8442 33.8755C39.8443 33.4573 40.0052 33.0663 40.2972 32.7746ZM37.5217 37.4096C37.8139 37.117 38.2051 36.9557 38.6234 36.9557C39.0422 36.9557 39.4347 37.1173 39.7288 37.4111L43.586 41.2606C44.1934 41.869 44.1934 42.8589 43.5882 43.4651C43.2943 43.7578 42.9013 43.919 42.4817 43.919C42.062 43.919 41.669 43.7578 41.3765 43.4664L41.3764 43.4663L38.4501 40.5407C38.4456 40.5362 38.4406 40.5319 38.436 40.5273L37.5205 39.6123C37.2268 39.3188 37.0651 38.9271 37.0654 38.5093C37.0659 38.0928 37.227 37.7031 37.5217 37.4096ZM34.7409 42.0437C35.0334 41.7517 35.4254 41.5909 35.845 41.5909C36.261 41.5909 36.6497 41.7494 36.9409 42.0364L39.8761 44.9702C40.1687 45.2617 40.33 45.6522 40.33 46.0699C40.33 46.4874 40.1687 46.878 39.8749 47.1707C39.5826 47.4626 39.1909 47.6235 38.7721 47.6235C38.3527 47.6235 37.9598 47.4622 37.667 47.1707L36.603 46.1079C36.6027 46.1076 36.6024 46.1073 36.6022 46.1071L34.741 44.2481C34.4476 43.955 34.286 43.5635 34.286 43.1459C34.286 42.7283 34.4476 42.3367 34.7409 42.0437ZM32.891 47.611C33.1847 47.3176 33.5773 47.156 33.9963 47.156C34.4152 47.156 34.8077 47.3175 35.1013 47.6107L36.1668 48.675C36.4596 48.9665 36.6208 49.357 36.6208 49.7747C36.6208 50.1924 36.4595 50.5828 36.1646 50.8766C35.8724 51.1693 35.4808 51.3306 35.0618 51.3306C34.6428 51.3306 34.2512 51.1694 33.9569 50.8745L33.8234 50.7416C33.8216 50.7398 33.8203 50.7379 33.8186 50.7363C33.8166 50.7344 33.8145 50.7327 33.8125 50.7308L32.892 49.8139C32.2846 49.2053 32.2841 48.2171 32.891 47.611ZM54.5368 59.6828C54.1222 59.2676 53.4496 59.2673 53.0347 59.6818L52.0897 60.6256C51.1917 61.5236 49.5646 61.4105 47.9912 61.3014C46.2825 61.1826 44.5155 61.0601 43.3722 62.2339L39.4598 66.1416L29.6762 56.3723L33.1385 52.9162C33.7108 53.267 34.3711 53.455 35.0621 53.455C36.0491 53.455 36.9747 53.0724 37.6661 52.3798C38.3621 51.6866 38.7454 50.7616 38.7454 49.7748C38.7454 49.7656 38.7448 49.7566 38.7448 49.7474C38.754 49.7475 38.7632 49.748 38.7723 49.748C39.7581 49.748 40.6829 49.3665 41.3752 48.6751C42.0712 47.9819 42.4546 47.0568 42.4546 46.0701C42.4546 46.0609 42.4539 46.0519 42.4539 46.0427C42.4632 46.0427 42.4725 46.0433 42.4819 46.0433C43.4673 46.0433 44.3927 45.6623 45.0896 44.9682C45.8131 44.2435 46.171 43.2894 46.1641 42.3374C46.1736 42.3375 46.1831 42.338 46.1926 42.338C47.1797 42.3379 48.1052 41.9554 48.7976 41.2617C49.4914 40.5686 49.8737 39.6439 49.8737 38.6578C49.8737 37.9681 49.6861 37.3088 49.3365 36.7377L52.3712 33.7043C52.5973 33.4791 52.8762 33.3378 53.1684 33.2795C53.2 33.2761 53.2313 33.2711 53.2622 33.2649C53.7311 33.2003 54.2235 33.345 54.5821 33.7021C55.1895 34.3106 55.1895 35.3005 54.5843 35.9067L53.6601 36.8271C53.657 36.8302 53.6538 36.8329 53.6507 36.836L52.5862 37.8987C52.1711 38.3132 52.1707 38.9858 52.5853 39.4008C53 39.8159 53.6724 39.8162 54.0874 39.4017L55.0153 38.4751C55.0155 38.4749 55.0157 38.4747 55.0159 38.4745L55.1562 38.3347C55.7653 37.7312 56.752 37.7325 57.3605 38.3401C57.6533 38.6316 57.8145 39.0222 57.8145 39.4398C57.8145 39.8574 57.6533 40.2479 57.3582 40.5418L56.4287 41.4731C56.4285 41.4733 56.4284 41.4734 56.4283 41.4736L55.3639 42.5336C54.9483 42.9476 54.9469 43.6202 55.3609 44.0357C55.7749 44.4514 56.4473 44.4526 56.863 44.0388L57.9322 42.9739C58.2245 42.6811 58.6161 42.5199 59.035 42.5199C59.454 42.5199 59.8457 42.6811 60.1401 42.976C60.4329 43.2676 60.594 43.6581 60.594 44.0758C60.594 44.4934 60.4329 44.8839 60.1384 45.1771L58.2853 47.0309C57.8706 47.4458 57.8707 48.1183 58.2855 48.533C58.493 48.7404 58.7647 48.8439 59.0365 48.8439C59.3084 48.8439 59.5803 48.7402 59.7876 48.5327L60.6958 47.6242C60.701 47.6192 60.7066 47.6149 60.7117 47.6097C61.004 47.317 61.3956 47.1558 61.8145 47.1558C62.2336 47.1558 62.6252 47.317 62.9185 47.6108C63.5252 48.2169 63.5247 49.2052 62.9185 49.8125L61.9951 50.7348C61.9948 50.7351 61.9943 50.7354 61.994 50.7357C61.9937 50.736 61.9934 50.7365 61.9931 50.7368L60.5275 52.2006C60.1125 52.6152 60.112 53.2878 60.5265 53.7028C60.734 53.9104 61.0061 54.0143 61.2781 54.0143C61.5497 54.0143 61.8214 53.9108 62.0287 53.7037L62.7456 52.9877L66.1815 56.4195L56.3987 66.1904L52.8936 62.6895C53.1379 62.5323 53.3717 62.3475 53.5912 62.128L54.5357 61.1847C54.9509 60.7703 54.9514 60.0978 54.5368 59.6828ZM72.3692 60.9982L60.9848 72.3687C60.7185 72.6347 60.362 72.7812 59.9811 72.7812C59.6001 72.7812 59.2436 72.6347 58.9772 72.3686L57.1002 70.4939C56.8342 70.2284 56.6877 69.8729 56.6877 69.4931C56.6877 69.1134 56.8342 68.758 57.1002 68.4923L68.4846 57.1218C68.751 56.8557 69.1074 56.7092 69.4884 56.7092C69.8694 56.7092 70.2259 56.8557 70.4929 57.1224L72.3693 58.9935C72.6353 59.2592 72.7818 59.615 72.7818 59.9958C72.7817 60.3766 72.6352 60.7326 72.3692 60.9982Z"
                fill="#7A7A7A"
              ></path>
              <path
                d="M33.8025 26.9659C34.0098 27.1729 34.2813 27.2762 34.5528 27.2762C34.8249 27.2762 35.0971 27.1722 35.3045 26.9643C35.7189 26.5491 35.7183 25.8767 35.3031 25.4623L31.4326 21.5995C31.0174 21.1851 30.3449 21.1856 29.9305 21.6009C29.5161 22.0162 29.5167 22.6886 29.932 23.103L33.8025 26.9659Z"
                fill="#7A7A7A"
              ></path>
              <path
                d="M61.2604 27.2762C61.532 27.2762 61.8037 27.1726 62.011 26.9656L65.8786 23.1027C66.2936 22.6882 66.294 22.0156 65.8794 21.6006C65.4649 21.1856 64.7924 21.1851 64.3773 21.5997L60.5098 25.4626C60.0948 25.8771 60.0943 26.5497 60.5089 26.9647C60.7164 27.1724 60.9884 27.2762 61.2604 27.2762Z"
                fill="#7A7A7A"
              ></path>
              <path
                d="M27.626 66.6886C27.2148 67.1069 27.2205 67.7795 27.6389 68.1907L27.6419 68.1937C27.8483 68.3966 28.1163 68.4976 28.3842 68.4976C28.6592 68.4976 28.9341 68.3912 29.1424 68.1793C29.5537 67.761 29.5464 67.087 29.1281 66.6758C28.7099 66.2645 28.0374 66.2703 27.626 66.6886Z"
                fill="#7A7A7A"
              ></path>
              <path
                d="M57.1342 58.1525C57.2958 58.1525 57.4597 58.1156 57.6136 58.0381C58.1373 57.7739 58.3477 57.1352 58.0836 56.6114C57.8194 56.0877 57.1806 55.8772 56.657 56.1414L56.6511 56.1443C56.1273 56.4085 55.9198 57.0458 56.1839 57.5695C56.3704 57.9395 56.7454 58.1525 57.1342 58.1525Z"
                fill="#7A7A7A"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_505_110">
                <rect width="54" height="54" fill="white" transform="translate(21 21)"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <h1 className={`${supportiveHeadingIsInViewport ? 'visible' : ''}`} ref={supportiveHeadingRef}>
          <span>Supportive</span>
        </h1>
        <p className={`${supportiveParagraphIsInViewport ? 'visible' : ''}`} ref={supportiveParagraphRef}>
          <span>We</span>
          <span>deliver</span>
          <span>to</span>
          <span>our</span>
          <span>customers</span>
          <span>who</span>
          <span>trust</span>
          <span>us</span>
          <span>not</span>
          <span>to</span>
          <span>fail</span>
          <span>them.</span>
          <span>We</span>
          <span>deliver</span>
          <span>in</span>
          <span>quality</span>
          <span>of</span>
          <span>work,</span>
          <span>immersive</span>
          <span>experience,</span>
          <span>and</span>
          <span>unparalleled</span>
          <span>customer</span>
          <span>support.</span>
        </p>
      </section>
      <section className="about__why">
        <div className="about__rate why-box"></div>
        <div
          className={`image ${rateImageIsInViewport ? 'visible animate__animated animate__slideInUp' : ''}`}
          ref={rateImageRef}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
            <circle cx="48" cy="48" r="48" fill="white"></circle>
            <path
              d="M71.0945 69.4901V31.7901C71.0945 30.1077 69.718 28.8077 68.1121 28.8077H62.1474V27.1254C62.1474 26.6665 61.8415 26.3607 61.3827 26.3607H57.7121C57.4062 24.7548 55.9533 23.5312 54.271 23.5312C52.5886 23.5312 51.1357 24.7548 50.7533 26.3607H47.0827C46.6239 26.3607 46.318 26.6665 46.318 27.1254V28.8077H40.3533C38.671 28.8077 37.371 30.1842 37.371 31.7901V46.0136C37.218 45.9371 37.0651 45.8607 36.9121 45.8607H34.2357C33.9298 45.8607 33.6239 46.0901 33.471 46.396L32.7062 48.843C32.4768 48.9195 32.3239 48.996 32.0945 49.0724L29.8768 47.9254C29.571 47.7724 29.1886 47.8489 28.9592 48.0783L27.0474 49.9901C26.818 50.2195 26.7415 50.6018 26.8945 50.9077L28.118 53.1254C28.0415 53.3548 27.9651 53.5077 27.8886 53.7371L25.4415 54.5018C25.1357 54.5783 24.9062 54.8842 24.9062 55.2665V57.943C24.9062 58.2489 25.1357 58.5548 25.4415 58.7077L27.8886 59.4724C27.9651 59.7018 28.0415 59.8548 28.118 60.0842L26.971 62.3018C26.818 62.6077 26.8945 62.9901 27.1239 63.2195L29.0357 65.1313C29.2651 65.3607 29.6474 65.4371 29.9533 65.2842L32.171 64.1371C32.4004 64.2136 32.5533 64.2901 32.7827 64.3665L33.5474 66.8136C33.6239 67.1195 33.9298 67.3489 34.3121 67.3489H37.0651C37.218 67.3489 37.371 67.2724 37.5239 67.196V69.5665C37.5239 71.2489 38.9004 72.5489 40.5063 72.5489H68.1121C69.718 72.4724 71.0945 71.096 71.0945 69.4901ZM47.9239 29.5724V27.8901H51.4415C51.9004 27.8901 52.2062 27.5842 52.2062 27.1254C52.2062 25.9783 53.1239 25.0607 54.271 25.0607C55.418 25.0607 56.3357 25.9783 56.3357 27.1254C56.3357 27.5842 56.6415 27.8901 57.1004 27.8901H60.6945V31.3313H47.9239V29.5724ZM37.6004 62.9901C37.371 63.0665 37.218 63.2195 37.1415 63.5254L36.4533 65.743H34.8474L34.1592 63.5254C34.0827 63.296 33.9298 63.0665 33.6239 62.9901C33.2415 62.8371 32.8592 62.6842 32.5533 62.5312C32.3239 62.3783 32.0945 62.3783 31.8651 62.5312L29.8004 63.6018L28.5768 62.5312L29.6474 60.4665C29.8004 60.2371 29.8004 60.0077 29.6474 59.7783C29.4945 59.4724 29.3415 59.0901 29.1886 58.7077C29.1121 58.4783 28.9592 58.2489 28.6533 58.1724L26.3592 57.4842V55.8783L28.6533 55.1901C28.8827 55.1136 29.1121 54.9607 29.1886 54.6548C29.3415 54.2724 29.4945 53.8901 29.6474 53.5842C29.8004 53.3548 29.8004 53.1254 29.6474 52.896L28.5768 50.8313L29.7239 49.6842L31.7886 50.7548C32.018 50.9077 32.2474 50.9077 32.4768 50.7548C32.8592 50.6018 33.1651 50.4489 33.5474 50.296C33.7768 50.2195 34.0062 50.0665 34.0827 49.7607L34.771 47.4665H36.3768L37.0651 49.7607C37.1415 49.9901 37.2945 50.2195 37.6004 50.296C37.9827 50.4489 38.3651 50.5254 38.671 50.7548C38.9004 50.9077 39.1298 50.9077 39.3592 50.7548L41.4239 49.6077L42.571 50.7548L41.4239 52.8195C41.271 53.0489 41.271 53.2783 41.4239 53.5077C41.5768 53.8901 41.7298 54.196 41.8827 54.5783C41.9592 54.8077 42.1121 55.0371 42.418 55.1136L44.7121 55.8018V57.4077L42.418 58.096C42.1886 58.1724 41.9592 58.3254 41.8827 58.6313C41.7298 59.0136 41.5768 59.396 41.4239 59.7018C41.271 59.9313 41.271 60.1607 41.4239 60.3901L42.6474 62.5312L41.5004 63.6783L39.4357 62.5312C39.2062 62.3783 38.9768 62.3783 38.7474 62.5312C38.3651 62.7607 37.6768 62.9901 37.6004 62.9901ZM38.9768 69.4901V64.1371C38.9768 64.1371 39.0533 64.1371 39.0533 64.0607L41.271 65.2077C41.5768 65.3607 41.9592 65.2842 42.1886 65.0548L44.1004 63.143C44.3298 62.9136 44.4062 62.5312 44.2533 62.2254L43.1062 60.0077C43.1827 59.7783 43.2592 59.6254 43.3357 59.396L45.7827 58.6313C46.0886 58.5548 46.318 58.2489 46.318 57.8665V55.1136C46.318 54.8077 46.0886 54.5018 45.7827 54.3489L43.3357 53.5842C43.2592 53.3548 43.1827 53.2018 43.1062 52.9724L44.3298 50.7548C44.4827 50.4489 44.4062 50.0665 44.1768 49.8371L42.2651 47.9254C42.0357 47.696 41.6533 47.6195 41.3474 47.7724L39.1298 48.996C39.1298 48.996 39.0533 48.996 39.0533 48.9195V31.7901C39.0533 30.9489 39.7415 30.3371 40.5063 30.3371H46.471V32.096C46.471 32.5548 46.7768 32.8607 47.2357 32.8607H61.4592C61.918 32.8607 62.2239 32.5548 62.2239 32.096V30.3371H68.1886C69.0298 30.3371 69.6415 31.0254 69.6415 31.7901V69.4901C69.6415 70.3312 68.9533 70.943 68.1886 70.943H40.4298C39.6651 70.943 38.9768 70.2548 38.9768 69.4901Z"
              fill="#7A7A7A"
            ></path>
            <path
              d="M66.5829 35H41.8829C41.424 35 41.1182 35.3059 41.1182 35.7647C41.1182 36.2235 41.424 36.5294 41.8829 36.5294H66.5829C67.0417 36.5294 67.3476 36.2235 67.3476 35.7647C67.3476 35.3059 67.0417 35 66.5829 35Z"
              fill="#7A7A7A"
            ></path>
            <path
              d="M66.5829 39.4375H41.8829C41.424 39.4375 41.1182 39.7434 41.1182 40.2022C41.1182 40.661 41.424 40.9669 41.8829 40.9669H66.5829C67.0417 40.9669 67.3476 40.661 67.3476 40.2022C67.3476 39.7434 67.0417 39.4375 66.5829 39.4375Z"
              fill="#7A7A7A"
            ></path>
            <path
              d="M53.9652 44.7139C53.9652 44.2551 53.6593 43.9492 53.2005 43.9492H41.8829C41.424 43.9492 41.1182 44.2551 41.1182 44.7139C41.1182 45.1727 41.424 45.4786 41.8829 45.4786H53.2005C53.6593 45.4786 53.9652 45.0963 53.9652 44.7139Z"
              fill="#7A7A7A"
            ></path>
            <path
              d="M35.6117 53.0469C33.6235 53.0469 32.0176 54.6528 32.0176 56.641C32.0176 58.6292 33.6235 60.2351 35.6117 60.2351C37.5999 60.2351 39.2058 58.6292 39.2058 56.641C39.2058 54.6528 37.5999 53.0469 35.6117 53.0469ZM35.6117 58.6292C34.4646 58.6292 33.547 57.7116 33.547 56.5645C33.547 55.4175 34.4646 54.4998 35.6117 54.4998C36.7588 54.4998 37.6764 55.4175 37.6764 56.5645C37.6764 57.7116 36.7588 58.6292 35.6117 58.6292Z"
              fill="#7A7A7A"
            ></path>
            <path
              d="M50.6764 63.9062H46.7764C46.3176 63.9062 46.0117 64.2121 46.0117 64.671V67.9592C46.0117 68.418 46.3176 68.7239 46.7764 68.7239H50.6764C51.1352 68.7239 51.4411 68.418 51.4411 67.9592V64.671C51.4411 64.2886 51.0588 63.9062 50.6764 63.9062ZM49.9117 67.271H47.5411V65.5121H49.9117V67.271Z"
              fill="#7A7A7A"
            ></path>
            <path
              d="M58.6296 59.5508H54.7295C54.2707 59.5508 53.9648 59.8567 53.9648 60.3155V67.9625C53.9648 68.4214 54.2707 68.7273 54.7295 68.7273H58.6296C59.0884 68.7273 59.3943 68.4214 59.3943 67.9625V60.3155C59.3943 59.9331 59.0119 59.5508 58.6296 59.5508ZM57.8648 67.2743H55.4943V61.1567H57.8648V67.2743Z"
              fill="#7A7A7A"
            ></path>
            <path
              d="M66.5827 55.1875H62.6827C62.2239 55.1875 61.918 55.4934 61.918 55.9522V67.9581C61.918 68.4169 62.2239 68.7228 62.6827 68.7228H66.5827C67.0415 68.7228 67.3474 68.4169 67.3474 67.9581V55.9522C67.3474 55.5699 67.0415 55.1875 66.5827 55.1875ZM65.818 67.2699H63.4474V56.7169H65.818V67.2699Z"
              fill="#7A7A7A"
            ></path>
            <path
              d="M46.5471 61.0026C46.7766 61.3084 47.3118 61.3849 47.6177 61.1555L64.9001 48.0026L64.5177 50.5261C64.4413 50.9084 64.7471 51.3673 65.1295 51.3673C65.5119 51.4437 65.9707 51.1379 65.9707 50.7555L66.5824 46.3202C66.6589 45.8614 66.353 45.479 65.9707 45.479L61.5354 44.8673C61.153 44.7908 60.6942 45.0967 60.6942 45.479C60.6177 45.8614 60.9236 46.3202 61.306 46.3202L63.906 46.7026L46.7001 59.932C46.3177 60.2379 46.2413 60.6967 46.5471 61.0026Z"
              fill="#7A7A7A"
            ></path>
          </svg>
        </div>
        <h1 className={`${rateHeadingIsInViewport ? 'visible' : ''}`} ref={rateHeadingRef}>
          <span>Having</span>
          <span>a</span>
          <span>flat</span>
          <span>rate</span>
          <span>for</span>
          <span>each</span>
          <span>project</span>
        </h1>
        <p className={`${rateParagraphIsInViewport ? 'visible' : ''}`} ref={rateParagraphRef}>
          <span>Just</span>
          <span>contact</span>
          <span>us</span>
          <span>to</span>
          <span>find</span>
          <span>out</span>
          <span>about</span>
          <span>our</span>
          <span>rates</span>
        </p>
      </section>
      <section className="about__why">
        <div className="about__review why-box"></div>
        <div
          className={`image ${reviewImageIsInViewport ? 'visible animate__animated animate__slideInUp' : ''}`}
          ref={reviewImageRef}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
            <circle cx="48" cy="48" r="48" fill="white"></circle>
            <path
              d="M39.9766 55.8687C40.2082 55.1568 40.8402 54.664 41.5869 54.6134L45.025 54.3802L46.3092 51.1824C46.588 50.4879 47.2519 50.0391 48.0004 50.0391C48.7489 50.0391 49.4128 50.4879 49.6917 51.1825L50.9758 54.3803L54.4139 54.6135C55.1606 54.6641 55.7926 55.1569 56.0239 55.8687C56.2552 56.5806 56.0336 57.3507 55.4591 57.8304L52.8147 60.04L53.6553 63.3818C53.8379 64.1076 53.5647 64.861 52.9592 65.3009C52.3536 65.7409 51.5527 65.7681 50.9188 65.37L48.0003 63.5377L45.0819 65.37C44.783 65.5575 44.4473 65.6507 44.1122 65.6507C43.7363 65.6507 43.3616 65.5334 43.0413 65.3009C42.4358 64.8609 42.1626 64.1076 42.3452 63.3818L43.1859 60.04L40.5414 57.8305C39.967 57.3508 39.7453 56.5807 39.9766 55.8687ZM41.6311 56.5266L44.6849 59.078C44.9352 59.2871 45.0437 59.621 44.9642 59.9372L43.9933 63.7964C43.9872 63.8206 43.973 63.8773 44.0405 63.9262C44.1078 63.9753 44.1575 63.9442 44.1786 63.931L47.5488 61.8151C47.6869 61.7284 47.8438 61.6851 48.0006 61.6851C48.1573 61.6851 48.3142 61.7284 48.4523 61.8151L51.8226 63.931C51.8437 63.9442 51.8934 63.9753 51.9606 63.9262C52.028 63.8773 52.0138 63.8206 52.0078 63.7964L51.0369 59.9372C50.9574 59.621 51.0658 59.2871 51.3162 59.078L54.37 56.5266C54.3892 56.5106 54.434 56.4731 54.4082 56.3938C54.3824 56.3145 54.3241 56.3105 54.2992 56.3088L50.3289 56.0397C50.0035 56.0176 49.7195 55.8112 49.5979 55.5086L48.1151 51.8159C48.1057 51.7927 48.0839 51.7384 48.0006 51.7384C47.9172 51.7384 47.8954 51.7927 47.8861 51.8159L46.4033 55.5086C46.2817 55.8113 45.9977 56.0176 45.6723 56.0397L41.702 56.3088C41.6771 56.3105 41.6189 56.3145 41.593 56.3938C41.5672 56.4731 41.6119 56.5106 41.6311 56.5266Z"
              fill="#7A7A7A"
            ></path>
            <path
              d="M60.8624 55.8645C61.0938 55.1528 61.7257 54.6601 62.4725 54.6095L65.9106 54.3763L65.9411 54.3005C66.1159 53.8651 66.6108 53.6538 67.0462 53.8287C67.4816 54.0036 67.6928 54.4983 67.518 54.9338L67.2888 55.5046C67.1673 55.8072 66.8833 56.0136 66.5579 56.0357L62.5876 56.3048C62.5627 56.3065 62.5045 56.3105 62.4788 56.3898C62.4529 56.4691 62.4978 56.5066 62.5169 56.5225L65.5708 59.074C65.821 59.2831 65.9295 59.6169 65.85 59.9332L64.8792 63.7924C64.8731 63.8165 64.8588 63.8733 64.9263 63.9222C64.9938 63.9712 65.0432 63.9402 65.0644 63.927L68.4346 61.8111C68.7108 61.6376 69.0619 61.6378 69.3382 61.8111L72.7084 63.927C72.7296 63.9402 72.779 63.9714 72.8465 63.9222C72.914 63.8731 72.8997 63.8165 72.8936 63.7924L71.9228 59.9332C71.8433 59.6169 71.9517 59.2831 72.202 59.074L75.2554 56.5225C75.2746 56.5066 75.3194 56.4691 75.2936 56.3898C75.2678 56.3105 75.2095 56.3065 75.1846 56.3048L71.2143 56.0357C70.8889 56.0136 70.6049 55.8072 70.4833 55.5046L69.0005 51.8119C68.9911 51.7886 68.9693 51.7344 68.886 51.7344C68.8026 51.7344 68.7808 51.7886 68.7715 51.8117C68.5967 52.2472 68.1017 52.4584 67.6666 52.2837C67.2311 52.1088 67.0199 51.6141 67.1947 51.1786C67.4736 50.4841 68.1374 50.0352 68.886 50.0352C69.6344 50.0352 70.2983 50.484 70.5772 51.1786L71.8615 54.3763L75.2996 54.6095C76.0464 54.6601 76.6783 55.1529 76.9097 55.8647C77.141 56.5766 76.9193 57.3467 76.3448 57.8264L73.7004 60.036L74.5411 63.3778C74.7237 64.1037 74.4503 64.8569 73.8448 65.2969C73.5246 65.5295 73.15 65.6467 72.7741 65.6467C72.4391 65.6467 72.1033 65.5536 71.8044 65.366L68.886 63.5336L65.9674 65.3658C65.3335 65.7638 64.5327 65.7367 63.9271 65.2967C63.3216 64.8568 63.0482 64.1036 63.2308 63.3777L64.0716 60.0359L61.4271 57.8263C60.8527 57.3464 60.631 56.5764 60.8624 55.8645Z"
              fill="#7A7A7A"
            ></path>
            <path
              d="M19.091 55.8686C19.3223 55.1568 19.9543 54.664 20.7011 54.6134L24.1391 54.3802L25.4233 51.1824C25.7022 50.4879 26.3661 50.0391 27.1146 50.0391C27.863 50.0391 28.527 50.4879 28.8059 51.1825L30.09 54.3803L33.5281 54.6135C34.2749 54.6641 34.9069 55.1568 35.1382 55.8686C35.3695 56.5805 35.1478 57.3506 34.5734 57.8304L31.9289 60.04L32.7697 63.3818C32.9523 64.1077 32.679 64.8609 32.0735 65.3009C31.7532 65.5336 31.3786 65.6507 31.0027 65.6507C30.6678 65.6507 30.3319 65.5576 30.0331 65.37L27.1145 63.5377L24.196 65.3699C23.5621 65.7678 22.7613 65.7407 22.1557 65.3008C21.5502 64.8608 21.2769 64.1076 21.4595 63.3817L22.3001 60.0399L19.6557 57.8304C19.0814 57.3506 18.8597 56.5805 19.091 55.8686ZM20.7452 56.5265L23.7991 59.0779C24.0493 59.287 24.1578 59.6208 24.0783 59.9371L23.1075 63.7963C23.1014 63.8204 23.0871 63.8772 23.1546 63.9261C23.2221 63.9752 23.2716 63.9441 23.2927 63.9309L26.6629 61.815C26.9391 61.6416 27.2903 61.6416 27.5665 61.815L30.9367 63.9309C30.9578 63.9441 31.0073 63.9753 31.0748 63.9261C31.1423 63.877 31.128 63.8204 31.1219 63.7963L30.1511 59.9371C30.0716 59.6208 30.18 59.287 30.4303 59.0779L33.4841 56.5265C33.5032 56.5105 33.5481 56.473 33.5222 56.3937C33.4965 56.3144 33.4382 56.3104 33.4134 56.3087L29.4431 56.0396C29.1176 56.0175 28.8336 55.8111 28.7121 55.5085L27.2291 51.8158C27.2198 51.7925 27.1981 51.7384 27.1147 51.7384C27.0313 51.7384 27.0096 51.7927 27.0003 51.8159L25.5174 55.5086C25.3959 55.8113 25.1119 56.0176 24.7864 56.0397L20.8161 56.3088C20.7912 56.3105 20.733 56.3145 20.7072 56.3938C20.6813 56.4731 20.7261 56.5105 20.7452 56.5265Z"
              fill="#7A7A7A"
            ></path>
            <path
              d="M50.4192 36.1811C50.6505 35.4693 51.2825 34.9765 52.0293 34.9259L55.4674 34.6927L56.7514 31.4949C57.0303 30.8004 57.6941 30.3516 58.4427 30.3516C59.1912 30.3516 59.8551 30.8004 60.134 31.4949L61.4182 34.6926L64.8562 34.9257C65.603 34.9764 66.235 35.469 66.4663 36.181C66.6976 36.8929 66.4759 37.663 65.9015 38.1428L63.2571 40.3523L64.0977 43.6941C64.2803 44.42 64.007 45.1733 63.4015 45.6132C62.796 46.053 61.9951 46.0802 61.3612 45.6823L58.4427 43.8499L55.5242 45.6823C55.2258 45.8697 54.8899 45.963 54.5549 45.963C54.179 45.963 53.8043 45.8457 53.4842 45.6132C52.8786 45.1732 52.6053 44.4198 52.7879 43.6941L53.6286 40.3523L50.9842 38.1428C50.4096 37.6631 50.1879 36.893 50.4192 36.1811ZM52.0735 36.8388L55.1272 39.3903C55.3774 39.5994 55.486 39.9332 55.4064 40.2495L54.4356 44.1087C54.4295 44.1329 54.4152 44.1895 54.4827 44.2385C54.5501 44.2875 54.5998 44.2565 54.6208 44.2431L57.9911 42.1273C58.1293 42.0406 58.286 41.9972 58.4428 41.9972C58.5996 41.9972 58.7565 42.0406 58.8946 42.1273L62.2648 44.2431C62.286 44.2564 62.3354 44.2875 62.4029 44.2385C62.4704 44.1894 62.4562 44.1327 62.45 44.1087L61.4792 40.2495C61.3997 39.9332 61.5081 39.5993 61.7585 39.3903L64.8123 36.8388C64.8314 36.8229 64.8763 36.7854 64.8505 36.7061C64.8246 36.6268 64.7664 36.6229 64.7415 36.6211L60.7712 36.352C60.4458 36.3299 60.1618 36.1235 60.0402 35.8209L58.5574 32.1282C58.5479 32.105 58.5262 32.0508 58.4428 32.0508C58.3594 32.0508 58.3377 32.105 58.3284 32.1282L56.8456 35.8209C56.724 36.1235 56.44 36.3299 56.1146 36.352L52.1443 36.6211C52.1194 36.6228 52.0611 36.6268 52.0353 36.7061C52.0095 36.7854 52.0543 36.8229 52.0735 36.8388Z"
              fill="#7A7A7A"
            ></path>
            <path
              d="M29.5335 36.1812C29.7648 35.4694 30.3968 34.9766 31.1435 34.926L34.5816 34.6928L34.6514 34.5191C34.8263 34.0837 35.321 33.8725 35.7565 34.0473C36.1919 34.222 36.4031 34.7169 36.2283 35.1522L35.9597 35.8209C35.8381 36.1235 35.5542 36.3299 35.2287 36.352L31.2584 36.6211C31.2335 36.6228 31.1753 36.6268 31.1494 36.7061C31.1236 36.7854 31.1685 36.8229 31.1876 36.8388L34.2414 39.3903C34.4917 39.5994 34.6002 39.9332 34.5207 40.2495L33.5499 44.1086C33.5437 44.1327 33.5295 44.1894 33.597 44.2385C33.6645 44.2875 33.7139 44.2564 33.7351 44.2431L37.1053 42.1273C37.3815 41.9539 37.7325 41.9539 38.0088 42.1273L41.3791 44.2431C41.4003 44.2564 41.4499 44.2874 41.5172 44.2385C41.5847 44.1894 41.5704 44.1327 41.5643 44.1087L40.5935 40.2495C40.5139 39.9332 40.6224 39.5993 40.8727 39.3903L43.9264 36.8388C43.9456 36.8229 43.9904 36.7854 43.9646 36.7061C43.9388 36.6268 43.8806 36.6228 43.8556 36.6211L39.8853 36.352C39.5599 36.3299 39.2759 36.1235 39.1543 35.8209L37.6715 32.1282C37.6622 32.1049 37.6405 32.0508 37.5571 32.0508C37.4737 32.0508 37.452 32.105 37.4425 32.1282C37.2678 32.5636 36.7731 32.7749 36.3376 32.6C35.9022 32.4251 35.691 31.9304 35.8658 31.4949C36.1447 30.8003 36.8086 30.3514 37.5571 30.3516C38.3055 30.3516 38.9695 30.8004 39.2484 31.4949L40.5324 34.6927L43.9705 34.9259C44.7172 34.9765 45.3492 35.4692 45.5806 36.1811C45.8119 36.893 45.5902 37.6631 45.0159 38.1429L42.3714 40.3524L43.2121 43.6942C43.3947 44.4201 43.1213 45.1733 42.5159 45.6133C41.9102 46.0533 41.1094 46.0804 40.4754 45.6824L37.557 43.85L34.6385 45.6824C34.3398 45.8701 34.004 45.9633 33.669 45.9633C33.2933 45.9633 32.9185 45.8461 32.5983 45.6135C31.9928 45.1735 31.7195 44.4202 31.9021 43.6943L32.7427 40.3525L30.0983 38.143C29.5238 37.6633 29.3022 36.8932 29.5335 36.1812Z"
              fill="#7A7A7A"
            ></path>
          </svg>
        </div>
        <h1 className={`${reviewHeadingIsInViewport ? 'visible' : ''}`} ref={reviewHeadingRef}>
          <span>+100</span>
          <span>five</span>
          <span>Star</span>
          <span>Review</span>
        </h1>
        <p className={`${reviewParagraphIsInViewport ? 'visible' : ''}`} ref={reviewParagraphRef}>
          <span>Client</span>
          <span>feedback</span>
          <span>clearly</span>
          <span>shows</span>
          <span>what</span>
          <span>type</span>
          <span>of</span>
          <span>work</span>
          <span>and</span>
          <span>services</span>
          <span>you</span>
          <span>will</span>
          <span>receive.</span>
        </p>
      </section>
      <div ref={footerRef}>
        <Footer toggle={footerIsInViewport}></Footer>
      </div>
    </div>
  );
}

export default About;
