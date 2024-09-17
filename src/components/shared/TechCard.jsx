import './TechCard.scss';
import PropTypes from 'prop-types';
import getImageUrl from '../../utils/getImageUrl';

const TechCard = ({ iconPath, iconName, techName }) => {
  return (
    <div className="tech-card">
      <img className="tech-icon" src={getImageUrl(iconPath, iconName)} alt="Icon" />
      <div className="tech-name">{techName}</div>
    </div>
  )
}

TechCard.propTypes = {
  iconPath: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  techName: PropTypes.string.isRequired,
}

export default TechCard;
