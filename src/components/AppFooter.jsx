import './AppFooter.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logoDarkIcon from '../assets/icons/LogoDark.svg';
import logoLightIcon from '../assets/icons/LogoLight.svg';
import ellipse4 from '../assets/background/Ellipse4.svg';
import ellipse5 from '../assets/background/Ellipse5.svg';
import ellipse6 from '../assets/background/Ellipse6.svg';

const AppFooter = () => {
  const settings = useSelector((state) => state.settings);

  return (
    <div className="container">
      <footer>
        <div className="footer-item-left">
          <div className="footer-item logo">
            <Link to="/">
              <img src={settings.theme === 'light-mode' ? logoDarkIcon : logoLightIcon} alt="Logo" />
            </Link>
            <p className="copyright">© 2024 Surajit Maity. All Rights Reserved.</p>
          </div>
        </div>
        <div className="footer-item-right">
          <div className="footer-item links">
            <div className="title">Links</div>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>Tech Stack</li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-item elsewhere">
            <div className="title">Elsewhere</div>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/surajit-maity" target="_blank">Linkedin</a>
              </li>
              <li>
                <a href="https://github.com/Surajit05021997" target="_blank">Github</a>
              </li>
            </ul>
          </div>
        </div>
        <img className="background ellipse ellipse-4" src={ellipse4} alt="" />
        <img className="background ellipse ellipse-5" src={ellipse5} alt="" />
        <img className="background ellipse ellipse-6" src={ellipse6} alt="" />
      </footer>
    </div>
  )
}

export default AppFooter;
