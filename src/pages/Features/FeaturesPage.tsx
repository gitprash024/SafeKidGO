import React from "react";
import { Link } from "react-router-dom";
import {
  FaSchool,
  FaUsers,
  FaBus,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaBell,
  FaUserTie,
  FaChartLine,
  FaGasPump,
  FaExclamationTriangle,
  FaLock,
  FaGoogle,
  FaSatelliteDish,
  FaSms,
  FaCloud,
  FaIdCard,
  FaCreditCard,
  FaCheckCircle,
  FaArrowRight,
  FaPhoneAlt,
} from "react-icons/fa";

import "./FeaturesPage.css";

import dashboardImg from "../../assets/dashboard.png";
import phoneImg from "../../assets/mobile.png";

const FeaturesPage: React.FC = () => {
  return (
    <div className="features-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="features-hero">

        <div className="hero-content">

          <div className="hero-copy">

            <span className="hero-label">FEATURES</span>

            <h1>
              Powerful Features for
              <br />
              Smarter{" "}
              <span>School Transportation</span>
            </h1>

            <p className="hero-description">
              Everything you need to keep students safe, parents informed,
              and schools in complete control.
            </p>

            {/* Statistics */}
            <div className="hero-stats">

              <div className="stat-item">
                <div className="stat-icon blue">
                  <FaSchool />
                </div>
                <div>
                  <strong>500+</strong>
                  <span>Schools</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon green">
                  <FaUsers />
                </div>
                <div>
                  <strong>50,000+</strong>
                  <span>Parents</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon orange">
                  <FaBus />
                </div>
                <div>
                  <strong>1,000+</strong>
                  <span>Buses</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon purple">
                  <FaShieldAlt />
                </div>
                <div>
                  <strong>99.8%</strong>
                  <span>Uptime</span>
                </div>
              </div>

            </div>
          </div>

          {/* Hero Images */}
          <div className="hero-visual">

            <div className="dashboard-wrapper">
              <img
                src={dashboardImg}
                alt="SafeKid GO Dashboard"
                className="dashboard-image"
              />
            </div>

            <div className="phone-wrapper">
              <img
                src={phoneImg}
                alt="SafeKid GO Mobile Application"
                className="phone-image"
              />
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FEATURE GRID 01 - 06
      ===================================================== */}
      <section className="feature-section">

        <div className="feature-grid">

          {/* 01 */}
          <article className="feature-card">

            <div className="feature-content">

              <span className="feature-number">01</span>

              <h2>
                <FaMapMarkerAlt />
                Live GPS Tracking
              </h2>

              <p>
                Track school buses in real-time with accurate location,
                ETA and route updates.
              </p>

              <div className="feature-list">

                <span>
                  <FaCheckCircle /> Live Location
                </span>

                <span>
                  <FaCheckCircle /> Route Tracking
                </span>

                <span>
                  <FaCheckCircle /> ETA & Traffic Updates
                </span>

                <span>
                  <FaCheckCircle /> Geofencing
                </span>

                <span>
                  <FaCheckCircle /> Route Replay
                </span>

                <span>
                  <FaCheckCircle /> History & Playback
                </span>

              </div>

            </div>

            <div className="feature-visual">
              <img
                src={dashboardImg}
                alt="Live GPS Tracking Dashboard"
              />
            </div>

          </article>


          {/* 02 */}
          <article className="feature-card reverse">

            <div className="feature-visual phone-feature">
              <img
                src={phoneImg}
                alt="Parent Notifications"
              />
            </div>

            <div className="feature-content">

              <span className="feature-number">02</span>

              <h2>
                <FaBell />
                Parent Notifications
              </h2>

              <p>
                Get instant notifications about every important student
                and transportation update.
              </p>

              <div className="notification-grid">

                <div>
                  <FaUsers />
                  <span>Student Boarded</span>
                </div>

                <div>
                  <FaUsers />
                  <span>Student Dropped</span>
                </div>

                <div>
                  <FaBus />
                  <span>Bus Arrived</span>
                </div>

                <div>
                  <FaBus />
                  <span>Bus Delayed</span>
                </div>

                <div>
                  <FaExclamationTriangle />
                  <span>Emergency Alert</span>
                </div>

                <div>
                  <FaMapMarkerAlt />
                  <span>Route Changed</span>
                </div>

              </div>

            </div>

          </article>


          {/* 03 */}
          <article className="feature-card">

            <div className="feature-content">

              <span className="feature-number">03</span>

              <h2>
                <FaIdCard />
                Student Attendance
              </h2>

              <p>
                Automated attendance management helps schools maintain
                safety, accuracy and complete transparency.
              </p>

              <div className="feature-list">

                <span>
                  <FaCheckCircle /> RFID Attendance
                </span>

                <span>
                  <FaCheckCircle /> QR Attendance
                </span>

                <span>
                  <FaCheckCircle /> Manual Attendance
                </span>

                <span>
                  <FaCheckCircle /> Attendance Reports
                </span>

              </div>

            </div>

            <div className="feature-visual attendance-visual">
              <div className="mini-dashboard">

                <div className="mini-header">
                  Today's Attendance
                </div>

                <div className="attendance-numbers">
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
                  <span>Student Boarded</span>
                  <strong>320</strong>
                </div>

                <div className="attendance-row">
                  <span>Student Dropped</span>
                  <strong>310</strong>
                </div>

                <div className="attendance-row">
                  <span>Attendance Rate</span>
                  <strong>96.2%</strong>
                </div>

              </div>
            </div>

          </article>


          {/* 04 */}
          <article className="feature-card reverse">

            <div className="feature-visual driver-visual">

              <div className="driver-card">

                <div className="driver-avatar">
                  <FaUserTie />
                </div>

                <div className="driver-details">
                  <h4>Rajesh Kumar</h4>
                  <span>Driver ID: DR1234</span>
                </div>

                <div className="driver-status">
                  Active
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

              </div>

            </div>

            <div className="feature-content">

              <span className="feature-number">04</span>

              <h2>
                <FaUserTie />
                Driver Management
              </h2>

              <p>
                Manage driver profiles, documents, performance and
                assigned routes from one place.
              </p>

              <div className="feature-list">

                <span>
                  <FaCheckCircle /> Driver Profile
                </span>

                <span>
                  <FaCheckCircle /> License Verification
                </span>

                <span>
                  <FaCheckCircle /> Driving Score
                </span>

                <span>
                  <FaCheckCircle /> Driver Attendance
                </span>

                <span>
                  <FaCheckCircle /> Assigned Bus & Route
                </span>

              </div>

            </div>

          </article>


          {/* 05 */}
          <article className="feature-card">

            <div className="feature-content">

              <span className="feature-number">05</span>

              <h2>
                <FaChartLine />
                School Dashboard
              </h2>

              <p>
                Get a complete overview of your transportation system
                and make faster data-driven decisions.
              </p>

              <div className="feature-list">

                <span>
                  <FaCheckCircle /> Total Buses
                </span>

                <span>
                  <FaCheckCircle /> Total Drivers
                </span>

                <span>
                  <FaCheckCircle /> Total Students
                </span>

                <span>
                  <FaCheckCircle /> Routes
                </span>

                <span>
                  <FaCheckCircle /> Live Alerts
                </span>

              </div>

            </div>

            <div className="feature-visual dashboard-small">

              <div className="dashboard-stat-grid">

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

              <div className="chart-card">
                <span>Trip Overview</span>

                <div className="fake-chart">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>

            </div>

          </article>


          {/* 06 */}
          <article className="feature-card reverse">

            <div className="feature-visual bus-health-visual">

              <div className="health-circle">
                <FaBus />
              </div>

              <div className="health-item">
                <span>Speed</span>
                <strong>42 km/h</strong>
              </div>

              <div className="health-item">
                <span>Fuel</span>
                <strong>75%</strong>
              </div>

              <div className="health-item">
                <span>Battery</span>
                <strong>96%</strong>
              </div>

              <div className="health-item">
                <span>GPS</span>
                <strong>Online</strong>
              </div>

            </div>

            <div className="feature-content">

              <span className="feature-number">06</span>

              <h2>
                <FaGasPump />
                Bus Health Monitoring
              </h2>

              <p>
                Monitor your fleet health in real-time for safer,
                smoother and more reliable operations.
              </p>

              <div className="feature-list">

                <span>
                  <FaCheckCircle /> Speed Monitoring
                </span>

                <span>
                  <FaCheckCircle /> Fuel Monitoring
                </span>

                <span>
                  <FaCheckCircle /> Battery Status
                </span>

                <span>
                  <FaCheckCircle /> GPS Status
                </span>

                <span>
                  <FaCheckCircle /> Engine Health
                </span>

                <span>
                  <FaCheckCircle /> Maintenance Reminder
                </span>

              </div>

            </div>

          </article>

        </div>

      </section>


      {/* =====================================================
          ADVANCED FEATURES 07 - 10
      ===================================================== */}
      <section className="advanced-section">

        <div className="advanced-grid">

          {/* 07 */}
          <article className="advanced-card sos-card">

            <span className="advanced-number">07</span>

            <div className="advanced-icon red">
              <FaExclamationTriangle />
            </div>

            <h2>SOS Emergency</h2>

            <p>
              One-tap emergency alerts instantly notify parents,
              school administrators and drivers.
            </p>

            <div className="sos-button">
              SOS
            </div>

            <div className="advanced-list">

              <span>
                <FaCheckCircle /> Instant Parent Alert
              </span>

              <span>
                <FaCheckCircle /> Live Bus Location
              </span>

              <span>
                <FaCheckCircle /> School Admin Alert
              </span>

            </div>

          </article>


          {/* 08 */}
          <article className="advanced-card">

            <span className="advanced-number">08</span>

            <div className="advanced-icon blue">
              <FaChartLine />
            </div>

            <h2>Reports & Analytics</h2>

            <p>
              Detailed reports and analytics help schools improve
              transportation efficiency.
            </p>

            <div className="analytics-box">

              <div className="analytics-header">
                <span>Monthly Overview</span>
                <strong>+12%</strong>
              </div>

              <div className="bars">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>

              <div className="analytics-values">
                <span>
                  Attendance
                  <strong>96.2%</strong>
                </span>

                <span>
                  On-Time
                  <strong>94.8%</strong>
                </span>
              </div>

            </div>

          </article>


          {/* 09 */}
          <article className="advanced-card">

            <span className="advanced-number">09</span>

            <div className="advanced-icon purple">
              <FaLock />
            </div>

            <h2>Data Security</h2>

            <p>
              Protect school, student and transportation data with
              secure cloud infrastructure.
            </p>

            <div className="security-grid">

              <div>
                <FaShieldAlt />
                <span>End-to-End Encryption</span>
              </div>

              <div>
                <FaCloud />
                <span>Secure Cloud Backup</span>
              </div>

              <div>
                <FaLock />
                <span>Secure Servers</span>
              </div>

              <div>
                <FaUserTie />
                <span>Role-Based Access</span>
              </div>

            </div>

          </article>


          {/* 10 */}
          <article className="advanced-card integrations-card">

            <span className="advanced-number">10</span>

            <div className="advanced-icon green">
              <FaCloud />
            </div>

            <h2>Easy Integrations</h2>

            <p>
              Seamlessly connect SafeKid GO with the tools and
              devices your school already uses.
            </p>

            <div className="integration-grid">

              <div>
                <FaGoogle />
                <span>Google Maps</span>
              </div>

              <div>
                <FaSatelliteDish />
                <span>GPS Devices</span>
              </div>

              <div>
                <FaSms />
                <span>SMS Gateway</span>
              </div>

              <div>
                <FaUsers />
                <span>WhatsApp Alerts</span>
              </div>

              <div>
                <FaSchool />
                <span>School ERP</span>
              </div>

              <div>
                <FaIdCard />
                <span>RFID Devices</span>
              </div>

              <div>
                <FaCreditCard />
                <span>Payment Gateway</span>
              </div>

            </div>

          </article>

        </div>

      </section>


      {/* =====================================================
          WHY SAFE KID GO
      ===================================================== */}
      <section className="why-section">

        <div className="why-container">

          <div className="why-visual">

            <div className="why-phone-card">

              <img
                src={phoneImg}
                alt="SafeKid GO Mobile App"
              />

            </div>

          </div>

          <div className="why-content">

            <span className="section-label">
              WHY SAFEKID GO
            </span>

            <h2>
              Why Schools Love
              <br />
              <span>SafeKid GO</span>
            </h2>

            <p>
              Designed specifically for schools to improve transport
              safety, reduce manual work and keep parents informed.
            </p>

            <div className="why-grid">

              <div className="why-item">
                <FaMapMarkerAlt />
                <div>
                  <h3>Real-Time Monitoring</h3>
                  <p>
                    Monitor every school bus from one dashboard.
                  </p>
                </div>
              </div>

              <div className="why-item">
                <FaUsers />
                <div>
                  <h3>Better Parent Trust</h3>
                  <p>
                    Automatic updates increase transparency.
                  </p>
                </div>
              </div>

              <div className="why-item">
                <FaChartLine />
                <div>
                  <h3>Smart Reports</h3>
                  <p>
                    Get useful attendance and transport reports.
                  </p>
                </div>
              </div>

              <div className="why-item">
                <FaCloud />
                <div>
                  <h3>Cloud Platform</h3>
                  <p>
                    Access your transportation data anywhere.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="features-cta">

        <div className="cta-content">

          <div className="cta-illustration">
            <FaBus />
          </div>

          <div>
            <h2>
              Ready to Make School Transportation Safer?
            </h2>

            <p>
              Join schools using SafeKid GO to improve student
              transportation safety.
            </p>

            <div className="cta-buttons">

              <Link
                to="/contact"
                className="cta-primary"
              >
                <FaPhoneAlt />
                Contact Us
              </Link>

              <Link
                to="/login"
                className="cta-secondary"
              >
                Learn More
                <FaArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRUST STRIP
      ===================================================== */}
      <section className="trust-strip">

        <div className="trust-item">
          <FaShieldAlt />
          <div>
            <strong>ISO 27001</strong>
            <span>Security Focused</span>
          </div>
        </div>

        <div className="trust-item">
          <FaPhoneAlt />
          <div>
            <strong>24×7 Support</strong>
            <span>We're here when you need us</span>
          </div>
        </div>

        <div className="trust-item">
          <FaShieldAlt />
          <div>
            <strong>99.8% Uptime</strong>
            <span>Reliable & always available</span>
          </div>
        </div>

        <div className="trust-item">
          <FaSchool />
          <div>
            <strong>Trusted by Schools</strong>
            <span>Built for Indian schools</span>
          </div>
        </div>

        <div className="trust-item">
          <FaCheckCircle />
          <div>
            <strong>Made in India</strong>
            <span>Built for school safety</span>
          </div>
        </div>

      </section>

    </div>
  );
};

export default FeaturesPage;