import AddTaskForm from "./components/AddTaskForm";
import UpdateForm from "./components/UpdateForm";
import ToDo from "./components/ToDo";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  //Tasks State
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task 1", status: false },
    { id: 2, title: "Task 2", status: false },
  ]);

  //Temp state
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  //________________________________________________________________________________________
  //To Add Task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };
  //________________________________________________________________________________________

  //To Delete Task
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  //________________________________________________________________________________________
  //to Mark Compleated Task
  const markDOneTask = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status }; //it will toggle the status
      }
      return task;
    });
    setToDo(newTask);
  };
  //________________________________________________________________________________________
  //unmark compleated task
  const cancelUpdate = () => {
    setUpdateData("");
  };
  //________________________________________________________________________________________
  //change  task name
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };
  //________________________________________________________________________________________
  //to Update Task
  const updateTask = (e) => {
    let filerRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filerRecords, updateData];
    setToDo(updatedObject);
    setUpdateData("");
  };

  //________________________________________________________________________________________
  return (
    <div className="ContainerApp App">
      <br />
      <br />
      <h2>To DO App (React JS)</h2>
      <br />
      <br />
      {/* update Task */}
      {updateData && updateData ? (
        <UpdateForm
        updateData = {updateData}
        changeTask = {changeTask}
        updateTask = {updateTask}
        cancelUpdate = {cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask ={newTask}
         setNewTask ={setNewTask}
          addTask = {addTask}
        />      
        )}

      {toDo && toDo.length ? "" : "No Task.."}
        <ToDo
        toDo = {toDo}
        markDOneTask= {markDOneTask}
        setUpdateData = {setUpdateData}
        deleteTask = {deleteTask}
        />
    </div>
  );
}

export default App;
