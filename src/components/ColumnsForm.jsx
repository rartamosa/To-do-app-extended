import React, { useState } from "react";

const ColumnsForm = ({
  mode,
  onModalClose,
  onAddColumnFormOpen,
  columnToEdit,
  handleColumnFormSubmit,
}) => {
  const [columnName, setColumnName] = useState(
    mode === "add" ? "" : columnToEdit.name
  );

  const onColumnFormSubmit = (event) => {
    event.preventDefault();
    handleColumnFormSubmit(columnName);
    onModalClose();
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
