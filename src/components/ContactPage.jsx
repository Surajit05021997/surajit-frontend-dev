import './ContactPage.scss';
import macOSControls from '../assets/icons/MacOSControls.svg';
import AppButton from './shared/AppButton';
import AppPopup from './shared/AppPopup';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const form = useRef();
  const [popup, setPopup] = useState({ show: false, message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
    .then(() => {
      setPopup({ show: true, message: 'Message sent successfully!' });
      form.current.reset();
    }, () => {
      setPopup({ show: true, message: 'Failed to send message.' });
    });
  };

  return (
    <>
      {popup.show && <AppPopup message={popup.message} onClose={() => setPopup({ show: false, message: '' })} />}
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
            <form ref={form} onSubmit={sendEmail}>
              <div className="field">
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" placeholder="Enter you email address" required />
              </div>
              <hr />
              <div className="field">
                <label htmlFor="name">Name:</label>
                <input id="name" name="name" type="text" placeholder="Enter your name" required />
              </div>
              <hr />
              <div className="field">
                <label htmlFor="subject">Subject:</label>
                <input id="subject" name="subject" type="text" placeholder="Enter subject" required />
              </div>
              <hr />
              <div className="field">
                <textarea name="message" id="message" placeholder="Write your message here" required></textarea>
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
