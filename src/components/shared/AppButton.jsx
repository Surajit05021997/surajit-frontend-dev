import './AppButton.scss';
import PropTypes from 'prop-types';

const AppButton = ({type = 'primary', label}) => {
  return (
    <button className={`app-btn ${type}`}>{label}</button>
  )
}

AppButton.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
}

export default AppButton;
