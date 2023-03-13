import About from '../views/about/about';
import Contact from '../views/contact/contact';
import Projects from '../views/projects/projects';
import Services from '../views/services/services';

export const ROUTE_LIST = [
  { name: 'About us', path: '/about', expand: false, view: <About /> },
  {
    name: 'Projects',
    path: '/projects',
    expand: false,
    view: <Projects />,
  },
  {
    name: 'Contact us',
    path: '/contact',
    expand: false,
    view: <Contact />,
  },
  {
    name: 'Services',
    path: '/services',
    expand: false,
    view: <Services />,
  },
];

export default {
  ROUTE_LIST,
};
