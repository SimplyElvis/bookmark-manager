import React from "react";
import "../../stylesheets/Navbar.scss";
import logo from "../../assets/logo-bookmark.svg";

const Navbar = () => {
  return (
    <nav>
      <span id="brand">
        <img src={logo} alt="brand logo" />
      </span>

      <div className="toggle">
        <i class="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
