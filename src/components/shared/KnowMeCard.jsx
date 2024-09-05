import './KnowMeCard.scss';
import PropTypes from 'prop-types';
import getImageUrl from '../../utils/getImageUrl';

const KnowMeCard = ({knowMeCardDetails}) => {
  const {title, subtitle, imageName} = knowMeCardDetails;
  return (
    <div className="know-me-card">
      <h3 className="title">{title}</h3>
      <div className="subtitle">{subtitle}</div>
      <img src={getImageUrl('/src/assets/images', imageName)} alt="" />
    </div>
  )
}

KnowMeCard.propTypes = {
  knowMeCardDetails: PropTypes.object.isRequired,
}

export default KnowMeCard;
