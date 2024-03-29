import useSWR from "swr";
import styles from "./index.module.css";
import TitleTile from "@/components/molecules/TitleTile";
import SelectOptionsTile from "@/components/molecules/SelectOptionsTile";
import ChooseFileButton from "@/components/molecules/ChooseFileButton";
import FileTile from "@/components/molecules/FileTile";
import ButtonsTile from "@/components/molecules/ButtonsTile";
import { useState } from "react";
import fetcher from "@/utils/fetcher";

function Index() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [options, setOptions] = useState([]);

  // const { data: formats } = useSWR("/api/formats", fetcher);

  // const new_formats = Array.prototype.slice.call(formats.data);

  // const from = new Array();

  // new_formats.map((new_format) => {
  //   if(new_format.input_format == "pdf"){
  //     from.push(new_format.input_format)
  //   }
  // })

  // console.log(from)

  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    files.some((file) => {
      uploaded.findIndex((f) => f.name === file.name) === -1
        ? uploaded.push(file)
        : alert("File Already Uploaded");
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
        <SelectOptionsTile options={options} />
        {uploadedFiles.length !== 0 ? (
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
