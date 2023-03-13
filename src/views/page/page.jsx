import './page.scss';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Header from '../../components/header/header';
import SideBar from '../../components/sidebar/sidebar';

import capitalizeFirstLetter from '../../utils/capitalize-first-letter';
import { ROUTE_LIST } from '../../constants/routes';

import About from '../about/about';
import Contact from '../contact/contact';
import Projects from '../projects/projects';
import Services from '../services/services';

function Page() {
  const navigate = useNavigate();
  const params = useParams();

  let { page } = params;
  page = capitalizeFirstLetter(page);

  const componentMap = {
    About,
    Contact,
    Projects,
    Services,
  };

  const [sideBarFlag, setSideBarFlag] = useState(false);

  const onToggleSideBar = (sideBarToggleFlag) => {
    setSideBarFlag(sideBarToggleFlag);
  };

  const [menuItems, setMenuItems] = useState(ROUTE_LIST);
  const [sidebarAnimated, setSidebarAnimated] = useState(true);

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

  const renderComponent = () => {
    const Component = componentMap[page];
    return <Component />;
  };

  const animationStart = (animationEndFlag) => {
    setSidebarAnimated(animationEndFlag);
  };

  const animationEnd = (targetRoute, animationEndFlag) => {
    setSidebarAnimated(animationEndFlag);
    setSideBarFlag(false);
    navigate(targetRoute);
  };

  useEffect(() => {
    console.log('page loaded');
  }, []);

  return (
    <div className="page">
      <Header onToggleSideBar={onToggleSideBar} sidebarVisibility={sideBarFlag} />
      <SideBar
        items={menuItems}
        toggle={sideBarFlag}
        animationStart={animationStart}
        animationEnd={animationEnd}
        trackSideBarVisibility={trackSideBarVisibility}
        onRouteChange={onRouteChange}
      />
      <div className="page-content">{sidebarAnimated ? renderComponent() : ''}</div>
    </div>
  );
}

export default Page;
