import React from "react";
import { format } from "date-fns";

const SingleTask = ({ task, onEditFormOpen }) => {
  return (
    <div className="todo__column_task" onClick={() => onEditFormOpen(task)}>
      <h2 className="todo__column_task-name">{task.title}</h2>
      <div className="todo__column_task-date-person">
        <div>{format(new Date(task.dueDate), "do MMM")}</div>
        <div className="todo__column_task-date-person_dot">.</div>
        <div>
          Assigned to
          <span className="todo__column_task-date-person_person">
            {task.assignee.name}
          </span>
        </div>
      </div>
      <p className="todo__column_task-description">{task.description}</p>
      <div className="todo__column_task-link">
        <img
          src="../assets/link_icon.png"
          title="link"
          alt="link"
          className="todo__column_task-link-img"
        />
        {task.link.length < 14 ? (
          <span>{task.link}</span>
        ) : (
          <span>{task.link.substring(0, 13) + "..."}</span>
        )}
      </div>
      <ul className="todo__column_task-tags">
        {task.tags.map((tag) => (
          <li key={tag._id} className="todo__column_task-tags_design">
            {tag.name}
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
        <span>{task.comments.length}</span>
      </div>
    </div>
  );
};

export default SingleTask;
