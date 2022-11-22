import React from "react";

import NavigationItem from "./NavigationItem";

const Navigation = ({ isMobileMenuOpen, onMobileMenuClose }) => {
  return (
    <>
      <nav
        className="navigation__collection"
        style={{ left: isMobileMenuOpen ? "0" : "-75%" }}
      >
        <NavigationItem />
      </nav>
      <div
        onClick={onMobileMenuClose}
        className={`navigation__overlay ${
          !isMobileMenuOpen && "navigation__overlay_closed"
        }`}
      ></div>
    </>
  );
};

export default Navigation;
