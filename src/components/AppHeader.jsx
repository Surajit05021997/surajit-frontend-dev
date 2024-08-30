import './AppHeader.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateTheme } from '../store/settingsSlice';
import sunIcon from '../assets/icons/Sun.svg';
import moonIcon from '../assets/icons/Moon.svg';
import logoDarkIcon from '../assets/icons/LogoDark.svg';
import logoLightIcon from '../assets/icons/LogoLight.svg';
import ellipse1 from '../assets/background/Ellipse1.svg';
import ellipse2 from '../assets/background/Ellipse2.svg';
import ellipse3 from '../assets/background/Ellipse3.svg';

const AppHeader = () => {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      dispatch(updateTheme(theme));
    }
  }, []);

  const toggleTheme = () => {
    if (settings.theme === 'light-mode') {
      dispatch(updateTheme('dark-mode'));
      localStorage.setItem('theme', 'dark-mode');
    } else {
      dispatch(updateTheme('light-mode'));
      localStorage.setItem('theme', 'light-mode');
    }
  }

  return (
    <div className="container">
      <header>
        <div className="main-header">
          <div className="header-item-container">
            <div className="header-item logo">
              <img src={settings.theme === 'light-mode' ? logoDarkIcon : logoLightIcon} alt="Logo" />
            </div>
            <div className="header-item navbar">
              <ul>
                <li>About</li>
                <li>Work</li>
                <li>Contact</li>
                <li>More</li>
              </ul>
            </div>
          </div>
          <div className="header-item-container">
            <div className="header-item social-handle"></div>
            <div className="header-item theme-controler" onClick={toggleTheme}>
              <img id={settings.theme} src={settings.theme === 'light-mode' ? sunIcon : moonIcon} alt="Theme controller" />
            </div>
          </div>
        </div>
        <div className="background">
          <img className="ellipse ellipse-1" src={ellipse1} alt="" />
          <img className="ellipse ellipse-2" src={ellipse2} alt="" />
          <img className="ellipse ellipse-3" src={ellipse3} alt="" />
        </div>
      </header>
    </div>
  );
}

export default AppHeader;
