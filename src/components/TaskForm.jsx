import React, { useState } from "react";
import DatePicker from "react-datepicker";
import uniqid from "uniqid";

import "react-datepicker/dist/react-datepicker.css";

import TagsInput from "./TagsInput";

const TaskForm = ({
  onModalClose,
  mode,
  taskToEdit,
  handleFormSubmit,
  fetchedTagsList,
  usersList,
  columnsList,
}) => {
  const [title, setTitle] = useState(mode === "add" ? "" : taskToEdit.title);
  const [description, setDescription] = useState(
    mode === "add" ? "" : taskToEdit.description
  );
  const [link, setLink] = useState(mode === "add" ? "" : taskToEdit.link);
  const [tags, setTags] = useState(
    mode === "add" ? [] : taskToEdit.tags.map((tag) => tag._id)
  );
  const [dueDate, setDueDate] = useState(
    mode === "add" ? new Date() : new Date(taskToEdit.dueDate)
  );
  const [assignee, setAssignee] = useState(
    mode === "add" ? "" : taskToEdit.assignee._id
  );
  const [comments, setComments] = useState(
    mode === "add" ? [] : taskToEdit.comments
  );
  const [singleComment, setSingleComment] = useState("");
  const [column, setColumn] = useState(
    mode === "add"
      ? columnsList.find((column) => column.name === "to do")._id
      : taskToEdit.column._id
  );

  const onFormSubmit = (event) => {
    event.preventDefault();
    const id = mode === "add" ? uniqid() : taskToEdit._id;
    handleFormSubmit(
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

  const onExistingCommentEdit = (event, index) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const editedComments = comments.map((item, itemIndex) => {
        if (index === itemIndex) {
          return event.target.value;
        } else {
          return item;
        }
      });
      setComments(editedComments);
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
              <TagsInput
                tags={tags}
                tagsSuggestions={fetchedTagsList}
                onTagAdd={(tag) => setTags([...tags, tag])}
                onTagRemove={(tagToRemove) =>
                  setTags(tags.filter((tag) => tag !== tagToRemove))
                }
                readOnly={true}
                onFocus={(event) => event.target.blur()}
              />
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
                  <option value={""} disabled hidden>
                    Choose
                  </option>
                  {usersList.map((user) => (
                    <option key={user._id} value={user._id}>
                      {user.name}
                    </option>
                  ))}
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
                      ? "add-window__container-controls_selection-select add-window__container-controls_selection-select-column add-window__container-controls_selection-select-disabled"
                      : "add-window__container-controls_selection-select add-window__container-controls_selection-select-column"
                  }
                  onChange={(event) => setColumn(event.target.value)}
                  name={column.name}
                  id={column._id}
                  disabled={mode === "add" ? true : false}
                >
                  {columnsList.map((column) => (
                    <option key={column._id} value={column._id}>
                      {column.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <h4 className="add-window__container-controls_titles">
                Comments
              </h4>
              <div className="add-window__container-controls_comments-section">
                <div className="add-window__container-controls_comment-section">
                  {comments.map((comment, index) => (
                    <input
                      defaultValue={comment}
                      className="add-window__container_input-comment add-window__container-controls-comment"
                      type="text"
                      key={uniqid()}
                      onKeyPress={(event) =>
                        onExistingCommentEdit(event, index)
                      }
                    />
                  ))}
                </div>
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
