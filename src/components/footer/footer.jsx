/* eslint-disable react/prop-types */
import styles from "./Footer.module.css";

export default function Footer({ completedTasks }) {
  if (completedTasks) {
    return (
      <footer>
        <code className={styles.footer}>
          Avec TaskFlow tu as éliminé {completedTasks} tache
          {completedTasks > 1 ? "s" : ""}!
        </code>
      </footer>
    );
  }

  return null;
}
