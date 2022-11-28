import React from "react";
import { format } from "date-fns";

const SingleTag = ({ tag, onEditTagFormOpen }) => {
  return (
    <div
      className="column__element secondary-main__column-element"
      onClick={() => onEditTagFormOpen(tag)}
    >
      <div className="user__container">
        <div>
          <h2 className="column__element-name task-name">{tag.name}</h2>
          <div>Created {format(new Date(tag.createdAt), "do MMM")}</div>
        </div>
        <div
          className="user__container_img tag_color"
          style={{ backgroundColor: tag.color }}
        ></div>
      </div>
    </div>
  );
};

export default SingleTag;
