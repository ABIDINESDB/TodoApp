/* eslint-disable react/prop-types */
import styles from "./Taskitem.module.css";

export default function Taskitem({ task, editTask, deletedTask }) {
  return (
    <li
      className={`${styles.container} ${
        task?.completed ? styles.success : styles.default
      }`}
      onClick={() => editTask(task.id, !task.completed)}
    >
      <div className={styles.item}>
        <div
          className={`${styles.id} ${
            task?.completed ? styles.idSuccess : styles.idDehault
          }`}
        >
          {task.id}
        </div>
        <div
          className={
            task?.completed ? styles.contentSuccess : styles.contentDefault
          }
        >
          {task.title}
        </div>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          deletedTask(task.id);
        }}
        className="button-primary"
      >
        Delete
      </button>
    </li>
  );
}
