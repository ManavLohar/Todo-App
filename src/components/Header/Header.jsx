import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [addClass, setAddClass] = useState(false);

  const openAndCloseNavbar = () => {
    setAddClass(!addClass);
  };
  return (
    <nav className="navbar">
      <h2>Navbar</h2>
      <div
        className={addClass ? "navbar-lists showNavbarList" : "navbar-lists"}
      >
        <ul>
          <li className="list-item">Home</li>
          <li className="list-item">Features</li>
          <li className="list-item">Pricing</li>
          <li className="list-item">Contact Us</li>
        </ul>
        <div className="searchBar">
          <input type="search" placeholder="Search" />
        </div>
      </div>
      <div className={addClass ? "menuBar closeIcon" : "menuBar"} onClick={openAndCloseNavbar} >
        <span></span>
      </div>
    </nav>
  );
};

export default Header;
