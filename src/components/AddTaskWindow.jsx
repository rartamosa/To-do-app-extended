import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import DatePicker from "react-datepicker";
import uniqid from "uniqid";

import "react-datepicker/dist/react-datepicker.css";

const AddTaskWindow = ({ onFormSubmit, onModalClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [tags, setTags] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [assignee, setAssignee] = useState("");
  const [comments, setComments] = useState([]);
  const [singleComment, setSingleComment] = useState("");

  const addNewTask = (event) => {
    event.preventDefault();
    const newTask = {
      id: uniqid(),
      title,
      description,
      link,
      tags,
      dueDate: startDate,
      assignee,
      column: "todo",
      comments,
    };
    onFormSubmit(newTask);
    onModalClose();
  };

  const addNewComment = (event) => {
    if (event.key === "Enter") {
      setComments([...comments, singleComment]);
      event.preventDefault();
      setSingleComment("");
    }
  };

  return (
    <div className="add-window__overlay">
      <div className="add-window__container">
        <form onSubmit={addNewTask}>
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
              <TagsInput value={tags} onChange={setTags} name="Tags" />
            </div>
            <div className="add-window__container-controls_selection">
              <div className="add-window__container-controls_selection-element">
                <h4 className="add-window__container-controls_titles">
                  Due date
                </h4>
                <div>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="add-window__container-controls_selection-select"
                    dateFormat={"dd/MM/yyyy"}
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
                  className="add-window__container-controls_selection-select"
                  name="column"
                  id="column"
                  disabled
                >
                  <option value="TO DO">TO DO</option>
                  <option value="IN PROGRESS">IN PROGRESS</option>
                  <option value="DONE">DONE</option>
                </select>
              </div>
            </div>
            <h4 className="add-window__container-controls_titles">Comments</h4>
            <input
              value={singleComment}
              onChange={(event) => setSingleComment(event.target.value)}
              onKeyPress={addNewComment}
              className="add-window__container_input"
              type="text"
              placeholder="Add comment..."
            />
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

export default AddTaskWindow;
