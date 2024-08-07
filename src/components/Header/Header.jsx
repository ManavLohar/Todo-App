import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [addClass, setAddClass] = useState(false);

  const openAndCloseNavbar = () => {
    setAddClass(!addClass);
  };

  const cssForLink = {
    textDecoration: "none",
  };

  return (
    <nav className="navbar">
      <h2>Navbar</h2>
      <div
        className={addClass ? "navbar-lists showNavbarList" : "navbar-lists"}
      >
        <ul>
          <Link style={cssForLink} to="/">
            <li className="list-item">Home</li>
          </Link>
          <li className="list-item">Features</li>
          <li className="list-item">Pricing</li>
          <Link style={cssForLink} to="/contact-us">
            <li className="list-item">Contact Us</li>
          </Link>
        </ul>
        <div className="searchBar">
          <input type="search" placeholder="Search" />
        </div>
      </div>
      <div
        className={addClass ? "menuBar closeIcon" : "menuBar"}
        onClick={openAndCloseNavbar}
      >
        <span></span>
      </div>
    </nav>
  );
};

export default Header;
