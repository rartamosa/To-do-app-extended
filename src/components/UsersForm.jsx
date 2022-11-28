import React, { useState } from "react";

const UsersForm = ({
  mode,
  onModalClose,
  userToEdit,
  handleUserFormSubmit,
}) => {
  const [name, setName] = useState(mode === "add" ? "" : userToEdit.name);
  const [description, setDescription] = useState(
    mode === "add" ? "" : userToEdit.description
  );
  const [imageURL, setImageURL] = useState(
    mode === "add" ? "" : userToEdit.imageURL
  );

  const onUserFormSubmit = (event) => {
    event.preventDefault();
    const id = mode === "add" ? uniqid() : userToEdit._id;
    handleUserFormSubmit(name, description, imageURL);
    onModalClose();
  };

  return (
    // classes starting with add-window are globally use classes; classes starting with users-form are relative only for the UsersPage screen
    <div className="add-window__overlay">
      <div className="add-window__container">
        <form onSubmit={onUserFormSubmit}>
          <div className="users-form__controls">
            <div className="users-form__inputs">
              <h4 className="add-window__container-controls_titles">Name</h4>
              <input
                className="add-window__container_input"
                type="text"
                placeholder="Type name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <h4 className="add-window__container-controls_titles">
                Description
              </h4>
              <input
                className="add-window__container_input"
                type="text"
                placeholder="Type description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
              <h4 className="add-window__container-controls_titles">
                ImageURL
              </h4>
              <input
                className="add-window__container_input"
                type="text"
                placeholder="Type image URL address"
                value={imageURL}
                onChange={(event) => setImageURL(event.target.value)}
              />
            </div>
            <div className="users-form__img-controls">
              <h4 className="add-window__container-controls_titles">Previev</h4>
              <div className="users-form__img-controls_preview"></div>
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

export default UsersForm;
