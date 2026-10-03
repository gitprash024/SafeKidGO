import "./Hero.css";


import bus from "../../assets/school-bus.png";
import playstore from "../../assets/playstore.png";
import appstore from "../../assets/appstore.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Track Every Ride.
          <br />
          Protect <span>Every Child.</span>
        </h1>

        <p>
          Real-time school bus tracking with instant notifications,
          live GPS, attendance and complete child safety.
        </p>

        <div className="store-buttons">

          <img
            src={playstore}
            alt="Google Play"
          />

          <img
            src={appstore}
            alt="App Store"
          />

        </div>

      </div>

      <div className="hero-right">

       

        <img
          src={bus}
          className="bus"
          alt="School Bus"
        />

      </div>

    </section>
  );
}

export default Hero;