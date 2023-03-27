import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

import './footer.scss';

export function Footer({ toggle }) {
  return (
    <div className={`footer ${toggle ? 'visible animate__animated animate__slideInUp' : ''}`}>
      <div className="footer__menu">
        <ul>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/projects'}>Projects</Link>
          </li>
          <li>
            <Link to={'/services'}>Services</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="footer__info">
        <div className="footer__social">
          <a>
            <Icon icon="ph:pinterest-logo-bold" />
          </a>
          <a>
            <Icon icon="ri:linkedin-fill" />
          </a>
          <a>
            <Icon icon="ph:instagram-logo-bold" />
          </a>
          <a>
            <Icon icon="ri:facebook-fill" />
          </a>
        </div>
        <div className="footer__address">
          <p>1152 Dista Park Drive, Unit FT Forest, TR 52369</p>
          <p>
            <a href="tel:+19869828563">
              <span>(986) 982-8563</span>
            </a>
          </p>
          <p>
            <a href="mailto:info@elitedesignstudio.com">info@elitedesignstudio.com</a>
          </p>
        </div>
      </div>
      <div className="footer__copyright">
        <h6>Copyright 2023 | elitedesignstudio | All Right Reserved</h6>
      </div>
    </div>
  );
}

export default Footer;
