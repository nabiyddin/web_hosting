import React, { useState } from "react";
import "./HostingPlatform.css";
import Button from "../Button/Button";

const HostingPlatform = () => {
  const [activeTab, setActiveTab] = useState("block-storage");

  const tabs = [
    { id: "block-storage", label: "Block storage" },
    { id: "load-balancers", label: "Load balancers" },
    { id: "floating-ips", label: "Floating IPS" },
  ];

  return (
    <section className="hosting-platform">
      <div className="platform-container">
        <div className="platform-texts">
          <h1>Innovative hosting platform built team empowerment</h1>

          <p>
            Unlimited Domain & Hosting in One Platform.Website hosting options,
            99.9% uptime guarantee, free SSL certificate, easy WordPress
            installs.
          </p>
          <div className="platform-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="platform-content">
          <div className="tab-content">
            {activeTab === "block-storage" && (
              <div className="block-storage-content">
                <h2>Block storage</h2>
                <p>
                  Unlimited Domain & Hosting in One Platform.Website hosting
                  options, 99.9% uptime guarantee, free SSL certificate, easy
                  WordPress installs.
                </p>
                <Button className="platform-button">Explore now</Button>
              </div>
            )}
          </div>
          <div className="platform-image">
            <img src="../../../src/assets/images/cubes.png" alt="image_cubes" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostingPlatform;
