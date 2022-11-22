import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItem = () => {
  return (
    <>
      <NavLink to="/">
        <div className="navigation__collection_element">
          <div className="navigation__collection_element-1st">
            <div
              className="navigation__collection_element-tasks-icon"
              title="Tasks icon"
              alt="Tasks icon"
            />
            <p className="navigation__collection_element_name">Tasks</p>
          </div>
          <span className="navigation__collection_element_number">X</span>
        </div>
      </NavLink>
      <NavLink to="/users">
        <div className="navigation__collection_element">
          <div className="navigation__collection_element-1st">
            <div
              className="navigation__collection_element-users-icon"
              title="Users icon"
              alt="Users icon"
            />
            <p className="navigation__collection_element_name">Users</p>
          </div>
          <span className="navigation__collection_element_number">3</span>
        </div>
      </NavLink>
      <NavLink to="/columns">
        <div className="navigation__collection_element">
          <div className="navigation__collection_element-1st">
            <div
              className="navigation__collection_element-columns-icon"
              title="Columns icon"
              alt="Columns icon"
            />
            <p className="navigation__collection_element_name">Columns</p>
          </div>
          <span className="navigation__collection_element_number">3</span>
        </div>
      </NavLink>
      <NavLink to="/tags">
        <div className="navigation__collection_element">
          <div className="navigation__collection_element-1st">
            <div
              className="navigation__collection_element-tags-icon"
              title="Tags icon"
              alt="Tags icon"
            />
            <p className="navigation__collection_element_name">Tags</p>
          </div>
          <span className="navigation__collection_element_number">2</span>
        </div>
      </NavLink>
    </>
  );
};

export default NavigationItem;
