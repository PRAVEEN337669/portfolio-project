import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">
          Get In <span className="blue-text">Touch</span>
        </h2>

        <p className="section-desc">
          Have a project in mind or just want to say hi? Feel free to reach out
          by filling out the form below. I'll get back to you as soon as
          possible!
        </p>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-box">
              <h4>📍 Location</h4>
              <p>Nagapattinam, Tamil Nadu, India</p>
            </div>

            <div className="info-box">
              <h4>📧 Email</h4>
              <p>praveen744600@email.com</p>
            </div>

            <div className="info-box">
              <h4>📱 Social</h4>
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/praveen-muruganantham-677713421/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/PRAVEEN337669"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea
              placeholder="How can I help you?"
              rows="5"
              required
            ></textarea>

            <button type="submit" className="btn-main">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;