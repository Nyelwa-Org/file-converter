import styles from "./index.module.css";
import TitleTile from "@/components/molecules/TitleTile";
import SelectOptionsTile from "@/components/molecules/SelectOptionsTile";
import ChooseFileButton from "@/components/molecules/ChooseFileButton";
import FileTile from "@/components/molecules/FileTile";
import { useState } from "react";

function Index() {
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <>
      <div className={styles.main}>
        <TitleTile />
        <SelectOptionsTile />
        {file ? (
          <FileTile filename={file.name} />
        ) : (
          <ChooseFileButton handleFileChange={handleFileChange} />
        )}
      </div>
    </>
  );
}

export default Index;
