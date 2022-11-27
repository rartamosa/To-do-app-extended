import React, { useState, useEffect } from "react";

import useFetch from "../hooks/useFetch";
import Main from "../components/Main";
import TaskForm from "../components/TaskForm";
import Loading from "../components/Loading";

const TasksPage = ({ handleMobileMenuOpen, handleMobileMenuClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toDoList, setToDoList] = useState([]);
  const [mode, setMode] = useState("add");
  const [selectedTask, setSelectedTask] = useState(null);

  const URL = "https://todo-api-mwy8.onrender.com";
  const [toDoListData, toDoListError, toDoListLoading] = useFetch(
    `${URL}/tasks`
  );
  const [fetchedTagsList] = useFetch(`${URL}/tags`);
  const [usersList] = useFetch(`${URL}/users`);
  const [columnsList] = useFetch(`${URL}/columns`);

  useEffect(() => {
    if (toDoListData.records) {
      setToDoList(toDoListData.records);
    }
  }, [toDoListData]);

  const handleAddFormOpen = () => {
    setIsModalOpen(true);
    setMode("add");
    setSelectedTask(null);
  };

  const handleNewTaskAdd = (
    title,
    description,
    link,
    tags,
    dueDate,
    assignee,
    column,
    comments
  ) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        link,
        tags,
        dueDate,
        assignee,
        column,
        comments,
      }),
    };
    fetch(`${URL}/tasks`, options)
      .then((res) => res.json())
      .then((data) => {
        setToDoList([...toDoList, data.records]);
      });
  };

  const handleEditFormOpen = (singleTask) => {
    setIsModalOpen(true);
    setMode("edit");
    setSelectedTask(singleTask);
  };

  const handleTaskEdit = (
    title,
    description,
    link,
    tags,
    dueDate,
    assignee,
    column,
    comments
  ) => {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        link,
        tags,
        dueDate,
        assignee,
        column,
        comments,
      }),
    };
    fetch(`${URL}/tasks/${selectedTask._id}`, options)
      .then((res) => res.json())
      .then((data) => {
        const editedToDoList = toDoList.map((task) => {
          if (task._id === data.records._id) {
            return data.records;
          } else {
            return task;
          }
        });
        setToDoList(editedToDoList);
      });

    const editedTask = {
      title,
      description,
      link,
      tags,
      dueDate,
      assignee,
      column,
      comments,
    };
    const editedToDoList = toDoList.map((task) => {
      if (task._id === editedTask._id) {
        return editedTask;
      } else {
        return task;
      }
    });
    setToDoList(editedToDoList);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    setMode("add");
    setSelectedTask(null);
  };

  // if (toDoListLoading) {
  //   return (
  //     <>
  //       <Loading onMobileMenuClose={handleMobileMenuClose} />
  //       <Main onMobileMenuOpen={handleMobileMenuOpen} />
  //     </>
  //   );
  // }

  return (
    <>
      {toDoListLoading && <Loading onMobileMenuClose={handleMobileMenuClose} />}
      {toDoListError && <h2>{toDoListError}</h2>}
      <Main
        onAddFormOpen={handleAddFormOpen}
        toDoList={toDoList}
        onMobileMenuOpen={handleMobileMenuOpen}
        onEditFormOpen={handleEditFormOpen}
        columnsList={columnsList.records}
      />
      {isModalOpen && (
        <TaskForm
          mode={mode}
          onModalClose={handleModalClose}
          handleFormSubmit={mode === "add" ? handleNewTaskAdd : handleTaskEdit}
          taskToEdit={selectedTask}
          fetchedTagsList={fetchedTagsList.records}
          usersList={usersList.records}
          columnsList={columnsList.records}
        />
      )}
    </>
  );
};

export default TasksPage;
