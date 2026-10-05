import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <main className="contact-page">
      <section className="contact-section">
        <div className="contact-container">

          {/* ================= LEFT ================= */}
          <div className="contact-info">

            <div className="contact-label">
              CONTACT US
            </div>

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

              {/* Email */}
              <div className="contact-detail">
                <div className="contact-icon email-icon">
                  ✉
                </div>

                <div>
                  <h3>Email</h3>
                  <a href="mailto:support@safekidgo.com">
                    support@safekidgo.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-detail">
                <div className="contact-icon">
                  ☎
                </div>

                <div>
                  <h3>Phone</h3>
                  <a href="tel:+918081661570">
                    +91 80816 61570
                  </a>
                </div>
              </div>

              {/* Office */}
              <div className="contact-detail">
                <div className="contact-icon">
                  📍
                </div>

                <div>
                  <h3>Office</h3>
                  <p>
                    Lucknow, Uttar
                    <br />
                    Pradesh, India
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="contact-form-wrapper">

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-group">
                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>

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

              {submitted && (
                <div className="success-message">
                  Your message has been submitted successfully.
                </div>
              )}

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