import './App.scss';
import './components/AppHeader';
import AppHeader from './components/AppHeader';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <AppHeader />
      <main className="container">
        <Outlet />
      </main>
    </div>
  )
}

export default App;
