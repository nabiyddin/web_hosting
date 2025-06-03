import "./Dashboard.css";

const Dashboard = () => {
  return (
    <section className="dashboard-section">
      <div className="dashboard-content">
        <div className="dashboard-text">
          <h2 className="dashboard-title">
            Your websites deserve fast , secure and also reliable hosting
          </h2>
          <p className="dashboard-description">
            Unlimited Domain & Hosting in One Platform.Website hosting options,
            99.9% uptime guarantee, free SSL certificate, easy WordPress
            installs.Unlimited Domain & Hosting in One Platform.Website hosting
            options, 99.9% uptime guarantee, free SSL certificate, easy
            WordPress installs.
          </p>
        </div>

        <div className="dashboard-image">
          <img
            src="../../../src/assets/images/dashboard.png"
            alt="dashboard-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
