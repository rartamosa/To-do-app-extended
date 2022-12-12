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
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onUserFormSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
    if (name && description && imageURL) {
      handleUserFormSubmit(name, description, imageURL);
      onModalClose();
    }
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
                className="add-window__container_input secondary-main__input users-form__input secondary-main__input"
                type="text"
                placeholder="Type name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              {isFormSubmitted && !name && (
                <span className="add-window__error">
                  * You have to add your name
                </span>
              )}
              <h4 className="add-window__container-controls_titles">
                Description
              </h4>
              <input
                className="add-window__container_input users-form__input secondary-main__input"
                type="text"
                placeholder="Type description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
              {isFormSubmitted && !description && (
                <span className="add-window__error">
                  * You have to add description
                </span>
              )}
              <h4 className="add-window__container-controls_titles">
                ImageURL
              </h4>
              <input
                className="add-window__container_input users-form__input secondary-main__input"
                type="text"
                placeholder="Type image URL address"
                value={imageURL}
                onChange={(event) => setImageURL(event.target.value)}
              />
              {isFormSubmitted && !imageURL && (
                <span className="add-window__error">
                  * You have to add your avatar
                </span>
              )}
            </div>
            <div className="users-form__img-controls">
              <h4 className="add-window__container-controls_titles">Previev</h4>
              <div
                className="users-form__img-controls_preview"
                style={{ backgroundImage: `url(${imageURL})` }}
              ></div>
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
