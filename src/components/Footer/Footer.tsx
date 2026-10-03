import "./Footer.css";
import logo from "../../assets/Icon.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-overlay"></div>

      <div className="footer-content">

        {/* Brand */}
        <div className="footer-brand">

          <img src={logo} alt="SafeKid Go logo" />

          <h2>SafeKid Go</h2>

          <p>
            Smart school bus tracking platform built to ensure
            children's safety through real-time monitoring.
          </p>

        </div>


        {/* Quick Links */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>

        </div>


        {/* Support */}
        <div className="footer-column">

          <h3>Support</h3>

          <a href="#">Contact</a>
          <a href="#">FAQs</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>

        </div>


        {/* Contact */}
        <div className="footer-column">

          <h3>Contact</h3>

          <p>support@safekidgo.com</p>
          <p>+91 80816 61570</p>
          <p>+91 92361 81921</p>
          <p>Lucknow, India</p>

        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        © 2026 SafeKid Go. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;