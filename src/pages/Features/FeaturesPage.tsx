import "./FeaturesPage.css";

import { Link } from "react-router-dom";

import {
  FaSchool,
  FaUsers,
  FaBus,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaBell,
  FaUserCheck,
  FaUserTie,
  FaChartLine,
  FaCarBattery,
  FaExclamationTriangle,
  FaFileAlt,
  FaLock,
  FaPlug,
  FaCheckCircle,
  FaArrowRight,
  FaRoute,
  FaGasPump,
} from "react-icons/fa";

import dashboardImg from "../../assets/dashboard.png";
import phoneImg from "../../assets/mobile.png";

function FeaturesPage() {
  return (
    <main className="features-page">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="features-hero">
        <div className="features-container hero-container">

          <div className="hero-content">

            <span className="section-tag">
              FEATURES
            </span>

            <h1>
              Powerful Features for
              <br />
              Smarter{" "}
              <span>School Transportation</span>
            </h1>

            <p className="hero-description">
              Everything you need to keep students safe, parents informed
              and schools in complete control.
            </p>

            {/* Statistics */}

            <div className="hero-stats">

              <div className="stat-box">
                <FaSchool className="stat-icon blue" />
                <div>
                  <strong>500+</strong>
                  <span>Schools</span>
                </div>
              </div>

              <div className="stat-box">
                <FaUsers className="stat-icon green" />
                <div>
                  <strong>50,000+</strong>
                  <span>Parents</span>
                </div>
              </div>

              <div className="stat-box">
                <FaBus className="stat-icon orange" />
                <div>
                  <strong>1,000+</strong>
                  <span>Buses</span>
                </div>
              </div>

              <div className="stat-box">
                <FaShieldAlt className="stat-icon purple" />
                <div>
                  <strong>99.8%</strong>
                  <span>Uptime</span>
                </div>
              </div>

            </div>
          </div>

          {/* Hero Visual */}

          <div className="hero-visual">

            <div className="hero-image-glow"></div>

            <img
              src={dashboardImg}
              alt="SafeKid GO school transportation dashboard"
              className="hero-dashboard"
            />

            <img
              src={phoneImg}
              alt="SafeKid GO mobile tracking application"
              className="hero-phone"
            />

            <div className="floating-status-card">
              <span className="status-dot"></span>
              <div>
                <strong>Bus Tracking Active</strong>
                <small>Live location updated</small>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          FEATURE INTRO
      ========================================================= */}

      <section className="feature-intro">
        <div className="features-container">

          <span className="section-tag center">
            SMART FEATURES FOR COMPLETE SAFETY
          </span>

          <h2>
            Everything You Need for
            <br />
            <span>Total Peace of Mind</span>
          </h2>

          <p>
            SafeKid GO brings live tracking, notifications, attendance,
            driver management and transportation analytics together
            in one intelligent platform.
          </p>

        </div>
      </section>


      {/* =========================================================
          FEATURES 01 - 06
      ========================================================= */}

      <section className="main-features">

        <div className="features-container">

          {/* 01 */}

          <article className="feature-showcase">

            <div className="feature-content">

              <span className="feature-number">01</span>

              <div className="feature-icon blue-icon">
                <FaMapMarkerAlt />
              </div>

              <h2>Live GPS Tracking</h2>

              <p>
                Track school buses in real-time with accurate location,
                ETA and route updates.
              </p>

              <ul className="feature-list">
                <li><FaCheckCircle /> Live Location</li>
                <li><FaCheckCircle /> Route Tracking</li>
                <li><FaCheckCircle /> ETA & Traffic Updates</li>
                <li><FaCheckCircle /> Geofencing</li>
                <li><FaCheckCircle /> Route Replay</li>
                <li><FaCheckCircle /> History & Playback</li>
              </ul>

            </div>

            <div className="feature-visual">
              <div className="visual-window">
                <img
                  src={dashboardImg}
                  alt="Live GPS tracking dashboard"
                />
              </div>

              <div className="visual-floating gps-floating">
                <FaMapMarkerAlt />
                <div>
                  <strong>Bus UP32 AB 1234</strong>
                  <span>Live • On Route</span>
                </div>
              </div>
            </div>

          </article>


          {/* 02 */}

          <article className="feature-showcase reverse">

            <div className="feature-content">

              <span className="feature-number">02</span>

              <div className="feature-icon green-icon">
                <FaBell />
              </div>

              <h2>Parent Notifications</h2>

              <p>
                Get instant notifications about every important
                student and bus update.
              </p>

              <div className="notification-grid">

                <div>
                  <FaUserCheck />
                  <span>Student Boarded</span>
                </div>

                <div>
                  <FaUserCheck />
                  <span>Student Dropped</span>
                </div>

                <div>
                  <FaBus />
                  <span>Bus Arrived</span>
                </div>

                <div>
                  <FaRoute />
                  <span>Bus Delayed</span>
                </div>

                <div>
                  <FaExclamationTriangle />
                  <span>Emergency Alert</span>
                </div>

                <div>
                  <FaRoute />
                  <span>Route Changed</span>
                </div>

              </div>

            </div>

            <div className="feature-visual phone-feature">

              <div className="phone-stage">

                <div className="phone-shadow"></div>

                <img
                  src={phoneImg}
                  alt="SafeKid GO parent notifications"
                />

                <div className="notification-popup">
                  <div className="popup-icon">
                    <FaBus />
                  </div>

                  <div>
                    <strong>Bus Arrived</strong>
                    <span>Your child's bus reached the school.</span>
                  </div>
                </div>

              </div>

            </div>

          </article>


          {/* 03 */}

          <article className="feature-showcase">

            <div className="feature-content">

              <span className="feature-number">03</span>

              <div className="feature-icon purple-icon">
                <FaUserCheck />
              </div>

              <h2>Student Attendance</h2>

              <p>
                Automated attendance tools help schools maintain
                safety, transparency and accurate student records.
              </p>

              <ul className="feature-list">
                <li><FaCheckCircle /> RFID Attendance</li>
                <li><FaCheckCircle /> QR Attendance</li>
                <li><FaCheckCircle /> Manual Attendance</li>
                <li><FaCheckCircle /> Boarding Verification</li>
              </ul>

            </div>

            <div className="feature-visual attendance-visual">

              <div className="attendance-card">

                <div className="attendance-header">
                  <strong>Today's Attendance</strong>
                  <span>Live</span>
                </div>

                <div className="attendance-stats">
                  <div>
                    <strong>320</strong>
                    <span>Present</span>
                  </div>

                  <div>
                    <strong>30</strong>
                    <span>Absent</span>
                  </div>

                  <div>
                    <strong>350</strong>
                    <span>Total</span>
                  </div>
                </div>

                <div className="attendance-row">
                  <span className="student-avatar">AS</span>
                  <div>
                    <strong>Aarav Sharma</strong>
                    <small>Boarded • 07:50 AM</small>
                  </div>
                  <FaCheckCircle />
                </div>

                <div className="attendance-row">
                  <span className="student-avatar">DV</span>
                  <div>
                    <strong>Diya Verma</strong>
                    <small>Boarded • 08:01 AM</small>
                  </div>
                  <FaCheckCircle />
                </div>

              </div>

            </div>

          </article>


          {/* 04 */}

          <article className="feature-showcase reverse">

            <div className="feature-content">

              <span className="feature-number">04</span>

              <div className="feature-icon orange-icon">
                <FaUserTie />
              </div>

              <h2>Driver Management</h2>

              <p>
                Manage driver profiles, documents, performance,
                verification and assigned routes from one place.
              </p>

              <ul className="feature-list">
                <li><FaCheckCircle /> Driver Profile</li>
                <li><FaCheckCircle /> License Verification</li>
                <li><FaCheckCircle /> Driving Score</li>
                <li><FaCheckCircle /> Assigned Routes</li>
              </ul>

            </div>

            <div className="feature-visual">

              <div className="driver-card">

                <div className="driver-header">
                  <div className="driver-avatar">
                    RK
                  </div>

                  <div>
                    <strong>Rajesh Kumar</strong>
                    <span>Driver ID: DR1234</span>
                  </div>

                  <span className="active-badge">
                    Active
                  </span>
                </div>

                <div className="driver-score">
                  <div>
                    <span>Driving Score</span>
                    <strong>92/100</strong>
                  </div>

                  <div className="score-bar">
                    <span></span>
                  </div>
                </div>

                <div className="driver-details">
                  <div>
                    <small>License No.</small>
                    <strong>UP32 2018 123456</strong>
                  </div>

                  <div>
                    <small>Experience</small>
                    <strong>6 Years</strong>
                  </div>
                </div>

              </div>

            </div>

          </article>


          {/* 05 */}

          <article className="feature-showcase">

            <div className="feature-content">

              <span className="feature-number">05</span>

              <div className="feature-icon blue-icon">
                <FaChartLine />
              </div>

              <h2>School Dashboard</h2>

              <p>
                Get a complete overview of your school transportation
                system and make faster data-driven decisions.
              </p>

              <ul className="feature-list">
                <li><FaCheckCircle /> Total Buses</li>
                <li><FaCheckCircle /> Total Drivers</li>
                <li><FaCheckCircle /> Total Students</li>
                <li><FaCheckCircle /> Live Alerts</li>
                <li><FaCheckCircle /> Route Overview</li>
              </ul>

            </div>

            <div className="feature-visual dashboard-preview">

              <div className="mini-dashboard">

                <div className="mini-sidebar">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="mini-main">

                  <div className="mini-top">
                    <strong>Dashboard</strong>
                    <span>Today</span>
                  </div>

                  <div className="mini-stat-grid">

                    <div>
                      <strong>25</strong>
                      <span>Total Buses</span>
                    </div>

                    <div>
                      <strong>12</strong>
                      <span>Drivers</span>
                    </div>

                    <div>
                      <strong>350</strong>
                      <span>Students</span>
                    </div>

                    <div>
                      <strong>18</strong>
                      <span>Routes</span>
                    </div>

                  </div>

                  <div className="chart-box">
                    <span>Weekly Trips</span>

                    <div className="chart-bars">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </article>


          {/* 06 */}

          <article className="feature-showcase reverse">

            <div className="feature-content">

              <span className="feature-number">06</span>

              <div className="feature-icon green-icon">
                <FaBus />
              </div>

              <h2>Bus Health Monitoring</h2>

              <p>
                Monitor your fleet health in real-time for safer,
                smoother and more reliable transportation.
              </p>

              <ul className="feature-list">
                <li><FaCheckCircle /> Fuel Monitoring</li>
                <li><FaCheckCircle /> Battery Status</li>
                <li><FaCheckCircle /> GPS Status</li>
                <li><FaCheckCircle /> Engine Health</li>
                <li><FaCheckCircle /> Maintenance Reminder</li>
              </ul>

            </div>

            <div className="feature-visual bus-health">

              <div className="bus-health-card">

                <div className="health-header">
                  <div>
                    <span>Bus No.</span>
                    <strong>UP32 AB 1234</strong>
                  </div>

                  <span className="health-online">
                    Online
                  </span>
                </div>

                <div className="health-grid">

                  <div>
                    <FaGasPump />
                    <strong>75%</strong>
                    <span>Fuel</span>
                  </div>

                  <div>
                    <FaCarBattery />
                    <strong>96%</strong>
                    <span>Battery</span>
                  </div>

                  <div>
                    <FaRoute />
                    <strong>40 km/h</strong>
                    <span>Speed</span>
                  </div>

                  <div>
                    <FaShieldAlt />
                    <strong>Good</strong>
                    <span>Engine</span>
                  </div>

                </div>

                <div className="health-footer">
                  <span>Next Service</span>
                  <strong>12 Days</strong>
                </div>

              </div>

            </div>

          </article>

        </div>
      </section>


      {/* =========================================================
          ADVANCED FEATURES
      ========================================================= */}

      <section className="advanced-section">

        <div className="features-container">

          <div className="advanced-heading">
            <span className="section-tag center">
              MORE POWERFUL TOOLS
            </span>

            <h2>
              Built for Complete
              <br />
              <span>Transportation Control</span>
            </h2>
          </div>


          <div className="advanced-grid">

            {/* SOS */}

            <article className="advanced-card sos-card">

              <span className="advanced-number">
                07
              </span>

              <div className="advanced-icon red">
                <FaExclamationTriangle />
              </div>

              <h3>SOS Emergency Management</h3>

              <p>
                Instantly notify school administrators and parents
                during emergencies with one-tap SOS alerts.
              </p>

              <ul>
                <li>Emergency Notifications</li>
                <li>Live Bus Location</li>
                <li>Instant Parent Alerts</li>
                <li>Panic Button Support</li>
              </ul>

              <div className="sos-button">
                SOS
              </div>

            </article>


            {/* Reports */}

            <article className="advanced-card">

              <span className="advanced-number">
                08
              </span>

              <div className="advanced-icon blue-icon">
                <FaFileAlt />
              </div>

              <h3>Reports & Analytics</h3>

              <p>
                View detailed operational reports and insights
                for better transportation decisions.
              </p>

              <div className="analytics-preview">

                <div className="analytics-header">
                  <span>Monthly Overview</span>
                  <strong>+12%</strong>
                </div>

                <div className="analytics-bars">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

              </div>

            </article>


            {/* Security */}

            <article className="advanced-card">

              <span className="advanced-number">
                09
              </span>

              <div className="advanced-icon purple-icon">
                <FaLock />
              </div>

              <h3>Data Security</h3>

              <p>
                Enterprise-grade security keeps school, student
                and transportation data protected.
              </p>

              <div className="security-grid">

                <div>
                  <FaLock />
                  <span>SSL Encryption</span>
                </div>

                <div>
                  <FaShieldAlt />
                  <span>Secure Login</span>
                </div>

                <div>
                  <FaFileAlt />
                  <span>Cloud Backup</span>
                </div>

                <div>
                  <FaUsers />
                  <span>Role Based Access</span>
                </div>

              </div>

            </article>


            {/* Integrations */}

            <article className="advanced-card integrations-card">

              <span className="advanced-number">
                10
              </span>

              <div className="advanced-icon green-icon">
                <FaPlug />
              </div>

              <h3>Easy Integrations</h3>

              <p>
                Seamlessly connect GPS devices, RFID systems,
                SMS gateways, maps and cloud services.
              </p>

              <div className="integration-tags">
                <span>GPS</span>
                <span>RFID</span>
                <span>SMS</span>
                <span>Firebase</span>
                <span>Maps</span>
                <span>Cloud</span>
                <span>Payments</span>
                <span>WhatsApp</span>
              </div>

            </article>

          </div>

        </div>
      </section>


      {/* =========================================================
          WHY SAFE KID GO
      ========================================================= */}

      <section className="why-section">

        <div className="features-container why-container">

          <div className="why-visual">

            <div className="why-phone-wrap">

              <img
                src={phoneImg}
                alt="SafeKid GO mobile tracking"
              />

              <div className="why-floating-card">
                <FaShieldAlt />

                <div>
                  <strong>Child Safety</strong>
                  <span>Always monitored</span>
                </div>
              </div>

            </div>

          </div>


          <div className="why-content">

            <span className="section-tag">
              WHY SAFE KID GO
            </span>

            <h2>
              Why Schools Love
              <br />
              <span>SafeKid GO</span>
            </h2>

            <p>
              Designed specifically for schools to improve
              transportation safety, reduce manual work and
              keep parents informed.
            </p>

            <div className="why-grid">

              <div className="why-box">
                <FaMapMarkerAlt />
                <div>
                  <h3>Real-Time Monitoring</h3>
                  <p>
                    Monitor every bus from one dashboard.
                  </p>
                </div>
              </div>

              <div className="why-box">
                <FaUsers />
                <div>
                  <h3>Improved Parent Trust</h3>
                  <p>
                    Automatic updates increase transparency.
                  </p>
                </div>
              </div>

              <div className="why-box">
                <FaChartLine />
                <div>
                  <h3>Smart Reports</h3>
                  <p>
                    Access detailed attendance and transport reports.
                  </p>
                </div>
              </div>

              <div className="why-box">
                <FaShieldAlt />
                <div>
                  <h3>Secure Cloud Platform</h3>
                  <p>
                    Access protected data anywhere, anytime.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="features-cta">

        <div className="features-container">

          <div className="cta-card">

            <div className="cta-content">

              <span className="section-tag light">
                SAFER TRANSPORTATION STARTS HERE
              </span>

              <h2>
                Ready to Make School
                <br />
                Transportation Safer?
              </h2>

              <p>
                Join schools using technology to create safer,
                smarter and more transparent student transportation.
              </p>

              <div className="cta-buttons">

                <Link
                  to="/contact"
                  className="primary-btn"
                >
                  Contact Us
                  <FaArrowRight />
                </Link>

                <Link
                  to="/login"
                  className="secondary-btn"
                >
                  Get Started
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default FeaturesPage;