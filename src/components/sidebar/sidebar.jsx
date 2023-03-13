import { useEffect, useRef, useState } from 'react';

import './sidebar.scss';
export default function SideBar({
  items,
  toggle,
  trackSideBarVisibility,
  onRouteChange,
  animationEnd,
  animationStart,
}) {
  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const sidebarRef = useRef(null);
  const currentRoute = location.pathname;

  useEffect(() => {
    setSidebarVisibility(toggle);
  }, [toggle]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !(
          event.target.classList.contains('header__menu-navigator') ||
          event.target.classList.contains('header__link')
        )
      ) {
        setSidebarVisibility(false);
        trackSideBarVisibility(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarRef]);

  const onMenuItemClick = (idx) => {
    animationStart(false);
    onRouteChange(idx, sidebarVisibility);
    setSidebarVisibility(false);
    trackSideBarVisibility(false);
    setTimeout(() => {
      animationEnd(items[idx].path, true, idx);
    }, 1000);
  };

  return (
    <div className="sidebar" ref={sidebarRef}>
      {items?.map((menuItem, idx) => {
        return (
          <div
            key={menuItem.name + '' + idx}
            className={`sidebar__item colored-sidebar${idx + 1} 
            ${sidebarVisibility && !menuItem.expand ? 'open' : ''} ${menuItem.expand ? 'expand' : ''} ${
              menuItem.noAnimation ? 'noAnimation' : ''
            }`}
            onClick={() => onMenuItemClick(idx)}
          >
            <div className="sidebar__item__header">
              <h2>{menuItem.name}</h2>
            </div>
            <div className="sidebar__item__content">{menuItem.view}</div>
          </div>
        );
      })}
    </div>
  );
}
