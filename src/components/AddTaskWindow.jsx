import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import DatePicker from "react-datepicker";
import uniqid from "uniqid";

import "react-datepicker/dist/react-datepicker.css";

const AddTaskWindow = ({ onFormSubmit, onModalClose }) => {
  const [selected, setSelected] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  const addNewTask = (event) => {
    event.preventDefault();
    const newTask = {
      id: uniqid(),
      title: "Test",
      description: "test test test",
      link: "http://test.com",
      tags: ["tag1", "tag2", "tag3"],
      dueDate: new Date(),
      assignee: "Marta",
      column: "todo",
      comments: ["test comment"],
    };
    onFormSubmit(newTask);
    onModalClose();
  };

  return (
    <div className="add-window__overlay">
      <div className="add-window__container">
        <form onSubmit={addNewTask}>
          <div className="add-window__container-controls">
            <h4 className="add-window__container-controls_titles">Title</h4>
            <input
              className="add-window__container_input"
              type="text"
              placeholder="Type title"
            />
            <h4 className="add-window__container-controls_titles">
              Description
            </h4>
            <input
              className="add-window__container_input"
              type="text"
              placeholder="Type description"
            />
            <h4 className="add-window__container-controls_titles">Link</h4>
            <input
              className="add-window__container_input"
              type="text"
              placeholder="Type link"
            />
            <h4 className="add-window__container-controls_titles">Tags</h4>
            <div>
              <TagsInput value={selected} onChange={setSelected} name="Tags" />
            </div>
            <div className="add-window__container-controls_selection">
              <div className="add-window__container-controls_selection-element">
                <h4 className="add-window__container-controls_titles">
                  Due date
                </h4>
                <div>
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    className="add-window__container-controls_selection-select"
                  />
                </div>
              </div>
              <div className="add-window__container-controls_selection-element">
                <h4 className="add-window__container-controls_titles">
                  Assigned to
                </h4>
                <select
                  className="add-window__container-controls_selection-select"
                  name="person"
                  id="person"
                >
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
              className="add-window__container_input"
              type="text"
              placeholder="Add comment..."
            />
          </div>
          <div>
            <button onClick={onModalClose} type="button">
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskWindow;
