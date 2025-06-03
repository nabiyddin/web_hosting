import React from "react";
import "./Footer.css";

const Footer = () => {
  const navigationLinks = [
    { name: "Demos", href: "#" },
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Pages", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const socialLinks = [
    { name: "Google", icon: "../../../src/assets/icons/google.svg", href: "#" },
    { name: "Figma", icon: "../../../src/assets/icons/framer.svg", href: "#" },
    {
      name: "Facebook",
      icon: "../../../src/assets/icons/facebook.svg",
      href: "#",
    },
    {
      name: "WhatsApp",
      icon: "../../../src/assets/icons/whatsapp.svg",
      href: "#",
    },
    {
      name: "YouTube",
      icon: "../../../src/assets/icons/youtube.svg",
      href: "#",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Brand */}
        <div className="brand-logo">
          <a href="#">
            <img src="../../../src/assets/icons/logo.svg" alt="logo" />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="footer-nav">
          <ul className="nav-links">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="social-link"
              aria-label={social.name}
            >
              <img
                src={`/icons//${social.icon}`}
                alt={social.name}
                className="social-icon"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
