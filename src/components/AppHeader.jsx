import sunIcon from '../assets/icons/Sun.svg';
import moonIcon from '../assets/icons/Moon.svg';
import logoDarkIcon from '../assets/icons/LogoDark.svg';
import logoLightIcon from '../assets/icons/LogoLight.svg';
import './AppHeader.scss';
import ellipse1 from '../assets/background/Ellipse1.svg';
import ellipse2 from '../assets/background/Ellipse2.svg';
import ellipse3 from '../assets/background/Ellipse3.svg';
import { useState } from 'react';

const AppHeader = () => {
  const [theme, setTheme] = useState('dark-mode');

  const toggleTheme = () => {
    if (theme === 'light-mode') {
      setTheme('dark-mode');
    } else {
      setTheme('light-mode');
    }
  }

  return (
    <div className="container">
      <header>
        <div className="main-header">
          <div className="header-item-container">
            <div className="header-item logo">
              <img src={theme === 'light-mode' ? logoDarkIcon : logoLightIcon} alt="Logo" />
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
              <img id={theme} src={theme === 'light-mode' ? sunIcon : moonIcon} alt="Theme controller" />
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
