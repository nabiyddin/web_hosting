import { useState } from "react";
import Button from "../Button/Button";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left-wrapper">
        <div className="logo">
          <a href="#">
            <img src="../../../src/assets/icons/logo.svg" alt="logo" />
          </a>
          {/* <span>Web hosting</span> */}
        </div>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <a href="#demos">Demos</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#pages">Pages</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      <Button className="main-button">Get started</Button>

      <button
        className="mobile-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
