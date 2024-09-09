import './AppFooter.scss';
import { useSelector } from 'react-redux';
import logoDarkIcon from '../assets/icons/LogoDark.svg';
import logoLightIcon from '../assets/icons/LogoLight.svg';

const AppFooter = () => {
  const settings = useSelector((state) => state.settings);

  return (
    <div className="container">
      <footer className="footer">
        <div className="footer-item-left">
          <div className="footer-item logo">
            <img src={settings.theme === 'light-mode' ? logoDarkIcon : logoLightIcon} alt="Logo" />
            <p className="copyright">© 2024 Surajit Maity. All Rights Reserved.</p>
          </div>
        </div>
        <div className="footer-item-right">
          <div className="footer-item links">
            <div className="title">Links</div>
            <ul>
              <li>About</li>
              <li>Work</li>
              <li>Tech Stack</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-item elsewhere">
            <div className="title">Elsewhere</div>
            <ul>
              <li>Email</li>
              <li>Linkedin</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AppFooter;
