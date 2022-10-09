import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import ITask from '../types/ITask';
import style from './App.module.scss'

function App() {

  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selectTask, setSelectTask] = useState<ITask>();


  function selectedTask(selectedTask: ITask) {
    setSelectTask(selectedTask);
    setTasks(lastTasks => lastTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectedTask={selectedTask} />
      <Timer selectTask={selectTask} />
    </div>
  );
}

export default App;
