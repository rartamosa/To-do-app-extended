import React from "react";

import SingleColumn from "./SingleColumn";

const ColumnsMain = ({
  columnsList,
  onAddColumnFormOpen,
  onEditColumnFormOpen,
}) => {
  return (
    <main className="to-do secondary-main">
      <h3 className="todo__column-name">columns</h3>
      <div className="secondary-main__column">
        {columnsList.map((column) => (
          <SingleColumn
            key={column._id}
            column={column}
            onEditColumnFormOpen={onEditColumnFormOpen}
          />
        ))}
      </div>
      <button
        className="main_add-button"
        onClick={onAddColumnFormOpen}
      ></button>
    </main>
  );
};

export default ColumnsMain;
