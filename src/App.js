import React, { useState } from "react";

import Navigation from "./components/Navigation";
import Main from "./components/Main";
import AddTaskWindow from "./components/AddTaskWindow";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toDoList, setToDoList] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const handleFormSubmit = (newToDoTask) => {
    setToDoList([...toDoList, newToDoTask]);
  };

  return (
    <>
      <Navigation
        tasksTotal={toDoList.length}
        onMobileMenuOpen={handleMobileMenuOpen}
      />
      <Main
        onModalOpen={handleModalOpen}
        toDoList={toDoList}
        onMobileMenuOpen={handleMobileMenuOpen}
      />
      {isModalOpen && (
        <AddTaskWindow
          onFormSubmit={handleFormSubmit}
          onModalClose={handleModalClose}
        />
      )}
    </>
  );
};

export default App;
