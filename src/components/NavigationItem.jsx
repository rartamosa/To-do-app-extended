import React from "react";

const NavigationItem = ({ path, name, number }) => {
  return (
    <div className="navigation__collection_element">
      <div className="navigation__collection_element-1st">
        <img
          src={path}
          className="navigation__collection_element-img"
          title="Tasks icon"
          alt="Tasks icon"
        />
        <p className="navigation__collection_element_name">{name}</p>
      </div>
      <span className="navigation__collection_element_number">{number}</span>
    </div>
  );
};

export default NavigationItem;
