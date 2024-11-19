/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Taskinput.module.css";

export default function Taskinput({ addTask }) {
  const [taskTitle, setTaskTitle] = useState("");

  const handleIntputChange = (e) => {
    const value = e.target.value;
    setTaskTitle(value);
  };

  const handleSaubmited = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle("");
    }
  };

  return (
    <div className={`box ${styles.element}`}>
      <h2 className={styles.title}>Ajoute ta prochaine tache</h2>
      <form className={styles.container} onSubmit={handleSaubmited} action="">
        <input
          className={styles.input}
          type="text"
          onChange={handleIntputChange}
          placeholder="Indiquer un titre de tache axplicite."
          value={taskTitle}
        />
        <button className="button-primary" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
}
