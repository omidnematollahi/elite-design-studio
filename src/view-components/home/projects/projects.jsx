import './projects.scss';
import { animated, useSpring } from '@react-spring/web';
import { useScroll } from 'react-use-gesture';

import firstImage from '@/assets/images/projects/1-min.jpg';
import secondImage from '@/assets/images/projects/2-min.jpg';
import thirdImage from '@/assets/images/projects/3-min.jpg';
import forthImage from '@/assets/images/projects/4-min.jpg';
import fifthImage from '@/assets/images/projects/5-min.jpg';
import sixthImage from '@/assets/images/projects/6-min.JPG';
import seventhImage from '@/assets/images/projects/7-min.JPG';
import eigthImage from '@/assets/images/projects/8-min.JPG';
import ninthImage from '@/assets/images/projects/9-min.JPG';
import tenthImage from '@/assets/images/projects/10-min.JPG';
import eleventhImage from '@/assets/images/projects/11-min.JPG';
import twelfthImage from '@/assets/images/projects/12-min.JPG';
import theThirteenthImage from '@/assets/images/projects/13-min.JPG';
import theForteenthImage from '@/assets/images/projects/14-min.JPG';
import theFifteenthImage from '@/assets/images/projects/15-min.JPG';
import theSixteenthImage from '@/assets/images/projects/16-min.JPG';

import { useHorizontalScroll } from '@/custom-hooks/useHorizontalScroll';

const clamp = (value, clampAt = 5) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

const projectsList = [
  firstImage,
  secondImage,
  thirdImage,
  forthImage,
  fifthImage,
  sixthImage,
  seventhImage,
  eigthImage,
  ninthImage,
  tenthImage,
  eleventhImage,
  twelfthImage,
  theThirteenthImage,
  theForteenthImage,
  theFifteenthImage,
  theSixteenthImage,
];
export function Projects({ toggle }) {
  const scrollRef = useHorizontalScroll();
  const [style, set] = useSpring(() => ({
    transform: 'perspective(500px) rotateY(0deg)',
  }));
  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${event.scrolling ? clamp(event.delta[0]) : 0}deg)`,
    });
  });
  return (
    <div className={`projects-section ${toggle ? 'visible animate__animated animate__slideInUp' : ''}`}>
      <h1>Projects</h1>
      <div className={`projects-section__content`} ref={scrollRef} {...bind()}>
        {projectsList.map((src) => (
          <animated.div
            key={Math.random()}
            className="card"
            style={{
              ...style,
              backgroundImage: `url(${src})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
