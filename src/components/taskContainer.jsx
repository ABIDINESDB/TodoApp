import { useState } from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import Taskinput from "./taskinput/taskinput";
import Tasklist from "./taskList/tasklist";

export default function TaskContainer() {
  const [taskList, setTaskList] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: taskList.length ? taskList[taskList.length - 1].id + 1 : 1,
      title: title,
      completed: false,
    };

    setTaskList([...taskList, newTask]);
  };

  const editTask = (id, completedValue) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, completed: completedValue } : task
      )
    );
  };

  const deletedTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const getTaskCount = () => {
    const completedTasks = taskList.filter((task) => task.completed).length;
    const inConpletedTasks = taskList.length - completedTasks;

    return { completedTasks, inConpletedTasks };
  };
  const { completedTasks, inConpletedTasks } = getTaskCount();

  return (
    <main>
      <Header />
      <Taskinput addTask={addTask} />
      <Tasklist
        taskList={taskList}
        editTask={editTask}
        deletedTask={deletedTask}
        inConpletedTasks={inConpletedTasks}
      />
      <Footer completedTasks={completedTasks} />
    </main>
  );
}
