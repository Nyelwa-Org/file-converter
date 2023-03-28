import styles from "./buttonsTile.module.css";
import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/label/label";

function ButtonsTile({handleFileChange}) {
  return (
    <div className={styles.tile}>
      <Label htmlFor="file-upload" value="Add Another File">
        <input id="file-upload" type="file" onChange={handleFileChange} />
      </Label>
      <Button value="Convert File(s)" />
    </div>
  );
}

export default ButtonsTile;
