import React from "react";

import ToDoColumn from "./ToDoColumn";

const Main = ({ onAddFormOpen, toDoList, onEditFormOpen, columnsListData }) => {
  return (
    <main className="to-do">
      {columnsListData?.map((column) => (
        <ToDoColumn
          key={column._id}
          columnName={column.name}
          toDoList={toDoList?.filter(
            (task) => task.column.name === column.name
          )}
          onEditFormOpen={onEditFormOpen}
        />
      ))}
      <button className="main_add-button" onClick={onAddFormOpen}></button>
    </main>
  );
};

export default Main;
