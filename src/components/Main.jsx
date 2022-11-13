import React, { useState } from "react";

import ToDoColumn from "./ToDoColumn";

const Main = ({ onModalOpen, toDoList }) => {
  const [task, setTask] = useState([]);
  return (
    <main className="to-do">
      <ToDoColumn columnName="TO DO" toDoList={toDoList} />
      {/* <ToDoColumn columnName="IN PROGRESS" />
      <ToDoColumn columnName="DONE" /> */}
      <button className="main_add-button" onClick={onModalOpen}></button>
    </main>
  );
};

export default Main;
