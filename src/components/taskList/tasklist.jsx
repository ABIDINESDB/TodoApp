/* eslint-disable react/prop-types */
import Taskitem from "../taskitem/taskitem";
import styles from "./TaskList.module.css";

export default function Tasklist({
  deletedTask,
  editTask,
  taskList,
  inConpletedTasks,
}) {
  const taslist = taskList.map((task) => (
    <Taskitem
      key={task.id}
      task={task}
      editTask={editTask}
      deletedTask={deletedTask}
    />
  ));

  if (taskList && taskList.length > 0) {
    return (
      <div className="box">
        <h2 className={styles.title}>
          {inConpletedTasks > 0 && (
            <>
              {" "}
              Il te reste encore{" "}
              <span className="important">{inConpletedTasks}</span> tache à
              accomplir !
            </>
          )}

          {inConpletedTasks === 0 && (
            <>Génial, tu a accompli toute les taches</>
          )}
        </h2>
        {taskList && taskList.length > 0 && (
          <ul className={styles.container}>{taslist}</ul>
        )}
      </div>
    );
  }
  return (
    <div className="box">
      <h2 className={styles.emptyState}>
        Salut, tu as rien à faire ! profite de ton temps libre
      </h2>
    </div>
  );
}
