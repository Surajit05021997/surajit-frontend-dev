import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import HomePage from '../components/HomePage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      }
    ],
  },
]);

export default router;
