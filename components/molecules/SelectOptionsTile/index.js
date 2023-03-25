import styles from "./selectOptionsTile.module.css";
import DropDown from "@/components/atoms/Dropdown";

function SelectOptionsTile() {
  return (
    <>
      <div className={styles.tile}>
        <DropDown />
        <h3>to</h3>
        <DropDown />
      </div>
    </>
  );
}

export default SelectOptionsTile;
