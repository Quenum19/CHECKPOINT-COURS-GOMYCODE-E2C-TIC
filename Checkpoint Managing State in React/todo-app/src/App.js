import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  // Charger les tâches depuis localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Sauvegarder les tâches à chaque modification
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name, description) => {
    const newTask = { id: Date.now(), name, description, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  const updateTask = (id, name, description) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, name, description } : task
      )
    );
    setEditingTask(null);
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <TaskForm onAddTask={addTask} editingTask={editingTask} onUpdateTask={updateTask} />
      <TaskList tasks={tasks} onToggle={toggleTaskCompletion} onEdit={editTask} onDelete={deleteTask} />
    </div>
  );
};

export default App;
