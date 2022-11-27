import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import TasksPage from "./pages/TasksPage";
import UsersPage from "./pages/UsersPage";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
