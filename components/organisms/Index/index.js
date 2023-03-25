import styles from "./index.module.css";
import TitleTile from "@/components/molecules/TitleTile";
import SelectOptionsTile from "@/components/molecules/SelectOptionsTile";
import Button from "@/components/atoms/Button";

function Index() {
  return (
    <>
      <div className={styles.main}>
        <TitleTile />
        <SelectOptionsTile />
        <Button type="submit" value="Choose File" />
      </div>
    </>
  );
}

export default Index;
