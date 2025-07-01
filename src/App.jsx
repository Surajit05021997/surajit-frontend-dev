import './App.scss';
import './components/AppHeader';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div>
      <ScrollToTop />
      <AppHeader />
      <main>
        <Outlet />
      </main>
      <hr />
      <AppFooter />
    </div>
  )
}

export default App;
