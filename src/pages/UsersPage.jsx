import React, { useState, useEffect } from "react";

import Loading from "../components/Loading";
import UsersMain from "../components/UsersMain";
import UsersForm from "../components/UsersForm";

import { URL } from "../utils/commons";

const UsersPage = ({
  onMobileMenuToggle,
  usersListError,
  usersListLoading,
  usersList,
  setUsersList,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState("add");
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddUserFormOpen = () => {
    setIsModalOpen(true);
    setMode("add");
    setSelectedUser(null);
  };

  const handleNewUserAdd = (name, description, imageURL) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        description,
        imageURL,
      }),
    };
    fetch(`${URL}/users`, options)
      .then((res) => res.json())
      .then((data) => {
        setUsersList([...usersList, data.records]);
      });
  };

  const handleEditUserFormOpen = (singleUser) => {
    setIsModalOpen(true);
    setMode("edit");
    setSelectedUser(singleUser);
  };

  const handleUserEdit = (name, description, imageURL) => {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        description,
        imageURL,
      }),
    };
    fetch(`${URL}/users/${selectedUser._id}`, options)
      .then((res) => res.json())
      .then((data) => {
        const editedUsersList = usersList.map((user) => {
          if (user._id === data.records._id) {
            return data.records;
          } else {
            return user;
          }
        });
        setUsersList(editedUsersList);
      });
    const editedUser = {
      name,
      description,
      imageURL,
    };
    const editedUsersList = usersList.map((user) => {
      if (user._id === editedUser._id) {
        return editedUser;
      } else {
        return user;
      }
    });
    setUsersList(editedUsersList);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setMode("add");
    setSelectedUser(null);
  };

  return (
    <>
      {usersListLoading && <Loading onMobileMenuToggle={onMobileMenuToggle} />}
      {usersListError && <h2>{usersListError}</h2>}
      <UsersMain
        usersList={usersList}
        onAddUserFormOpen={handleAddUserFormOpen}
        onEditUserFormOpen={handleEditUserFormOpen}
      />
      {isModalOpen && (
        <UsersForm
          mode={mode}
          onModalClose={handleModalClose}
          onAddUserFormOpen={handleAddUserFormOpen}
          userToEdit={selectedUser}
          handleUserFormSubmit={
            mode === "add" ? handleNewUserAdd : handleUserEdit
          }
        />
      )}
    </>
  );
};

export default UsersPage;
