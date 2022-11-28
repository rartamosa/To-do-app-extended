import React from "react";
import { format } from "date-fns";

const SingleColumn = ({ column, onEditColumnFormOpen }) => {
  return (
    <div
      className="column__element secondary-main__column-element"
      onClick={() => onEditColumnFormOpen(column)}
    >
      <div className="user__container">
        <h2 className="column__element-name task-name">{column.name}</h2>
        <div>Created {format(new Date(column.createdAt), "do MMM")}</div>
      </div>
    </div>
  );
};

export default SingleColumn;
