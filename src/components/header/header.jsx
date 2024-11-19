import styles from "./header.module.css";
import reactLogo from "../../assets/react.svg";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <img src={reactLogo} alt="logo" width={50} height={50} />
        <div>
          <h1>TaskFlow</h1>
          <div className="color-gray">
            <code>Eliminez le chaos, et suiver le flow.</code>
          </div>
        </div>
      </div>
      <code className="color-primary">V.1.0</code>
    </div>
  );
}
