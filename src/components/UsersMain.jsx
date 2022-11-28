import React from "react";

import SingleUser from "./SingleUser";

const UsersMain = ({
  onMobileMenuOpen,
  usersList,
  onAddUserFormOpen,
  onEditUserFormOpen,
}) => {
  return (
    <main className="to-do users__main">
      <button
        onClick={onMobileMenuOpen}
        className="main__mobile-menu-button hidden"
      ></button>
      <h3 className="todo__column-name">users</h3>
      <div className="users__column">
        {usersList?.map((user) => (
          <SingleUser
            key={user._id}
            user={user}
            onEditUserFormOpen={onEditUserFormOpen}
          />
        ))}
      </div>
      <button className="main_add-button" onClick={onAddUserFormOpen}></button>
    </main>
  );
};

export default UsersMain;
