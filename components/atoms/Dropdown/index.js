import styles from './dropdown.module.css'

function DropDown(props) {
  return (
    <select className={styles.dropDown}>
      <option> Select </option>
    </select>
  );
}

export default DropDown;
