import React, { useState, useEffect } from "react";

import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import UsersMain from "../components/UsersMain";

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

  return (
    <>
      {usersListLoading && (
        <Loading onMobileMenuClose={handleMobileMenuClose} />
      )}
      {usersListError && <h2>{usersListError}</h2>}
      <UsersMain
        onMobileMenuOpen={handleMobileMenuOpen}
        onMobileMenuClose={handleMobileMenuClose}
        usersList={usersList}
      />
    </>
  );
};

export default UsersPage;
