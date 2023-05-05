import { useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import { COMMENTS } from '@/constants/comments';
import Slider from 'react-slick';
import LetteredAvatar from 'react-lettered-avatar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './comments.scss';


export const Comments = ({ toggle, handlOpenModal }) => {
  const slider = useRef(null);

  const settings = {
    className: 'center',
    autoplay: true,
    arrows: true,
    // adaptiveHeight: true,
    centerMode: false,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const numberOfStars = 5; // or more.
  let stars = [];

  for (var i = 0; i < numberOfStars; i++) {
    stars[i] = <Icon className="comments__star" icon="ic:outline-star" key={i} />;
  }
  return (
    <div className={`comments ${toggle ? 'toggled animate__animated animate__slideInUp' : ''}`}>
      <h1 className="comments__heading">
        Whaterver good things we build <br /> end up building us
      </h1>
      <div className="comments__rate top">
        <div className="comments__stars">
          <h2>4.9</h2>
          {stars.map((star) => {
            return star;
          })}
          <h2> (179) </h2>
        </div>
        <div className="comments__write">
          <button className="comments__btn" onClick={() => handlOpenModal(true)}>
            write a review
          </button>
        </div>
      </div>
      <Slider {...settings} ref={slider}>
        {COMMENTS.map((comment) => {
          return (
            <div className="comments__slide" key={comment.name + Math.random()}>
              <div className="comments__slide__content">
                <Icon className="comments__slide__icon" icon="bi:chat-quote" />
                <div className="comments__profile">
                  <LetteredAvatar name={comment.name} />
                  <span>{comment.name}</span>
                </div>
                <div className="comments__rate">
                  {stars.map((star) => {
                    return star;
                  })}
                </div>

                <p className="comments__text">{comment.text}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Comments;
