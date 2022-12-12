import React from "react";

import NavigationItem from "./NavigationItem";

const Navigation = ({
  isMobileMenuOpen,
  onMobileMenuToggle,
  tasksLength,
  usersLength,
  tagsLength,
  columnsLength,
}) => {
  return (
    <>
      <nav
        className="navigation__collection"
        style={{ left: isMobileMenuOpen ? "0" : "-75%" }}
      >
        <NavigationItem
          onMobileMenuToggle={onMobileMenuToggle}
          tasksLength={tasksLength}
          usersLength={usersLength}
          columnsLength={columnsLength}
          tagsLength={tagsLength}
        />
      </nav>
      <div
        onClick={onMobileMenuToggle}
        className={`navigation__overlay ${
          !isMobileMenuOpen && "navigation__overlay_closed"
        }`}
      ></div>
    </>
  );
};

export default Navigation;
