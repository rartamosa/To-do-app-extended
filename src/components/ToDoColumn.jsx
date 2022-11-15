import React from "react";

import SingleTask from "./SingleTask";

const ToDoColumn = ({ columnName, toDoList }) => {
  return (
    <div className="todo__column">
      <h3 className="todo__column-name">{columnName}</h3>
      {toDoList.map((task) => (
        <SingleTask
          key={task.id}
          title={task.title}
          description={task.description}
          link={task.link}
          tags={task.tags}
          dueDate={task.dueDate}
          assignee={task.assignee}
          column={task.column}
          comments={task.comments}
        />
      ))}
    </div>
  );
};

export default ToDoColumn;
