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
  const [tagsList, setTagsList] = useState([]);

  const [tagsListData, tagsListError, tagsListLoading] = useFetch(
    `${URL}/tags`
  );

  useEffect(() => {
    if (tagsListData.records) {
      setTagsList(tagsListData.records);
    }
  }, [tagsListData]);

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <BrowserRouter>
      <Navigation
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuClose={handleMobileMenuClose}
        tagsLength={tagsList.length}
      />
      <Routes>
        <Route
          path="/"
          element={
            <TasksPage
              handleMobileMenuOpen={handleMobileMenuOpen}
              handleMobileMenuClose={handleMobileMenuClose}
              tagsListData={tagsListData}
            />
          }
        />
        <Route
          path="/users"
          element={
            <UsersPage
              handleMobileMenuOpen={handleMobileMenuOpen}
              handleMobileMenuClose={handleMobileMenuClose}
            />
          }
        />
        <Route
          path="/columns"
          element={
            <ColumnsPage
              handleMobileMenuOpen={handleMobileMenuOpen}
              handleMobileMenuClose={handleMobileMenuClose}
            />
          }
        />
        <Route
          path="/tags"
          element={
            <TagsPage
              handleMobileMenuOpen={handleMobileMenuOpen}
              handleMobileMenuClose={handleMobileMenuClose}
              tagsListData={tagsListData}
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
