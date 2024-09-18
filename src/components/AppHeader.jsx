import './AppHeader.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateTheme } from '../store/settingsSlice';
import sunIcon from '../assets/icons/Sun.svg';
import moonIcon from '../assets/icons/Moon.svg';
import linkedinLightIcon from '../assets/icons/LinkedInLight.svg';
import linkedinDarkIcon from '../assets/icons/LinkedInDark.svg';
import githubLightIcon from '../assets/icons/GithubLight.svg';
import githubDarkIcon from '../assets/icons/GithubDark.svg';
import logoDarkIcon from '../assets/icons/LogoDark.svg';
import logoLightIcon from '../assets/icons/LogoLight.svg';
import ellipse1 from '../assets/background/Ellipse1.svg';
import ellipse2 from '../assets/background/Ellipse2.svg';
import ellipse3 from '../assets/background/Ellipse3.svg';

const AppHeader = () => {
  const [headerExtraNavMenuExpanded, setHeaderExtraNavMenuExpanded] = useState(false);
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      dispatch(updateTheme(theme));
    }
  }, []);

  const toggleHeaderExtraNavMenu = () => {
    setHeaderExtraNavMenuExpanded(!headerExtraNavMenuExpanded);
  }

  const closeHeaderExtraNavMenu = () => {
    setHeaderExtraNavMenuExpanded(false);
  }

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
    <div className="container stiky-header">
      <header>
        <div className="main-header">
          <div className="header-item-container">
            <div className="header-item logo">
              <Link>
                <img src={settings.theme === 'light-mode' ? logoDarkIcon : logoLightIcon} alt="Logo" />
              </Link>
            </div>
            <div className="header-item navbar">
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/work">Work</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li onClick={toggleHeaderExtraNavMenu}>More</li>
              </ul>
              <ul className={`extra-nav-menu ${headerExtraNavMenuExpanded ? 'expanded' : 'collapsed'}`}>
                <li>
                <Link to="/techstack" onClick={closeHeaderExtraNavMenu}>Tech Stack</Link>
              </li>
              </ul>
            </div>
          </div>
          <div className="header-item-container">
            <div className="header-item social-handle">
              <a href="https://www.linkedin.com/in/surajit-maity" target="_blank">
                <img src={settings.theme === 'light-mode' ? linkedinDarkIcon : linkedinLightIcon} alt="" />
              </a>
              <a href="https://github.com/Surajit05021997" target="_blank">
                <img src={settings.theme === 'light-mode' ? githubDarkIcon : githubLightIcon} alt="" />
              </a>
            </div>
            <div className="separator"></div>
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
