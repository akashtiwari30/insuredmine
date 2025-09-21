import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const FileUploader = () => {
  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles, rejectedFiles) => {
    // Filter files over 20MB
    const validFiles = acceptedFiles.filter(file => file.size <= 20 * 1024 * 1024);
    const invalidFiles = [
      ...rejectedFiles,
      ...acceptedFiles.filter(file => file.size > 20 * 1024 * 1024)
    ];

    if (invalidFiles.length > 0) {
      alert("Some files were rejected (invalid type or > 20MB)");
    }

    setFiles([...files, ...validFiles]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpg", ".png", ".gif", ".jpeg"],
      "application/pdf": [".pdf"],
      "application/msword": [".doc", ".docx"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
      "application/vnd.ms-excel": [".xls", ".xlsx"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
      "text/plain": [".txt", ".csv"],
      "application/zip": [".zip"],
      "application/vnd.ms-powerpoint": [".ppt", ".ppsx"],
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": [".pptx"],
      "audio/mpeg": [".mp3"],
      "audio/wav": [".wav"],
    },
    maxSize: 20 * 1024 * 1024, // 20MB
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className={`p-4 border border-0 rounded text-center file-uploader`}
        style={{ cursor: "pointer" }}
      >
        <input {...getInputProps()} />
        <i class="fa-solid fa-folder-open fs-3"></i>
        {isDragActive ? <p>Drop files here...</p> : <p>Drag & drop files here, or click to select files</p>}
        <p className="mt-3 fs-6">(.jpg.png.pdf.docx, .txt.gif.jpeg.xlsxsx.csv.zip .doc.ppt.docx.pptx, .ppsx.mp3.wav) Size limit-20.00 MB</p>
      </div>

      {files.length > 0 && (
        <ul className="list-group mt-2">
          {files.map((file, index) => (
            <li key={index} className="list-group-item">
              {file.name} - {(file.size / (1024 * 1024)).toFixed(2)} MB
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileUploader;
