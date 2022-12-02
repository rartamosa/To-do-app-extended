import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItem = ({
  handleMobileMenuClose,
  tasksLength,
  usersLength,
  columnsLength,
  tagsLength,
}) => {
  return (
    <>
      <NavLink to="/" className="navlink" onClick={handleMobileMenuClose}>
        <div className="navigation__collection_element">
          <div className="navigation__collection_element-1st">
            <div
              className="navigation__collection_element-tasks-icon"
              title="Tasks icon"
              alt="Tasks icon"
            />
            <p className="navigation__collection_element_name">Tasks</p>
          </div>
          <span className="navigation__collection_element_number">
            {tasksLength}
          </span>
        </div>
      </NavLink>
      <NavLink to="/users" className="navlink" onClick={handleMobileMenuClose}>
        <div className="navigation__collection_element">
          <div className="navigation__collection_element-1st">
            <div
              className="navigation__collection_element-users-icon"
              title="Users icon"
              alt="Users icon"
            />
            <p className="navigation__collection_element_name">Users</p>
          </div>
          <span className="navigation__collection_element_number">
            {usersLength}
          </span>
        </div>
      </NavLink>
      <NavLink
        to="/columns"
        className="navlink"
        onClick={handleMobileMenuClose}
      >
        <div className="navigation__collection_element">
          <div className="navigation__collection_element-1st">
            <div
              className="navigation__collection_element-columns-icon"
              title="Columns icon"
              alt="Columns icon"
            />
            <p className="navigation__collection_element_name">Columns</p>
          </div>
          <span className="navigation__collection_element_number">
            {columnsLength}
          </span>
        </div>
      </NavLink>
      <NavLink to="/tags" className="navlink" onClick={handleMobileMenuClose}>
        <div className="navigation__collection_element">
          <div className="navigation__collection_element-1st">
            <div
              className="navigation__collection_element-tags-icon"
              title="Tags icon"
              alt="Tags icon"
            />
            <p className="navigation__collection_element_name">Tags</p>
          </div>
          <span className="navigation__collection_element_number">
            {tagsLength}
          </span>
        </div>
      </NavLink>
    </>
  );
};

export default NavigationItem;
