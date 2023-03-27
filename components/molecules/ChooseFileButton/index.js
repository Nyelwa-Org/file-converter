import styles from "./chooseFileButton.module.css";
import Label from "@/components/atoms/label/label";

function ChooseFileButton({handleFileChange}) {
  return (
    <Label htmlFor="file-upload" value="Choose File">
      <input id="file-upload" type="file" onChange={handleFileChange}  />
    </Label>
  );
}

export default ChooseFileButton;
