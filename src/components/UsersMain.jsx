import React from "react";

import SingleUser from "./SingleUser";

const UsersMain = ({ usersList, onAddUserFormOpen, onEditUserFormOpen }) => {
  return (
    <main className="to-do secondary-main">
      <h3 className="todo__column-name">users</h3>
      <div className="secondary-main__column">
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
