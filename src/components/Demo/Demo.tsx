import "./Demo.css";
import { FaPlayCircle } from "react-icons/fa";

import laptop from "../../assets/demo-laptop.png";

function Demo() {
  return (
    <section className="demo">

      <div className="demo-left">

        <div className="play-icon">
          <FaPlayCircle />
        </div>

        <div>
          <span className="coming-badge">
            COMING SOON
          </span>

          <h2>Experience SafeKid Go in Action</h2>

          <p>
            We're preparing an interactive demonstration of SafeKid Go.
            Experience live tracking, attendance, instant alerts and much
            more once our platform launches.
          </p>

          <button className="notify-btn">
            Notify Me When Ready
          </button>

        </div>

      </div>

      <div className="demo-right">

        <img src={laptop} alt="Demo Preview" />

      </div>

    </section>
  );
}

export default Demo;