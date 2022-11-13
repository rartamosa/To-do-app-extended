import React, { useState } from "react";

import Navigation from "./components/Navigation";
import Main from "./components/Main";
import AddTaskWindow from "./components/AddTaskWindow";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toDoList, setToDoList] = useState([]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (newToDoTask) => {
    setToDoList([...toDoList, newToDoTask]);
    console.log("test", toDoList);
  };

  return (
    <>
      <Navigation tasksTotal={toDoList.length} />
      <Main onModalOpen={handleModalOpen} toDoList={toDoList} />
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
