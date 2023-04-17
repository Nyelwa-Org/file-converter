import styles from './dropdown.module.css'

function DropDown({options}) {
  return (
    <select className={styles.dropDown}>
      {options}
    </select>
  );
}

export default DropDown;
