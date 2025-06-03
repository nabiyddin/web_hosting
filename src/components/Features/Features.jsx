import "./Features.css";

const Features = () => {
  return (
    <section className="features">
      <div className="features-container">
        <h2 className="features-title">
          These features make your hosting work faster
        </h2>

        <p className="features-description">
          Unlimited Domain & Hosting in One Platform.Website hosting options,
          99.9% uptime guarantee, free SSL certificate, easy WordPress installs.
        </p>

        <div className="features-cards">
          <div className="feature-card">
            <div className="feature-icon">
              <img
                src="../../../src/assets/icons/buckup_icon.svg"
                alt="Backup Icon"
              />
            </div>
            <h3>Remote daily backup</h3>
            <p>
              Unlimited Domain & Hosting in One Platform.Website hosting
              options, 99.9% uptime guarantee, free SSL certificate, easy
              WordPress installs.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <img
                src="../../../src/assets/icons/security_icon.svg"
                alt="Security Icon"
              />
            </div>
            <h3>Worldwide cybersecurity</h3>
            <p>
              Unlimited Domain & Hosting in One Platform.Website hosting
              options, 99.9% uptime guarantee, free SSL certificate, easy
              WordPress installs.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <img
                src="../../../src/assets/icons/scale_icon.svg"
                alt="Scale Icon"
              />
            </div>
            <h3>Scale to success</h3>
            <p>
              Unlimited Domain & Hosting in One Platform.Website hosting
              options, 99.9% uptime guarantee, free SSL certificate, easy
              WordPress installs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
