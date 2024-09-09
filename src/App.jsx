import './App.scss';
import './components/AppHeader';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <AppHeader />
      <main className="container">
        <Outlet />
      </main>
      <hr />
      <AppFooter />
    </div>
  )
}

export default App;
