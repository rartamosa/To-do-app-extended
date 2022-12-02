import React from "react";

import ToDoColumn from "./ToDoColumn";

const Main = ({
  onAddFormOpen,
  toDoList,
  onMobileMenuOpen,
  onEditFormOpen,
  columnsListData,
}) => {
  return (
    <main className="to-do">
      <button
        onClick={onMobileMenuOpen}
        className="main__mobile-menu-button hidden"
      ></button>
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
