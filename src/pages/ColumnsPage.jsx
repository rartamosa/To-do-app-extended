import React, { useState, useEffect } from "react";

import useFetch from "../hooks/useFetch";

import Loading from "../components/Loading";
import ColumnsMain from "../components/ColumnsMain";
import ColumnsForm from "../components/ColumnsForm";

const ColumnsPage = ({ handleMobileMenuOpen, handleMobileMenuClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [columnsList, setColumnsList] = useState([]);
  const [mode, setMode] = useState("add");
  const [selectedColumn, setSelectedColumn] = useState(null);

  const URL = "https://todo-api-mwy8.onrender.com";

  const [columnsListData, columnsListError, columnsListLoading] = useFetch(
    `${URL}/columns`
  );

  useEffect(() => {
    if (columnsListData.records) {
      setColumnsList(columnsListData.records);
    }
  }, [columnsListData]);

  const handleAddColumnFormOpen = () => {
    setIsModalOpen(true);
    setMode("add");
    setSelectedColumn(null);
  };

  const handleNewColumnAdd = (name) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
      }),
    };
    fetch(`${URL}/columns`, options)
      .then((res) => res.json())
      .then((data) => {
        setColumnsList([...columnsList, data.records]);
      });
  };

  const handleEditColumnFormOpen = (singleColumn) => {
    setIsModalOpen(true);
    setMode("edit");
    setSelectedColumn(singleColumn);
  };

  const handleColumnEdit = (name) => {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
      }),
    };
    fetch(`${URL}/columns/${selectedColumn._id}`, options)
      .then((res) => res.json())
      .then((data) => {
        const editedColumnsList = columnsList.map((column) => {
          if (column._id === data.records._id) {
            return data.records;
          } else {
            return column;
          }
        });
        setColumnsList(editedColumnsList);
      });
    const editedColumn = { name };
    const editedColumnsList = columnsList.map((column) => {
      if (column._id === editedColumn._id) {
        return editedColumn;
      } else {
        return column;
      }
    });
    setColumnsList(editedColumnsList);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setMode("add");
    setSelectedColumn(null);
  };

  return (
    <>
      {columnsListLoading && (
        <Loading onMobileMenuClose={handleMobileMenuClose} />
      )}
      {columnsListError && <h2>{columnsListError}</h2>}
      <ColumnsMain
        onMobileMenuOpen={handleMobileMenuOpen}
        columnsList={columnsList}
        onAddColumnFormOpen={handleAddColumnFormOpen}
        onEditColumnFormOpen={handleEditColumnFormOpen}
      />
      {isModalOpen && (
        <ColumnsForm
          mode={mode}
          onModalClose={handleModalClose}
          onAddColumnFormOpen={handleAddColumnFormOpen}
          columnToEdit={selectedColumn}
          handleColumnFormSubmit={
            mode === "add" ? handleNewColumnAdd : handleColumnEdit
          }
        />
      )}
    </>
  );
};

export default ColumnsPage;
