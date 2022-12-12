import React, { useState } from "react";

import TasksMain from "../components/TasksMain";
import TaskForm from "../components/TaskForm";
import Loading from "../components/Loading";

import { URL } from "../utils/commons";

const TasksPage = ({
  onMobileMenuToggle,
  toDoListError,
  toDoListLoading,
  toDoList,
  setToDoList,
  usersListData,
  columnsListData,
  tagsListData,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState("add");
  const [selectedTask, setSelectedTask] = useState(null);

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

  return (
    <>
      {toDoListLoading && <Loading onMobileMenuClose={onMobileMenuToggle} />}
      {toDoListError && <h2>{toDoListError}</h2>}
      <TasksMain
        onAddFormOpen={handleAddFormOpen}
        toDoList={toDoList}
        onEditFormOpen={handleEditFormOpen}
        columnsListData={columnsListData.records}
      />
      {isModalOpen && (
        <TaskForm
          mode={mode}
          onModalClose={handleModalClose}
          handleFormSubmit={mode === "add" ? handleNewTaskAdd : handleTaskEdit}
          taskToEdit={selectedTask}
          tagsListData={tagsListData.records}
          usersListData={usersListData.records}
          columnsListData={columnsListData.records}
        />
      )}
    </>
  );
};

export default TasksPage;
