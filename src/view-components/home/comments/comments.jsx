import { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

import './comments.scss';
import avatar1 from '@/assets/images/avatar/avatar1.png';
import avatar2 from '@/assets/images/avatar/avatar2.png';
import avatar3 from '@/assets/images/avatar/avatar3.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const Comments = ({ toggle }) => {
  useEffect(() => {
    console.log($('.testimonial-carousel').length);
    if ($('.testimonial-carousel').length) {
      $('.testimonial-carousel').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'zoomIn',
        loop: true,
        margin: 0,
        nav: true,
        smartSpeed: 300,
        autoplay: 7000,
        navText: ['<span className="arrow-left"></span>', '<span className="arrow-right"></span>'],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          800: {
            items: 1,
          },
          1024: {
            items: 1,
          },
        },
      });
    }
  }, []);
  return (
    <div className={`comments ${toggle ? 'toggled animate__animated animate__slideInUp' : ''}`}>
      <section className="testimonial-section">
        <div className="large-container">
          <div className="sec-title">
            <span className="title">Testimonial</span>
            <h2>What Our core client say ?</h2>
          </div>

          <div className="testimonial-carousel owl-carousel owl-theme">
            <div className="testimonial-block">
              <div className="inner-box">
                <div className="text">
                  Why is this important? Because clients want to know the businesses they depend on for
                  advice, are well managed in their own right. Not only that but this event gives you the
                  chance to give your back-office team
                </div>
                <div className="info-box">
                  <div className="thumb">
                    <img src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg" alt="" />
                  </div>
                  <h4 className="name">Mahfuz Riad</h4>
                  <span className="designation">Ui Designer & CEO</span>
                </div>
              </div>
            </div>

            <div className="testimonial-block">
              <div className="inner-box">
                <div className="text">
                  Why is this important? Because clients want to know the businesses they depend on for
                  advice, are well managed in their own right. Not only that but this event gives you the
                  chance to give your back-office team
                </div>
                <div className="info-box">
                  <div className="thumb">
                    <img src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg" alt="" />
                  </div>
                  <h4 className="name">Mahfuz Riad</h4>
                  <span className="designation">Ui Designer & CEO</span>
                </div>
              </div>
            </div>

            <div className="testimonial-block">
              <div className="inner-box">
                <div className="text">
                  Why is this important? Because clients want to know the businesses they depend on for
                  advice, are well managed in their own right. Not only that but this event gives you the
                  chance to give your back-office team
                </div>
                <div className="info-box">
                  <div className="thumb">
                    <img src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg" alt="" />
                  </div>
                  <h4 className="name">Mahfuz Riad</h4>
                  <span className="designation">Ui Designer & CEO</span>
                </div>
              </div>
            </div>
          </div>

          <div className="thumb-layer paroller">
            <figure className="image">
              <img src="http://t.commonsupport.com/adro/images/resource/user-thumbs.png" alt="" />
            </figure>
          </div>
        </div>
      </section>

      {/* <section className="testimonials">
        <h1>Testimonials</h1>
        <div className="">
          <div className="row">
            <div className="col-sm-12">
              <div id="customers-testimonials" className="owl-carousel">
                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="img-circle"
                      src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                      alt=""
                    />
                    <p>
                      Dramatically maintain clicks-and-mortar solutions without functional solutions.
                      Completely synergize resource taxing relationships via premier niche markets.
                      Professionally cultivate.
                    </p>
                  </div>
                  <div className="testimonial-name">EMILIANO AQUILANI</div>
                </div>
                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="img-circle"
                      src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                      alt=""
                    />
                    <p>
                      Dramatically maintain clicks-and-mortar solutions without functional solutions.
                      Completely synergize resource taxing relationships via premier niche markets.
                      Professionally cultivate.
                    </p>
                  </div>
                  <div className="testimonial-name">ANNA ITURBE</div>
                </div>
                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="img-circle"
                      src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                      alt=""
                    />
                    <p>
                      Dramatically maintain clicks-and-mortar solutions without functional solutions.
                      Completely synergize resource taxing relationships via premier niche markets.
                      Professionally cultivate.
                    </p>
                  </div>
                  <div className="testimonial-name">LARA ATKINSON</div>
                </div>
                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="img-circle"
                      src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                      alt=""
                    />
                    <p>
                      Dramatically maintain clicks-and-mortar solutions without functional solutions.
                      Completely synergize resource taxing relationships via premier niche markets.
                      Professionally cultivate.
                    </p>
                  </div>
                  <div className="testimonial-name">IAN OWEN</div>
                </div>
                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="img-circle"
                      src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                      alt=""
                    />
                    <p>
                      Dramatically maintain clicks-and-mortar solutions without functional solutions.
                      Completely synergize resource taxing relationships via premier niche markets.
                      Professionally cultivate.
                    </p>
                  </div>
                  <div className="testimonial-name">MICHAEL TEDDY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Comments;
