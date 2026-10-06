import React, { useEffect, useRef, useState } from "react";
import "./Features.css";

import dashboard from "../../assets/dashboard.png";
import mobile from "../../assets/mobile.png";
import bus from "../../assets/bus.png";
import demoLaptop from "../../assets/demo-laptop.png";
import schoolBus from "../../assets/school-bus.png";
import Icon from "../../assets/Icon.png";

type Feature = {
  id: string;
  title: string;
  description: string;
  points: string[];
  icon: string;
  type?: "normal" | "danger" | "analytics" | "security";
};

const features: Feature[] = [
  {
    id: "01",
    title: "Live GPS Tracking",
    description:
      "Track school buses in real-time with accurate location, ETA and route updates.",
    points: [
      "Live Location",
      "Geofencing",
      "Route Tracking",
      "Route Replay",
      "ETA & Traffic Updates",
      "History & Playback",
    ],
    icon: "⌖",
  },
  {
    id: "02",
    title: "Parent Notifications",
    description:
      "Keep parents informed with instant notifications about every important journey update.",
    points: [
      "Student Boarded",
      "Student Dropped",
      "Bus Arrived",
      "Bus Delayed",
      "Emergency Alert",
      "Route Changed",
    ],
    icon: "♟",
  },
  {
    id: "03",
    title: "Student Attendance",
    description:
      "Automated and accurate attendance tracking to improve student safety and transparency.",
    points: [
      "RFID Attendance",
      "QR Attendance",
      "Manual Attendance",
      "Boarding History",
      "Drop-off History",
      "Attendance Reports",
    ],
    icon: "✓",
  },
  {
    id: "04",
    title: "Driver Management",
    description:
      "Manage driver details, documents, performance and assigned routes from one place.",
    points: [
      "Driver Profile & Documents",
      "License & Verification",
      "Driving Score & Performance",
      "Driver Attendance",
      "Assigned Bus & Route",
    ],
    icon: "♙",
  },
  {
    id: "05",
    title: "School Dashboard",
    description:
      "Get a complete overview of your transportation system and make data-driven decisions.",
    points: [
      "Total Buses",
      "Drivers",
      "Students",
      "Routes",
      "Today's Trips",
      "Active Alerts",
    ],
    icon: "▦",
    type: "analytics",
  },
  {
    id: "06",
    title: "Bus Health Monitoring",
    description:
      "Monitor your fleet health in real-time for safer and smoother operations.",
    points: [
      "Speed Monitoring",
      "Fuel Monitoring",
      "Battery Status",
      "GPS Status",
      "Engine Health",
      "Maintenance Reminder",
    ],
    icon: "◉",
    type: "analytics",
  },
];

const secondaryFeatures: Feature[] = [
  {
    id: "07",
    title: "SOS Emergency",
    description:
      "In case of any emergency, instant alerts are sent to all connected stakeholders.",
    points: [
      "Instant Alert to Parents",
      "Notification to School Admin",
      "Alert to Driver",
      "Share Live Location",
    ],
    icon: "SOS",
    type: "danger",
  },
  {
    id: "08",
    title: "Reports & Analytics",
    description:
      "Detailed reports and analytics help schools improve transportation efficiency.",
    points: [
      "Daily & Monthly Reports",
      "Attendance Reports",
      "Driver Performance Reports",
      "Route Performance",
      "Custom Date Reports",
    ],
    icon: "▥",
    type: "analytics",
  },
  {
    id: "09",
    title: "Data Security",
    description:
      "We protect school, student and transportation data with secure technology.",
    points: [
      "End-to-End Encryption",
      "Secure Cloud Backup",
      "Secure Servers",
      "Role-Based Access",
    ],
    icon: "♢",
    type: "security",
  },
];

const integrationItems = [
  "Google Maps",
  "GPS Devices",
  "SMS Gateway",
  "WhatsApp Alerts",
  "School ERP",
  "RFID Devices",
  "Payment Gateway",
];

const benefits = [
  {
    icon: "◷",
    title: "Save Time",
    text: "Automate daily transportation tasks.",
  },
  {
    icon: "♢",
    title: "Better Safety",
    text: "Keep students visible throughout every trip.",
  },
  {
    icon: "▥",
    title: "Easy Monitoring",
    text: "One dashboard for your complete fleet.",
  },
  {
    icon: "♡",
    title: "Happy Parents",
    text: "Give parents confidence and transparency.",
  },
  {
    icon: "⌂",
    title: "Lower Cost",
    text: "Improve fleet and route efficiency.",
  },
  {
    icon: "⌁",
    title: "Better Communication",
    text: "Connect schools, drivers and parents.",
  },
];

function AnimatedCounter({
  value,
  label,
  icon,
  delay,
}: {
  value: string;
  label: string;
  icon: string;
  delay: number;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`stat-item ${visible ? "stat-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="stat-icon">{icon}</div>

      <div className="stat-content">
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className={`feature-card ${feature.type || ""}`}>
      <div className="feature-card-header">
        <span className="feature-number">{feature.id}</span>

        <div className="feature-card-icon">
          {feature.icon}
        </div>

        <h3>{feature.title}</h3>
      </div>

      <p className="feature-card-description">
        {feature.description}
      </p>

      <div className="feature-points">
        {feature.points.map((point) => (
          <div className="feature-point" key={point}>
            <span className="check-icon">✓</span>
            <span>{point}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Features() {
  return (
    <main className="features-page">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="features-hero">
        <div className="features-container hero-grid">
          <div className="hero-copy">
            <span className="section-eyebrow">FEATURES</span>

            <h1>
              Powerful Features for
              <br />
              Smarter{" "}
              <span>School Transportation</span>
            </h1>

            <p>
              Everything you need to keep students safe, parents informed
              and schools in complete control.
            </p>

            <div className="hero-stats">
              <AnimatedCounter
                value="500+"
                label="Schools"
                icon="♜"
                delay={0}
              />

              <AnimatedCounter
                value="50,000+"
                label="Parents"
                icon="♟"
                delay={100}
              />

              <AnimatedCounter
                value="1,000+"
                label="Buses"
                icon="▣"
                delay={200}
              />

              <AnimatedCounter
                value="99.8%"
                label="Uptime"
                icon="♢"
                delay={300}
              />
            </div>
          </div>

          <div className="hero-visual">
            <div className="dashboard-glow" />

            <img
              src={dashboard}
              alt="SafeKid Go school transportation dashboard"
              className="dashboard-image"
            />

            <img
              src={mobile}
              alt="SafeKid Go live bus tracking mobile application"
              className="hero-mobile"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURE MATRIX
      ========================================================== */}
      <section className="feature-showcase">
        <div className="features-container">
          <div className="section-heading">
            <span className="section-eyebrow">
              SMART FEATURES FOR COMPLETE SAFETY
            </span>

            <h2>
              Everything You Need for
              <br />
              Total Peace of Mind
            </h2>

            <p>
              One connected platform for schools, parents, drivers and
              transportation teams.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PRODUCT VISUAL SECTION
      ========================================================== */}
      <section className="product-visual-section">
        <div className="features-container product-visual-grid">
          <div className="product-image-area">
            <div className="image-backdrop" />

            <img
              src={schoolBus}
              alt="SafeKid Go school bus"
              className="bus-image"
            />

            <div className="tracking-card">
              <div className="tracking-card-top">
                <span className="live-dot" />
                LIVE TRACKING
              </div>

              <strong>Bus No. UP32 AB 1234</strong>

              <div className="tracking-details">
                <span>ETA</span>
                <b>08:24 AM</b>

                <span>Speed</span>
                <b>40 km/h</b>
              </div>

              <div className="tracking-status">
                <span>●</span>
                On Route
              </div>
            </div>
          </div>

          <div className="product-copy">
            <span className="section-eyebrow">REAL-TIME VISIBILITY</span>

            <h2>
              Know Where Every
              <span> Bus Is.</span>
            </h2>

            <p>
              SafeKid Go gives schools and parents a live view of every
              connected bus, helping everyone stay informed from pickup
              to drop-off.
            </p>

            <div className="copy-points">
              <div>
                <span>✓</span>
                Live bus location
              </div>

              <div>
                <span>✓</span>
                Accurate ETA updates
              </div>

              <div>
                <span>✓</span>
                Route deviation alerts
              </div>

              <div>
                <span>✓</span>
                Parent visibility
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECONDARY FEATURES
      ========================================================== */}
      <section className="secondary-showcase">
        <div className="features-container">
          <div className="secondary-grid">
            {secondaryFeatures.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          INTEGRATIONS
      ========================================================== */}
      <section className="integrations-section">
        <div className="features-container">
          <div className="integration-card">
            <div className="integration-copy">
              <span className="section-eyebrow">
                10 · INTEGRATIONS
              </span>

              <h2>
                Works With the Tools
                <br />
                Schools Already Use
              </h2>

              <p>
                Connect SafeKid Go with maps, GPS devices, school systems,
                communication tools and attendance hardware.
              </p>
            </div>

            <div className="integration-list">
              {integrationItems.map((item, index) => (
                <div className="integration-item" key={item}>
                  <span className={`integration-icon icon-${index + 1}`}>
                    {index === 0 && "⌖"}
                    {index === 1 && "⌁"}
                    {index === 2 && "✉"}
                    {index === 3 && "◉"}
                    {index === 4 && "▦"}
                    {index === 5 && "▣"}
                    {index === 6 && "₹"}
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY SCHOOLS LOVE SAFEKID GO
      ========================================================== */}
      <section className="benefits-section">
        <div className="features-container">
          <div className="benefits-header">
            <span className="section-eyebrow">
              11 · WHY SCHOOLS LOVE SAFEKID GO
            </span>

            <h2>
              Built Around
              <span> Real Safety.</span>
            </h2>

            <p>
              A complete transportation platform designed around the
              needs of schools, parents and students.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit) => (
              <div className="benefit-item" key={benefit.title}>
                <div className="benefit-icon">
                  {benefit.icon}
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="features-cta">
        <div className="features-container">
          <div className="cta-card">
            <div className="cta-image">
              <img
                src={bus}
                alt="SafeKid Go school transportation"
              />
            </div>

            <div className="cta-content">
              <span className="section-eyebrow">
                SAFER TRANSPORTATION STARTS HERE
              </span>

              <h2>
                Ready to Make School
                <br />
                Transportation Safer?
              </h2>

              <p>
                Join schools using SafeKid Go to create safer,
                smarter and more transparent student transportation.
              </p>

              <div className="cta-buttons">
                <a href="/contact" className="cta-button primary">
                  Contact Us
                  <span>→</span>
                </a>

                <a href="/about" className="cta-button secondary">
                  Learn More
                  <span>→</span>
                </a>
              </div>
            </div>

            <div className="cta-family">
              <img
                src={demoLaptop}
                alt="SafeKid Go platform preview"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TRUST STRIP
      ========================================================== */}
      <section className="trust-strip">
        <div className="features-container trust-grid">
          <div className="trust-item">
            <div className="trust-symbol">ISO</div>
            <div>
              <strong>ISO 27001</strong>
              <span>Security Ready</span>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-symbol">24/7</div>
            <div>
              <strong>24×7 Support</strong>
              <span>We're here when you need us</span>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-symbol">✓</div>
            <div>
              <strong>99.8% Uptime</strong>
              <span>Reliable & always available</span>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-symbol">IND</div>
            <div>
              <strong>Trusted by India</strong>
              <span>Built for Indian schools</span>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-symbol">IN</div>
            <div>
              <strong>Made in India</strong>
              <span>Technology for safer journeys</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}