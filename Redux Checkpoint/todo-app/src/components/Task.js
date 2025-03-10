// src/components/Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../actions/taskActions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
      <span>{task.description}</span>
      <button onClick={() => dispatch(toggleTask(task.id))}>Toggle</button>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default Task;
