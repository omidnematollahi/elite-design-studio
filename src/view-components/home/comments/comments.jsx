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
  useEffect(() => {}, []);
  return (
    <div className={`comments ${toggle ? 'toggled animate__animated animate__slideInUp' : ''}`}>
      <div className="testimonials-section">
        <input type="radio" name="slider" title="slide1" checked="checked" readOnly className="slider__nav" />
        <input type="radio" name="slider" title="slide2" className="slider__nav" />
        <input type="radio" name="slider" title="slide3" className="slider__nav" />
        <input type="radio" name="slider" title="slide4" className="slider__nav" />
        <input type="radio" name="slider" title="slide5" className="slider__nav" />
        <div className="slider__inner">
          <div className="slider__contents">
            <span className="quote">&rdquo;</span>
            <p className="slider__txt">
              We love you guys. It's easy to order, we get shipments quick and my rep solves tough problems
              the right way. We get answers that work.
            </p>
            <h2 className="slider__caption">Rhonda | NylonCraft</h2>
          </div>
          <div className="slider__contents">
            <span className="quote">&rdquo;</span>
            <p className="slider__txt">
              You all bend over backwards to get it done. Inside sales and the Account Managers are great!
              It's your service...you all know that it's not just about taking orders it's about service. Why
              do we choose you guys - your people, your prices, you're quick and you have a ton of technical
              knowledge.
            </p>
            <h2 className="slider__caption">Jared | Rexam</h2>
          </div>
          <div className="slider__contents">
            <span className="quote">&rdquo;</span>
            <p className="slider__txt">
              It's the long-term relationship we have with Proheat that keeps me calling you guys. I trust
              you, you're quick, and everybody I've ever spoken to there are all great people. Our CEO, Bill,
              talks about building relationships. That's exactly what Proheat does, and I couldn't be happier.
            </p>
            <h2 className="slider__caption">Chris | C&M Fine Pack</h2>
          </div>
          <div className="slider__contents">
            <span className="quote">&rdquo;</span>
            <p className="slider__txt">
              You answer my questions, always takes care of problems, and I never have a hassle.
            </p>
            <h2 className="slider__caption">Rex | LNP Engineering Plastics</h2>
          </div>
          <div className="slider__contents">
            <span className="quote">&rdquo;</span>
            <p className="slider__txt">
              Proheat's staff are all so friendly and everybody goes above and beyond. Everyone is courteous,
              everything is quick and you get us what we need. I have to shop around for everything and we
              ALWAYS come back to Proheat.
            </p>
            <h2 className="slider__caption">Darlene | Russel Stover</h2>
          </div>
        </div>
      </div>

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
