import "./Features.css";

import {
  FaMapMarkerAlt,
  FaBell,
  FaUserCheck,
  FaShieldAlt,
  FaTachometerAlt,
  FaRoute,
  FaClipboardList,
} from "react-icons/fa";

const features = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Live GPS Tracking",
    desc: "Track every school bus in real time with accurate GPS updates."
  },
  {
    icon: <FaBell />,
    title: "Instant Alerts",
    desc: "Receive notifications for pickup, drop-off and emergencies."
  },
  {
    icon: <FaUserCheck />,
    title: "Attendance",
    desc: "Digital attendance for students during boarding."
  },
  {
    icon: <FaShieldAlt />,
    title: "SOS Emergency",
    desc: "Emergency alerts for parents and school administrators."
  },
  {
    icon: <FaTachometerAlt />,
    title: "Speed Monitoring",
    desc: "Monitor bus speed and ensure safe driving."
  },
  {
    icon: <FaRoute />,
    title: "Route & ETA",
    desc: "Estimated arrival time with optimized routes."
  },
  {
    icon: <FaClipboardList />,
    title: "Reports & History",
    desc: "Access detailed trip history and performance reports."
  },
];

function Features() {
  return (
    <section className="features" id="features">

      <span className="feature-tag">
        SMART FEATURES FOR COMPLETE SAFETY
      </span>

      <h2>
        Everything You Need for
        <br />
        Total Peace of Mind
      </h2>

      <div className="feature-grid">

        {features.map((item, index) => (

          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;