import './AppButton.scss';
import PropTypes from 'prop-types';

const AppButton = ({type = 'primary', label, onClick}) => {
  return (
    <button className={`app-btn ${type}`.trim()} onClick={onClick}>
      {label}
    </button>
  )
}

AppButton.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default AppButton;
