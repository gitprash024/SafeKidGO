import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-left">

        <span>CONTACT US</span>

        <h2>
          We'd Love To Hear From You
        </h2>

        <p>
          Have questions about SafeKid Go? Reach out to us and our team
          will help you as soon as possible.
        </p>

        <div className="contact-info">

          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <div>
              <h4>Email</h4>
              <p>support@safekidgo.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhoneAlt className="info-icon" />
            <div>
              <h4>Phone</h4>
              <p>+91 80816 61570</p>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h4>Office</h4>
              <p>Lucknow, Uttar Pradesh, India</p>
            </div>
          </div>

        </div>

      </div>

      <div className="contact-right">

        <form>

          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Email Address" />

          <input type="text" placeholder="Subject" />

          <textarea
            rows={6}
            placeholder="Write your message..."
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;