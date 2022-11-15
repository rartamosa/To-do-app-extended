import React, { useState } from "react";
import { format } from "date-fns";

const SingleTask = ({
  title,
  description,
  link,
  tags,
  dueDate,
  assignee,
  column,
  comments,
}) => {
  return (
    <div className="todo__column_task">
      <h2 className="todo__column_task-name">{title}</h2>
      <div className="todo__column_task-date-person">
        <div>{format(dueDate, "do MMM")}</div>
        <div className="todo__column_task-date-person_dot">.</div>
        <div>
          Assigned to
          <span className="todo__column_task-date-person_person">
            {assignee}
          </span>
        </div>
      </div>
      <p className="todo__column_task-description">
        {description.substring(0, 102) + "..."}
      </p>
      <div className="todo__column_task-link">
        <img
          src="../assets/link_icon.png"
          title="link"
          alt="link"
          className="todo__column_task-link-img"
        />
        <span>{link.substring(0, 13) + "..."}</span>
        {/* {link.length < 14 ? (
          <span>{link}</span>
        ) : (
          <span>{link.substring(0, 13) + "..."}</span>
        )} */}
      </div>
      <ul className="todo__column_task-tags">
        {tags.map((tag) => (
          <li key={tag} className="todo__column_task-tags_design">
            {tag}
          </li>
        ))}
      </ul>
      <div className="todo__column_task-comments-section">
        <img
          src="../assets/comment_icon.png"
          title="comment"
          alt="comment"
          className="todo__column_task-comments-section_img"
        />
        <span>{comments.length}</span>
      </div>
    </div>
  );
};

export default SingleTask;
