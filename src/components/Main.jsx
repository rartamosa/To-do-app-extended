import React, { useState } from "react";

import ToDoColumn from "./ToDoColumn";

const Main = ({ onModalOpen, toDoList, onMobileMenuToggle }) => {
  const [task, setTask] = useState([]);

  return (
    <main className="to-do">
      <button
        onClick={onMobileMenuToggle}
        className="main__mobile-menu-button hidden"
      ></button>
      <ToDoColumn columnName="TO DO" toDoList={toDoList} />
      <ToDoColumn columnName="IN PROGRESS" toDoList={toDoList} />
      <ToDoColumn columnName="DONE" toDoList={toDoList} />
      <button className="main_add-button" onClick={onModalOpen}></button>
    </main>
  );
};

export default Main;
