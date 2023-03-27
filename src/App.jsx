import './App.scss';
import React, { useState, useEffect } from 'react';
import Header from './components/header/header';
import SideBar from './components/sidebar/sidebar';
import About from './views/about/about';
import Contact from './views/contact/contact';
import Projects from './views/projects/projects';
import Services from './views/services/services';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './components/footer/footer';
import ScrollToTop from './utils/scrollToTop';

const SmoothMove = React.lazy(() => import('./components/smooth-move/smooth-move'));

function App() {
  const navigate = useNavigate();
  const [siteLoaded, setSiteLoaded] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(sessionStorage.getItem('firstAnimationVisited'));

  useEffect(() => {
    setTimeout(() => {
      setSiteLoaded(true);
      sessionStorage.setItem('firstAnimationVisited', siteLoaded);
    }, 9000);
  }, []);

  useEffect(() => {
    if (Boolean(loadingStatus)) {
      setSiteLoaded(true);
    }
  }, [loadingStatus]);

  const [sideBarFlag, setSideBarFlag] = useState(false);

  const onToggleSideBar = (sideBarToggleFlag) => {
    setSideBarFlag(sideBarToggleFlag);
  };
  const routeList = [
    { name: 'About us', path: '/about', expand: false, view: <About onSidebarChange={onToggleSideBar} /> },
    {
      name: 'Projects',
      path: '/projects',
      expand: false,
      view: <Projects onSidebarChange={onToggleSideBar} />,
    },
    {
      name: 'Contact us',
      path: '/contact',
      expand: false,
      view: <Contact onSidebarChange={onToggleSideBar} />,
    },
    {
      name: 'Services',
      path: '/services',
      expand: false,
      view: <Services onSidebarChange={onToggleSideBar} />,
    },
  ];
  const [menuItems, setMenuItems] = useState(routeList);
  const trackSideBarVisibility = (sidebarVisibility) => {
    setSideBarFlag(sidebarVisibility);
  };
  const onRouteChange = (idx, sidebarVisibility) => {
    setMenuItems((menuItemsState) => {
      const copy = [...menuItemsState];
      const newArray = copy.map((item, index) => {
        item.expand = index === idx ? true : false;
        return item;
      });
      return newArray;
    });
    setSideBarFlag(sidebarVisibility);
  };

  const animationStart = (aa) => {
    console.log(aa);
  };

  const animationEnd = (targetRoute, animationEndFlag, idx) => {
    navigate(targetRoute);
    setSideBarFlag(false);
    setMenuItems((menuItemsState) => {
      const copy = [...menuItemsState];
      const newArray = copy.map((item, index) => {
        item.expand = false;
        item.noAnimation = index === idx ? true : false;
        return item;
      });
      return newArray;
    });
    setTimeout(() => {
      setMenuItems((menuItemsState) => {
        const copy = [...menuItemsState];
        const newArray = copy.map((item) => {
          item.noAnimation = false;
          return item;
        });
        return newArray;
      });
    }, 2000);
  };

  return (
    <div className="App">
      {!siteLoaded && !loadingStatus ? (
        <SmoothMove />
      ) : siteLoaded ? (
        <>
          <ScrollToTop />
          <div className="page-container">
            <Header onToggleSideBar={onToggleSideBar} sidebarVisibility={sideBarFlag} />
            <SideBar
              items={menuItems}
              toggle={sideBarFlag}
              trackSideBarVisibility={trackSideBarVisibility}
              onRouteChange={onRouteChange}
              animationStart={animationStart}
              animationEnd={animationEnd}
            />
            <div className="wrapper">
              <Outlet />
            </div>
            {/* <div className="home__footer">
              <Footer></Footer>
            </div> */}
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
