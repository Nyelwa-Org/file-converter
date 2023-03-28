import styles from "./index.module.css";
import TitleTile from "@/components/molecules/TitleTile";
import SelectOptionsTile from "@/components/molecules/SelectOptionsTile";
import ChooseFileButton from "@/components/molecules/ChooseFileButton";
import FileTile from "@/components/molecules/FileTile";
import ButtonsTile from "@/components/molecules/ButtonsTile";
import { useState } from "react";

function Index() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  

  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    files.some((file) => {
      uploaded.push(file);
    });
    setUploadedFiles(uploaded);
  };

  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
  };

  return (
    <>
      <div className={styles.main}>
        <TitleTile />
        <SelectOptionsTile />
        {uploadedFiles ? (
          <>
            {uploadedFiles.map((file) => (
              <FileTile filename={file.name} />
            ))}
            <ButtonsTile handleFileChange={handleFileEvent} />
          </>
        ) : (
          <ChooseFileButton handleFileChange={handleFileEvent} />
        )}
      </div>
    </>
  );
}

export default Index;
