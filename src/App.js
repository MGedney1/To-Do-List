import React, { useState } from 'react'
import Upcoming from './Components/TaskLists/Upcoming';
import InProgress from './Components/TaskLists/InProgress';
import Completed from './Components/TaskLists/Completed';
import AddTask from './Components/AddTask/AddTask';

const App = () => {

  const [tasks, setTasks] = useState([
    {id:1, text: "Learn about React", state: "Upcoming" },
    {id:2, text: "Meet friend for lunch", state: "Upcoming" },
    {id:3, text: "Build really cool todo app", state: "In Progress" },
    {id:4, text: "Work on other apps", state: "In Progress" },
    {id:5, text: "Test state selection", state: "Completed" }
  ]);

  const addTask = (task) => {
    task.id = tasks.length + 1;
    setTasks([...tasks, task]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  const startTask = (id) => {
    const temporyTask = tasks.filter((task) => task.id === id)[0];
    const otherTasks = tasks.filter((task) => task.id !== id);
    temporyTask.state = "In Progress";
    otherTasks.push(temporyTask);
    setTasks(otherTasks);
  }

  const finishTask = (id) => {
    const temporyTask = tasks.filter((task) => task.id === id)[0];
    const otherTasks = tasks.filter((task) => task.id !== id);
    temporyTask.state = "Completed";
    otherTasks.push(temporyTask);
    setTasks(otherTasks);
  }

  return (
    <div className="main">
      <h1 className="mainTitle">To Do List</h1>
      <div className="column" id="mainContainer">
        <div className="row" id="listContainer">
          <Upcoming TaskList = {tasks} DeleteTask={deleteTask} StartTask={startTask}/>
          <InProgress TaskList = {tasks} DeleteTask={deleteTask} FinishTask = {finishTask}/>
          <Completed TaskList = {tasks} DeleteTask={deleteTask}/>
        </div>
        <div className="addContainer">
          <AddTask AddTask={addTask}/>
        </div>
      </div>
    </div>
  )
}

export default App;