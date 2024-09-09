import './WorkCard.scss';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import getImageUrl from '../../utils/getImageUrl';
import laptopPlaceholder from '../../assets/images/LaptopPlaceholder.png';
import arrowRightDark from '../../assets/icons/arrowRightDark.svg';
import arrowRightLight from '../../assets/icons/arrowRightLight.svg';

const WorkCard = ({ work }) => {
  const { logoName, title, body, siteImageName, siteUrl } = work;
  const settings = useSelector((state) => state.settings);

  return (
    <div className="work-card">
      <div className="info">
        <div>
          <img className="logo" src={getImageUrl('/src/assets/work', logoName)} alt="" />
          <h3 className="title">{title}</h3>
          <p>{body}</p>
        </div>
        <a className="site-link" href={siteUrl} target="_blank">
          <div>Visit Site</div>
          <img className="right-arrow" src={settings.theme === 'light-mode' ? arrowRightDark : arrowRightLight} alt="" />
        </a>
      </div>
      {
        siteImageName ? (
          <div className="image">
            <img className="laptop-placeholder" src={laptopPlaceholder} alt="Laptop placeholder" />
            <img className="site-image" src={getImageUrl('/src/assets/work', siteImageName)} alt="" />
          </div>
        ) : ('')
      }
    </div>
  )
}

WorkCard.propTypes = {
  work: PropTypes.object.isRequired,
}

export default WorkCard;
