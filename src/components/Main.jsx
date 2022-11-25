import React from "react";

import ToDoColumn from "./ToDoColumn";

const Main = ({
  onAddFormOpen,
  toDoList,
  onMobileMenuOpen,
  onEditFormOpen,
  columnsList,
}) => {
  console.log(toDoList, columnsList);
  return (
    <main className="to-do">
      <button
        onClick={onMobileMenuOpen}
        className="main__mobile-menu-button hidden"
      ></button>
      {columnsList?.map((column) => (
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
