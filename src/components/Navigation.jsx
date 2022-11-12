import React from "react";

import NavigationItem from "./NavigationItem";
import navigationElements from "../utils/navigationElements";

const Navigation = () => {
  return (
    <nav className="navigation__collection">
      {navigationElements.map((element) => {
        return (
          <NavigationItem
            key={element.id}
            path={element.relativePath}
            name={element.title}
            number={element.number}
          />
        );
      })}
    </nav>
  );
};

export default Navigation;
