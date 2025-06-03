import React, { useState } from "react";
import "./HostingPlans.css";

const HostingPlans = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Start up",
      subtitle: "Best for small business owners",
      price: 99,
      features: ["2x cpu power", "Free migration", "Limited reporting"],
      icon: "🚀",
    },
    {
      name: "Agency",
      subtitle: "Best for medium agency",
      price: 199,
      features: [
        "16x cpu power",
        "Free migration",
        "Limited Websites",
        "100 GB all set storage",
        "Shared environment",
        "Unlimited bandwidth",
      ],
      popular: true,
      icon: "⚡",
    },
    {
      name: "Developer",
      subtitle: "Best for independent developers",
      price: 499,
      features: ["4x cpu power", "Free migration", "Limited reporting"],
      icon: "👓",
    },
  ];

  return (
    <section className="hosting-plans">
      <div className="plans-container">
        <div className="plans-texts">
          <h2 className="plans-title">Choose your perfect web hosting plan</h2>

          <p className="plans-subtitle">
            Each web hosting plan comes with a free domain name
          </p>
        </div>

        <div className="billing-toggle">
          <button
            className={`toggle-btn ${
              billingCycle === "monthly" ? "active" : ""
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`toggle-btn ${
              billingCycle === "yearly" ? "active" : ""
            }`}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly
          </button>
        </div>

        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`plan-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && (
                <div className="popular-badge">Most popular</div>
              )}

              <div className="plan-icon">{plan.icon}</div>

              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-subtitle">{plan.subtitle}</p>

              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/mo</span>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <svg
                      className="check-icon"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 22C18 22 22.5 17.5 22.5 12C22.5 6.5 18 2 12.5 2C7 2 2.5 6.5 2.5 12C2.5 17.5 7 22 12.5 22Z"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.25 11.9999L11.08 14.8299L16.75 9.16992"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    {feature}
                  </li>
                ))}
              </ul>

              <button className="trial-btn">Start 14 days trial</button>

              <p className="no-card">No credit card required</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingPlans;
