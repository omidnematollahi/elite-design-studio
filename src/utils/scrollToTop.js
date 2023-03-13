import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
    const element = document.getElementsByClassName('wrapper')[0];
    element.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
