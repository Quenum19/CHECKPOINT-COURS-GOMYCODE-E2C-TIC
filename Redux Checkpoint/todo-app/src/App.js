// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>To-Do List</h1>
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
