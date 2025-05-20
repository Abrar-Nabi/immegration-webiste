import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/modal.css';

const Modal = ({ closeModal }) => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_izvjzsr',
      'template_dai8iak',
      form.current,
      'jlZMDzKYLKFJ9SwUH'
    )
      .then(() => {
        setTimeout(() => {
          setIsSending(false);
          setIsSent(true);
          setTimeout(() => {
            setIsSent(false);
            closeModal();
          }, 2000);
        }, 1000);
      }, (error) => {
        setIsSending(false);
        alert('Failed to send message. Please try again.');
        console.error(error.text);
      });
  };

  return (
    <>
      {/* Main Modal */}
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <button onClick={closeModal} className="modal-close-btn">X</button>
          <h3 className="mb-3 text-center">Request a Quote</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group mb-2">
              <input type="text" name="user_name" className="form-control" placeholder="Your Name" />
            </div>

            <div className="form-group mb-2">
              <span className="required">
                <input
                  type="tel"
                  name="user_phone"
                  className="form-control"
                  placeholder="Phone Number"
                  required
                />*
              </span>
            </div>

            <div className="form-group mb-2">
              <span className="required">
                <input
                  type="email"
                  name="user_email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />*
              </span>
            </div>

            <div className="form-group mb-2">
              <select name="visa_type" className="form-control" required>
                <option value="">Select Visa Type</option>
                <option>Study Visa</option>
                <option>Tourist / Visitor Visa</option>
                <option>Work Permits / Visa</option>
                <option>PR</option>
                <option>Dependent Visa</option>
                <option>School Visa</option>
              </select>
            </div>

            <div className="form-group mb-2">
              <select name="destination_country" className="form-control" required>
                <option value="">Select Country</option>
                <option>USA</option>
                <option>Cyprus</option>
                <option>Ireland</option>
                <option>Canada</option>
                <option>UK</option>
                <option>Australia</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <textarea
                name="message"
                className="form-control"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>

      {/* Second Modal for Sending and Sent Animation */}
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
                <p>Message Sent Successfully!</p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
