import './contact.scss';

import SlideShow from '../../view-components/contact/slideshow';
import firstImage from '../../assets/images/contact/contact1.png';
import Footer from '../../components/footer/footer';
import { useState, useRef } from 'react';
import useIntersection from '../../custom-hooks/useIntersection';
import { Button } from '@/components/button/button';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => setActiveIndex(index);
  const footerRef = useRef(null);
  const footerIsInViewport = useIntersection(footerRef);
  const contactTabsRef = useRef(null);
  const contactTabsIsInViewport = useIntersection(contactTabsRef, '500px');
  const contactPanelRef = useRef(null);
  const contactPanelIsInViewport = useIntersection(contactPanelRef);
  const checkActive = (index, className) => {
    return activeIndex === index ? className : '';
  };
  const images = [
    {
      image: firstImage,
      content: "Let's start your project",
    },
  ];

  const [tabs, setTabs] = useState([
    {
      title: 'Project Inquiries',
      active: true,
    },
    {
      title: 'Contact Us',
      active: false,
    },
  ]);

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
        setLoading(false);
        toast.success('Your message sent successfully');
      });
  };

  return (
    <div className="contact">
      <ToastContainer />
      <SlideShow slides={images} delay={7000} dots={false} />
      <section
        className={`contact__content ${
          contactTabsIsInViewport ? 'visible animate__animated animate__slideInUp' : ''
        }`}
        ref={contactTabsRef}
      >
        <ul className="contact__tab-list">
          {tabs.map((tab, index) => {
            return (
              <li className="contact__tab-item" key={index}>
                <a
                  className={`contact__tab-link ${checkActive(index, 'active')}`}
                  onClick={() => handleClick(index)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
      <section
        className={`contact__panel  ${
          contactPanelIsInViewport ? 'visible animate__animated animate__slideInUp' : ''
        }`}
        ref={contactPanelRef}
      >
        <div className={`contact__tab-content project ${checkActive(0, 'active')}`}>
          <h1>Let’s talk about your project</h1>
          <p>
            Share everything you’re thinking about, hoping for, and needing from a space. ELITE raises your
            expectations by elevating your areas.
          </p>
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
        </div>
        <div className={`contact__tab-content contact ${checkActive(1, 'active')}`}>
          <h1>GET IN TOUCH WITH US</h1>
          <div className="contact__options">
            <div className="contact__option">
              <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                <circle cx="48" cy="48" r="48" fill="white"></circle>
                <path
                  d="M65.5438 56.2425C65.4775 56.1875 57.9825 50.8475 55.9588 51.1812C54.9825 51.3538 54.425 52.02 53.3063 53.3525C53.1263 53.5675 52.6925 54.0813 52.3575 54.4475C51.6504 54.2171 50.9607 53.9364 50.2937 53.6075C46.8507 51.9313 44.0687 49.1493 42.3925 45.7062C42.0636 45.0393 41.7829 44.3496 41.5525 43.6425C41.92 43.3062 42.435 42.8725 42.655 42.6875C43.9812 41.575 44.6462 41.0162 44.8188 40.0387C45.1725 38.015 39.8125 30.5225 39.7575 30.455C39.5134 30.1088 39.1955 29.8212 38.8267 29.6128C38.4579 29.4044 38.0475 29.2805 37.625 29.25C35.4525 29.25 29.25 37.295 29.25 38.6512C29.25 38.73 29.3638 46.735 39.235 56.7762C49.265 66.6362 57.27 66.75 57.3488 66.75C58.7038 66.75 66.75 60.5475 66.75 58.375C66.7192 57.9525 66.595 57.542 66.3864 57.1732C66.1778 56.8045 65.89 56.4866 65.5438 56.2425ZM57.21 64.2425C56.125 64.15 49.4 63.2638 41 55.0125C32.7087 46.5713 31.845 39.835 31.7587 38.7913C33.3972 36.2196 35.376 33.8813 37.6412 31.84C37.6912 31.89 37.7575 31.965 37.8425 32.0625C39.5798 34.434 41.0763 36.9728 42.31 39.6412C41.9088 40.0448 41.4848 40.4251 41.04 40.78C40.3502 41.3056 39.7169 41.9013 39.15 42.5575C39.0541 42.6921 38.9858 42.8443 38.9491 43.0055C38.9124 43.1666 38.9081 43.3334 38.9362 43.4963C39.2008 44.6422 39.6059 45.751 40.1425 46.7975C42.0649 50.745 45.2547 53.9344 49.2025 55.8563C50.2488 56.3936 51.3577 56.7992 52.5037 57.0637C52.6666 57.0919 52.8334 57.0876 52.9945 57.0509C53.1557 57.0142 53.3079 56.9459 53.4425 56.85C54.1011 56.2808 54.6988 55.6449 55.2262 54.9525C55.6187 54.485 56.1425 53.8612 56.3413 53.685C59.0164 54.9175 61.5609 56.4158 63.9362 58.1575C64.04 58.245 64.1138 58.3125 64.1625 58.3563C62.1211 60.6222 59.7824 62.6015 57.21 64.24V64.2425Z"
                  fill="#857F72"
                ></path>
                <path
                  d="M49.25 39.25C51.2385 39.252 53.145 40.0428 54.5511 41.4489C55.9572 42.855 56.748 44.7615 56.75 46.75C56.75 47.0815 56.8817 47.3995 57.1161 47.6339C57.3505 47.8683 57.6685 48 58 48C58.3315 48 58.6495 47.8683 58.8839 47.6339C59.1183 47.3995 59.25 47.0815 59.25 46.75C59.247 44.0987 58.1925 41.5569 56.3178 39.6822C54.4431 37.8075 51.9013 36.753 49.25 36.75C48.9185 36.75 48.6005 36.8817 48.3661 37.1161C48.1317 37.3505 48 37.6685 48 38C48 38.3315 48.1317 38.6495 48.3661 38.8839C48.6005 39.1183 48.9185 39.25 49.25 39.25Z"
                  fill="#857F72"
                ></path>
                <path
                  d="M49.25 33C52.8954 33.0043 56.3903 34.4543 58.968 37.032C61.5457 39.6097 62.9957 43.1046 63 46.75C63 47.0815 63.1317 47.3995 63.3661 47.6339C63.6005 47.8683 63.9185 48 64.25 48C64.5815 48 64.8995 47.8683 65.1339 47.6339C65.3683 47.3995 65.5 47.0815 65.5 46.75C65.495 42.4418 63.7814 38.3114 60.735 35.265C57.6886 32.2186 53.5582 30.505 49.25 30.5C48.9185 30.5 48.6005 30.6317 48.3661 30.8661C48.1317 31.1005 48 31.4185 48 31.75C48 32.0815 48.1317 32.3995 48.3661 32.6339C48.6005 32.8683 48.9185 33 49.25 33Z"
                  fill="#857F72"
                ></path>
              </svg>
              <h2>Phone Call</h2>
              <h2>605-296-2220</h2>
            </div>
            <div className="contact__option">
              <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                <circle cx="48" cy="48" r="48" fill="white"></circle>
                <g clipPath="url(#clip0_505_108)">
                  <path
                    d="M66.8218 42.0628L61.3188 38.1758V32.4981C61.2636 31.9357 60.8304 31.4842 60.2706 31.4062H36.1626C35.6029 31.4843 35.1696 31.9357 35.1144 32.4981V38.132L29.3931 42.0627C29.1664 42.2272 29.0229 42.4824 29 42.7615V63.5066C29.0744 64.076 29.5225 64.5241 30.0918 64.5985H66.3414C66.8218 64.5985 66.9965 64.0307 66.9965 63.5066V42.7615C66.9965 42.4995 67.0401 42.2374 66.8218 42.0628ZM61.3188 40.2721L65.0748 42.8488L61.3188 45.6876V40.2721ZM36.8614 33.1532H59.5718V47.0416L48.2166 55.6017L36.8613 47.0416V33.1532H36.8614ZM35.1144 40.2284V45.7314L31.3584 42.8489L35.1144 40.2284ZM30.747 44.6395L42.9757 53.8984L30.747 62.1528V44.6395ZM32.8434 62.8516L44.4606 55.0339L47.5615 57.3923C47.7371 57.528 47.9511 57.6045 48.1729 57.6107C48.3476 57.6107 48.435 57.5233 48.6096 57.3923L51.8415 54.9029L63.5898 62.8516H32.8434ZM65.2495 61.8471L53.2828 53.811L65.2495 44.6395V61.8471Z"
                    fill="#857F72"
                  ></path>
                  <path
                    d="M41.229 38.829H45.1596C45.642 38.829 46.0331 38.4379 46.0331 37.9555C46.0331 37.4731 45.642 37.082 45.1596 37.082H41.229C40.7465 37.082 40.3555 37.4731 40.3555 37.9555C40.3555 38.4379 40.7465 38.829 41.229 38.829Z"
                    fill="#857F72"
                  ></path>
                  <path
                    d="M41.229 42.7626H55.2047C55.6871 42.7626 56.0782 42.3715 56.0782 41.8891C56.0782 41.4067 55.6871 41.0156 55.2047 41.0156H41.229C40.7465 41.0156 40.3555 41.4067 40.3555 41.8891C40.3555 42.3715 40.7465 42.7626 41.229 42.7626Z"
                    fill="#857F72"
                  ></path>
                  <path
                    d="M56.0781 45.8188C56.0781 45.3364 55.687 44.9453 55.2046 44.9453H41.229C40.7465 44.9453 40.3555 45.3364 40.3555 45.8188C40.3555 46.3012 40.7465 46.6923 41.229 46.6923H55.2047C55.687 46.6923 56.0781 46.3012 56.0781 45.8188Z"
                    fill="#857F72"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_505_108">
                    <rect width="38" height="38" fill="white" transform="translate(29 29)"></rect>
                  </clipPath>
                </defs>
              </svg>
              <h2>Email ID</h2>
              <h2>info@elitedesignstudio.com</h2>
            </div>
            <div className="contact__option">
              <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                <circle cx="48" cy="48" r="48" fill="white"></circle>
                <path
                  d="M59.7574 57.8246C57.9908 57.2132 55.689 56.7508 53.1343 56.486C53.5264 55.8907 53.9279 55.2659 54.3305 54.6189C57.9786 48.7547 59.8284 44.1151 59.8284 40.8291C59.8284 34.3065 54.5219 29 47.9994 29C41.4769 29 36.1704 34.3065 36.1704 40.8291C36.1704 44.1151 38.0202 48.7547 41.6684 54.6189C42.0709 55.2659 42.4724 55.8907 42.8645 56.486C40.3099 56.7508 38.008 57.2131 36.2414 57.8246C33.4866 58.7778 32.0898 60.0531 32.0898 61.6146C32.0898 63.3646 33.8315 64.748 37.2665 65.7266C40.1493 66.5478 43.961 67 47.9994 67C52.0378 67 55.8495 66.5477 58.7324 65.7265C62.1673 64.748 63.9089 63.3645 63.9089 61.6145C63.9089 60.053 62.5123 58.7778 59.7574 57.8246ZM38.5568 40.8291C38.5568 35.6223 42.7927 31.3864 47.9994 31.3864C53.206 31.3864 57.4419 35.6223 57.4419 40.8291C57.4419 43.6191 55.6695 47.9449 52.3164 53.3386C50.6661 55.9931 48.9996 58.3074 47.9993 59.6477C46.9991 58.3074 45.3326 55.9932 43.6822 53.3386C40.3292 47.9449 38.5568 43.6192 38.5568 40.8291ZM58.0785 63.4313C55.4023 64.1937 51.8228 64.6136 47.9994 64.6136C44.176 64.6136 40.5964 64.1937 37.9202 63.4313C35.0749 62.6208 34.4762 61.7521 34.4762 61.6146C34.4762 61.4849 34.9292 60.8039 37.0218 60.0798C38.9082 59.427 41.5086 58.9582 44.4001 58.7454C45.8879 60.8684 46.9937 62.267 47.0645 62.3562C47.2909 62.6416 47.6352 62.8079 47.9994 62.8079C48.3636 62.8079 48.7078 62.6416 48.9342 62.3562C49.005 62.2669 50.1109 60.8684 51.5986 58.7454C54.4902 58.9582 57.0906 59.4269 58.977 60.0798C61.0696 60.804 61.5226 61.4849 61.5226 61.6145C61.5225 61.7521 60.9238 62.6208 58.0785 63.4313Z"
                  fill="#857F72"
                ></path>
                <path
                  d="M47.9993 35.3008C44.9508 35.3008 42.4707 37.7809 42.4707 40.8293C42.4707 43.8777 44.9509 46.3579 47.9993 46.3579C51.0476 46.3579 53.5278 43.8777 53.5278 40.8293C53.5278 37.7809 51.0477 35.3008 47.9993 35.3008ZM47.9993 43.9715C46.2667 43.9715 44.8571 42.562 44.8571 40.8294C44.8571 39.0968 46.2667 37.6873 47.9993 37.6873C49.7318 37.6873 51.1414 39.0968 51.1414 40.8294C51.1414 42.562 49.7318 43.9715 47.9993 43.9715Z"
                  fill="#857F72"
                ></path>
              </svg>
              <h2>Address</h2>
              <h2>174 5th Lorem ipsum,Lorem ipsum dolor</h2>
            </div>
          </div>
        </div>
      </section>
      <div className="home__footer" ref={footerRef}>
        <Footer toggle={footerIsInViewport}></Footer>
      </div>
    </div>
  );
}
