import React from "react";

import NavigationItem from "./NavigationItem";

const Navigation = ({ isMobileMenuOpen, onMobileMenuClose, tagsLength }) => {
  return (
    <>
      <nav
        className="navigation__collection"
        style={{ left: isMobileMenuOpen ? "0" : "-75%" }}
      >
        <NavigationItem
          handleMobileMenuClose={onMobileMenuClose}
          tagsLength={tagsLength}
        />
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
