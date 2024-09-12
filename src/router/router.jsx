import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import HomePage from '../components/HomePage.jsx';
import AboutPage from '../components/AboutPage.jsx';
import ContactPage from '../components/ContactPage.jsx';
import WorkPage from '../components/WorkPage.jsx';
import TechStackPage from '../components/TechStackPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/work',
        element: <WorkPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/techstack',
        element: <TechStackPage />,
      },
    ],
  },
]);

export default router;
