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
      .then((data) => setToDoList(data.records));
  }, []);
  console.log(toDoList);

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
    // column,
    comments
  ) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        link,
        tags: [],
        dueDate,
        assignee,
        // column,
        comments,
      }),
    };
    fetch(`${URL}/tasks`, options)
      .then((res) => res.json())
      .then((data) => {
        setToDoList([...toDoList, data.records]);
      });
    // useState(() => {
    //   fetch(`${URL}/tasks`, options)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setToDoList([...toDoList, data.records]);
    //     }, handleNewTaskAdd);
    // }

    // const newTask = {
    //   title,
    //   description,
    //   link,
    //   tags,
    //   dueDate,
    //   assignee,
    //   column,
    //   comments,
    // };
    // setToDoList([...toDoList, newTask]);
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
    // tu bedzie fetch put zamiast editedTask
    // .then(data => tu mam juz dostep do zedytowanego taska, czyli data.records; tu zrobie const edutedToDoList i w if zrobie task._id === task.records._id)
    // fetch(`${URL}/tasks dodac body`)
    // .then(json)
    // .then(data => {
    //     const editedToDoList = toDoList.map((task) => {
    //         if (task._id === data.records._id) {
    //           return data.records;
    //         } else {
    //           return task;
    //         }
    //       });
    //       setToDoList(editedToDoList);
    // })
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
