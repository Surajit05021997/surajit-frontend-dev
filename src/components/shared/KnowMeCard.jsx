import './KnowMeCard.scss';
import PropTypes from 'prop-types';
import getImageUrl from '../../utils/getImageUrl';
import { Link } from 'react-router-dom';

const KnowMeCard = ({knowMeCardDetails}) => {
  const {title, subtitle, imageName, linkTo} = knowMeCardDetails;
  return (
    <div className="know-me-card">
      <Link to={linkTo}>
        <h3 className="title">{title}</h3>
        <div className="subtitle">{subtitle}</div>
        <img src={getImageUrl('/src/assets/images', imageName)} alt="" />
      </Link>
    </div>
  )
}

KnowMeCard.propTypes = {
  knowMeCardDetails: PropTypes.object.isRequired,
}

export default KnowMeCard;
