import React from "react";

const TaskItem = ({ task, onToggle, onEdit, onDelete }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <div>
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? "Unmark" : "Complete"}
        </button>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
