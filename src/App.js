import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import TasksPage from "./pages/TasksPage";
import UsersPage from "./pages/UsersPage";
import ColumnsPage from "./pages/ColumnsPage";
import TagsPage from "./pages/TagsPage";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      />
      <Routes>
        <Route
          path="/"
          element={
            <TasksPage
              handleMobileMenuOpen={handleMobileMenuOpen}
              handleMobileMenuClose={handleMobileMenuClose}
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
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
