import './ContactPage.scss';
import macOSControls from '../assets/icons/MacOSControls.svg';
import AppButton from './shared/AppButton';

const ContactPage = () => {
  return (
    <>
      <div className="container">
        <div className="contact-page">
          <h1 className="title">Get in touch</h1>
          <p className="subtitle">Let’s build something awesome.</p>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="contact-page">
          <div className="form-container">
            <div className="header">
              <img src={macOSControls} alt="Mac OS Controls" />
            </div>
            <hr />
            <form>
              <div className="field">
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" placeholder="Enter you email address" />
              </div>
              <hr />
              <div className="field">
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" placeholder="Enter your name" />
              </div>
              <hr />
              <div className="field">
                <label htmlFor="subject">Subject:</label>
                <input id="subject" type="text" placeholder="Enter subject" />
              </div>
              <hr />
              <div className="field">
                <textarea name="message" id="message" placeholder="Write your message here"></textarea>
              </div>
              <div className="send-btn">
                <AppButton label="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage;
