import React from "react";

import SingleTag from "./SingleTag";

const TagsMain = ({ tagsList, onAddTagFormOpen, onEditTagFormOpen }) => {
  return (
    <main className="to-do secondary-main">
      <h3 className="todo__column-name">tags</h3>
      <div className="secondary-main__column">
        {tagsList.map((tag) => (
          <SingleTag
            key={tag._id}
            tag={tag}
            onEditTagFormOpen={onEditTagFormOpen}
          />
        ))}
      </div>
      <button className="main_add-button" onClick={onAddTagFormOpen}></button>
    </main>
  );
};

export default TagsMain;
