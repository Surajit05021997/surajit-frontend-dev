import './AppHeader.scss';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateTheme } from '../store/settingsSlice';
import sunIcon from '../assets/icons/Sun.svg';
import moonIcon from '../assets/icons/Moon.svg';
import linkArrowLightIcon from '../assets/icons/LinkArrowLight.svg';
import linkArrowDarkIcon from '../assets/icons/LinkArrowDark.svg';
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
  const [themeAnim, setThemeAnim] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const settings = useSelector((state) => state.settings);
  const extraNavMenuEl = useRef(null);
  const moreNavItemEl = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      dispatch(updateTheme(theme));
    }

    document.addEventListener('click', handleExtraNavMeuCollapse);
  }, [dispatch]);

  useEffect( () => () => document.removeEventListener('click', handleExtraNavMeuCollapse), [] );

  const handleExtraNavMeuCollapse = (event) => {
    if(event.target !== extraNavMenuEl.current && event.target.parentElement !== moreNavItemEl.current) {
      setHeaderExtraNavMenuExpanded(false);
    }
  }

  const toggleHeaderExtraNavMenu = () => {
    setHeaderExtraNavMenuExpanded(!headerExtraNavMenuExpanded);
  }

  const closeHeaderExtraNavMenu = () => {
    setHeaderExtraNavMenuExpanded(false);
  }

  const toggleTheme = () => {
    setThemeAnim(true);
    setTimeout(() => setThemeAnim(false), 400); // match animation duration
    if (settings.theme === 'light-mode') {
      dispatch(updateTheme('dark-mode'));
      localStorage.setItem('theme', 'dark-mode');
    } else {
      dispatch(updateTheme('light-mode'));
      localStorage.setItem('theme', 'light-mode');
    }
  }

  const handleMobileNavToggle = () => {
    setMobileNavOpen(!mobileNavOpen);
  }

  return (
    <div className="container">
      <header>
        <div className="main-header">
          <div className="header-item-container">
            <div className="header-item logo">
              <Link>
                <img src={settings.theme === 'light-mode' ? logoDarkIcon : logoLightIcon} alt="Logo" />
              </Link>
            </div>
            <div className={`header-item navbar${mobileNavOpen ? ' expanded' : ' collapsed'}`}>
              <ul>
                <li>
                  <Link to="/about" onClick={handleMobileNavToggle}>About</Link>
                </li>
                <li>
                  <Link to="/work" onClick={handleMobileNavToggle}>Work</Link>
                </li>
                <li>
                  <Link to="/contact" onClick={handleMobileNavToggle}>Contact</Link>
                </li>
                <li className="only-desktop" onClick={toggleHeaderExtraNavMenu} ref={moreNavItemEl}>
                  <div>More</div>
                  <img className={headerExtraNavMenuExpanded ? 'link-arrow-up' : 'link-arrow-down'} src={settings.theme === 'light-mode' ? linkArrowDarkIcon : linkArrowLightIcon} alt="Link arrow" />
                </li>
                <li className="only-mobile">
                  <Link to="/techstack" onClick={handleMobileNavToggle}>Tech Stack</Link>
                </li>
              </ul>
              <ul className={`extra-nav-menu ${headerExtraNavMenuExpanded ? 'expanded' : 'collapsed'}`} ref={extraNavMenuEl}>
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
            <div className="header-item theme-controller" title="Change Theme" onClick={toggleTheme}>
              <img
                id={settings.theme}
                className={themeAnim ? 'theme-anim' : ''}
                src={settings.theme === 'light-mode' ? sunIcon : moonIcon}
                alt="Theme controller"
              />
            </div>
            <div className="separator second"></div>
            <div className="burger-menu">
              <button className={`burger-menu-icon${mobileNavOpen ? ' open' : ''}`} onClick={handleMobileNavToggle} aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
              </button>
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
