import React, { useState, useEffect, useRef } from "react";

const TagInput = ({ tags, onTagAdd, tagsSuggestions, onTagRemove }) => {
  const [inputValue, setInputValue] = useState("");
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const [internalTagsSuggestions, setInternalTagsSuggestions] = useState(
    tagsSuggestions.filter((tag) => !tags.includes(tag._id))
  );

  const inputRef = useRef(null);

  const inputFocus = () => {
    inputRef.current.focus();
    inputRef.current.scrollIntoView();
  };

  useEffect(() => {
    window.addEventListener("click", () => setIsSuggestionsOpen(false));
  }, []);

  const onFormSubmit = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      const matchingTag = tagsSuggestions.find(
        (tag) => tag.name === inputValue
      );
      const existingTag = tags.find((tag) => tag === matchingTag._id);
      if (matchingTag && !existingTag) {
        onTagAdd(matchingTag._id);
        setInternalTagsSuggestions(
          internalTagsSuggestions.filter((tag) => tag._id !== matchingTag._id)
        );
      }
      setInputValue("");
    }
  };

  const handleTagAdd = (tagToAddID) => {
    onTagAdd(tagToAddID);
    setInternalTagsSuggestions(
      internalTagsSuggestions.filter((tag) => tag._id !== tagToAddID)
    );
    setInputValue("");
    inputFocus();
  };

  const handleTagRemove = (tagToRemoveID) => {
    onTagRemove(tagToRemoveID);
    const removedTag = tagsSuggestions.find((tag) => tag._id === tagToRemoveID);
    setInternalTagsSuggestions([...internalTagsSuggestions, removedTag]);
    inputFocus();
  };

  return (
    <div className="tags-input__wrapper">
      <div className="tags-input__container">
        {tags.map((tagID) => {
          const currentTag = tagsSuggestions.find(
            (tagToShow) => tagToShow._id === tagID
          );
          return (
            <span
              className="tags-input__container_single-tag"
              style={{ backgroundColor: currentTag.color }}
              key={tagID}
            >
              {currentTag.name}
              <span
                className="tags-input__container_single-tag-close"
                onClick={() => handleTagRemove(tagID)}
              >
                &times;
              </span>
            </span>
          );
        })}
        <input
          className="tags-input__container_input"
          value={inputValue}
          placeholder="Type..."
          ref={inputRef}
          onChange={(event) => setInputValue(event.target.value)}
          onClick={(event) => {
            setIsSuggestionsOpen(true);
            event.stopPropagation();
          }}
          onKeyPress={onFormSubmit}
        />
        {isSuggestionsOpen && internalTagsSuggestions.length > 0 && (
          <div className="tags-input__container_suggestions">
            {internalTagsSuggestions.map((tag) => (
              <span
                className="tags-input__container_single-tag"
                style={{ backgroundColor: tag.color }}
                key={tag._id}
                onClick={() => handleTagAdd(tag._id)}
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TagInput;
