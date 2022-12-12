import React, { useState } from "react";

const ColumnsForm = ({
  mode,
  onModalClose,
  columnToEdit,
  handleColumnFormSubmit,
}) => {
  const [columnName, setColumnName] = useState(
    mode === "add" ? "" : columnToEdit.name
  );
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onColumnFormSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
    if (columnName) {
      handleColumnFormSubmit(columnName);
      onModalClose();
    }
  };

  return (
    <div className="add-window__overlay">
      <div className="add-window__container">
        <form onSubmit={onColumnFormSubmit}>
          <h4 className="add-window__container-controls_titles">Name</h4>
          <input
            className="add-window__container_input secondary-main__input"
            type="text"
            placeholder="Type name"
            value={columnName}
            onChange={(event) => setColumnName(event.target.value)}
          />
          {isFormSubmitted && !columnName && (
            <span className="add-window__error">
              * You have to add column name
            </span>
          )}
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

export default ColumnsForm;
