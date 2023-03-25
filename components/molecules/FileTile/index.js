import styles from "./fileTile.module.css";

function FileTile(props) {
  return <div className={styles.tile}>{props.filename}<i className="bi bi-x-lg" style={{ color: "rgb(var(--background-end-rgb))" }}></i></div>;
}

export default FileTile;
