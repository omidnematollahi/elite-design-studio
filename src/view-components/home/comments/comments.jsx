import { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

import './comments.scss';
import avatar1 from '@/assets/images/avatar/avatar1.png';
import avatar2 from '@/assets/images/avatar/avatar2.png';
import avatar3 from '@/assets/images/avatar/avatar3.png';
import avatar4 from '@/assets/images/avatar/avatar4.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export const Comments = ({ toggle }) => {
  useEffect(() => {}, []);
  const settings = {
    className: 'center',
    autoplay: true,
    arrows: true,
    // adaptiveHeight: true,
    centerMode: false,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 2,
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
    ],
  };
  return (
    <div className={`comments ${toggle ? 'toggled animate__animated animate__slideInUp' : ''}`}>
      <h1 className="comments__heading">Whaterver good things we build end up building us</h1>
      <Slider {...settings}>
        <div className="comments__slide">
          <div className="comments__slide__content">
            <img src={avatar1} />
            <p>
              Ellie is special to work with he understands so much about design, service, and meeting the
              needs of the client. Great to work with!
            </p>
          </div>
        </div>
        <div className="comments__slide">
          <div className="comments__slide__content">
            <img src={avatar2} />
            <p>
              Ellie knows her stuff! She keeps it very professional and her work speaks wonders! Thanks guys,
              for the amazing photorealistic 3D Renders. If you’re looking for a 3D Architectural Rendering,
              highly recommended her team.
            </p>
          </div>
        </div>
        <div className="comments__slide">
          <div className="comments__slide__content">
            <img src={avatar3} />
            <p>Great experience! Amazing and fast work! They know exactly what I asked for.</p>
          </div>
        </div>
        <div className="comments__slide">
          <div className="comments__slide__content">
            <img src={avatar4} />
            <p>
              Outstanding company! Talented, honest, hardworking and exceeded our expectations. Young company
              on the move. Highly recommended.
            </p>
          </div>
        </div>
        <div className="comments__slide">
          <div className="comments__slide__content">
            <img src={avatar3} />
            <p>
              We had the pleasure of working with Elite design studio on our custom home. We collaborated
              closely with them on the interior design. They also helped with a vision for the landscape and
              conceptional planning for the property. We are very pleased with the high level of design and
              service they provide. Highly recommended.
            </p>
          </div>
        </div>
        <div className="comments__slide">
          <div className="comments__slide__content">
            <img src={avatar4} />
            <p>
              We have hired Ellie to do 360 virtual tour for our new development project. They were able to
              finish a 50 unit apartment tour within 2 week, everything was correct!! Our whole team and the
              client were very impressed.
            </p>
          </div>
        </div>
      </Slider>

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
