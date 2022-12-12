import React, { useState } from "react";
import { TwitterPicker } from "react-color";

const TagsForm = ({ mode, onModalClose, tagToEdit, handleTagFormSubmit }) => {
  const [tagName, setTagName] = useState(mode === "add" ? "" : tagToEdit.name);
  const [color, setColor] = useState(
    mode === "add" ? "transparent" : tagToEdit.color
  );
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onTagFormSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
    if (tagName && color) {
      handleTagFormSubmit(tagName, color);
      onModalClose();
    }
  };

  const handleColorPickerOpen = (event) => {
    event.stopPropagation();
    setIsColorPickerOpen(true);
  };

  const handleColorChange = (color, event) => {
    event.stopPropagation();
    setColor(color.hex);
  };

  return (
    <div className="add-window__overlay">
      <div className="tags-input__outer-container">
        <div
          className="tags-input__inner-container"
          onClick={() => setIsColorPickerOpen(false)}
        >
          <form onSubmit={onTagFormSubmit}>
            <div className="tags-input__controls-container">
              <div>
                <h4 className="add-window__container-controls_titles">tag</h4>
                <input
                  className="add-window__container_input secondary-main__input users-form__input"
                  type="text"
                  placeholder="Type tag"
                  value={tagName}
                  onChange={(event) => setTagName(event.target.value)}
                />
                {isFormSubmitted && !tagName && (
                  <span className="add-window__error">
                    * You have to add tag name
                  </span>
                )}
              </div>
              <div className="tags-input__colors-container">
                <h4 className="add-window__container-controls_titles">Color</h4>
                <div
                  className="users-form__img-controls_preview"
                  style={{ backgroundColor: color }}
                  onClick={handleColorPickerOpen}
                ></div>
                {isFormSubmitted && color === "transparent" && (
                  <span className="add-window__error">
                    * You have to add tag color
                  </span>
                )}
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
        {isColorPickerOpen && (
          <TwitterPicker onChange={handleColorChange} width="204px" />
        )}
      </div>
    </div>
  );
};

export default TagsForm;
