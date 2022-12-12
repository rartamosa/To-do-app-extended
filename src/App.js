import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import TasksPage from "./pages/TasksPage";
import UsersPage from "./pages/UsersPage";
import ColumnsPage from "./pages/ColumnsPage";
import TagsPage from "./pages/TagsPage";

import useFetch from "./hooks/useFetch";
import { URL } from "./utils/commons";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toDoList, setToDoList] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [columnsList, setColumnsList] = useState([]);
  const [tagsList, setTagsList] = useState([]);

  const [toDoListData, toDoListError, toDoListLoading] = useFetch(
    `${URL}/tasks`
  );

  const [usersListData, usersListError, usersListLoading] = useFetch(
    `${URL}/users`
  );

  const [columnsListData, columnsListError, columnsListLoading] = useFetch(
    `${URL}/columns`
  );

  const [tagsListData, tagsListError, tagsListLoading] = useFetch(
    `${URL}/tags`
  );

  useEffect(() => {
    if (toDoListData.records) {
      setToDoList(toDoListData.records);
    }
  }, [toDoListData]);

  useEffect(() => {
    if (usersListData.records) {
      setUsersList(usersListData.records);
    }
  }, [usersListData]);

  useEffect(() => {
    if (columnsListData.records) {
      setColumnsList(columnsListData.records);
    }
  }, [columnsListData]);

  useEffect(() => {
    if (tagsListData.records) {
      setTagsList(tagsListData.records);
    }
  }, [tagsListData]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <BrowserRouter>
      <Navigation
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={handleMobileMenuToggle}
        tasksLength={toDoList.length}
        usersLength={usersList.length}
        columnsLength={columnsList.length}
        tagsLength={tagsList.length}
      />
      <button
        onClick={handleMobileMenuToggle}
        className="main__mobile-menu-button hidden"
      ></button>
      <Routes>
        <Route
          path="/"
          element={
            <TasksPage
              onMobileMenuToggle={handleMobileMenuToggle}
              toDoListError={toDoListError}
              toDoListLoading={toDoListLoading}
              toDoList={toDoList}
              setToDoList={setToDoList}
              usersListData={usersListData}
              columnsListData={columnsListData}
              tagsListData={tagsListData}
            />
          }
        />
        <Route
          path="/users"
          element={
            <UsersPage
              onMobileMenuToggle={handleMobileMenuToggle}
              usersListError={usersListError}
              usersListLoading={usersListLoading}
              usersList={usersList}
              setUsersList={setUsersList}
            />
          }
        />
        <Route
          path="/columns"
          element={
            <ColumnsPage
              onMobileMenuToggle={handleMobileMenuToggle}
              columnsListError={columnsListError}
              columnsListLoading={columnsListLoading}
              columnsList={columnsList}
              setColumnsList={setColumnsList}
            />
          }
        />
        <Route
          path="/tags"
          element={
            <TagsPage
              onMobileMenuToggle={handleMobileMenuToggle}
              tagsListError={tagsListError}
              tagsListLoading={tagsListLoading}
              tagsList={tagsList}
              setTagsList={setTagsList}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
