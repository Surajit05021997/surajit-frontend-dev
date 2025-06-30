import PropTypes from 'prop-types';
import './AppPopup.scss';

const AppPopup = ({ message, onClose }) => (
  <div className="popup-overlay">
    <div className="popup-box">
      <span className="popup-message">{message}</span>
      <button className="popup-close" onClick={onClose}>Close</button>
    </div>
  </div>
);

AppPopup.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AppPopup;
