import Button from "../Button/Button";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Organized cloud and web hosting for your business</h1>
          <p>
            Unlimited Domain & Hosting in One Platform.Website hosting options,
            99.9% uptime guarantee, free SSL certificate, easy WordPress
            installs.
          </p>
          <div className="hero-buttons">
            <Button>Get started</Button>
            <Button variant="secondary">View packages</Button>
          </div>
        </div>
        <div className="hero-image">
          <img src="../../../src/assets/images/dinamika.png" alt="dinamika" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
