import React from "react";

import SingleTask from "./SingleTask";

const ToDoColumn = ({ columnName, toDoList, onEditFormOpen }) => {
  return (
    <div className="todo__column">
      <h3 className="todo__column-name">{columnName}</h3>
      {toDoList.map((task) => (
        <SingleTask key={task.id} task={task} onEditFormOpen={onEditFormOpen} />
      ))}
    </div>
  );
};

export default ToDoColumn;
