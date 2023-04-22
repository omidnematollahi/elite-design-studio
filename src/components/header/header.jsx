import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/images/logo.png';
import whiteLogo from '../../assets/images/white-logo.png';
import './header.scss';

export default function Header({ onToggleSideBar, sidebarVisibility }) {
  const location = useLocation();
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuToggled, setMenuToggled] = useState(false);
  let lastScrollTop = 0;
  useEffect(() => {
    window.addEventListener('scroll', () => {
      var st = window.pageYOffset || document.documentElement.scrollTop;
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
    <div className="header" id="header" ref={headerRef}>
      <div className="header__logo">
        <Link to={'/'}>
          {location.pathname === '/projects' ? <img src={logo} /> : <img src={scrolled ? logo : whiteLogo} />}
        </Link>
      </div>
      <div className="header__menu">
        <div className="header__menu-navigator">
          <a
            className={`hamburger ${scrolled ? 'header__link--scrolled' : ''} ${menuToggled ? 'open' : ''}`}
            onClick={toggleSidebar}
          >
            <span className={`${scrolled || location.pathname === '/projects' ? 'scrolled' : ''}`}></span>
            <span className={`${scrolled || location.pathname === '/projects' ? 'scrolled' : ''}`}></span>
            <span className={`${scrolled || location.pathname === '/projects' ? 'scrolled' : ''}`}></span>
          </a>
        </div>
      </div>
    </div>
  );
}
