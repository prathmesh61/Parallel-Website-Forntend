import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assect/logo.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  window.onscroll = () => {
    setScrolled(scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <nav className={scrolled ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="top-navbar ">
          <div className="left">
            <img src={logo} className="logo" alt="logo" />
            <div className="nav-links">
              <span className="link">Jobs</span>
              <span className="link">Startups</span>
              <span className="link">Collections</span>
              <span className="link">Learn</span>
            </div>
          </div>
          <div className="right">
            <div className="nav-links">
              <span className="link">For Compainies</span>
              <span className="link">Sign In</span>
              <button>Start Free</button>
            </div>
          </div>
        </div>
        <div className="botton-navbar">
          <div className="nav-links">
            <span className="link">Marketplace</span>
            <span className="link">Women Led</span>
            <span className="link">Climate Tech</span>
            <span className="link">Web 3</span>
            <span className="link">Ecommerce</span>
            <span className="link">FinTech</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
