import React, { useState } from "react";
import type { FormEvent } from "react";
import "./ContactPage.css";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Temporary form handling
    console.log("Contact Form:", formData);

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">
      <section className="contact-section">
        <div className="contact-container">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <span className="contact-label">CONTACT US</span>

            <h1>
              We'd Love
              <br />
              To Hear
              <br />
              From You
            </h1>

            <p className="contact-description">
              Have questions about SafeKid Go? Reach out to us and our
              team will help you as soon as possible.
            </p>

            <div className="contact-details">

              {/* EMAIL */}
              <div className="contact-detail">
                <div className="contact-icon email-icon">
                  <span>✉</span>
                </div>

                <div>
                  <h3>Email</h3>
                  <a href="mailto:support@safekidgo.com">
                    support@safekidgo.com
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="contact-detail">
                <div className="contact-icon phone-icon">
                  <span>☎</span>
                </div>

                <div>
                  <h3>Phone</h3>
                  <a href="tel:+918081661570">
                    +91 80816 61570
                  </a>
                </div>
              </div>

              {/* OFFICE */}
              <div className="contact-detail">
                <div className="contact-icon location-icon">
                  <span>●</span>
                </div>

                <div>
                  <h3>Office</h3>
                  <p>
                    Lucknow, Uttar Pradesh,
                    <br />
                    India
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-form-wrapper">

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-group">
                <label htmlFor="name">Your Name</label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>

              <button
                type="submit"
                className="contact-submit"
              >
                Send Message
                <span>→</span>
              </button>

            </form>
          </div>

        </div>
      </section>
    </main>
  );
};

export default ContactPage;
