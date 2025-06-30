import AppButton from './AppButton';
import PropTypes from 'prop-types';
import './AppPopup.scss';

const AppPopup = ({ message, onClose }) => (
  <div className="popup-overlay">
    <div className="popup-box">
      <span className="popup-message">{message}</span>
      <AppButton className="popup-close" label="Close" onClick={onClose} />
    </div>
  </div>
);

AppPopup.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AppPopup;
