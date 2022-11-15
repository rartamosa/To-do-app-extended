import React from "react";

import NavigationItem from "./NavigationItem";
import navigationElements from "../utils/navigationElements";

const Navigation = ({ tasksTotal, isMobileMenuOpen }) => {
  return (
    <nav
      className="navigation__collection"
      style={{ left: isMobileMenuOpen ? "0" : "-75%" }}
    >
      {navigationElements.map((element) => {
        return (
          <NavigationItem
            key={element.id}
            path={element.relativePath}
            name={element.title}
            number={element.title === "Tasks" ? tasksTotal : element.number}
          />
        );
      })}
    </nav>
  );
};

export default Navigation;
