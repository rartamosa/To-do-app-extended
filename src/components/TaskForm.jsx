import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import DatePicker from "react-datepicker";
import uniqid from "uniqid";

import "react-datepicker/dist/react-datepicker.css";

const TaskForm = ({ onModalClose, mode, taskToEdit, handleFormSubmit }) => {
  const [title, setTitle] = useState(mode === "add" ? "" : taskToEdit.title);
  const [description, setDescription] = useState(
    mode === "add" ? "" : taskToEdit.description
  );
  const [link, setLink] = useState(mode === "add" ? "" : taskToEdit.link);
  const [tags, setTags] = useState(mode === "add" ? [] : taskToEdit.tags);
  const [dueDate, setDueDate] = useState(
    mode === "add" ? new Date() : new Date(taskToEdit.dueDate)
  );
  const [assignee, setAssignee] = useState(
    mode === "add" ? "" : taskToEdit.assignee.name
  );
  const [comments, setComments] = useState(
    mode === "add" ? [] : taskToEdit.comments
  );
  const [singleComment, setSingleComment] = useState("");
  const [column, setColumn] = useState(
    mode === "add" ? "TO DO" : taskToEdit.column.name
  );

  const onFormSubmit = (event) => {
    event.preventDefault();
    const id = mode === "add" ? uniqid() : taskToEdit._id;
    handleFormSubmit(
      id,
      title,
      description,
      link,
      tags,
      dueDate,
      assignee,
      column,
      comments
    );
    onModalClose();
  };

  const addNewComment = (event) => {
    if (event.key === "Enter") {
      setComments([...comments, singleComment]);
      event.preventDefault();
      setSingleComment("");
    }
  };

  const CustomInput = React.forwardRef(({ value, onClick, onChange }, ref) => (
    <input
      className="add-window__container-controls_selection-select"
      value={value}
      onClick={onClick}
      onChange={onChange}
      readOnly={true}
      onFocus={(event) => event.target.blur()}
      ref={ref}
    />
  ));

  console.log(taskToEdit);
  return (
    <div className="add-window__overlay">
      <div className="add-window__container">
        <form onSubmit={onFormSubmit}>
          <div className="add-window__container-controls">
            <h4 className="add-window__container-controls_titles">Title</h4>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="add-window__container_input"
              type="text"
              placeholder="Type title"
            />
            <h4 className="add-window__container-controls_titles">
              Description
            </h4>
            <input
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="add-window__container_input"
              type="text"
              placeholder="Type description"
            />
            <h4 className="add-window__container-controls_titles">Link</h4>
            <input
              value={link}
              onChange={(event) => setLink(event.target.value)}
              className="add-window__container_input"
              type="text"
              placeholder="Type link"
            />
            <h4 className="add-window__container-controls_titles">Tags</h4>
            <div>
              {/* <TagsInput value={tags} onChange={setTags} name="Tags" /> */}
            </div>
            <div className="add-window__container-controls_selection">
              <div className="add-window__container-controls_selection-element">
                <h4 className="add-window__container-controls_titles">
                  Due date
                </h4>
                <div>
                  <DatePicker
                    selected={dueDate}
                    onChange={(date) => setDueDate(date)}
                    dateFormat={"dd/MM/yyyy"}
                    customInput={<CustomInput />}
                  />
                </div>
              </div>
              <div className="add-window__container-controls_selection-element">
                <h4 className="add-window__container-controls_titles">
                  Assigned to
                </h4>
                <select
                  value={assignee}
                  onChange={(event) => setAssignee(event.target.value)}
                  className="add-window__container-controls_selection-select"
                  name="person"
                  id="person"
                >
                  <option value="" disabled hidden>
                    Choose
                  </option>
                  <option value="Marianna">Marianna</option>
                  <option value="Marta">Marta</option>
                  <option value="Maks">Maks</option>
                </select>
              </div>
              <div className="add-window__container-controls_selection-element">
                <h4 className="add-window__container-controls_titles">
                  Column
                </h4>
                <select
                  value={column}
                  className={
                    mode === "add"
                      ? "add-window__container-controls_selection-select add-window__container-controls_selection-select-disabled"
                      : "add-window__container-controls_selection-select"
                  }
                  onChange={(event) => setColumn(event.target.value)}
                  name="column"
                  id="column"
                  disabled={mode === "add" ? true : false}
                >
                  <option value="TO DO">TO DO</option>
                  <option value="IN PROGRESS">IN PROGRESS</option>
                  <option value="DONE">DONE</option>
                </select>
              </div>
            </div>
            <div>
              <h4 className="add-window__container-controls_titles">
                Comments
              </h4>
              <div className="add-window__container-controls_comments-section">
                <ul className="add-window__container-controls_comments-section-list">
                  {comments.map((newComment) => {
                    return (
                      <li
                        key={uniqid()}
                        className="add-window__container-controls-comment"
                      >
                        {newComment}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <input
                value={singleComment}
                onChange={(event) => setSingleComment(event.target.value)}
                onKeyPress={addNewComment}
                className="add-window__container_input-comment"
                type="text"
                placeholder="Add comment..."
              />
            </div>
          </div>
          <div className="add-window__container_buttons">
            <button
              onClick={onModalClose}
              type="button"
              className="add-window__container_button"
            >
              Cancel
            </button>
            <button type="submit" className="add-window__container_button">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
