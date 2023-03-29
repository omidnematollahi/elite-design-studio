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
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 2,
    speed: 500,
  };
  return (
    <div className={`comments ${toggle ? 'toggled animate__animated animate__slideInUp' : ''}`}>
      <h2 className="comments__heading">Testimonials</h2>
      <Slider {...settings}>
        <div className="comments__slide">
          <img src={avatar1} />
        </div>
        <div className="comments__slide">
          <img src={avatar2} />
        </div>
        <div className="comments__slide">
          <img src={avatar3} />
        </div>
        <div className="comments__slide">
          <img src={avatar4} />
        </div>
        <div className="comments__slide">
          <img src={avatar3} />
        </div>
        <div className="comments__slide">
          <img src={avatar4} />
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
