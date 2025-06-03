import Button from "../Button/Button";
import "./HostingPromo.css";

const HostingPromo = () => {
  return (
    <section className="hosting-promo">
      <div className="promo-container">
        <div className="promo-image">
          <img src="../../../src/assets/images/hosting_promo.png" alt="" />
        </div>

        <div className="promo-content">
          <h2 className="promo-title">
            Lets get rid of worries about web hosting to save your time
          </h2>

          <p className="promo-description">
            Unlimited Domain & Hosting in One Platform.Website hosting options,
            99.9% uptime guarantee, free SSL certificate, easy WordPress
            installs.
          </p>
          <Button className="promo-button">Explore now</Button>
        </div>
      </div>
    </section>
  );
};

export default HostingPromo;
