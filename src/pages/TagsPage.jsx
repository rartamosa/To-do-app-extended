import React, { useState, useEffect } from "react";

import useFetch from "../hooks/useFetch";

import Loading from "../components/Loading";
import TagsMain from "../components/TagsMain";
import TagsForm from "../components/TagsForm";

const TagsPage = ({ handleMobileMenuOpen, handleMobileMenuClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tagsList, setTagsList] = useState([]);
  const [mode, setMode] = useState("add");
  const [selectedTag, setSelectedTag] = useState(null);

  const URL = "https://todo-api-mwy8.onrender.com";

  const [tagsListData, tagsListError, tagsListLoading] = useFetch(
    `${URL}/tags`
  );

  useEffect(() => {
    if (tagsListData.records) {
      setTagsList(tagsListData.records);
    }
  }, [tagsListData]);

  const handleAddTagFormOpen = () => {
    setIsModalOpen(true);
    setMode("add");
    setSelectedTag(null);
  };

  const handleNewTagAdd = (name, color) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        color,
      }),
    };
    fetch(`${URL}/tags`, options)
      .then((res) => res.json())
      .then((data) => {
        setTagsList([...tagsList, data.records]);
      });
  };

  const handleEditTagFormOpen = (singleTag) => {
    setIsModalOpen(true);
    setMode("edit");
    setSelectedTag(singleTag);
  };

  const handleTagEdit = (name, color) => {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        color,
      }),
    };
    fetch(`${URL}/tags/${selectedTag._id}`, options)
      .then((res) => res.json())
      .then((data) => {
        const editedTagsList = tagsList.map((tag) => {
          if (tag._id === data.records._id) {
            return data.records;
          } else {
            return tag;
          }
        });
        setTagsList(editedTagsList);
      });
    const editedTag = { name, color };
    const editedTagsList = tagsList.map((tag) => {
      if (tag._id === editedTag._id) {
        return editedTag;
      } else {
        return tag;
      }
    });
    setTagsList(editedTagsList);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setMode("add");
    setSelectedTag(null);
  };

  return (
    <>
      {tagsListLoading && <Loading onMobileMenuClose={handleMobileMenuClose} />}
      {tagsListError && <h2>{tagsListError}</h2>}
      <TagsMain
        onMobileMenuOpen={handleMobileMenuOpen}
        tagsList={tagsList}
        onAddTagFormOpen={handleAddTagFormOpen}
        onEditTagFormOpen={handleEditTagFormOpen}
      />
      {isModalOpen && (
        <TagsForm
          mode={mode}
          onModalClose={handleModalClose}
          onAddTagFormOpen={handleAddTagFormOpen}
          tagToEdit={selectedTag}
          handleTagFormSubmit={mode === "add" ? handleNewTagAdd : handleTagEdit}
        />
      )}
    </>
  );
};

export default TagsPage;
