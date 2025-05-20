import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/PartnerWithUs.css';
import partnerImage from '../assets/img/PartnerWithUs.jpg'; // Add an image in assets

const PartnerWithUs = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
        'service_izvjzsr',
        'template_jxcxrrl',
        form.current,
        'jlZMDzKYLKFJ9SwUH'
      )
    .then(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
      }, 2000);
      form.current.reset();
    }, () => {
      setIsSending(false);
      alert('Failed to send. Please try again.');
    });
  };

  return (
    <section className="partner-wrapper">
      <div className="partner-left">
        <img src={partnerImage} alt="Partner with us" />
      </div>

      <div className="partner-right">
        <h2>Become a Partner</h2>
        <p>
          Collaborate with us to expand your immigration consultancy. Gain access
          to verified leads, shared resources, and co-branding opportunities.
        </p>

        <form ref={form} onSubmit={sendEmail} className="partner-form">
          <input type="text" name="agency" placeholder="Agency Name" required />
          <input type="email" name="user_email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder="Phone" />
          <input type="Text" name="message" placeholder="Message" />
          <button type="submit" disabled={isSending}>{isSending ? 'Sending...' : 'Submit Request'}</button>
        </form>
      </div>

      {/* Loader Overlay */}
      {(isSending || isSent) && (
        <div className="animation-modal-overlay">
          <div className="animation-modal-content">
            {isSending && (
              <>
                <span className="loader"></span>
                <p>Sending...</p>
              </>
            )}
            {isSent && (
              <>
                <span className="checkmark">✔</span>
                <p>Request Sent Successfully!</p>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default PartnerWithUs;
