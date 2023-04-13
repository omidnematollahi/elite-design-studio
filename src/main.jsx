import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
// import Page from './views/page/page';
import ErrorPage from './view-components/not-found/not-found';
import './index.scss';
import Home from './views/home/home';
import About from './views/about/about';
import Contact from './views/contact/contact';
import Services from './views/services/services';
import Projects from './views/projects/projects';
import Playground from './views/playground/playground';
import ProjectDetail from './views/project-detail/project-detail';
import 'animate.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/projects/:id',
        element: <ProjectDetail />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/services',
        element: <Services />,
      },
    ],
  },
  {
    path: "/playground",
    element: <Playground />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
