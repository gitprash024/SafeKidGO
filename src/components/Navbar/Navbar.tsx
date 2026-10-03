import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Icon.png";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-logo-section">

        <img
          src={logo}
          alt="SafeKid GO"
          className="navbar-logo"
        />

        <div className="navbar-brand">
          <h2>SafeKid GO</h2>
          <p>Track. Protect. Trust.</p>
        </div>

      </div>

      <nav className="navbar-links">

        <a href="/">Home</a>

        <Link to="/features">Features</Link>

        <a href="#solutions">Solutions</a>

        <a href="#demo">Demo Video</a>

        <a href="#pricing">Pricing</a>

        <a href="#about">About Us</a>

        <a href="#contact">Contact Us</a>

      </nav>

      <Link to="/login" className="navbar-login-btn">
        Login
      </Link>

    </header>
  );
}

export default Navbar;
