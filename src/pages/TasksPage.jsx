import React, { useState, useEffect } from "react";

import Main from "../components/Main";
import TaskForm from "../components/TaskForm";

const TasksPage = ({ handleMobileMenuOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toDoList, setToDoList] = useState([]);
  const [mode, setMode] = useState("add");
  const [selectedTask, setSelectedTask] = useState(null);

  const URL = "https://todo-api-mwy8.onrender.com";

  useEffect(() => {
    fetch(`${URL}/tasks`)
      .then((res) => res.json())
      .then((data) => setToDoList(data));
  }, []);
  console.log(toDoList);

  const handleAddFormOpen = () => {
    setIsModalOpen(true);
    setMode("add");
    setSelectedTask(null);
  };

  const handleNewTaskAdd = (
    id,
    title,
    description,
    link,
    tags,
    dueDate,
    assignee,
    column,
    comments
  ) => {
    const newTask = {
      id,
      title,
      description,
      link,
      tags,
      dueDate,
      assignee,
      column,
      comments,
    };
    setToDoList([...toDoList, newTask]);
  };

  const handleEditFormOpen = (singleTask) => {
    setIsModalOpen(true);
    setMode("edit");
    setSelectedTask(singleTask);
  };

  const handleTaskEdit = (
    id,
    title,
    description,
    link,
    tags,
    dueDate,
    assignee,
    column,
    comments
  ) => {
    const editedTask = {
      id,
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
      if (task.id === editedTask.id) {
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
      <Main
        onAddFormOpen={handleAddFormOpen}
        toDoList={toDoList}
        onMobileMenuOpen={handleMobileMenuOpen}
        onEditFormOpen={handleEditFormOpen}
      />
      {isModalOpen && (
        <TaskForm
          mode={mode}
          onModalClose={handleModalClose}
          handleFormSubmit={mode === "add" ? handleNewTaskAdd : handleTaskEdit}
          taskToEdit={selectedTask}
        />
      )}
    </>
  );
};

export default TasksPage;
