import "./Statistics.css";

import {
  FaSchool,
  FaUsers,
  FaBus,
  FaShieldAlt,
} from "react-icons/fa";

function Statistics() {
  return (
    <section className="statistics">

      <div className="stat-card">
        <FaSchool className="stat-icon blue" />

        
        <h3>Schools Trust Us</h3>

        <p>
          Trusted by schools across India.
        </p>
      </div>

      <div className="stat-card">
        <FaUsers className="stat-icon green" />

       <h3>Happy Parents</h3>

        <p>
          Parents rely on SafeKid Go every day.
        </p>
      </div>

      <div className="stat-card">
        <FaBus className="stat-icon orange" />

       

        <h3>Buses Connected</h3>

        <p>
          Your Child's Bus is Connected here.
        </p>
      </div>

      <div className="stat-card">
        <FaShieldAlt className="stat-icon sky" />

        <h2>99.8%</h2>

        <h3>Safety & Reliability</h3>

        <p>
          Secure tracking and instant notifications.
        </p>
      </div>

    </section>
  );
}

export default Statistics;