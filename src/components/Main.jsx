import React from "react";

import ToDoColumn from "./ToDoColumn";

const Main = ({
  onAddFormOpen,
  toDoList,
  onMobileMenuOpen,
  onEditFormOpen,
}) => {
  return (
    <main className="to-do">
      <button
        onClick={onMobileMenuOpen}
        className="main__mobile-menu-button hidden"
      ></button>

      <ToDoColumn
        columnName="TEST"
        toDoList={toDoList.filter((task) => task.column.name === "Test column")}
        onEditFormOpen={onEditFormOpen}
      />
      {/* <ToDoColumn
        columnName="IN PROGRESS"
        toDoList={toDoList.filter((task) => task.column === "IN PROGRESS")}
        onEditFormOpen={onEditFormOpen}
      />
      <ToDoColumn
        columnName="DONE"
        toDoList={toDoList.filter((task) => task.column === "DONE")}
        onEditFormOpen={onEditFormOpen}
      /> */}
      <button className="main_add-button" onClick={onAddFormOpen}></button>
    </main>
  );
};

export default Main;
