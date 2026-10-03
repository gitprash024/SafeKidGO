import "./FeaturesPage.css";
import { Link } from "react-router-dom";

import {
  FaSchool,
  FaUsers,
  FaBus,
  FaShieldAlt,
} from "react-icons/fa";

import dashboardImg from "../../assets/dashboard.png";
import phoneImg from "../../assets/mobile.png";

function FeaturesPage() {
  return (
    <div className="features-page">

      {/* ================= HERO ================= */}

      <section className="features-hero">

        {/* LEFT */}

        <div className="hero-left">

          <span className="section-tag">
            FEATURES
          </span>

          <h1>
            Powerful Features for
            <br />
            Smarter
            <span> School Transportation</span>
          </h1>

          <p>
            Everything you need to keep students safe,
            parents informed and schools in complete
            control.
          </p>

          {/* Statistics */}

          <div className="hero-stats">

            <div className="stat-box">
              <FaSchool className="blue" />

              <div>
                <h3>500+</h3>
                <span>Schools</span>
              </div>
            </div>

            <div className="stat-box">
              <FaUsers className="green" />

              <div>
                <h3>50,000+</h3>
                <span>Parents</span>
              </div>
            </div>

            <div className="stat-box">
              <FaBus className="orange" />

              <div>
                <h3>1,000+</h3>
                <span>Buses</span>
              </div>
            </div>

            <div className="stat-box">
              <FaShieldAlt className="purple" />

              <div>
                <h3>99.8%</h3>
                <span>Uptime</span>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-right">

          <img
            src={dashboardImg}
            alt="Dashboard"
            className="dashboard-image"
          />

          <img
            src={phoneImg}
            alt="Mobile"
            className="phone-image"
          />

        </div>

      </section>

      {/* ===== Next Part Here ===== */}

    </div>
  );
}

export default FeaturesPage;      {/* =======================================================
          FEATURES 01 - 06
      ======================================================= */}

      <section className="feature-grid">

        {/* ================= 01 ================= */}

        <div className="feature-card">

          <div className="feature-info">

            <span className="feature-number">01</span>

            <h2>Live GPS Tracking</h2>

            <p>
              Track school buses in real-time with accurate
              location, ETA and route updates.
            </p>

            <ul>
              <li>✔ Live Location</li>
              <li>✔ Route Tracking</li>
              <li>✔ ETA & Traffic Updates</li>
              <li>✔ Geofencing</li>
              <li>✔ Route Replay</li>
              <li>✔ History & Playback</li>
            </ul>

          </div>

          <div className="feature-image">

            <img
              src={dashboardImg}
              alt="GPS Tracking"
            />

          </div>

        </div>

        {/* ================= 02 ================= */}

        <div className="feature-card reverse">

          <div className="feature-image">

            <img
              src={phoneImg}
              alt="Notifications"
            />

          </div>

          <div className="feature-info">

            <span className="feature-number">02</span>

            <h2>Parent Notifications</h2>

            <p>
              Get instant notifications about every
              important student update.
            </p>

            <div className="notification-grid">

              <div>Student Boarded</div>

              <div>Student Dropped</div>

              <div>Bus Arrived</div>

              <div>Bus Delayed</div>

              <div>Emergency Alert</div>

              <div>Route Changed</div>

            </div>

          </div>

        </div>

        {/* ================= 03 ================= */}

        <div className="feature-card">

          <div className="feature-info">

            <span className="feature-number">03</span>

            <h2>Student Attendance</h2>

            <p>
              Automated attendance system to ensure
              safety and transparency.
            </p>

            <ul>

              <li>RFID Attendance</li>

              <li>QR Attendance</li>

              <li>Manual Attendance</li>

            </ul>

          </div>

          <div className="feature-image">

            <img
              src={dashboardImg}
              alt=""
            />

          </div>

        </div>

        {/* ================= 04 ================= */}

        <div className="feature-card reverse">

          <div className="feature-image">

            <img
              src={dashboardImg}
              alt=""
            />

          </div>

          <div className="feature-info">

            <span className="feature-number">04</span>

            <h2>Driver Management</h2>

            <p>
              Manage driver profiles, documents,
              performance and routes.
            </p>

            <ul>

              <li>Driver Profile</li>

              <li>License Verification</li>

              <li>Driving Score</li>

              <li>Assigned Routes</li>

            </ul>

          </div>

        </div>

        {/* ================= 05 ================= */}

        <div className="feature-card">

          <div className="feature-info">

            <span className="feature-number">05</span>

            <h2>School Dashboard</h2>

            <p>
              Complete overview of your transport
              management system.
            </p>

            <ul>

              <li>Total Buses</li>

              <li>Total Drivers</li>

              <li>Total Students</li>

              <li>Live Alerts</li>

            </ul>

          </div>

          <div className="feature-image">

            <img
              src={dashboardImg}
              alt=""
            />

          </div>

        </div>

        {/* ================= 06 ================= */}

        <div className="feature-card reverse">

          <div className="feature-image">

            <img
              src={phoneImg}
              alt=""
            />

          </div>

          <div className="feature-info">

            <span className="feature-number">06</span>

            <h2>Bus Health Monitoring</h2>

            <p>
              Monitor your fleet health in real-time
              for safer transportation.
            </p>

            <ul>

              <li>Fuel Monitoring</li>

              <li>Battery Status</li>

              <li>GPS Status</li>

              <li>Maintenance Reminder</li>

            </ul>

          </div>

        </div>

      </section>     
       {/* =======================================================
          ADVANCED FEATURES (07–10)
      ======================================================= */}
    <section className="advanced-features">
        {/* 07 SOS */}
        <div className="advanced-card">

          <div className="advanced-number">07</div>

          <h2>SOS Emergency Management</h2>

          <p>
            Instantly notify school administrators and parents during
            emergencies with one-tap SOS alerts.
          </p>

          <ul>
            <li>✓ Emergency Notifications</li>
            <li>✓ Live Bus Location</li>
            <li>✓ Instant Parent Alerts</li>
            <li>✓ Panic Button Support</li>
          </ul>

        </div>

        {/* 08 Reports */}

        <div className="advanced-card">

          <div className="advanced-number">08</div>

          <h2>Reports & Analytics</h2>

          <p>
            View complete operational reports with detailed insights
            for better decision making.
          </p>

          <img
            src={dashboardImg}
            alt="Reports"
            className="advanced-image"
          />

        </div>

        {/* 09 Security */}

        <div className="advanced-card">

          <div className="advanced-number">09</div>

          <h2>Data Security</h2>

          <p>
            Enterprise-grade encryption keeps school, student and
            transport data completely secure.
          </p>

          <ul>

            <li>✓ SSL Encryption</li>

            <li>✓ Secure Login</li>

            <li>✓ Cloud Backup</li>

            <li>✓ Role Based Access</li>

          </ul>

        </div>

        {/* 10 Integrations */}

        <div className="advanced-card">

          <div className="advanced-number">10</div>

          <h2>Easy Integrations</h2>

          <p>
            Integrate seamlessly with GPS devices, RFID systems,
            SMS gateways and payment platforms.
          </p>

          <div className="integration-tags">

            <span>GPS</span>

            <span>RFID</span>

            <span>SMS</span>

            <span>Firebase</span>

            <span>Maps</span>

            <span>Cloud</span>

          </div>

        </div>

      </section>

      {/* =======================================================
          WHY CHOOSE US
      ======================================================= */}

      <section className="why-section">

        <div className="why-left">

          <img
            src={phoneImg}
            alt="SafeKid GO"
          />

        </div>

        <div className="why-right">

          <span className="section-tag">
            WHY SAFEKID GO
          </span>

          <h2>
            Why Schools Love
            <br />
            SafeKid GO
          </h2>

          <p>
            Designed specifically for schools to improve transport
            safety, reduce manual work and keep parents informed.
          </p>

          <div className="why-grid">

            <div className="why-box">

              <h3>Real-Time Monitoring</h3>

              <p>
                Monitor every bus from one dashboard.
              </p>

            </div>

            <div className="why-box">

              <h3>Improved Parent Trust</h3>

              <p>
                Automatic updates increase transparency.
              </p>

            </div>

            <div className="why-box">

              <h3>Smart Reports</h3>

              <p>
                Download attendance and transport reports.
              </p>

            </div>

            <div className="why-box">

              <h3>Cloud Platform</h3>

              <p>
                Access your data anywhere anytime.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =======================================================
          CTA
      ======================================================= */}

      <section className="features-cta">

        <h2>
          Ready to Make School
          Transportation Safer?
        </h2>

        <p>
          Join hundreds of schools already using
          SafeKid GO.
        </p>

        <div className="cta-buttons">

          <Link
            to="/contact"
            className="primary-btn"
          >
            Contact Us
          </Link>

          <Link
            to="/login"
            className="secondary-btn"
          >
            Get Started
          </Link>

        </div>

      </section>

      {/* =======================================================
          FOOTER
      ======================================================= */}

      <footer className="features-footer">

        <div className="footer-item">
          🔒 Enterprise Security
        </div>

        <div className="footer-item">
          🚌 Trusted by Schools
        </div>

        <div className="footer-item">
          📞 24×7 Support
        </div>

      </footer>
      