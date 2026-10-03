import "./About.css";
import { FaShieldAlt, FaEye, FaHeart } from "react-icons/fa";
import bus from "../../assets/school-bus.png";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-left">

        <span className="about-tag">
          ABOUT US
        </span>

        <h2>
          Committed to Child Safety <br />
          Every Single Day
        </h2>

        <p>
          SafeKid Go is India's trusted school bus tracking solution
          designed to bring transparency, security and peace of mind
          to parents, schools and transport providers.
        </p>

        <div className="about-item">

          <FaShieldAlt className="about-icon blue" />

          <div>
            <h3>Our Mission</h3>
            <p>
              To ensure every child travels safely with the power of
              technology and real-time visibility.
            </p>
          </div>

        </div>

        <div className="about-item">

          <FaEye className="about-icon green" />

          <div>
            <h3>Our Vision</h3>
            <p>
              To become India's most trusted child transportation
              safety platform.
            </p>
          </div>

        </div>

        <div className="about-item">

          <FaHeart className="about-icon orange" />

          <div>
            <h3>Our Promise</h3>
            <p>
              Better technology, better safety, better tomorrow.
            </p>
          </div>

        </div>

        <button className="about-btn">
          Know More About Us →
        </button>

      </div>

      <div className="about-right">

        <img src={bus} alt="School Bus" />

      </div>

    </section>
  );
}

export default About;