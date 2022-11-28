import React, { useState } from "react";
import { TwitterPicker } from "react-color";

// class Component extends React.Component {
//   state = {
//     background: `${tagToEdit.color}`,
//   };

//   handleChangeComplete = (color) => {
//     this.setState({ background: color.hex });
//   };

//   render() {
//     return <TwitterPicker />;
//   }
// }

const TagsForm = ({
  mode,
  onModalClose,
  onAddTagFormOpen,
  tagToEdit,
  handleTagFormSubmit,
}) => {
  const [tagName, setTagName] = useState(mode === "add" ? "" : tagToEdit.name);

  const onTagFormSubmit = (event) => {
    event.preventDefault();
    handleTagFormSubmit(tagName);
    onModalClose();
  };

  return (
    <div className="add-window__overlay">
      <div className="add-window__container">
        <form onSubmit={onTagFormSubmit}>
          <div>
            <div>
              <h4 className="add-window__container-controls_titles">tag</h4>
              <input
                className="add-window__container_input secondary-main__input"
                type="text"
                placeholder="Type tag"
                value={tagName}
                onChange={(event) => setTagName(event.target.value)}
              />
            </div>
            {/* <TwitterPicker
              color={this.state.background}
              onChangeComplete={this.handleChangeComplete}
            /> */}
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

export default TagsForm;
