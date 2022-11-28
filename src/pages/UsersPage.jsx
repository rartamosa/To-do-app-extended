import React, { useState, useEffect } from "react";

import useFetch from "../hooks/useFetch";

import Loading from "../components/Loading";
import UsersMain from "../components/UsersMain";
import UsersForm from "../components/UsersForm";

const UsersPage = ({ handleMobileMenuOpen, handleMobileMenuClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [mode, setMode] = useState("add");
  const [selectedUser, setSelectedUser] = useState(null);

  const URL = "https://todo-api-mwy8.onrender.com";

  const [usersListData, usersListError, usersListLoading] = useFetch(
    `${URL}/users`
  );

  useEffect(() => {
    if (usersListData.records) {
      setUsersList(usersListData.records);
    }
  }, [usersListData]);

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
      {usersListLoading && (
        <Loading onMobileMenuClose={handleMobileMenuClose} />
      )}
      {usersListError && <h2>{usersListError}</h2>}
      <UsersMain
        onMobileMenuOpen={handleMobileMenuOpen}
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
