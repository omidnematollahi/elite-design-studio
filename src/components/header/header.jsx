import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.png';
// import whiteLogo from '../../assets/images/white-logo.png';
import './header.scss';

export default function Header({ onToggleSideBar, sidebarVisibility }) {
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuToggled, setMenuToggled] = useState(false);
  let lastScrollTop = 0;
  useEffect(() => {
    window.addEventListener('scroll', () => {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      console.log(st);
      if (st > lastScrollTop) {
        headerRef.current.style.background = '#fff';
        setScrolled(true);
      } else if (st < lastScrollTop && st === 0) {
        headerRef.current.style.background = 'transparent';
        setScrolled(false);
      }

      lastScrollTop = st <= 0 ? 0 : st;
    });
  }, []);

  useEffect(() => {
    setMenuToggled(sidebarVisibility);
  }, [sidebarVisibility]);

  const toggleSidebar = () => {
    onToggleSideBar(!menuToggled);
    setMenuToggled(!menuToggled);
  };

  return (
    <div className="header" ref={headerRef}>
      <div className="header__logo">
        <Link to={'/'}>
          <img src={logo} />
        </Link>

        {/* <img src={scrolled ? logo : whiteLogo} /> */}
      </div>
      <div className="header__menu">
        {/* <ul className="header__nav">
          <li>
            <a className={`header__link ${scrolled ? 'header__link--scrolled' : ''}`}>About us</a>
          </li>
          <li>
            <a className={`header__link ${scrolled ? 'header__link--scrolled' : ''}`}>Services</a>
          </li>
          <li>
            <a className={`header__link ${scrolled ? 'header__link--scrolled' : ''}`}>Projects</a>
          </li>
          <li>
            <a className={`header__link ${scrolled ? 'header__link--scrolled' : ''}`}>contact</a>
          </li>
        </ul> */}
        <div className="header__menu-navigator">
          <a
            className={`hamburger ${scrolled ? 'header__link--scrolled' : ''} ${menuToggled ? 'open' : ''}`}
            onClick={toggleSidebar}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
    </div>
  );
}
